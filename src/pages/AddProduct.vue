<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md row justify-evenly items-center content-around">
      <q-form @submit="onSubmit" class="col-xs-12 col-sm-6 col-md-6">
        <q-input v-model="inputData.title"
                 hint="Enter title (unique, required)"
                 label="Title"
                 type="string"
                 hide-hint autofocus
        />
        <q-input v-model="inputData.description"
                 hint="Enter description (required)"
                 label="Description"
                 type="textarea"
                 hide-hint filled
        />
        <q-input v-model="inputData.price" hint="Enter price (required)"
                 label="Price"
                 type="number"
                 hide-hint
        />
        <q-input v-model="inputData.color" hint="Enter color (required)"
                 label="Color"
                 type="string"
                 hide-hint
        />
        <q-checkbox v-model="inputData.sold_out"
                    label="Sold Out"
        />
        <q-input v-model="inputData.likes"
                 hint="Enter number of likes (not required, default: likes=0"
                 label="Likes"
                 type="number"
                 hide-hint
        />
        <q-file
          value="FileList"
          v-model="inputData.photos"
          color="amber-8"
          label="Add photo"
          filled
          use-chips
          clearable
          accept=".jpg, .png, image/*"
          style="max-width: 300px"
          multiple
          append
        />
        <q-btn label="Submit"
               type="submit"
               color="primary"
        />
      </q-form>
    </div>

    <div class="row justify-evenly items-center content-around">
      <div v-for="(product,index) in productsWithSpecs" :key='index'
           class="q-pa-md col-xs-12 col-sm-6 col-md-4"
           style="min-width: 300px"
      >
        <q-card>
          <q-img :src="product.photos" @click="editProduct(product)">
            <div class="absolute-bottom text-right" style="max-height: 35px;">
              {{ product.title }}
            </div>
            <q-card-section class="absolute-bottom-left"
                            style="max-height: 35px; background-color: transparent; font-size: 16px">
              {{ product.price }}$
            </q-card-section>
          </q-img>
          <div class="column justify-evenly items-center content-around" style="background-color: #232830">
            <div>Id: {{ product.id }}</div>
            <div>Title: {{ product.title }}</div>
            <div>Description: {{ product.description }}</div>
            <div>Color: {{ product.color }}</div>
            <div>Likes: {{ product.likes }}</div>
            <div>Sold_out: {{ product.sold_out }}</div>
          </div>
        </q-card>
      </div>
    </div>

  </q-page>
</template>

<script>

export default {
  name: 'AddProduct',
  data() {
    return {
      inputData: {
        title: '',
        description: '',
        price: 0,
        color: '',
        sold_out: '',
        likes: 0,
        photos: null,
      },
      productsWithSpecs: []
    }
  },
  methods: {
    editProduct(product) {
      this.$router.push({path: `edit_product/${product.id}`, params: {id: `${product.id}`}});
    },
    onSubmit() {
      const product = new FormData();
      const {title, description, price, color, sold_out, likes, photos} = this.inputData;
      product.append("title", title);
      product.append("description", description);
      product.append("price", price);
      product.append("color", color);
      product.append("sold_out", sold_out);
      product.append("likes", likes);
      product.append("photos", photos[0], photos[0].name);
      this.$axios({
        method: 'post',
        url: 'products/edit_add_or_list/',
        data: product,
        headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`},
      })
        .then((response) => {
          console.log("RESPONSE RECEIVED: ", response);
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.$axiosCheckRefreshToken()
              .then(res => {
                const {access, refresh} = res.data;
                this.$setTokens(access, refresh);
                this.$axios({
                  method: 'post',
                  url: 'products/edit_add_or_list/',
                  data: product,
                  headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`},
                })
              }).catch(err => {
              this.$removeTokens();
              console.log(err, 'none of tokens is valid');
            })
          }
        })
      //  Clear the product creation form
      this.inputData.title = '';
      this.inputData.description = '';
      this.inputData.color = '';
      this.inputData.price = 0;
      this.inputData.likes = 0;
      this.inputData.sold_out = false;
      this.inputData.photos = null;
    }
  },
  beforeCreate() {
    this.$axios({
      method: 'get',
      url: '/products/edit_add_or_list/',
      headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
    })
      .then(res => this.productsWithSpecs = res.data)
      .catch((error) => {
        if (error.response.status === 401) {
          this.$axiosCheckRefreshToken()
            .then(res => {
              const {access, refresh} = res.data;
              this.$setTokens(access, refresh);
              this.$axios({
                method: 'get',
                url: '/products/edit_add_or_list/',
                headers: {'Authorization': `Bearer ${localStorage.getItem('access')}`}
              }).then(res => this.productsWithSpecs = res.data)
                .catch(error => console.log(error, 'error in refresh token, before create'))
            }).catch(err => {
            this.$removeTokens();
            console.log(err, 'none of tokens is valid in before create');
          })
        }
      })
  }
}
</script>
