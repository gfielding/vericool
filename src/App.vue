<template>
  <div id="app">
    <Nav />
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
  components: {
    Nav,
    Footer
  }
};
</script>
