<template>
  <div>
    <Nav />
  <div class="homepage">

    <div class="homepage__top">
      <img class="homepage__top--image" src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/jesse-schoff-Ph2KtIqKs7c-unsplash.jpg?alt=media&token=45ee2ec4-64c6-40bf-971b-4105142ea4f8" alt="">
      <div class="homepage__top--text">
        <h1>Packaging that will save our oceans.</h1>
        <div class="homepage__top--text--buttons">
          <button class="btn btn__large btn__ghost ml-5 mt-5">See the Data</button>
          <button class="btn btn__large btn__ghost ml-5 mt-5">See the Data</button>
        </div> 
      </div>
    </div>

    <div class="homepage__box">
      
      
      <div class="homepage__box--grid">
        <div class="homepage__box--grid--header">
          <h1>There's no excuse not to switch.</h1>
        </div>
        <div class="icon__boxes">
          <div class="icon__boxes--item">
            <i class="fad fa-leaf" data-aos="flip-left" data-aos-delay="200" data-aos-once="true"></i>
            <h3>Plant-Based</h3>
            <p>Vericoolers™ are plant-based, biodegradable, compostable, and will not pollute our environment.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'environmental-impact'}">
                <button class="btn btn__outlined">Environmental Impact &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-rocket" data-aos="flip-left" data-aos-delay="200" data-aos-once="true"></i>
            <h3>Performant</h3>
            <p>Vericool™ products perform as well or better than EPS (Styrofoam).</p>
            <div class="mt-3">
              <router-link :to="{ name: 'data'}">
                <button class="btn btn__outlined">Performance Data &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-chart-line" data-aos="flip-left" data-aos-delay="200" data-aos-once="true"></i>
            <h3>Cost-Effective</h3>
            <p>Vericoolers™ are just as affordable as EPS alternatives.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'products'}">
                <button class="btn btn__outlined">Buying Options &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-tablet-rugged" data-aos="flip-left" data-aos-delay="200" data-aos-once="true"></i>
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
    <div class="content-wrapper">ww</div>
    <div class="content-wrapper">ww</div>
  </div>
</div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Video from '@/components/SeaTurtleVideo.vue'
import SliderText from '@/components/SliderText.vue'
import What from '@/components/What.vue'
import Why from '@/components/Why.vue'
import Who from '@/components/Who.vue'
import Nav from '@/components/Nav.vue'

  export default {
    data () {
      return {
        showCarousel: false,
        showText: false,
        showVideo: false,
      }
    },
    mounted() {
      this.startCycle();
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
      Why,
      Who,
      Nav
    }
  }
</script>