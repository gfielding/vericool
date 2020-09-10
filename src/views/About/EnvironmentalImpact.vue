<template>
  <div class="page environmental-impact">
    <div class="bg-video-small">
      <video class="bg-video-small__content" autoplay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/HikePreview.webm?alt=media&token=b6b8716b-6b20-4220-8a1a-926bde0161bb" type="video/mp4">
      </video>
    </div>
    <div class="container-small">
      <div class="environmental-impact__lead">
        <div class="environmental-impact__lead-text">
          <h1>environmental impact</h1>
          <div class="environmental-impact__lead-box">
            <ul>
              <li>• Facts and storytelling about the negative effects of EPS on the environment</li>
              <li>• How Vericoolers are better </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="environmental-impact__body">

        <div class="environmental-impact__body-row">
          <div class="item background" data-aos="fade-up">
            <div class="item__text">
              <h3>What’s In A Footprint?</h3>
              <p>Well, our carbon footprint is the kg CO2e emitted to create our products. That stands for kilograms of carbon dioxide equivalent emissions. And it means we’re tallying all greenhouse gases and converting them to CO2 when measuring the environmental impact of all our products from now on. So when we say the average footprint of our products is 7.6 kg CO2e (reminder: that means “carbon dioxide equivalent emissions”—a mouthful, we know), we’re saying we’re keeping tabs on things like methane emissions, too, a greenhouse gas even more potent than carbon dioxide.</p>
              </div>
          </div>
          <div class="item" data-aos="fade-up">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pollution.jpg?alt=media&token=34fb5a3d-93e8-4f7a-997d-16176f906e89" alt="">
          </div>
        </div>

        <div class="environmental-impact__body-row">
          <div class="item" data-aos="fade-up">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pollution.jpg?alt=media&token=34fb5a3d-93e8-4f7a-997d-16176f906e89" alt="">
          </div>
          <div class="item background" data-aos="fade-up">
            <div class="item__text">
              <h3>What’s In A Footprint?</h3>
              <p>Well, our carbon footprint is the kg CO2e emitted to create our products. That stands for kilograms of carbon dioxide equivalent emissions. And it means we’re tallying all greenhouse gases and converting them to CO2 when measuring the environmental impact of all our products from now on. So when we say the average footprint of our products is 7.6 kg CO2e (reminder: that means “carbon dioxide equivalent emissions”—a mouthful, we know), we’re saying we’re keeping tabs on things like methane emissions, too, a greenhouse gas even more potent than carbon dioxide.</p>
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
  name: 'environmental-impact',
}
</script>