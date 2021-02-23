<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md fixed-center" style="max-width: 500px">
      <div class="row flex-center">
        <h5 class="text-h5 q-my-md">Вхід</h5>
      </div>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          type="email"
          v-model="login.email"
          label="Введіть email"
          hint="наприклад: name@mail.com"
          lazy-rules
          :rules="[ val => val && val.length > 0 && val.includes('@') || 'Перевірте введений Вами email']"
        >
          <template v-slot:prepend>
            <q-icon name="email"/>
          </template>
        </q-input>

        <q-input
          filled
          type="password"
          v-model="login.password"
          label="Введіть пароль"
          lazy-rules
          :rules="[
          val => val !== null && val !== '' || 'Перевірте введений Вами пароль',
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
          <q-btn flat to="/register" class="text-grey-6 text-lowercase">Незареєстровані? Натисніть сюди щоб створити
            обліковий запис
          </q-btn>
        </q-card-section>
      </q-form>

    </div>
    <br>
    <div>
      <q-btn
        class="bg-blue-grey-9 text-amber-8 q-mr-xl"
        style="font-weight: bolder"
        to="/cart"
        label="Go to cart"
      />
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      login: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      const user = new FormData();
      const {email, password} = this.login;
      user.append("email", email);
      user.append("password", password);
      console.log(this.login);
      this.$axios.post('http://127.0.0.1:8000/login_user/', user)
        .then((response) => {
          console.log("RESPONSE RECEIVED: ", response);
        }).catch((error) => {
        console.log("AXIOS ERROR: ", error);
      })
    }
  }
}
</script>
