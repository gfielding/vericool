<template>
  <div class="page second-chance">
    <div class="bg-video-small">
      <video class="bg-video-small__content" autoplay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/HikePreview.webm?alt=media&token=b6b8716b-6b20-4220-8a1a-926bde0161bb" type="video/mp4">
      </video>
    </div>
    <div class="container">
      <div class="second-chance__lead">
        <div class="second-chance__lead-text">
          <h1>Second Chance Program</h1>
          <div class="second-chance__lead-box">
            <ul>
              <li>• shows what the company is about and the values that it has</li>
              <li>• Use current website’s NEWS article- Vericool: A Home for Second Chances & feature it</li>
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
  name: 'second-chance',
}
</script>