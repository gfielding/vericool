<template>
  <div class="page team">
    <div class="bg-video-small">
      <video class="bg-video-small__content" autoplay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/HikePreview.webm?alt=media&token=b6b8716b-6b20-4220-8a1a-926bde0161bb" type="video/mp4">
      </video>
      <div class="bg-video-small-text">
        <h1>Meet The <br />Team</h1>
      </div>
    </div>
  	<div class="container">
      <div class="team__lead">
        <div class="team__lead-text">
        	<h1>team</h1>
          <div class="team__lead-box">
            <ul>
              <li>• Rid the world of unsustainable packaging, this helps explain to the customer why Vericool was made</li>
              <li>• Includes pictures and statistics of the harmful environmental effects of EPS</li>
              <li>• Explains WHY Vericool exists, WHAT they’re passionate about and why the team matters</li>
              <li>• Takes over for the current website’s <a href="http://vericoolpackaging.com/environment" target="_blank">Environmental Impact</a> tab</li>
            </ul>

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
  name: 'team',
}
</script>