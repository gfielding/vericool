<template>
	<div>
		<Nav />
	  <div class="page ohana">
	  	<div class="ohana__hero">
	      <div class="ohana__hero-text">
	      	<h1>ohana</h1>
	      </div>
	    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'ohana',
  components: {
    Nav,
  }
}
</script>