<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="row justify-evenly items-center content-around">
      <div :prop="this.product"
           class="q-pa-md col-xs-12 col-sm-6 col-md-4 col-xl-3"
           style="min-width: 320px"
      >
        <q-card>
          <q-img :src="product.photos">
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
                   label="add to cart"
                   color="primary"
                   icon="shopping_cart"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SingleProduct',
  data() {
    return {
      product: {},
      cartLength: 0
    }
  },
  methods: {
    addToCart(product) {
      this.$addToCart(product)
      this.setItemInCartQuantity()
    },
    // changeBtnOnAddToCart(product) {
    //   return this.$changeBtnOnAddToCart(product)
    // },
    setItemInCartQuantity() {
      this.$root.$emit('cartLength', this.$localstorageGetCart().length);
      this.cartLength = this.$localstorageGetCart().length
    },
  },
  async beforeCreate() {
    const response = await this.$axios.get(`products/${this.$route.params.id}/`);
    this.product = response.data;
  }
}
</script>
