<template>
  <div>
    <Nav />
    <div class="page data">
      <div class="container">
        <h1 class="mt-5">Performance</h1>
        <h3 class="mb-0">wvwr</h3>
        <hr>
        <h2>The Light Test</h2>
        <BeforeAfter />
        <p>With the closed cell thermal performance, reliability and low-cost of molded EPS, but none of the harmful environmental effects-Vericoolers safely and sustainably ensure that food, medicines and other temperature-sensitive products stay cool, from packaging to receipt. Plus, Vericoolers® are the only packaging that protects products and people today, and the environment tomorrow.</p>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import BeforeAfter from '@/components/BeforeAfter.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'data',
  components: {
    Nav,
    BeforeAfter,
    Footer
  }
}
</script>