<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">

    <div v-if="this.newCart.length===0" style="font-size: 20px">
      <div class="row justify-center">
        Your shopping cart is empty.
      </div>
      <div class="row justify-center">
        Don't hesitate and browse our catalog to find something beautiful for You!
      </div>
      <div class="row justify-center">
        <q-btn to="/" color="blue-grey-7" text-color="amber-8">Go To Catalog</q-btn>
      </div>
    </div>

    <div class="q-pa-md row justify-evenly items-center content-around">
      <div v-for="(product,index) in this.newCart" :key='index'
           class="q-pa-md col-xs-6 col-sm-3 col-md-2"
           style="min-width: 135px;"
      >
        <q-card>
          <q-img :src="product.photos" class="flex column zoomForCart" @click="toProductFromCart(product)">
            <div class="absolute-top-right" style="background-color: transparent;">
              <q-btn outline size="xs" color="bg-red" icon="clear" @click="removeProduct(product, $event)">
                <q-tooltip>Remove Item?</q-tooltip>
              </q-btn>
            </div>
            <div class="absolute-bottom text-right" style="max-height: 35px">
              {{ product.title }}
            </div>
          </q-img>
          <q-card-actions class="column justify-center" style="background-color: #232830; height: 30px">
            <q-card-section>
              {{ product.price }}$
            </q-card-section>
          </q-card-actions>
        </q-card>
      </div>

      <div v-if="this.newCart.length>0"
           style="background-color: #232830; min-width: 300px"
           class="col-xs-12 col-sm-6 col-md-4"
      >
        <div>
          <ul v-for="(product, index) in this.newCart" :key="index"
              class="bg-blue-grey-6 text-dark"
          >
            <li>Name: {{ product.title }}</li>
            <li style="list-style-type: none;">Description: {{ product.description }}</li>
          </ul>
        </div>
        <div>
          <div style="font-size: 20px" class="flex-center flex">Total: {{ getPrice() }} $</div>
        </div>
        <br>
        <div class="items-center column">
          <div class="text-amber-8" style="max-width: 300px; padding-bottom: 10px">
            <q-form
              @submit="confirmOrder"
              class=""
            >
              <q-input
                v-model="order.name"
                filled
                type="text"
                placeholder="Enter your name here"
                aria-required="true"
                dense
                class="q-ma-sm"
                required
                bg-color="blue-grey-6"
                color="amber-8"
              />
              <q-input
                v-model="order.email"
                filled
                type="email"
                placeholder="Enter your email here"
                aria-required="true"
                dense
                class="q-ma-sm"
                required
                bg-color="blue-grey-6"
                color="amber-8"
                :rules="[ val => val && val.length > 0 && val.includes('@') || 'Перевірте введений Вами email']"
              />
              <div class="flex-center flex">
                <q-btn type="submit" color="blue-grey-8" label="Confirm my order" text-color="amber-8"/>
              </div>
            </q-form>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Cart',
  data() {
    return {
      order:
        {
          name: '',
          email: ''
        },
      newCart: []
    }
  },
  methods: {
    setCart() {
      this.newCart = this.$localstorageGetCart();
    },
    toProductFromCart(product) {
      this.$router.push({name: 'main'});
      this.$router.push({path: `product/${product.id}`});
      this.$store.commit('setSingleProduct', product);
    },
    removeProduct(product, event) {
      //stopPropagation використовується для запобігання кліку на product.photo при кліці на removeProduct
      event.stopPropagation();
      this.$addToCart(product);
      this.$root.$emit('cartLength', this.$localstorageGetCart().length);
      this.setCart();
      if (this.newCart.length === 0) {
        alert('We Hope You Find What You Are Looking For')
      }
    },
    getPrice() {
      let sum = 0;
      for (let i = 0; i < this.newCart.length; i++) {
        sum += this.newCart[i].price;
      }
      return sum
    },
    confirmOrder() {
      alert(`Dear ${this.order.name} thank you for your order, we will get back to ${this.order.email} as soon as possible.`)
    }
  },
  created() {
    if (this.$localstorageGetCart()) {
      this.setCart();
    }
  }
}
</script>
