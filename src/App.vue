<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Footer from '@/components/Footer.vue'
const fb = require('./firebaseConfig.js')

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    Footer
  }
};
</script>