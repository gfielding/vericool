<template>
  <div>
    <Nav />
    <div class="page competitors">
      <h1>competitors</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'competitors',
  components: {
    Nav,
  }
}
</script>