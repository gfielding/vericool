<template>
  <div>
    <Nav />
  
    <div class="page data">
    	<div class="data__hero">
    		<div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
          <div class="data__hero-text">
          	<h1>data</h1>
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
  name: 'data',
  components: {
    Nav,
  }
}
</script>