<template>
  <div>
    <Nav />
  
    <div class="page materials">
    	<div class="materials__hero">
    		<div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
          <div class="materials__hero-text">
          	<h1>materials</h1>
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
  name: 'materials',
  components: {
    Nav,
  }
}
</script>