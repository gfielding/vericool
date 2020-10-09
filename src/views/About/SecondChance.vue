<template>
  <div>
    <Nav />
  <div class="page second-chance">
    <div class="bg-video-small">
      <video class="bg-video-small__content" autoplay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/workers.mp4?alt=media&token=d612af60-e553-49e9-90f3-42a285997ccf" type="video/mp4">
      </video>
    </div>
    <div class="container">
      <div class="second-chance__main">
        <h1>The Importance of Second Chances</h1>
        <h3>Giving formerly-incarcerated men, women, and youth a chance to live productive lives</h3>
        <hr>
        
        <h2 class="mt-5">re·cid·i·vism</h2>
        <p class="light">/rəˈsidəˌvizəm/</p>
        <p class="light"><em>-noun</em></p>
        <p>"a tendency to relapse into previous condition or mode of behavior; <strong>especially criminal behavior.</strong>"</p>
        <h4>Part of our <span class="underline--magical">corporate DNA</span> is to fight <strong>recidivism</strong>.</h4>
        <p>A serious issue plaguing our communities is a forgotten group that most people disregard without a second thought; parolees and felons. Vericool was founded on the basis that everyone deserves a second chance. In fact, we wouldn’t be here today as a company if it weren’t for second chances! Because of this, we take pride in the hard working parolees and felons we employ.</p>
        <hr>
        <h2>What Causes Recidivism?</h2>
        <p>From growing up in broken homes or making decisions based on trying to survive, most parolees and felons either fell through the cracks or ended up in the system at an early age, and without any direction or guidance... it became a way of life. </p>
        <p>After spending years in prison, parolees and felons who were never given the necessary tools to live productive lives are ill-equipped to find jobs in today’s hi-tech recruiting culture. It also doesn’t help that they are defined and judged as “parolees” and “felons,” and not people. </p>
        <p>The years spent in prison reflecting on the mistakes made and their eagerness to be released and live productive lives are soon shattered by their inability to find a job. As a result, many parolees and felons have no choice but to revert back to a life of crime, just to be able to survive and provide for their families.</p>
        <p>Vericool understands we all make mistakes, and also understands how life changing an employment opportunity can be. That is why we aim to be a supportive and reliable work environment for all people who partner with us, regardless of their background or history. </p>
      </div>
      
    </div>
    <div class="background">
      <div class="second-chance__darrell">
        <div class="second-chance__darrell--item">
          <h2>Darrell's Story</h2>
          <p class="text-left">At the age of 13 I was homeless, permanently dropped out of school, and joined a gang for survival. I spent the next 10 years of my life in and out of juvenile and adult correctional facilities. At the age of 23 I was faced with a five-year prison sentence. I made promises to God, begging him to spare me. If he did, I would live the rest of my life dedicated to saving the environment and serving people in need of a 2nd chance. I was spared and at the age of 25 was given my 2nd chance within the packaging industry.</p>
          <p class="text-left">I dedicated myself to learning about packaging materials and developing my own environmentally friendly replacements. With my portfolio of inventions, I founded Vericool Inc.: an environmentally friendly, cost-effective, packaging solutions company. We are growing extremely fast with 2 national locations and multiple partnerships serving our planet, people, and products.</p>
        </div>
        <div class="second-chance__darrell--item">
          <div class="video-responsive"><iframe src='//players.brightcove.net/2097119709001/HkGIdDTwWg_default/index.html?videoId=6018370766001' allowfullscreen frameborder=0></iframe></div>
        </div>
      </div>
    </div>
    <div class="container">
      <h2>Just how bad is the problem?</h2>
      <div class="second-chance__data">
        <div class="second-chance__data--item">
          <span class="number" v-numflip="num1">
          </span>
          <span class="number">%</span>
          <p>of released state prisoners were arrested within <span class="underline--magical"><strong>3 years</strong></span></p>
        </div>
        <div class="second-chance__data--item">
          <span class="number" v-numflip="num2">
          </span>
          <span class="number">%</span>
          <p>of released state prisoners were arrested within <span class="underline--magical"><strong>6 years</strong></span></p>
        </div>
        <div class="second-chance__data--item">
          <span class="number" v-numflip="num3">
          </span>
          <span class="number">%</span>
          <p>of released state prisoners were arrested within <span class="underline--magical"><strong>8 years</strong></span></p>
        </div>
      </div>
      <p>401,288 prisoners released in 2005 between 30 states were arrested an estimated 2 million times during the 9 years after their release, an average of <span class="underline--magical"><strong>five arrests per released prisoner</strong></span>.</p>
      <hr>
      <div class="video-responsive">
        <iframe src='//players.brightcove.net/2097119709001/HkGIdDTwWg_default/index.html?videoId=6018366991001' allowfullscreen frameborder=0></iframe>
      </div>
      
    </div>
    <div class="second-chance__stories mt-5 mb-10">
      <div class="container">
        <h2>Second Chance Stories</h2>
        <hr>

        <transition name="fadeStop">
          <Loader v-if="!chances || chances.length == 0" />
        </transition>


        <div class="second-chance__stories--grid" v-if="chances && chances.length > 0">
          <div v-for="item in chances" key="item.id" class="card">
            <img :src="item.picUrl">
            <div class="card__body">
              <h4>{{item.name}}</h4>
              <p class="light"><em>"{{item.quote}}"</em></p>
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
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'second-chance',
  data() {
    return {
      windowTop: 0,
      num1:0,
      num2:0,
      num3:0,
    }
  },
  async mounted() {
    window.addEventListener("scroll", this.onScroll)
    if (!this.chances || this.chances.length < 1) {
      this.$store.dispatch("getChances")
    }
  },
  components: {
    Nav,
    Loader
  },
  computed: {
    ...mapState(['chances']),
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      let top = this.windowTop
      if (this.windowTop > 1300) {
        this.run()
      }
    },
    run() {
      this.num1 = 68
      this.num2 = 79
      this.num3 = 83
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
}
</script>