<template>
  <div>
    <Nav />
    <div class="homepage">
      
      <div class="homepage__top">
        <div class="bg-video">
          <video class="bg-video__content" autoplay muted loop poster>
            <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/AdobeStock_282043525_Video_HD_Preview.mp4?alt=media&token=e9fb168f-4355-47d5-9bbc-613fd8efae8a" type="video/mp4">
          </video>
          <div class="homepage__top--text" data-aos="fade" data-aos-delay="600" data-aos-once="true">
            <h1>Packaging that will save our oceans.</h1>
            <div class="homepage__top--text--buttons">
              <button class="btn btn__large btn__ghost ml-5 mt-5">See the Data</button>
              <button class="btn btn__large btn__ghost ml-5 mt-5">See the Data</button>
            </div> 
          </div>
        </div>

      </div>

      <div class="homepage__box">
        
      
      <div class="homepage__box--grid" data-aos="fade-up" data-aos-delay="600" data-aos-once="true">
        <div class="homepage__box--grid--header">
          <h1>There's no excuse not to switch.</h1>
        </div>
        <div class="icon__boxes">
          <div class="icon__boxes--item">
            <i class="fad fa-leaf" data-aos="flip-left" data-aos-delay="1200" data-aos-once="true"></i>
            <h3>Plant-Based</h3>
            <p>Vericoolers™ are plant-based, biodegradable, compostable, and will not pollute our environment.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'environmental-impact'}">
                <button class="btn btn__outlined">Environmental Impact &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-rocket" data-aos="flip-left" data-aos-delay="1200" data-aos-once="true"></i>
            <h3>Performant</h3>
            <p>Vericool™ products perform as well or better than EPS (Styrofoam).</p>
            <div class="mt-3">
              <router-link :to="{ name: 'data'}">
                <button class="btn btn__outlined">Performance Data &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-chart-line" data-aos="flip-left" data-aos-delay="1200" data-aos-once="true"></i>
            <h3>Cost-Effective</h3>
            <p>Vericoolers™ are just as affordable as EPS alternatives.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'products'}">
                <button class="btn btn__outlined">Buying Options &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-tablet-rugged" data-aos="flip-left" data-aos-delay="1200" data-aos-once="true"></i>
            <h3>Durable</h3>
            <p>Vericoolers™ are just as durable as EPS alternatives.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'products'}">
                <button class="btn btn__outlined">How We Make Them &#8594</button>
              </router-link>
            </div>
          </div>
          
        </div>
      </div>

    </div>

    <div class="homepage__mission">
      <h2>Let your products, <span class="underline--magical">not your packaging pollution</span>, be your legacy.</h2>
    </div>



    <!--<div class="homepage__slider">-->

      <!--<transition name="fade"">
        <SliderText v-if="showText" />
      </transition>-->

      <!--<transition name="fade2" mode="in-out">
        <Carousel v-if="showCarousel" />
      </transition>-->

      <!--<transition name="fade2"">
        <Video v-if="showVideo" />
      </transition>-->
     
      <!--</div>-->
      <div class="content-wrapper">
        <What />
      </div>
      <ProductScroller />
      <div class="background pt-5 pb-5">
        <div class="content-wrapper" style="background-color: transparent;">
          <h1 class="mt-5">Latest Updates:</h1>
          <div class="homepage__news" data-aos="fade" data-aos-delay="400" data-aos-once="true">
            <transition name="fade">
              <div v-if="!articles || articles.length < 1">
                <Loader />
              </div>
            </transition>
            <div v-for="item in articles.slice(0, 2)" v-if="articles && articles.length >= 1">
              <router-link :to="`/news/` + item.id">
                <div class="homepage__news--item" >
                  <div class="homepage__news--item--image" v-bind:style="{ backgroundImage: 'url(' + item.picUrl + ')' }"></div>
                  <h2 class="dark-text underline--magical">{{item.title}}  &#8594</h2>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <div data-aos="fade" data-aos-delay="400" data-aos-once="true">
      <Logos />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Video from '@/components/SeaTurtleVideo.vue'
import SliderText from '@/components/SliderText.vue'
import What from '@/components/What.vue'
import Nav from '@/components/Nav.vue'
import Spinner from '@/components/Spinner.vue'
import Logos from '@/components/Logos.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
import ProductScroller from '@/components/ProductScrollerLg.vue'
import { mapState } from 'vuex'

  export default {
    data () {
      return {
        showCarousel: false,
        showText: false,
        showVideo: false,
      }
    },
    async mounted () {
      /*this.startCycle();*/
      if (!this.articles || this.articles.length < 1) {
        this.$store.dispatch("getArticles")
      }
    },
    computed: {
      ...mapState(['articles']),
      article() {
        return this.articles.slice(0, 1)
      }
    },
    methods: {
      startCycle() {
        this.carousel();
      },

      textCycle() {
        this.showText = true;
        setTimeout(()=>{
          this.showText = false;
          this.carousel();
        },3000);
      },
      carousel() {
        this.showCarousel = true;
        setTimeout(()=>{
          this.showCarousel = false;
          this.carousel();
        },20000);
      },
      video() {
        this.showVideo = true;
        setTimeout(()=>{
          this.showVideo = false;
          this.startCycle();
        },8000);
      }
    },
    components: {
      Carousel,
      Video,
      SliderText,
      What,
      Nav,
      Logos,
      Spinner,
      Loader,
      ProductScroller,
      Footer
    }
  }
</script>