<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page vcthree">
      <!--<div class="vcthree__hero">
      </div>-->
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">VC III</h1>
            <h3 class="mb-0">High-Performance Water-Resistant Packaging</h3>
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
        <!-- <div class="vcthree__content">
          <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC-3-group-min.png?alt=media&token=7123fdd3-2cd3-4e91-9e3c-b87e02f6b2f3" alt="">
        </div> -->
        <hr>
        <div class="vcthree__iconrow">
          <div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%201.svg?alt=media&token=e73d6468-ab76-489c-8269-d5773276c962" alt="">
              <p>Customizable</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%208.svg?alt=media&token=8a9bc423-a9f0-4f49-9b38-5b4879feee8e" alt="">
              <p>Curbside-Recyclable</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconAsset%207.svg?alt=media&token=09ceeaf6-73e1-4a52-9fdd-6a0b28949de6" alt="">
              <p>Durable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%207.svg?alt=media&token=cd678ed8-e221-436c-9dc5-a1ef7f7492be" alt="">
              <p>100% Post-Consumer</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconAsset%208.svg?alt=media&token=556cb67d-0216-4605-91f7-6f9c92f9abd2" alt="">
              <p>Water-Resistant</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="">
              <p>High-Performing</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="">
              <p>Sustainable</p>
            </div>
            <div class="vcthree__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="">
              <p>Affordable</p>
            </div>
          </div>
          <div class="vcthree__iconrow--item">
            <img class="p" src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Fpatents%2FpAsset%209.svg?alt=media&token=9eb83094-2857-47fa-9798-94a84108840e">
          </div>
        </div>  
        <hr>
        <div>
          <h2>Sustainable Technology</h2>
          <ul>
            <li>Designed for the food, wine, specialty pharmaceutical, and health care industries</li>
            <li>Recyclable (passes WMU standard)</li>
            <li>Replaces environmentally detrimental expanded polystyrene (EPS) foam packaging (commonly known as Styrofoam®)</li>
            <li>Outperforms competition, environmentally and structurally, by providing customizable 12-72 hours of thermal protection</li>
          </ul>
        </div>
        <div>
          <h2>Innovative Cold Chain Packaging</h2>
          <ul>
            <li>Water resistant</li>
            <li>Smart convection system with ventilation grooves allowing for controlled temperature circulation</li>
            <li>VericoolerTM performance and optional gel pack shelf allow for less gel pack weight in shipper</li>
            <li>Tongue and groove design reduces edge loss</li>
            <li>Divider grooves and pads allow for customization of payload</li>
            <li>Temperature ranges include: 2-8°C, 2-15°C, 2-25°C, -20°C, and/or custom temperature ranges</li>
          </ul>
        </div>
        <div>
          <h2>Customizable</h2>
          <ul>
            <li>Customer logo molded into VericoolerTM to enhance brand and customer experience</li>
            <li>Option to add customizable marketing message and logo print</li>
            <li>Customer can easily place in curbside recycling</li>
          </ul>
        </div>
        <hr>

       
        <!-- <div class="vcthree__grid mt-5">
          <div class="grid__container">
            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585" alt="">
            </div>

            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVericooler-III-front-and-back-final-min.png?alt=media&token=de25824c-2624-44f9-84f5-9f1123b92973" alt="">
            </div>

            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2Fvericooler-viles-new-min.png?alt=media&token=6e673513-21c4-463f-928c-3083a723ddf6" alt="">
            </div>

            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2Fvericooler-III---viles-min.png?alt=media&token=1e004065-f951-4e92-8b53-8ad31a20f013" alt="">
            </div>
          </div>
        </div> -->
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
  name: 'vcthree',
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
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVericooler-III-front-and-back-final-min.png?alt=media&token=de25824c-2624-44f9-84f5-9f1123b92973',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2Fvericooler-viles-new-min.png?alt=media&token=6e673513-21c4-463f-928c-3083a723ddf6',
        'https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2Fvericooler-III---viles-min.png?alt=media&token=1e004065-f951-4e92-8b53-8ad31a20f013'
      ],
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "VC III",
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