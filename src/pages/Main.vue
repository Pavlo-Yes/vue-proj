<template>
  <q-page padding
          class="bg-blue-grey-9
          text-amber-8"
  >
    <!--    carousel-start-->
        <div class="row justify-center" v-if="productsData && !prop && !this.isLoading">
          <q-carousel
            animated
            v-model="slide"
            navigation
            infinite
            :autoplay=true
            arrows
            transition-prev="slide-right"
            transition-next="slide-left"
            @mouseenter="autoplay = false"
            @mouseleave="autoplay = true"
            class="col-xs-12 col-sm-6 col-md-5 col-xl-4"
            style="min-width: 320px; min-height: 450px"
          >
            <q-carousel-slide :name="1" :key="productsData[0].title"
                              :img-src="productsData[0].photos"
                              class="zoomForCart"
                              @click='toSingleProductFromCarousel(productsData[0])'
            >
              <q-tooltip>{{ productsData[0].title }}</q-tooltip>
            </q-carousel-slide>
            <q-carousel-slide :name="2" :key="productsData[1].title"
                              :img-src="productsData[1].photos"
                              class="zoomForCart"
                              @click='toSingleProductFromCarousel(productsData[1])'
            >
              <q-tooltip>{{ productsData[1].title }}</q-tooltip>
            </q-carousel-slide>
            <q-carousel-slide :name="3" :key="productsData[2].title"
                              :img-src="productsData[2].photos"
                              class="zoomForCart"
                              @click='toSingleProductFromCarousel(productsData[2])'
            >
              <q-tooltip>{{ productsData[2].title }}</q-tooltip>
            </q-carousel-slide>
            <q-carousel-slide :name="4" :key="productsData[3].title"
                              :img-src="productsData[3].photos"
                              class="zoomForCart"
                              @click='toSingleProductFromCarousel(productsData[3])'
            >
              <q-tooltip>{{ productsData[3].title }}</q-tooltip>
            </q-carousel-slide>
          </q-carousel>
        </div>
    <!--    carousel-end-->

    <div v-if="!prop" class="row justify-evenly items-center content-around">
      <div v-for="(product,index) in productsData" :key='index'
           class="q-pa-md col-xs-12 col-sm-6 col-md-4"
           style="min-width: 300px"
      >
        <q-card>
          <q-img :src="product.photos" class="zoom" @click="toSingleProductFromMain(product)">
            <div class="absolute-bottom text-right" style="max-height: 35px;">
              {{ product.title }}
            </div>
            <q-card-section class="absolute-bottom-left"
                            style="max-height: 35px; background-color: transparent; font-size: 16px">
              {{ product.price }}$
            </q-card-section>
          </q-img>

          <q-card-actions align="right" style="background-color: #232830; max-height: 50px">
            <q-btn flat round
                   @click="addToCart(product)"
                   :label="changeBtnOnAddToCart(product).label"
                   :color="changeBtnOnAddToCart(product).color"
                   :icon="changeBtnOnAddToCart(product).icon"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!--This component used in search for displaying search results(if props is fetched)-->
    <div v-if="prop" class="row justify-evenly items-center content-around">
      <div v-for="(product,index) in prop" :key='index'
           class="q-pa-md col-xs-12 col-sm-6 col-md-4"
           style="min-width: 300px;"
      >
        <q-card>
          <q-img :src="product.photos" class="zoom" @click="toSingleProductFromSearch(product)">
            <div class="absolute-bottom text-right" style="max-height: 35px;">
              {{ product.title }}
            </div>
            <q-card-section class="absolute-bottom-left"
                            style="max-height: 35px; background-color: transparent; font-size: 16px">
              {{ product.price }}$
            </q-card-section>
          </q-img>

          <q-card-actions align="right" style="background-color: #232830; max-height: 50px">
            <q-btn flat round
                   @click="addToCart(product)"
                   :label="changeBtnOnAddToCart(product).label"
                   :color="changeBtnOnAddToCart(product).color"
                   :icon="changeBtnOnAddToCart(product).icon"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Main',
  props: {
    prop: Array
  },
  data() {
    return {
      productsData: [],
      slide: 1,
      isLoading: false,
      isAdded: false,
    }
  },
  methods: {
    toSingleProductFromCarousel(product) {
      this.$router.push({path: `product/${product.id}`})
    },
    toSingleProductFromMain(product) {
      this.$router.push({path: `product/${product.id}`, params: {id: `${product.id}`}});
    },
    toSingleProductFromSearch(product) {
      this.$router.push({name: 'main'});
      this.$router.push({path: `product/${product.id}`, params: {id: `${product.id}`}});
    },
    addToCart(product) {
      this.$addToCart(product)
      this.setItemInCartQuantity()
    },
    setItemInCartQuantity() {
      this.$root.$emit('cartLength', this.$localstorageGetCart().length);
    },
    changeBtnOnAddToCart(product) {
      return this.$changeBtnOnAddToCart(product)
    }
  },
  async beforeMount() {
    this.isLoading = true;
    const response = await this.$axios.get('products/');
    this.productsData = response.data;
    this.isLoading = false;
  },
}
</script>
