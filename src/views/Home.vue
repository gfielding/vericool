<template>
  <div class="home">
    <div class="home__video">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/BeachPreview.mp4?alt=media&token=9d9155d0-1ca1-4ac4-8a6d-ae386ae980e4" type="video/mp4">
        </video>
      </div>
      <div class="circle1"></div>
      <div class="rect1"></div>
      <div class="circle2"></div>
    </div>
    <section class="home__mission">
    	<div class="home__mission-container">
    		<h2>Our Mission</h2>
    		<div class="line"></div>
    		<p>I'm baby gluten-free listicle austin plaid pinterest food truck air plant readymade drinking vinegar direct trade hoodie vegan. Paleo air plant direct trade biodiesel. Selfies kombucha edison bulb pug neutra kitsch single-origin coffee gentrify polaroid umami narwhal. Vexillologist leggings man braid scenester.</p>
    	</div>
    </section>
    <section class="home__impact">
    	
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'Home',
}
</script>
