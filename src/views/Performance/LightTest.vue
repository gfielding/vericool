<template>
  <div>
    <Nav />
    <div class="page data">
      <div class="container">
        <h1 class="mt-5">The Light Test</h1>
        <h3 class="mb-0">Consistent Temperature Control is Key</h3>
        <hr>
        <p class="lead mb-5">With the thermal performance, reliability and low-cost of molded EPS, but none of the harmful environmental effects-Vericoolers safely and sustainably ensure that food, medicines and other temperature-sensitive products stay cool, from packaging to receipt. Plus, Vericoolers® are the only packaging that protects products and people today, and the environment tomorrow.</p>
        <BeforeAfter />
        <div class="flex mt-5 mb-5">
          <div class="col-1 pa-2">
            <h3>The Competition</h3>
            <p>Compressed peanuts pressed into a panel, while they offer some thermal protection for your product, have gaps in design. Literally, there are gaps in the design. These holes allow cold energy to freely flow out of the system, compromising the thermal integrity of your product. </p>
          </div>

          <div class="col-2 pa-2">
            <h3>Vericool Products</h3>
            <p>Vericool Plus® is a closed cell, continuously extruded, panel system. Consistency in material is imperative to maintaining thermal integrity throughout transit. Vericool’s consistent and continuous insulation block heat from entering and cold energy from escaping the shipper better than the competition. </p>
          </div>
        </div>
        <hr>
        <h2>Why Cold Chain</h2>
        <p>Customer perception is the baseline for developing and maintaining a strong brand image. For temperature sensitive products, the unboxing experience hinges entirely on the temperature of the product when the customer opens their package. We work hard to create thermal solutions that will protect your product, without overpackaging. </p>
        <hr>
        <h2>Why Partner with Vericool</h2>
        <p>Vericool offers comprehensive custom package design and thermal validation. Renown for developing deep relationships with potential customers and using the full breadth and depth of our knowledge to create the most optimal solution possible for your business and our planet. Whether tasked to design to your specific size and weight requirements or from a clean slate, we are excited to take on any challenge.
        </p>
       <hr>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import BeforeAfter from '@/components/BeforeAfterLg.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'light-test',
  components: {
    Nav,
    BeforeAfter,
    Footer
  }
}
</script>