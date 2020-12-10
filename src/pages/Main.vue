<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    Hi from Main
    <div class="q-pa-md">
<!--      Тут просто вибір файлу-->
      <!--      <q-file-->
      <!--        color="amber-8"-->
      <!--        v-model="image"-->
      <!--        label="Додати фото"-->
      <!--        filled-->
      <!--        multiple-->
      <!--        append-->
      <!--        accept=".jpg, image/*"-->
      <!--        style="max-width: 300px"-->
      <!--      />-->
      <!--      <q-btn @click="saveImage">Save File</q-btn>-->
      <q-form @submit="onSubmit">
        <q-input v-model="inputData.title" hint="Введіть title" label="Title" type="string" hide-hint autofocus/>
        <q-input v-model="inputData.description" hint="Введіть description" label="Description" type="textarea"
                 hide-hint filled/>
        <q-input v-model="inputData.price" hint="Введіть price" label="Price" type="number" hide-hint/>
        <q-input v-model="inputData.color" hint="Введіть color" label="Color" type="string" hide-hint/>
        <q-checkbox v-model="inputData.sold_out" label="Sold Out"/>
        <q-input v-model="inputData.likes" hint="Введіть кількість лайків(необов'язково)" label="Likes" type="number"
                 hide-hint/>

        <!--      Тут просто вибір файлу-->
        <!--        <q-uploader-->
        <!--          enctype="multipart/form-data"-->
        <!--          v-model="inputData.images"-->
        <!--          style="max-width: 300px"-->
        <!--        />-->
        <!--          datatype="multipart/form-data"-->
        <q-file
          color="amber-8"
          v-model="inputData.images"
          label="Додати фото"
          filled
          use-chips
          clearable
          accept=".jpg, .png, image/*"
          style="max-width: 300px"
          multiple
          append
        />
        <q-btn label="Submit" type="submit" color="primary"/>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      inputData: {
        title: '',
        description: '',
        price: 0,
        color: '',
        sold_out: '',
        likes: 0,
        images: FileList
      },
    }
  },
  methods: {
    //Перший метод:

    // async onSubmit() {
    //   const req = this.$axios.post('http://127.0.0.1:8000/products/', this.inputData, {
    //     headers: {
    //       'Content-Type': 'multipart/form-data'
    //     }
    //   })
    //   console.log('this.inputData.images:' + this.inputData.images);
    //   console.log('this.inputData.title:' + this.inputData.title);
    //   console.log('this.inputData.sold_out:' + this.inputData.sold_out);
    //   console.log('REQUEST' + req);
    // }


    //Другий метод:
    async onSubmit() {
      const headers = {
        'Content-Type': 'multipart/form-data'
      }

      this.$axios.post('http://127.0.0.1:8000/products/', this.inputData, {
        headers: headers
      })
        .then((response) => {
          console.log("RESPONSE RECEIVED: ", response);
        })
        .catch((error) => {
          console.log("AXIOS ERROR: ", error);
        })
    }
  }
}
</script>
