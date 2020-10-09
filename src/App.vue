<template>
  <div id="app">
    <Nav v-if="!currentUser" />
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
const fb = require('./firebaseConfig.js')

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    Nav,
    Footer
  }
};
</script>