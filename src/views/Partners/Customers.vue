<template>
  <div class="page customers">
  	<div class="customers__video">
      <div class="bg-video-small">
        <video class="bg-video-small__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/HikePreview.webm?alt=media&token=b6b8716b-6b20-4220-8a1a-926bde0161bb" type="video/mp4">
        </video>
        <div class="bg-video-small-text">
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
          <div class="customers__area-grid-item">
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
          <div class="customers__area-grid-item">
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
          <div class="customers__area-grid-item">
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
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'customers',
}
</script>