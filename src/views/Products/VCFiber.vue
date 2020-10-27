<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page vcfiber">
      <!--<div class="vcfiber__hero">
      </div>-->
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">VC Fiber</h1>
            <h3 class="mb-0">High-Performance Recycled Paper Insulation</h3>
          </div>

          <router-link :to="{ name: 'getstarted'}" tag="button" class="btn product__buttons--item--btn hiddenSmAndDown">Contact Sales<span class="hiddenMdAndDown"> &#8594</span></router-link>
        </div>
        <hr>
        <div class="agile mt-5">
          <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
            <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`"><img :src="slide"/></div>
          </agile>
          <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
            <div class="slide slide--thumbnail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img :src="slide"/></div>
            <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
            <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
          </agile>
        </div>

        <!-- <div class="vcfiber__content">
        	<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FvcfiberAsset%207%404x.png?alt=media&token=2c15664b-d7f5-43fb-906f-ed41b03a9efa" alt="">
        </div> -->
        <hr>
        <div class="vcfiber__iconrow">
        	<div>
	        	<div class="vcfiber__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%208.svg?alt=media&token=8a9bc423-a9f0-4f49-9b38-5b4879feee8e" alt="">
	        		<p>Curbside-Recyclable</p>
	        	</div>
	        	<div class="vcfiber__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="">
	        		<p>High-Performing</p>
	        	</div>
	        	<div class="vcfiber__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="">
	        		<p>Affordable</p>
	        	</div>
        	</div>
        	<div class="vcfiber__iconrow--item">
        		<img class="p" src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Fpatents%2FiconsAsset%209.svg?alt=media&token=d081378a-7f89-4d83-9cfb-92ecaf0731f9">
        	</div>
        </div>	
        <hr>
        <div>
        	<h2>Recyclable Packaging</h2>
	        <ul>
	        	<li>Designed for the food, wine, specialty pharmaceutical, and health care industries</li>
	        	<li>Eliminates the harmful impact of EPS/Styrofoam® on our environment</li>
	        	<li>Made from post-consumer and post-industrial materials</li>
	        	<li>100% Recyclable! Customer can easily place entire package in curbside recycling</li>
	        </ul>
        </div>
        <div>
        	<h2>Innovative Cold Chain Packaging</h2>
        	<ul>
        		<li>In house design, validation, and qualification services are available</li>
        		<li>Keeps products cold from packaging to receipt with customizable thermal protection duration times</li>
        		<li>Outperforms competition green solutions, environmentally and structurally</li>
        		<li>Design minimizes edge loss which increases temperature control</li>
        		<li>Provides customizable 12-72 hours thermal protection</li>
        	</ul>
        </div>
        <div>
        	<h2>Cutting-Edge Design</h2>
        	<ul>
        		<li>Extremely cost effective: ships flat</li>
        		<li>No custom tooling required</li>
        		<li>Design minimizes edge loss which increases temperature control</li>
        	</ul>
        </div>
        <hr>
        <div class="vcfiber__grid mt-5">
          <div class="grid__container">
            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCFiber%2Ffiber-box-min.png?alt=media&token=d7a3aab7-0750-4888-acde-be86c07e8a5c" alt="">
            </div>
            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCFiber%2Ffiber-inside-min.png?alt=media&token=a6fe1229-b207-475a-b077-2fc020b18411" alt="">
            </div>
          </div>
        </div>
        <hr>
        <ProductScroller />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductNav from '@/components/ProductNav.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'vcfiber',
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
        navButtons: false,
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
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FvcfiberAsset%207%404x.png?alt=media&token=2c15664b-d7f5-43fb-906f-ed41b03a9efa',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCFiber%2Ffiber-box-min.png?alt=media&token=d7a3aab7-0750-4888-acde-be86c07e8a5c',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCFiber%2Ffiber-inside-min.png?alt=media&token=a6fe1229-b207-475a-b077-2fc020b18411'
      ],
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "VC Fiber",
          to: false
        }
      ]
    }
  },
  components: {
    ProductNav,
    ProductScroller,
    Footer
  },
  mounted () {
    this.asNavFor1.push(this.$refs.thumbnails)
    this.asNavFor2.push(this.$refs.main)
  },
  beforeDestroy() {
    this.asNavFor1 = [],
    this.asNavFor2 = [],
    this.options1 = null,
    this.options2 = null,
    this.slides = [],
    this.crumbs = []
  }
}
</script>