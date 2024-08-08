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
    	<div class="home__mission-container" data-aos="fade-up" data-aos-once="true">
        <div class="home__mission-text">
      		<p>Vericool™ provides a proprietary green technology solution that leaves zero impact on the environment unlike the alternative solution that is devastating our global landscape. The mission of Vericool is to eliminate Styrenfoam (EPS) usage in the biomedical, pharmaceutical, life sciences, fish, and food delivery industries. Vericool was founded by temperature controlled packaging experts in response to customer request for recyclable and better yet, compostable, shipping alternatives to EPS, commonly known as Styrenfoam.</p>
      	</div>
      </div>
    </section>
    <section class="home__impact">
    	<div class="container">
        <div class="customers__area-grid">
          <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
            <div class="card">
              <div class="card__image">
                <img src="http://vericoolpackaging.com/images/ice2.jpg" alt="">
              </div>
              <div class="card__body">
                <h3>What is a Vericooler</h3>
                <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
              </div>
            </div>
          </div>
          <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400">
            <div class="card">
              <div class="card__image">
                <img src="https://livinginpanama.com/wp-content/uploads/2018/12/birds-eating-m2-styrofoam-800.jpg" alt="">
              </div>
              <div class="card__body">
                <h3>Impact of Styrofoam</h3>
                <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
              </div>
            </div>
          </div>
          <div class="customers__area-grid-item" data-aos="fade-up" data-aos-once="true" data-aos-delay="400"> 
            <div class="card">
              <div class="card__image">
                <img src="http://vericoolpackaging.com/images/inmates.jpg" alt="">
              </div>
              <div class="card__body">
                <h3>Home Of Second Chances</h3>
                <p>Cornhole raclette tote bag poke hashtag seitan. Tumeric DIY disrupt man bun bitters migas normcore fixie. Hashtag celiac brunch tbh salvia humblebrag slow-carb drinking vinegar chillwave deep v chia chartreuse quinoa scenester.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
