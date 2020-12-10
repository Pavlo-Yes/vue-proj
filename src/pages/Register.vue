<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="q-pa-md fixed-center" style="max-width: 500px">
      <div class="row flex-center">
        <h5 class="text-h5 q-my-md">Реєстрація</h5>
      </div>

      <q-form
        @submit="onSubmit"
        class="q-gutter-md"
      >
        <q-input
          filled
          required
          type="email"
          v-model="email"
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
          required
          type="password"
          v-model="password"
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
          <q-btn label="Зареєструватися" type="submit" color="lue-grey-7 text-amber-8"/>
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
