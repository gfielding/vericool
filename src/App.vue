<template>
  <div id="app">
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('./firebaseConfig.js')

export default {
  data: () => ({
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  }
};
</script>