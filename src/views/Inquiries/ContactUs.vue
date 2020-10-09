<template>
  <div>
    <Nav />
    <div class="page mission">
    	<div class="contact__hero">
    		<div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
        <div class="contact__hero-text">
        	<h1>contact</h1>
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
  name: 'contact',
  components: {
    Nav,
  },
}
</script>