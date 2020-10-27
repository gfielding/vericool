<template>
  <div>
    <Nav />
    <div class="page data">
      <div class="container">
        <h1 class="mt-5">Testing</h1>
        <h3 class="mb-0">Thermal solutions that will protect your product, without overpackaging</h3>
        <hr>
        <h2>Why Partner with Vericool</h2>
        <p>Vericool offers comprehensive custom package design and thermal validation. Renown for developing deep relationships with potential customers and using the full breadth and depth of our knowledge to create the most optimal solution possible for your business and our planet. Whether tasked to design to your specific size and weight requirements or from a clean slate, we are excited to take on any challenge.</p>
        <hr>
        <h2>Thermal Testing</h2>
        <p>All custom solutions are validated on site in our thermal lab to ensure your products integrity is maintained through transit. Our talented team of packaging engineers will walk you through the results of each report to ensure total understanding so we can make decisions together.</p>
        <hr>
        <h2>Services</h2>
        <ul>
          <li>In-house testing</li>
          <li>3rd party testing</li>
          <li>Rapid prototyping</li>
          <li>Custom samples</li>
          <li>Custom pack out instructions and videos</li>
          <li>Coolant to wall thickness trade off analysis</li>
          <li>Site visits and consolidation</li>
          <li>Summer, Winter, and universal pack out options</li>
          <li>Custom art design for films (monthly quantities prohibitive)</li>
        </ul>
    </div>
  </div>
  <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'testing',
  components: {
    Nav,
    Footer
  }
}
</script>