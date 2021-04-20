<template>
  <q-layout view="hHh lpr fff">

    <q-header reveal bordered height-hint="50" class="col bg-blue-grey-9 text-amber-8">
      <q-toolbar class="q-pt-sm">
        <q-btn flat round dense icon="menu" class="q-mr-md" @click="left = !left"/>

        <q-space/>
        <q-btn v-if="!this.currentUser" flat round dense icon="login" class="q-mr-md" size="lg"
               :to="{name: 'login'}"
        >
          <q-tooltip>
            Login
          </q-tooltip>
        </q-btn>

        <div class="q-pa-md q-gutter-sm" v-if="this.currentUser">
          <q-btn flat round dense icon="account_circle" class="q-mr-md" size="lg" @click="confirm = true">
            <q-tooltip>
              Logout
            </q-tooltip>
          </q-btn>
          <q-dialog v-model="confirm" persistent>
            <q-card class="bg-blue-grey-9">
              <q-card-section class="row items-center">
                <q-avatar icon="account_circle" color="amber-8" text-color="white"/>
                <span class="q-ml-sm text-amber-8">
                  {{ this.currentUser.username }} do you really want to logout?
                </span>
              </q-card-section>

              <q-card-actions align="right">
                <q-btn flat label="Cancel" color="amber-8" v-close-popup/>
                <q-btn flat label="Logout" color="amber-8" @click="logout" v-close-popup/>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>

        <!--        <q-btn v-if="this.$store.getters.getIsLogged" flat round dense icon="account_circle" class="q-mr-md" size="lg"-->
        <!--               @click="toCurrentUser"/>-->

        <q-btn flat round dense icon="local_mall" class="q-mr-sm" size="lg" :to="{name: 'cart'}">
          <q-tooltip>
            Cart
          </q-tooltip>
          <q-badge color="primary" floating transparent v-if="this.cartLength">
            {{ this.cartLength }}
          </q-badge>
        </q-btn>
      </q-toolbar>
      <q-toolbar>
        <q-toolbar-title align="center">
          <q-btn
            flat
            style="font-size: 20px"
            to="/"
            dense
          >
            NECKLACE
          </q-btn>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" overlay behavior="mobile" elevated>
      <!-- drawer content -->
      <q-tabs vertical
              class="text-amber-8 bg-blue-grey-9 column items-center"
              style="height: 60vh"
      >
        <q-btn flat round dense icon="close" class="q-ma-md fixed-top-right" @click="left = !left"/>
        <br>
        <br>
        <br>
        <q-route-tab to="/gallery" label="Галерея"/>
        <q-route-tab to="/how_to_buy" label="Як придбати"/>
        <q-route-tab to="/about" label="Про нас"/>
        <q-route-tab to="/blog" label="Блог"/>
        <q-route-tab to="/inspiration" label="Для натхнення"/>
        <q-route-tab v-if="this.currentUser && this.currentUser.is_superuser" to="/add_product"
                     label="Add or edit products"/>
      </q-tabs>
      <div style="height: 40vh" class="text-amber-8 bg-blue-grey-9 row justify-center items-start">
        <q-btn v-if="this.currentUser && this.currentUser.is_superuser">
          <a href="http://localhost:8000/admin/"
             class="text-amber-9"
             style="text-decoration: none"
          >
            Admin
          </a>
        </q-btn>
      </div>
    </q-drawer>

    <q-page-container class="col bg-blue-grey-9 text-amber-8" style="padding-bottom: 50px">
      <form @submit.prevent @submit="newSearch" class="row q-pt-xs" style="padding-left: 50px">
        <q-input
          v-model="searchWord"
          filled
          type="search"
          placeholder="Type here"
          aria-required="true"
          dense
          class="q-mr-sm"
          required
          bg-color="blue-grey-6"
          color="amber-8"
          :rules="[val => !!val || 'Field is required']"
          lazy-rules
        />
        <div class="search-wrapper">
          <q-btn type="submit" color="blue-grey-8" label="Search" text-color="amber-8"/>
        </div>
      </form>
      <div v-if="!isSearchValid" style="padding: 10px 0 0 50px">No results found</div>

      <Main :prop="this.productsFromSearch"/>

    </q-page-container>

    <q-footer reveal bordered class="bg-blue-grey-9 text-amber-8">
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
import Main from "pages/Main";

export default {
  components: {
    Main
  },
  data() {
    return {
      left: false,
      searchWord: '',
      isSearchValid: false,
      productsFromSearch: [],
      cartLength: null,
      confirm: false,
      currentUser: null
    }
  },
  methods: {
    logout() {
      this.$removeTokens();
      this.currentUser = null;
      location.reload();
    },
    setCurrentUserFromMain() {
      setTimeout(async () => {
        this.currentUser = await this.$getCurrentUser();
      }, 300)
    },
    async newSearch() {
      await this.$router.push('').catch(err => console.log(err));
      await this.$router.push({query: {searchRequest: this.searchWord}});
      const filter = this.searchWord.toUpperCase();
      const prod = (await this.$axios.get('products/')).data
      this.productsFromSearch = [];
      for (let i = 0; i < prod.length; i++) {
        const txt = prod[i].title || prod[i].description;
        if (txt.toUpperCase().indexOf(filter) > -1) {
          this.productsFromSearch.push(prod[i])
          this.isSearchValid = true;
        } else {
          this.isSearchValid = false;
        }
      }
      if (this.productsFromSearch.length > 0) {
        this.isSearchValid = true;
      }
    }
  },
  beforeMount() {
    //initializing current user
    if (this.$getCurrentUser()) {
      this.currentUser = this.$getCurrentUser();
    }
    if (localStorage.getItem('access')) {
      this.$axiosCheckAccessToken()
        .then(res => {
          this.currentUser = res.data;
          this.$setCurrentUser(res.data);
        })
        .catch(error => {
          if (error.request.status === 401) {
            this.$axiosCheckRefreshToken()
              .then(res => {
                const {access, refresh} = res.data;
                this.$setTokens(access, refresh);
                this.$axiosCheckAccessToken()
                  .then(res => {
                    // console.log('second scenario');
                    this.$setCurrentUser(res.data);
                    this.currentUser = res.data;
                  })
                  .catch(err => {
                    console.log(err, 'error in second scenario');
                  })
              })
              .catch(err => {
                this.$removeTokens()
                console.log(err, 'none of tokens is valid');
              })
          }
        }).catch(err => {
        console.log(err, 'last catch');
      })
      this.setCurrentUserFromMain()
    }
  },
  created() {
    this.searchWord = this.$route.query.searchRequest;
    this.newSearch();
    //initializing cart length
    this.$root.$on('cartLength', dat => {
      this.cartLength = dat;
    });
    if (this.$localstorageGetCart()) {
      this.cartLength = this.$localstorageGetCart().length;
    }
  },
}
</script>
