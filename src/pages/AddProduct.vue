<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    Hi from Main
    <div class="q-pa-md">
      <q-form @submit="onSubmit">
        <q-input v-model="inputData.title"
                 hint="Введіть title"
                 label="Title"
                 type="string"
                 hide-hint autofocus
        />
        <q-input v-model="inputData.description"
                 hint="Введіть description"
                 label="Description"
                 type="textarea"
                 hide-hint filled
        />
        <q-input v-model="inputData.price" hint="Введіть price"
                 label="Price"
                 type="number"
                 hide-hint
        />
        <q-input v-model="inputData.color" hint="Введіть color"
                 label="Color"
                 type="string"
                 hide-hint
        />
        <q-checkbox v-model="inputData.sold_out"
                    label="Sold Out"
        />
        <q-input v-model="inputData.likes"
                 hint="Введіть кількість лайків(необов'язково)"
                 label="Likes"
                 type="number"
                 hide-hint
        />
        <q-file
          value="FileList"
          v-model="inputData.photos"
          color="amber-8"
          label="Додати фото"
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
        photos: null
      },
    }
  },
  methods: {
    onSubmit() {
      const inf = new FormData();
      const {title, description, price, color, sold_out, likes, photos} = this.inputData;
      inf.append("title", title);
      inf.append("description", description);
      inf.append("price", price);
      inf.append("color", color);
      inf.append("sold_out", sold_out);
      inf.append("likes", likes);
      inf.append("photos", photos[0], photos[0].name);
      console.log(this.inputData);
      this.$axios.post('http://127.0.0.1:8000/products/', inf)
        .then((response) => {
          console.log("RESPONSE RECEIVED: ", response);
        }).catch((error) => {
        console.log("AXIOS ERROR: ", error);
      })
    }
  }
}
</script>
