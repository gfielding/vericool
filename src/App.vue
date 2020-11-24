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
      { name: 'description', content: "Vericool Environmentally-Friendly Packaging" }
    ],
  })
};
</script>