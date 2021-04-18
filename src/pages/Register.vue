<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md column justify-center items-center content-center">
      <h5></h5>
      <q-form
        @submit="onSubmit"
        class="q-gutter-md col-xs-10 col-sm-6 col-md-4"
      >
        <q-input
          filled
          required
          type="email"
          v-model="register.email"
          label="Enter your email"
          hint="example: my_email@mail.com"
          lazy-rules
          :rules="[ val => val && val.length > 0 && val.includes('@') || 'Please verify you email']"
        >
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>
        <q-input
          filled
          required
          type="text"
          v-model="register.username"
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
          required
          type="password"
          v-model="register.password"
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
          <q-btn label="Sign up" type="submit" color="lue-grey-7 text-amber-8"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Register',
  data() {
    return {
      register: {
        username: '',
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const user = new FormData();
      const {username, email, password} = this.register;
      user.append("username", username);
      user.append("password", password);
      user.append("email", email);
      this.$axios.post('http://127.0.0.1:8000/auth/register/', user)
        .then((response) => {
          alert('Thanks for signing in. Now you can login')
          this.$router.push({name: 'login'})
        }).catch((error) => {
        alert('Please verify your email')
        console.log("AXIOS ERROR: ", error);
      })
    }
  }
}
</script>
