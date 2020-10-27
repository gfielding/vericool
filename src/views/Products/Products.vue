<template>
  <div>
    <Nav :subProducts="true" :productPage="true" />
    <div class="products">
      <router-view :key="$route.params.id" />
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'products',
  components: {
    Nav,
    Footer
  },
}
</script>