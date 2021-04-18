<template>
  <q-page>
    <q-btn flat round dense icon="local_mall" class="q-mr-sm" size="lg" :to="{name: 'cart'}">
      <q-tooltip>
        Cart
      </q-tooltip>
      <q-badge color="primary" floating transparent v-if="this.cartLength > 0">
        {{ this.cartLength }}
      </q-badge>
    </q-btn>

    <div class="row justify-evenly items-center content-around">
      <div v-for="(product,index) in productsData" :key='index'
           class="q-pa-md col-xs-12 col-sm-6 col-md-4"
           style="min-width: 300px"
      >
        <q-card>
          <q-img :src="product.photos" class="zoom">
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
                   @click="addItemToCart(product)"
                   :label="changeBtnOnAddToCart(product).label"
                   :color="changeBtnOnAddToCart(product).color"
                   :icon="changeBtnOnAddToCart(product).icon"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>

  <!--  <q-page padding class="bg-blue-grey-9 text-amber-8 flex-center flex" style="padding: 40px">-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus amet consequatur culpa deleniti deserunt, excepturi exercitationem facere illum in ipsa magni molestiae mollitia pariatur porro quas rem saepe sit!</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium eum inventore magnam modi molestiae quae quo, voluptatum! Accusamus architecto at blanditiis commodi consectetur debitis laudantium saepe ut vel voluptates? Perspiciatis!</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cum cupiditate delectus esse, explicabo fuga fugiat ipsa laboriosam maiores molestiae nihil nobis nostrum pariatur praesentium, qui quidem, quisquam sit voluptas!</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur dignissimos distinctio error esse, explicabo laboriosam modi molestias nemo odio perferendis quaerat quam similique sint sit? Blanditiis dignissimos neque quidem?</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet blanditiis cum cumque ea exercitationem, expedita illum in, laboriosam laborum minus odio possimus quaerat quo reiciendis repellendus unde ut veniam voluptate.</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, iusto modi nemo nihil repudiandae ut! Assumenda, aut consectetur consequatur cum fuga fugit iste iure molestias perspiciatis provident qui rem ullam!</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad deleniti dolor doloribus earum eligendi et ex hic ipsa iure modi nostrum odio, placeat quam quo, repudiandae ullam vel veniam voluptatem.</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad dignissimos eveniet laudantium non nostrum obcaecati perspiciatis reiciendis sapiente tempore. Accusantium dolore doloribus hic iure quia, quidem ut voluptate voluptates voluptatum?</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur distinctio dolore dolorem doloremque earum eveniet excepturi quaerat sed? Deserunt doloremque earum eius fuga fugit hic necessitatibus quas qui tenetur unde?</div>-->
  <!--    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur consequuntur, delectus dolorum earum eveniet, expedita itaque labore magnam molestias necessitatibus nemo nihil officiis pariatur perferendis quos ratione tenetur ullam, veniam.</div>-->
  <!--  </q-page>-->
</template>

<script>
export default {
  name: 'Inspiration',
  data() {
    return {
      productsData: [],
      cartLength: 0
    }
  },
  methods: {
    addItemToCart(product) {
      this.$addToCart(product)
      this.getItemInCartQuantity()
    },
    getItemInCartQuantity() {
      this.cartLength = this.$localstorageGetCart().length
    },
    changeBtnOnAddToCart(product) {
      return this.$changeBtnOnAddToCart(product)
    }
  },
  async beforeCreate() {
    const response = await this.$axios.get('products/');
    this.productsData = response.data;

    //initializing cartLength
    if (this.$localstorageGetCart()) {
      this.cartLength = this.$localstorageGetCart().length;
    }
  }
}
</script>
