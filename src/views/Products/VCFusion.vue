<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page vcfusion white">
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">VC Fusion</h1>
            <h3 class="mb-2">Up to 96 Hours of Thermal Protection</h3>
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
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%201.svg?alt=media&token=e73d6468-ab76-489c-8269-d5773276c962" alt="" />
              <p>Customizable</p>
            </div>
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="" />
              <p>High-Performing</p>
            </div>
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="" />
              <p>Affordable</p>
            </div>
            
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="" />
              <p>Sustainable</p>
            </div>
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%207.svg?alt=media&token=cd678ed8-e221-436c-9dc5-a1ef7f7492be" alt="" />
              <p>100% Post-Consumer</p>
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
              <h4 class="mt-4">Recyclable Packaging</h4>
              <ul>
                <li>Developed specifically for the food delivery, specialty pharmaceutical and healthcare industries</li>
                <li>Made from post-consumer and post-industrial materials</li>
                <li>Customer can easily place entire package in curbside recycling</li>
              </ul>
            </div>
            <div>
              <h4 class="mt-4">Innovative Cold Chain Packaging</h4>
              <ul>
                <li>In house design, validation, and qualification services are available</li>
                <li>Logo can be printed on to paper to enhance brand and customer experience (minimum quantities required)</li>
                <li>Keeps products cold from packaging to receipt with customizable thermal protection duration times</li>
                <li>Outperforms competition green solutions, environmentally and structurally</li>
                <li>Design minimizes edge loss which increases temperature control</li>
                <li>Provides customizable 12-96 hours thermal protection</li>
              </ul>
            </div>
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
import ProductScroller from '@/components/ProductScroller.vue'
import ProductButtons from '@/components/ProductButtons.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'vcfusion',
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
              slidesToShow: 3
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
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC-fusionside-min.png?alt=media&token=f68a0ca8-ca35-49c4-8b8c-19081f0eb48b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC-fusioninside-min.png?alt=media&token=a671785f-ad31-4a12-8c03-edddea03624e',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Fpatents%2FpAsset%2010.svg?alt=media&token=8a6899e8-d570-4be4-a325-8a328619ad6f'
      ],
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "VC Fusion",
          to: false
        }
      ]
    }
  },
  components: {
    ProductNav,
    ProductScroller,
    Footer,
    ProductButtons
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
  },
  metaInfo: {
    title: 'VC Fusion',
    meta: [
      { name: 'description', content: 'Up to 96 Hours of Thermal Protection' }
    ],
  },
}
</script>