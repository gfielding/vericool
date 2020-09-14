<template>
  <div class="page products">
  	<div class="products__hero">
  		<div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
      <div class="products__hero-text">
      	<h1>products</h1>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'products',
}
</script>