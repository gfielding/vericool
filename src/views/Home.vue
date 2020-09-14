<template>
  <div class="home">
    <section class="home__video">
      <div class="bg-video">
        <video class="bg-video__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/AdobeStock_282043525_Video_HD_Preview.mp4?alt=media&token=e9fb168f-4355-47d5-9bbc-613fd8efae8a" type="video/mp4">
        </video>
      </div>
      <div class="circle1">
        <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/vericoolIcon%20(1).png?alt=media&token=2362fe0f-d241-4f9e-9e8e-7883f4b7ed24" />
      </div>
      <div class="home__video-rect-1">
        Some words
      </div>
      <div class="home__video-rect-2">
        and some more words
      </div>
    </section>
    <section class="home__mission">
    	<div class="home__mission-container" data-aos="fade-right" data-aos-once="true">
        <div class="home__mission-card card">
      		<h2><span class="color-primary">Our </span><span class="color-secondary">Mission</span></h2>
      		<div class="line"></div>
      		<p>I'm baby gluten-free listicle austin plaid pinterest food truck air plant readymade drinking vinegar direct trade hoodie vegan. Paleo air plant direct trade biodiesel. Selfies kombucha edison bulb pug neutra kitsch single-origin coffee gentrify polaroid umami narwhal. Vexillologist leggings man braid scenester.</p>
      	</div>
      </div>
    </section>
    <section class="home__impact">
    	<div class="vc-bar"></div>
    </section>
    <section class="home__performance">
      <div class="iconmark"></div>
      
    </section>
    <section class="home__chance">
      
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../firebaseConfig.js')

export default {
  name: 'Home',
  data () {
  return {
      scrollPosition: null
    };
  },
  computed: {
    isFixed () {
      if ((window.innerHeight * 2) > this.scrollPosition) {
        return true
      } else {
        return false
      }
    }
  },
  methods: {
    /*handleScroll () {
      let pageHeight = window.innerHeight;
      this.scrollPosition = window.scrollY
      console.log(pageHeight)
    }*/
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
}
</script>
