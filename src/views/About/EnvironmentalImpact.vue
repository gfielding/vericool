<template>
  <div class="greyback">
    <Nav />
  
    <div class="page environmental-impact">
      <div class="environmental-impact__hero">
        
      </div>

      <div class="container pb-8">
        <div class="environmental-impact__main pb-8">
          <h1>Environmental Impact</h1>
          <h3>What EPS (Styrenfoam) does to our environment, and what to do about it</h3>
          <hr>
          <h2>What is EPS?</h2>
          <div class="flex">
            <div class="col-1">
              <p>EPS stands for expanded polystyrene, or as we know it.... “Styrenfoam”</p>
              <p>“Styrenfoam” is popularly used as a cheap and disposable cold-chain shipping insulator.</p>
              <p>EPS does not decompose, but instead “photodegrades,” breaking down into smaller and smaller pieces that continue to pervasively accumulate in marine environments.</p>
              <p>EPS can only be recycled when it is “clean” and uncontaminated by food (which is extremely rare), and even then manufacturers lose money when they recycle EPS, meaning it rarely gets done.</p>
            </div>
          </div>
            
            
            <!-- <ul>
              <li>More than <a href="https://greendiningalliance.org/wp-content/uploads/2016/12/real-cost-of-styrofoam_written-report.pdf" target="_blank" nofollow>14 million US tons of polystyrene (plastic foam)</a> each year.</li>
              <li>Polystyrene products comprise 25-35% (by volume) of landfills.</li>
            </ul>
            <a href="https://www.5gyres.org/polystyrene" target="_blank" nofollow>
              <div class="learn-more">
                <img src="https://static1.squarespace.com/static/5522e85be4b0b65a7c78ac96/t/5a7a3cd74192028e23e3c871/1601504990207/?format=1500w" alt="">
                <h4>Keep Reading &#8594</h4>
              </div>
            </a>
            <a href="https://static1.squarespace.com/static/5522e85be4b0b65a7c78ac96/t/581cd663d2b857d18a7db3fd/1478284911437/PlasticsBANList2016-11-4.pdf" target="_blank" nofollow>
              <div class="learn-more">
                <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Screen%20Shot%202020-10-05%20at%2011.18.18%20AM.png?alt=media&token=f7927fff-92b5-42f8-a3be-f69207757717" alt="">
                <h4>Keep Reading &#8594</h4>
              </div>
            </a> -->
            <hr>
            
            <h2>What EPS does to the Environment</h2>
            <p>Because polystyrene (Styrenfoam) is so difficult to properly dispose of or recycle, it ends up in our environment where it releases carcinogenic styrene into virtually all living creatures. Some of these plastic-feeding animals make it all the way to our tables!</p>
            <p>When exposed to sunlight, Styrenfoam creates harmful air pollutants which contaminate landfills and deplete the ozone layer.</p>
            <p>In 2014 styrene, a key component of EPS, was listed as a possible carcinogen.</p>
            <p>Because Styrenfoam products break apart so easily, animals either confuse it as food and ingest its toxic chemicals or they suffer from it as a choking hazard.</p>
            <!-- <p>Polystyrene, commonly referred to as Styrenfoam™, is extremely difficult to dispose of properly, and it releases dangerous styrene into virtually all living creatures. After it has been used, polystyrene food packaging is typically not “clean” enough to be recycled, and only 1.3% of total polystyrene was recycled in the US in 2015. Even when it is clean enough to recycle, only about 5% of the volume of Styrenfoam is actually polystyrene, and the rest is air, making Styrenfoam uneconomical to collect and store for recycling. In rare instances, manufacturers who handle large amounts of polystyrene will consolidate their scrap materials with compactors (compressing them to less than a tenth of their original volume), and then will sell the compacted blocks of polystyrene to recyclers. However, the polystyrene in these blocks cannot be recovered for use in new polystyrene products. Its quality is only adequate to use as filler in other plastics, which then, in turn, becomes virtually impossible to recycle. - <a href="https://www.worldcentric.com/blog/impacts-and-risks-of-styrofoam" target="_blank" nofollow>(source)</a></p> -->
          
            <hr>
            <h2>How do Our Materials Reduce our Footprint?</h2>
              <ul>
                <li>Our products are made with renewable raw and post-consumer materials</li>
                <li>All of our materials match or outperform EPS, but without the harmful effects on our environment/wildlife</li>
                <li>All materials meet compostable and curbside recyclability standards</li>
                <li>Our insulation material is non-toxic, starch-based and water soluble (meaning if you run it under water, it will disappear!)</li>
                <li>Our materials meet US ASTM D6400 and European specification EN 13432, which require non-harmful degradation in 180 days or less</li>
                <li>All our materials support corporate zero waste and sustainability goals</li>
              </ul>
          </div>
        </div>
        <div class="dark pt-5 pb-5">
          <div class="container mt-5 mb-5">
          <h2>Just how bad is the problem?</h2>
          <div class="environmental-impact__data">
            <div class="environmental-impact__data--item">
              <span class="number" v-numflip="num1">
              </span>
              <span class="number"></span>
              <p>years is how long experts estimate it takes <span class="underline--magical"><strong>styrenfoam to decompose</strong></span></p>
            </div>
            <div class="environmental-impact__data--item">
              <span class="number" v-numflip="num2">
              </span>
              <span class="number">%</span>
              <p>or more of landfill composition (by volume) is <span class="underline--magical"><strong>styrenfoam</strong></span></p>
            </div>
            <div class="environmental-impact__data--item">
              <span class="number" v-numflip="num3">
              </span>
              <span class="number"></span>
              <p> <span class="underline--magical"><strong>Million tons</strong></span> of polystyrene are improperly recycled every year in the U.S alone</p>
            </div>
            <div class="environmental-impact__data--item">
              <span class="number" v-numflip="num4">
              </span>
              <span class="number">%</span>
              <p>of total polystyrene was <span class="underline--magical"><strong>recycled in the US</strong></span> in 2015</p>
            </div>
            <div class="environmental-impact__data--item">
              <span class="number" v-numflip="num5">
              </span>
              <span class="number"></span>
              <p><span class="underline--magical"><strong>Billion Styrenfoam</strong></span> coffee cups are thrown away every year by Americans alone</p>
            </div>
          </div>
        </div>
      </div>

        <transition name="fade">
          <Loader v-if="!impactPics || impactPics.length < 1" />
        </transition>

      <div class="greyback pb-8">
        <div class="container">
      
        <h2 class="pt-5">See for yourself:</h2>
        <div class="environmental-impact__grid" v-if="impactPics || impactPics.length >= 1">
          <div class="environmental-impact__grid--item" v-for="item in impactPics">
            <img :src="item.picUrl" alt="environmental impact of EPS" />
          </div>
        </div>
      </div>
</div>
      <div class="callout">
        <div class="container">
          <ProductScroller />
        </div>
      </div>
      </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'environmental-impact',
  data() {
    return {
      windowTop: 0,
      num1:0,
      num2:0,
      num3:0,
      num4:0,
      num5:0,
    }
  },
  async mounted() {
    window.addEventListener("scroll", this.onScroll)
     if (!this.impactPics || this.impactPics.length < 1) {
        this.$store.dispatch("getImpactPics")
      }
  },
  computed: {
  ...mapState(['impactPics']),
  },
  methods: {
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
      let top = this.windowTop
      if (this.windowTop > 800) {
        this.run()
      }
    },
    run() {
      this.num1 = 500
      this.num2 = 25
      this.num3 = 14
      this.num4 = 1.3
      this.num5 = 25
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll)
  },
  components: {
    Nav,
    Footer,
    ProductScroller,
    Loader
  },
  metaInfo: {
    title: 'EPS Environmental Impact',
    meta: [
      { name: 'description', content: 'EPS does not decompose, but instead “photodegrades,” breaking down into smaller and smaller pieces that continue to pervasively accumulate in marine environments.' }
    ],
  },
}
</script>