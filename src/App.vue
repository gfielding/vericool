<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
    <Cookies />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Cookies from '@/components/Cookies.vue'
const fb = require('./firebaseConfig.js')

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile', 'products']),
  },
  components: {
  	Cookies
  },
  async mounted () {
    if (!this.products || this.products.length < 1) {
      this.$store.dispatch("getProducts")
    }
  },
  metaInfo: () => ({
    title: 'Welcome',
    titleTemplate: '%s | Vericool Packaging for a Greener World',
    htmlAttrs: {
      lang: 'en',
      amp: undefined
    },
    headAttrs: {
      test: true
    },
    bodyAttrs: {
      tabIndex: 0
    },
    meta: [
      { name: 'description', content: "Vericool Environmentally-Friendly Packaging" },
      {property: 'og:title', content: 'Vericool - Packaging for a Greener World'},
      {property: 'og:type', content: 'website'},
      {property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pharma-min.jpg?alt=media&token=36802d8c-8bdb-456e-bba2-5695f92595d1'},
      {property: 'og:description', content: 'Patented, high-performing thermal shippers made from natural ingredients that revolutionize the way cold chain products are shipped.'}
    ],
  })
};
</script>