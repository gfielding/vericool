<template>
  <div class="page dashboard">
  	<div class="container">
      <div class="dashboard__lead">
      	<h1>dashboard</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'dashboard',
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>