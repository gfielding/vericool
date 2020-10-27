<template>
  <div>
    <Nav />
    <div class="page mission">
      <div class="bg-video-small">
        <video class="bg-video-small__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/SwanPreview.mp4?alt=media&token=7255d8a1-f158-470b-9a0d-3c9b073fd505" type="video/mp4">
        </video>
        <div class="bg-video-small-text">
          <h1>Help Us End EPS Pollution</h1>
        </div>
      </div>
    	<div class="container">
        <div class="mission__lead">
          <div class="mission__lead-text">
          	<h1>Our Mission</h1>
            <div class="mission__lead-box">
              <ul>
                <li>• Rid the world of unsustainable packaging, this helps explain to the customer why Vericool was made</li>
                <li>• Includes pictures and statistics of the harmful environmental effects of EPS</li>
                <li>• Explains WHY Vericool exists, WHAT they’re passionate about and why the mission matters</li>
                <li>• Takes over for the current website’s <a href="http://vericoolpackaging.com/environment" target="_blank">Environmental Impact</a> tab</li>
              </ul>

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
import Footer from '@/components/Footer.vue'

export default {
  name: 'mission',
  components: {
    Nav,
    Footer
  }
}
</script>