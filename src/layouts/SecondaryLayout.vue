<template>
  <q-layout>
    <q-header reveal elevated height-hint="98" class="col bg-blue-grey-9 text-amber-8">
      <q-toolbar class="row justify-end">
        <q-btn
          class="bg-blue-grey-9 text-amber-8 q-mr-xl"
          style="font-weight: bolder"
          v-go-back=" '/' "
          icon="arrow_back"
          label="Home"
          dense
          size="sm"
        />
      </q-toolbar>
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-btn
            flat
            style="font-size: 20px"
            v-go-back=" '/' "
            dense
          >
            NECKLACE
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view/>
    </q-page-container>

    <q-footer reveal elevated class="bg-blue-grey-9 text-amber-8">
      <div class="q-pa-sm row justify-center">
        <div class="q-gutter-md material-icons-round" style="font-size: 2em">
          <a href="https://www.facebook.com/jewellery/" target="_blank" rel="nofollow noreferrer noopener"
             style="text-decoration: none">
            <q-icon name="fab fa-facebook" class="text-amber-8"/>
          </a>
          <a href="https://www.instagram.com/jewelry/" target="_blank" rel="nofollow noreferrer noopener"
             style="text-decoration: none">
            <q-icon name="fab fa-instagram" class="text-amber-8"/>
          </a>
          <span style="font-size: large">
            ©  Necklace
          </span>
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      isLogged: false,
    }
  },
  beforeCreate() {
    this.isLogged = this.$store.getters.getIsLogged;
  }
}
</script>

<style scoped>

</style>
