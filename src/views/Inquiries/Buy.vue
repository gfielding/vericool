<template>
  <div>
    <Nav />
    <div class="page buy">
     <div class="buy__hero">
        <div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
          <div class="buy__hero-text">
            <h1>Where to<br />Buy</h1>
          </div>
        </div>
      </div>
    	<div class="container">
        <div class="buy__lead">
          <div class="buy__lead-text">
          	<h1>Where to buy</h1>
            <div class="buy__lead-box">
              <ul>
                <li>• Rid the world of unsustainable packaging, this helps explain to the customer why Vericool was made</li>
                <li>• Includes pictures and statistics of the harmful environmental effects of EPS</li>
                <li>• Explains WHY Vericool exists, WHAT they’re passionate about and why the buy matters</li>
                <li>• Takes over for the current website’s Environmental Impact tab</li>
              </ul>
              http://vericoolpackaging.com/environment
            </div>
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
  name: 'buy',
  components: {
    Nav,
  },
}
</script>