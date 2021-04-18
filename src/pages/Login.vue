<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md column justify-evenly items-center">
      <h5></h5>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md col-xs-10 col-sm-6 col-md-4"
      >
        <q-input
          filled
          type="text"
          v-model="login.username"
          label="Enter your username"
          hint="example: my_username"
          lazy-rules
        >
          <template v-slot:prepend>
            <q-icon name="face"/>
          </template>
        </q-input>

        <q-input
          filled
          type="password"
          v-model="login.password"
          label="Enter your password"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Please verify your password',
        ]"
        >
          <template v-slot:prepend>
            <q-icon name="lock"/>
          </template>
        </q-input>
        <div class="flex-center flex">
          <q-btn label="Login" type="submit" color="lue-grey-7 text-amber-8"/>
        </div>
        <q-card-section class="text-center q-pa-none">
          <q-btn flat to="/register" class="text-grey-6 text-lowercase">
            Don't have an account yet? Sign up
          </q-btn>
        </q-card-section>
      </q-form>
    </div>
    <br>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const user = new FormData();
      const {username, password} = this.login;
      user.append("username", username);
      user.append("password", password);
      this.$axios.post('auth/', user)
        .then((response) => {
          const {access, refresh} = response.data;
          this.$setTokens(access, refresh);
          this.$axiosCheckAccessToken()
            .then((res) => {
              // this.$store.commit('setCurrentUser', res.data);
              this.$setCurrentUser(res.data)
              this.$router.push({name: 'main'});
            })
        }).catch((error) => {
        alert('Please verify your username and password')
        console.log("AXIOS error in login: ", error);
      })
    }
  }
}
</script>
