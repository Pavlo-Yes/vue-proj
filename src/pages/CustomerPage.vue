<template>
  <q-page padding class="bg-blue-grey-9 text-amber-8">
    <!-- content -->
    <div class="row justify-evenly items-center content-around" v-if="currentUser">
      <div class="q-pa-md col-xs-12 col-sm-6 col-md-4">
        <div class="column justify-evenly items-center content-around q-pa-md" style="background-color: #282f3b">
          <div class="q-pa-sm" style="color: white">Your username: {{ currentUser.username }}</div>
          <div class="q-pa-sm" style="color: white">Your email: {{ currentUser.email }}</div>
          <q-btn @click="logout" color="white" text-color="blue">Logout</q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'CustomerPage',
  data() {
    return {
      currentUser: null
    }
  },
  methods: {
    logout() {
      this.$store.commit('logout');
      this.$router.push({name: 'main'});
    }
  },
  created() {
    this.currentUser = this.$store.getters.getCurrentUser;
  }
}
</script>
