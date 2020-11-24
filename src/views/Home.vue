<template>
  <div>
    <Nav />
    <!-- <Carousel /> -->
    <div class="homepage">
      

      <!-- <div class="homepage__top"> -->
        <!-- <div class="homepage__top--bg-video">
          <video class="bg-video__content" autoplay muted loop playsinline poster="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/blue-min.png?alt=media&token=ea54d11e-2a7c-46a2-9046-a2e3a3df6070">
            <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/videos%2FWebsite%20Video%20rev%2017%20(1).mp4?alt=media&token=e80092c3-8069-492a-84d2-bf3eb4117728"type="video/mp4">
          </video>
         
        </div> -->
<!--         <div class="homepage__top--leaves">
          <div class="homepage__top--leaves--callout">
            <div class="homepage__top--leaves--callout--1">
              <div class="kraft">
                <p>"The most<br />revolutionary<br />packaging<br />in over 30<br />years"</p>
              </div>
            </div>
            <div class="homepage__top--leaves--callout--2">
              <div class="homepage__top--bg-video">
                <video class="bg-video__content" autoplay muted loop playsinline poster="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/blue-min.png?alt=media&token=ea54d11e-2a7c-46a2-9046-a2e3a3df6070">
                  <source src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/videos%2FWebsite%20Video%20rev%2017%20(1).mp4?alt=media&token=e80092c3-8069-492a-84d2-bf3eb4117728"type="video/mp4">
                </video>
               
              </div>
            </div>
          </div>
        </div> -->

      <!-- </div> -->

      <div class="homepage__top">
        
          <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/pharma-min.jpg?alt=media&token=36802d8c-8bdb-456e-bba2-5695f92595d1" alt="">
          
        
        <div class="kitchen">
          <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Kitchen-min.jpg?alt=media&token=5964d407-fd95-4f31-97a0-5838b6d63ad4" alt="">
          <div class="box" data-aos="fade" data-aos-once="true" data-aos-delay="600">
            <h1>Vericooler Plus</h1>
            <p>The highest-performing<br />insulation for frozen<br />shippments in the market.</p>
            <router-link :to="{ name: 'vcplus' }" tag="button" class="btn btn__primary btn__xlarge mb-0 mt-2 hiddenSmAndDown">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>
            <router-link :to="{ name: 'vcplus' }" tag="button" class="btn btn__primary mb-0 mt-0 hiddenMdAndUp">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>
          </div>
        </div>
        <!-- <div class="bg-video">
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
        </div> -->

      </div>



      <div class="homepage__grey">
        <div class="homepage__grey--1 hiddenSmAndDown">
          <div class="homepage__grey--1--box">
            <v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="" />
            <p>Sustainable</p>
            <v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%207.svg?alt=media&token=cd678ed8-e221-436c-9dc5-a1ef7f7492be" alt="" />
            <p>Post-Consumer</p>
          </div>
        </div>
        <div class="homepage__grey--2">
          <div class="homepage__grey--2--box">
            <p>Patented, high-performing thermal shippers made from natural ingredients that revolutionize the way cold chain products are shipped.</p>
          </div>
        </div>
        <div class="homepage__grey--3 hiddenSmAndDown">
          <div class="homepage__grey--1--box">
            <v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="" />
            <p>High-Performing</p>
            <v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="" />
            <p>Affordable</p>
          </div>
        </div>
        
      </div>

      <!-- <div v-prlx.background="{ speed: 0.03}" class="prlximg">
        

      </div> -->




      <!-- div class="homepage__box">
        
      
      <div class="homepage__box--grid" data-aos="fade-up" data-aos-delay="1200" data-aos-once="true">
        <div class="homepage__box--grid--header">
          <h1>Let Our Mission Be Your Mission</h1>
          <h3>Be Vericool™</h3>
        </div>
        <div class="icon__boxes">
          <div class="icon__boxes--item">
            <i class="fad fa-leaf" data-aos="flip-left" data-aos-delay="1600" data-aos-once="true"></i>
            <h3>Plant-Based</h3>
            <p>Vericoolers™ are plant-based, biodegradable, compostable, and will not pollute our environment.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'environmental-impact'}">
                <button class="btn btn__outlined">Environmental Impact &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-rocket" data-aos="flip-left" data-aos-delay="1600" data-aos-once="true"></i>
            <h3>Performant</h3>
            <p>Vericool™ products perform as well or better than EPS (Styrofoam).</p>
            <div class="mt-3">
              <router-link :to="{ name: 'data'}">
                <button class="btn btn__outlined">Performance Data &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-chart-line" data-aos="flip-left" data-aos-delay="1600" data-aos-once="true"></i>
            <h3>Cost-Effective</h3>
            <p>Vericoolers™ are just as affordable as EPS alternatives.</p>
            <div class="mt-3">
              <router-link :to="{ name: 'products'}">
                <button class="btn btn__outlined">Buying Options &#8594</button>
              </router-link>
            </div>
          </div>
          <div class="icon__boxes--item">
            <i class="fad fa-tablet-rugged" data-aos="flip-left" data-aos-delay="1600" data-aos-once="true"></i>
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
 -->


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

      <!-- <div class="content-wrapper">
        <div class="homepage__mission">
          <h2>Let our mission be <span class="underline--magical">your mission.</span></h2>
        </div>
      </div> -->
      <!-- <div class="background pt-5 pb-5" data-aos="fade" data-aos-once="true">
        <div class="content-wrapper" style="background-color: transparent;">
          <h2 class="mt-5 mb-5 pb-3">World’s first Biodegradable & Recyclable Cooler Invented in 2017</h2>
          <What />
        </div>
      </div>
      <div class="back-dark pt-5 pb-5" data-aos="fade" data-aos-once="true">
        <div class="content-wrapper" style="background-color: transparent;">
          <h2 class="mt-5 mb-5 pb-3">Why We Do It: Saving the Environment and Fighting Recividism</h2>
          <Why />
        </div>
      </div> -->
      <!-- <ProductScroller /> -->
      <div class="callout">
        <div class="container">
          <ProductScroller />
        </div>
      </div>

      <!-- <div class="homepage__fights">
        <div class="content-wrapper">
          <div class="homepage__fights__flex">
            <div class="homepage__fights__flex--1">
              <div class="kraft">
                <div class="text">
                  <h4>Vericool Fights Pollution</h4>
                  <p>Vericool is on a mission to replace all EPS (Styrofoam) packaging with eco-friendly shippers.</p>
                  <div>
                  <router-link :to="{ name: 'getstarted' }" tag="button" class="lm">Learn More</router-link>
                  </div>
                </div>
                <div class="img-box">
                  <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/11PLASTIC1-jumbo.jpg?alt=media&token=1af425c2-e00a-4786-ab5d-2c7b0e1cd37f" alt="">
                </div>
              </div>
            </div>
            <div class="homepage__fights__flex--2">
              
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/turtle-eating-eps-min3.png?alt=media&token=9f2ecbd8-aae4-4916-8334-6d7aaab7971a" alt="" class="img2">
            </div>
          </div>
        </div>
      </div> -->

      <!-- <div v-prlx.background="{ speed: 0.03}" class="prlximg">
        

      </div> -->

      <div class="homepage__fights">
        <div class="content-wrapper">
          <div class="homepage__fights__flex">
            <div class="homepage__fights__flex--1">
                <h4>Vericool Fights Pollution</h4>
                <p>Vericool is on a mission to replace all EPS (Styrofoam) packaging with eco-friendly shippers.</p>
                <div>
                <router-link :to="{ name: 'environmental-impact' }" tag="button" class="btn btn__primary btn__xlarge">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>
                </div>
            </div>
            <div class="homepage__fights__flex--2 hiddenSmAndDown">
              <div class="box">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/turtle.jpg?alt=media&token=e9594c10-41e8-4f35-952f-7e2f54431dec" alt="" class="img1" data-aos="fade" data-aos-once="true" data-aos-delay="200">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/beach.jpg?alt=media&token=4f88b77c-4999-4c3a-bf62-75fe54528c41" alt="" class="img2" data-aos="fade" data-aos-once="true" data-aos-delay="600">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/polar2.jpg?alt=media&token=708cdae8-4109-4130-bc7e-b49c2fed134d" alt="" class="img3" data-aos="fade" data-aos-once="true" data-aos-delay="1000">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div  class="homepage__globe">
        <div class="content-wrapper">
          <div class="homepage__globe__flex">
            <div class="homepage__globe__flex--1">
              
              <div class="box" data-aos="fade" data-aos-once="true" data-aos-delay="200">
                <!-- <h2 class="mt-3">re·cid·i·vism</h2>
              <p>/rəˈsidəˌvizəm/</p>
              <p><em>"a tendency to relapse into previous condition or mode of behavior; especially criminal behavior."</em></p> -->
              <!-- <h4 class="mb-3">Part of our <span class="underline--magical">corporate DNA</span> is to fight <strong>recidivism</strong>.</h4> -->
              <h4>Vericool is committed to giving formerly-incarcerated men, women, and youth a second chance to live purpose-driven lives.</h4>
              <router-link :to="{ name: 'second-chance' }" tag="button" class="btn btn__primary btn__xlarge mb-3 mt-3 hiddenSmAndDown">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>
              <router-link :to="{ name: 'second-chance' }" tag="button" class="btn btn__primary mb-2 mt-3 hiddenMdAndUp">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>
              </div>
            </div>
            <!-- <div class="homepage__globe__flex--2">


              
            </div> -->
          </div>
        </div>
      </div>



      <div class="greyback white pt-5 pb-5" data-aos="fade" data-aos-once="true">
        <div class="content-wrapper" style="background-color: transparent;">
          <h2 class="mb-3">Latest Updates:</h2>
          <div class="homepage__news">
            <transition name="fade">
              <div v-if="!articles || articles.length < 1">
                <Loader />
              </div>
            </transition>
            <div v-for="item in articles.slice(0, 3)" v-if="articles && articles.length >= 1">
              <router-link :to="`/news/` + item.id">
                <div class="homepage__news--item" >
                  <div class="homepage__news--item--image" v-bind:style="{ backgroundImage: 'url(' + item.picUrl + ')' }"></div>
                  <h4 class="white mb-0">{{item.title}}</h4>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <Awards />
      <!-- <Logos /> -->
      </div>
      <div class="homepage__cooler">
        <div class="homepage__cooler__flex">
          <div class="homepage__cooler__flex--1">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FNew-vericoolergroup-min%20copy.png?alt=media&token=0a01dac2-db8b-4fbe-920c-312044434f42" alt="">
            <router-link :to="{ name: 'vericooler' }" tag="button" class="btn btn__primary btn__xlarge mb-3 mt-3">Learn More<i class="fad fa-chevron-right ml-3"></i></router-link>

          </div>
          <div class="homepage__cooler__flex--2">
            <div class="kraft">
              <p>World's First Biodegradable & Recyclable Cooler</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
  .prlximg {
  width: 100%;
  height: 60vh;
  background-image: url('https://images.unsplash.com/photo-1605947464626-cbb0f72ee82d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80');
  background-size: cover;
  background-position: center center;
}
</style>


<script>
import Carousel from '@/components/Carousel.vue'
import Video from '@/components/SeaTurtleVideo.vue'
import SliderText from '@/components/SliderText.vue'
import What from '@/components/What.vue'
import Why from '@/components/Why.vue'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import Spinner from '@/components/Spinner.vue'
import Logos from '@/components/Logos.vue'
import Awards from '@/components/Awards.vue'
import Loader from '@/components/Loader.vue'
//import ProductScroller from '@/components/ProductScrollerLg.vue'
import ProductScroller from '@/components/ProductScroller.vue'
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
        return this.articles.slice(0, 2)
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
      Why,
      Nav,
      Logos,
      Awards,
      Spinner,
      Loader,
      ProductScroller,
      Footer
    }
  }
</script>