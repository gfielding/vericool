<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page vcplus white">
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5 mb-1">VC Plus</h1>
            <h3 class="mb-2">High-Performance Closed-Cell Technology</h3>
          </div>
          <router-link :to="{ name: 'getstarted'}" tag="button" class="btn product__buttons--item--btn btn__primary hiddenSmAndDown">Contact Sales<i class="fad fa-chevron-right ml-3"></i></router-link>
        </div>
      
        <hr>
        <div class="vcfiber__iconrow">
          <div class="flex flex-wrap justify-center">
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%201.svg?alt=media&token=e73d6468-ab76-489c-8269-d5773276c962" alt="" />
              <p>Customizable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="" />
              <p>High-Performing</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="" />
              <p>Affordable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%205.svg?alt=media&token=07bee881-0c56-4fcc-8da7-252227c543ac" alt="" />
              <p>Lightweight</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="" />
              <p>Sustainable</p>
            </div>
            <div class="vcfiber__iconrow--item">
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
            <h4 class="mt-4">Recyclable & Compostable Packaging</h4>
              <ul>
                <li>Developed specifically for the food delivery, specialty pharmaceutical and healthcare industries</li>
                <li>Replaces environmentally harmful expanded polystyrene (EPS) foam packaging (known as Styrenfoam)</li>
                <li>Compostable insulation meets ASTM D6400, EN13424 and home compostable standards</li>
                <li>Multiple no hassle disposal options; compostable, dissolvable and recyclable</li>
                <li>Choose your film: Compostable, poly, or kraft paper</li>
              </ul>
            </div>
            <div>
              <h4 class="mt-4">Innovative Cold Chain Packaging</h4>
              <ul>
                <li>In house design, validation, and qualification services are available</li>
                <li>Keeps products cold from packaging to receipt with customizable thermal protection duration times</li>
                <li>Outperforms competition, environmentally and structurally</li>
                <li>Design minimizes edge loss which increases temperature control</li>
                <li>Provides customizable 12-96 hours thermal protection</li>
              </ul>
            </div>
            <div>
              <h4 class="mt-4">Cutting-Edge Design</h4>
              <ul>
                <li>Extremely cost effective: lightweight and ships flat</li>
                <li>No custom tooling required</li>
                <li>Customizable marketing message & logo print available for qualified volumes</li>
                <li>Stock solutions or custom options to fit your exact payload requirements, as well as temperature and duration requirements</li>
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
import Footer from '@/components/Footer.vue'
import ProductButtons from '@/components/ProductButtons.vue'


export default {
  name: 'vcplus',
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
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FVC-Pharmashipper-min.png?alt=media&token=cb4b87de-f153-4d72-b2fa-809eed85b693',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FVC-plusnew-min.png?alt=media&token=40119037-5f72-43ca-9bc1-c5f48bb32d03',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FPlus-in%3Dpolyinside-min.png?alt=media&token=489deee4-79ad-4453-919d-7f98a2aa736b',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FPlus-in-poly-And-kraftinside-min.png?alt=media&token=c9feda60-5d10-40f8-9562-ef71023abfd5',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FVC-plus-inside-min.png?alt=media&token=01fa07cd-9892-4d16-a68b-3a22111b6dd5',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVCPlus%2FVC-plus-min.png?alt=media&token=d386ec80-5af4-49ea-b814-473ca68a1ad5',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Fpatents%2Fpat.jpg?alt=media&token=03e61501-b35e-4cf5-b428-86f157e1193b'
      ],
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "VC Plus",
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
    title: 'VC Plus',
    meta: [
      { name: 'description', content: 'High-Performance Closed-Cell Packaging' }
    ],
  },
}
</script>