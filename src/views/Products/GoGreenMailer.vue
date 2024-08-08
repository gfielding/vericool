<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page greenmailer white">
      <!--<div class="greenmailer__hero">
      </div>-->
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">Compostable Insulated Mailer</h1>
            <h3 class="mb-2">Compostable Shipping Envelope</h3>
          </div>

          <router-link :to="{ name: 'getstarted'}" tag="button" class="btn product__buttons--item--btn btn__primary hiddenSmAndDown">Contact Sales<i class="fad fa-chevron-right ml-3"></i></router-link>
        </div>
        <hr>
        <div class="vcfiber__iconrow">
          <div class="flex flex-wrap justify-center">
            <div class="greenmailer__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconAsset%2012.svg?alt=media&token=4a3382a3-0a53-4b3c-bcf4-2dff3c593a6f" alt="" />
              <p>Compostable</p>
            </div>
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="" />
              <p>Sustainable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%205.svg?alt=media&token=07bee881-0c56-4fcc-8da7-252227c543ac" alt="" />
              <p>Lightweight</p>
            </div>
            <div class="greenmailer__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="" />
              <p>High-Performing</p>
            </div>
            <div class="greenmailer__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="" />
              <p>Affordable</p>
            </div>
          </div>
        </div>
        <hr>

        <div class="flex flex-wrap mb-5">
          <div class="flex__1 text-center">
             <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FMailers%2Fnew-go-greenmailer-min.png?alt=media&token=096ac3cd-c181-45aa-a97f-56555d49b850" alt="" style="width:80%" class="mb-5" />
          </div>
          <div class="flex__2">
            <h4 class="mt-4">Outer Dimensions</h4>
            <table>
              <tr>
                <td> 7 X 10 </td>
                <td> 9 X 12 </td>
                <td> 12 x 16 </td>
                <td> 15 x 20 </td>
              </tr>
            </table>
            <div>
              <h4 class="mt-4">Innovative Cold Chain Packaging</h4>
              <ul>
                <li>In house design, validation, and qualification services are available</li>
                <li>Keeps products cold from packaging to receipt with customizable thermal protection duration times</li>
                <li>Outperforms competition green solutions, environmentally and structurally</li>
                <li>Design minimizes edge loss which increases temperature control</li>
                <li>Replaces environmentally harmful expanded polystyrene (EPS) foam packaging (known as Styrenfoam)</li>
              </ul>
            </div>
            <div>
              <h4 class="mt-4">Customizable</h4>
              <ul>
                <li>Provides customizable 12-56 hours thermal protection</li>
                <li>Multiple size options</li>
                <li>Extremely cost effective: lightweight and ships flat</li>
                <li>Customizable marketing message & logo print available for qualified volumes</li>
                <li>Stock solutions or custom options to fit your exact payload requirements, as well as temperate and duration requirements</li>
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
  name: 'gogreenmailer',
  data () {
    return {
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "Go Green Mailer",
          to: false
        }
      ]
    }
  },
  components: {
    ProductNav,
    ProductScroller,
    ProductButtons,
    Footer
  },
  metaInfo: {
    title: 'Go Green Mailer',
    meta: [
      { name: 'description', content: 'Compostable Shipping Envelope' }
    ],
  },
}
</script>