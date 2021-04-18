<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="row justify-evenly items-center content-around" v-if="product">
      <div class="q-pa-md col-xs-12 col-sm-6 col-md-4"
           style="min-width: 300px"
      >
        <q-card>
          <q-img :src="product.photos"></q-img>
          <div class="column justify-evenly items-center content-around" style="background-color: #232830">
            <q-form @submit="editProduct()">
              <div>Id {{ product.id }}</div>
              <q-input label="Title" v-model="product.title"
                       :rules="[ val => val && val.length > 0 || 'This field is required']"
              />
              <q-input label="Description" v-model="product.description"
                       :rules="[ val => val && val.length > 0 || 'This field is required']"/>
              <q-input label="Price" type="number" v-model="product.price"
              />
              <q-input label="Color" v-model="product.color"
                       :rules="[ val => val && val.length > 0 || 'This field is required']"/>
              <q-input label="Likes" type="number" v-model="product.likes"/>
              <q-input label="Sold Out" type="checkbox" v-model="product.sold_out"/>
              <q-file
                value="FileList"
                v-model="photoModel"
                label="Edit photo"
                filled
                use-chips
                clearable
                accept=".jpg, .png, image/*"
                multiple
                append
              />
              <q-btn type="submit" label="Edit Product"/>
            </q-form>
          </div>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>
export default {
  name: 'SingleProductEdit',
  data() {
    return {
      photoModel: null,
      product: {
        title: null,
        description: null,
        price: 0,
        color: null,
        likes: 0,
        sold_out: false,
      }
    }
  },
  methods: {
    editProduct() {
      const {title, description, price, color, sold_out, likes} = this.product;
      const productForPatch = new FormData;
      productForPatch.append("title", title);
      productForPatch.append("description", description);
      productForPatch.append("price", price);
      productForPatch.append("color", color);
      productForPatch.append("sold_out", sold_out);
      productForPatch.append("likes", likes);
      console.log('adding photo model');
      productForPatch.append("photos", this.photoModel[0], this.photoModel[0].name);
      this.$axios({
        method: 'patch',
        url: `products/edit_add_or_list/${this.product.id}/`,
        data: productForPatch,
        headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
      }).then(response => console.log(response.data))
        .catch((error) => {
          if (error.response.status === 401) {
            this.$axiosCheckRefreshToken()
              .then(res => {
                const {access, refresh} = res.data;
                this.$setTokens(access, refresh);
                this.$axios({
                  method: 'get',
                  url: `products/edit_add_or_list/${this.product.id}/`,
                  data: productForPatch,
                  headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
                }).then(res => console.log(res.data))
                  .catch(error => console.log(error, 'error in refresh token'))
              }).catch(err => {
              this.$removeTokens();
              console.log(err, 'none of tokens is valid');
            })
          }
        })
      //  reloading page
      location.reload();
    }
  },
  beforeMount() {
    this.product = this.$store.getters.getSingleProduct;
    this.$axios({
      method: 'get',
      url: `products/edit_add_or_list/${this.$route.params.id}/`,
      headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
    }).then(response => {
      this.product = response.data;
    })
      .catch((error) => {
        if (error.response.status === 401) {
          this.$axiosCheckRefreshToken()
            .then(res => {
              const {access, refresh} = res.data;
              this.$setTokens(access, refresh);
              this.$axios({
                method: 'get',
                url: `products/edit_add_or_list/${this.$route.params.id}/`,
                headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
              }).then(res => this.product = res.data)
                .catch(error => console.log(error, 'error in refresh token, before mount'))
            }).catch(err => {
            this.$removeTokens();
            console.log(err, 'none of tokens is valid in before mount');
          })
        }
      })
  }
}
</script>
