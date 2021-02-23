<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md fit row wrap">
      <div v-for="(p,i) in productsData.data" :key='i'
           class="col q-pa-md"
           style="min-width: 400px; max-width:400px"
      >
        <q-card>
          <q-img :src="p.photos" class="flex column">
            <div class="absolute-bottom text-right" style="max-height: 30px">
              Title in q-img: {{ p.title }}
            </div>
          </q-img>
          <q-card-actions align="right">
            <q-card-section>
              Description in q-card-section: {{ p.description }}
            </q-card-section>
            <q-card-section>
              Price in q-card-section: {{ p.price }}
            </q-card-section>
            <q-btn flat round color="red" icon="favorite"/>
            <q-btn flat round color="teal" icon="bookmark"/>
            <q-btn flat round color="primary" icon="share"/>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'Gallery',
  data() {
    return {
      productsData: []
    }
  },
  async beforeCreate() {
    this.productsData = await this.$axios.get('http://localhost:8000/products/')
    console.log(this.productsData.data);
  }
}
</script>
