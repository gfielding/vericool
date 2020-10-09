<template>
  <div>
    <Nav />
  
    <div class="page custom">
    	<div class="custom__hero">
    		<div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
          <div class="custom__hero-text">
          	<h1>custom<br />Orders</h1>
          </div>
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
  name: 'custom',
  components: {
    Nav,
  }
}
</script>