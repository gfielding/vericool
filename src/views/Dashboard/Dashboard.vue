<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
    	<div class="container">
        <div class="dashboard__lead">
        	<h1>dashboard</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavAdmin from '@/components/NavAdmin.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'dashboard',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    NavAdmin,
  }
}
</script>