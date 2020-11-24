<template>
	<div> 
		<ProductNav :crumbs="crumbs" />
		<div class="page ohana white">
			<!-- <div class="ohana__hero">
	    </div> -->
	    <div class="container">
	    	<div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">Meet the Vericooler®</h1>
            <h3 class="mb-2">The World's First Eco-Friendly Cooler</h3>
          </div>
          <router-link :to="{ name: 'getstarted'}" tag="button" class="btn product__buttons--item--btn btn__primary hiddenSmAndDown">Contact Sales<i class="fad fa-chevron-right ml-3"></i></router-link>
        </div>
        <hr>
        <div class="vcfiber__iconrow">
          <div class="flex flex-wrap justify-center">
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%208.svg?alt=media&token=8a9bc423-a9f0-4f49-9b38-5b4879feee8e" alt="" />
              <p>Curbside-Recyclable</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconAsset%207.svg?alt=media&token=09ceeaf6-73e1-4a52-9fdd-6a0b28949de6" alt="" />
              <p>Durable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%207.svg?alt=media&token=cd678ed8-e221-436c-9dc5-a1ef7f7492be" alt="" />
              <p>100% Post-Consumer</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="" />
              <p>High-Performing</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="" />
              <p>Sustainable</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="" />
              <p>Affordable</p>
            </div>
          </div>
        </div>
        <hr>

        <div class="flex flex-wrap mb-5">
          <div class="flex__1">
            <div class="agile mb-5">
              <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
                <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
              </agile>
              <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
                <div class="slide slide--thumbnail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
                <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
                <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
              </agile>
            </div>
          </div>
          <div class="flex__2">
            
            <div>
            <h4 class="mt-4">Designed to Replace Styroform® Coolers</h4>
            <ul>
              <li>100% Reusable, recyclable and biodegradable</li>
              <li>Made from recycled boxes</li>
              <li>Up to 10 day water resistance</li>
              <li>Up to 18 hour ice retention</li>
              <li>Spacious family size cooler for picnics, outings, boating,
camping, and sporting events</li>
              <li>Eliminates the harmful impact of EPS/Styrofoam® on our
environment</li>
              <li>Holds water and ice</li>
              <li>Customer can easily place entire package in curbside
recycling</li>
              <li>24 quart</li>
              <li>Weight capacity 100lbs</li>
              <li>Easily place VericoolerTM into curbside recycling</li>
              <li>Logo can be molded into Vericooler to enhance brand
and customer experience (minimum quantities required)</li>
              <li>Option to add a customizable marketing message
molded into the lid (minimum quantities required)</li>
            </ul>
          </div>
          </div>
        </div>

        
		  	<hr>
		  	<transition name="fade">
          <Loader v-if="!ohanaPics || ohanaPics.length < 4" />
        </transition>
        <div class="environmental-impact__grid mt-5 mb-5" v-if="ohanaPics || ohanaPics.length >= 4">
          <div class="environmental-impact__grid--item">
            <Spinner />
          </div>
          <div class="environmental-impact__grid--item" v-for="item in ohanaPics">
            <img :src="item.picUrl" alt="compostable cooler" />
          </div>
        </div>
        <hr>
		  	<ProductButtons />
      </div>
      
      <div class="callout">
        <div class="container">
          <ProductScroller />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductNav from '@/components/ProductNav.vue'
import Spinner from '@/components/Spinner.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import ProductButtons from '@/components/ProductButtons.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'vericooler',
  data () {
    return {
    	asNavFor1: [],
      asNavFor2: [],
      options1: {
        dots: false,
        fade: true,
        navButtons: false,
      },
      options2: {
        autoplay: false,
        centerMode: true,
        dots: false,
        navButtons: true,
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 5
            }
          },
          
          {
            breakpoint: 1000,
            settings: {
              navButtons: true
            }
          }
        ],
      },
      slides: [
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FNew-vericoolergroup-min%20copy.png?alt=media&token=0a01dac2-db8b-4fbe-920c-312044434f42',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2Fvericooler-front-new-min.png?alt=media&token=53c80a97-28d0-4e26-ad69-e3f0e1230625',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FVericooler-side-view-min.png?alt=media&token=db206c85-2fef-4a23-b2be-ac216f9420ea',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FVericooler-lid-new-min.png?alt=media&token=f5e7425d-b8e9-43c6-8098-072540c73b88',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FNew-vericooler-group-min.png?alt=media&token=f20b954c-cf95-4191-85f2-669e1d5f20ff',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FFRONT-display-new-min.png?alt=media&token=ff67a6cd-b65b-42ab-b124-93a48c6fe208',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FOhana%2FSIDE-display-new-min.png?alt=media&token=6bafb7dd-128f-41c3-adc5-4049c25df667'

      ],
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "Vericooler",
          to: false
        }
      ]
    }
  },
  async mounted() {
  	this.asNavFor1.push(this.$refs.thumbnails)
    this.asNavFor2.push(this.$refs.main)
    window.addEventListener("scroll", this.onScroll)
     if (!this.ohanaPics || this.ohanaPics.length < 1) {
        this.$store.dispatch("getOhanaPics")
      }
  },
  computed: {
  ...mapState(['ohanaPics']),
  },
  components: {
    ProductNav,
    Spinner,
    ProductScroller,
    Footer,
    ProductButtons
  },
  // mounted () {
  //   this.asNavFor1.push(this.$refs.thumbnails)
  //   this.asNavFor2.push(this.$refs.main)
  // },
  beforeDestroy() {
    this.asNavFor1 = [],
    this.asNavFor2 = [],
    this.options1 = null,
    this.options2 = null,
    this.slides = [],
    this.crumbs = []
  },
  metaInfo: {
    title: 'Ohana Vericooler',
    meta: [
      { name: 'description', content: 'The Worlds First Eco-Friendly Cooler' }
    ],
  },
}
</script>