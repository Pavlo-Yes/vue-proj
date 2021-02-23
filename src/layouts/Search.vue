<template>
  <q-layout view="hHh lpr fff">

    <q-header reveal bordered height-hint="98" class="col bg-blue-grey-9 text-amber-8">
      <q-toolbar class="q-pt-sm">
        <q-btn flat round dense icon="menu" class="q-mr-md" @click="left = !left"/>
        <q-space/>
        <q-btn flat round dense icon="group_add" class="q-mr-md" size="lg" to="login"/>
        <q-btn flat round dense icon="local_mall" class="q-mr-sm" size="lg" to="cart">
          <q-badge color="green" floating transparent v-if="cart>0">
            {{ cart }}
          </q-badge>
        </q-btn>
      </q-toolbar>
      <q-toolbar inset>
        <q-toolbar-title align="center" style="font-size: x-large"><strong>Anastasia Vyt</strong>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->
      <q-tabs vertical
              class="text-amber-8 bg-blue-grey-9"
      >
        <q-btn flat round dense icon="close" class="q-ma-md fixed-top-right" @click="left = !left"/>
        <br>
        <br>
        <br>
                <q-btn flat round dense class="q-mr-md" size="md" @click="cart++">Add to cart</q-btn>
        <q-route-tab to="/gallery" label="Галерея"/>
        <q-route-tab to="/how_to_buy" label="Як придбати"/>
        <q-route-tab to="/about" label="Про нас"/>
        <q-route-tab to="/blog" label="Блог"/>
        <q-route-tab to="/inspiration" label="Для натхнення"/>
      </q-tabs>
    </q-drawer>

    <q-page-container>
      <router-view/>
      Hi from search
    </q-page-container>

    <q-footer reveal bordered class="bg-blue-grey-9 text-amber-8">
      <div class="q-pa-sm row justify-center">
        <div class="q-gutter-md material-icons-round" style="font-size: 2em">
<!--          <q-fab direction="left" label="Ми в соціальних мережах">-->
<!--            <q-fab-action href="https://www.instagram.com/" target="_blank" icon="fab fa-instagram"/>-->
<!--            <q-fab-action href="https://www.facebook.com/" target="_blank" icon="fab fa-facebook"/>-->
<!--          </q-fab>-->
          <a href="https://www.facebook.com/" target="_blank" rel="nofollow noreferrer noopener" style="text-decoration: none">
            <q-icon name="fab fa-facebook" class="text-amber-8"/>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="nofollow noreferrer noopener" style="text-decoration: none">
            <q-icon name="fab fa-instagram" class="text-amber-8"/>
          </a>
          <span style="font-size: large">
            ©  Anastasia Vyt
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
      left: false,
      isAdmin: false,
      searchFieldVisible: false,
      cart: 0,
      searchRequest: ''
    }
  },
  methods: {
    search(){
      console.log(this.searchRequest);
    }
  }
  // Created () {
  //   console.log(this.searchFieldVisible)
  // }
}
</script>
