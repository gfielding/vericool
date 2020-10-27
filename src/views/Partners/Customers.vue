<template>
  <div>
    <Nav />
  
    <div class="page customers">
    	<div class="customers__hero">
        <div class="container" data-aos="fade-right" data-aos-once="true" data-aos-delay="600">
          <div class="customers__hero-text">
            <h1>Amazing<br />Customers</h1>
          </div>
        </div>
      </div>
      
      <div class="customers__area">
        <div class="customers__area-filter">
          <div class="container">
            Search and filter customers here
          </div>
        </div>
        <div class="container">
          <div class="customers__area-grid">
            <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
              <div class="card">
                <div class="card__image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Screen%20Shot%202020-09-01%20at%2011.09.38%20PM.png?alt=media&token=adcbf7be-f6a3-4d13-998f-7c3bfce39e68" alt="">
                </div>
                <div class="card__body">
                  <h3>T-Mobile</h3>
                  <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
                </div>
              </div>
            </div>
            <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
              <div class="card">
                <div class="card__image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Screen%20Shot%202020-09-01%20at%2011.09.38%20PM.png?alt=media&token=adcbf7be-f6a3-4d13-998f-7c3bfce39e68" alt="">
                </div>
                <div class="card__body">
                  <h3>T-Mobile</h3>
                  <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
                </div>
              </div>
            </div>
            <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"> 
              <div class="card">
                <div class="card__image">
                  <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Screen%20Shot%202020-09-01%20at%2011.09.38%20PM.png?alt=media&token=adcbf7be-f6a3-4d13-998f-7c3bfce39e68" alt="">
                </div>
                <div class="card__body">
                  <h3>T-Mobile</h3>
                  <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'customers',
  components: {
    Nav,
    Loader,
    Footer
  }
}
</script>