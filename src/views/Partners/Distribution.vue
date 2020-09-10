<template>
  <div class="page customers">
    <div class="distribution__video">
      <div class="bg-video-small">
        <video class="bg-video-small__content" autoplay muted loop>
          <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/HikePreview.webm?alt=media&token=b6b8716b-6b20-4220-8a1a-926bde0161bb" type="video/mp4">
        </video>
        <div class="bg-video-small-text">
          <h1>Amazing<br />distribution</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'distribution',
}
</script>