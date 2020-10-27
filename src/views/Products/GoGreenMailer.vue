<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page greenmailer">
      <!--<div class="greenmailer__hero">
      </div>-->
      <div class="container">
        <div class="flex justify-space-between align-center">
          <div>
            <h1 class="mt-5">Go Green Mailer</h1>
            <h3 class="mb-0">Compostable Shipping Envelope</h3>
          </div>

          <router-link :to="{ name: 'getstarted'}" tag="button" class="btn product__buttons--item--btn hiddenSmAndDown">Contact Sales<span class="hiddenMdAndDown"> &#8594</span></router-link>
        </div>
        <hr>
        <div class="greenmailer__grid mt-5">
          <div class="grid__container">
            <div class="item grid__container--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FMailers%2FmailerAsset%2013%404x.png?alt=media&token=c014b5a4-8d44-40b7-88cc-464df3b42e17" alt="" style="max-height: 300px;">
            </div>
          </div>
        </div>
        <hr>
        <div class="greenmailer__iconrow">
        	<div>
	        	<div class="greenmailer__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconAsset%2012.svg?alt=media&token=4a3382a3-0a53-4b3c-bcf4-2dff3c593a6f" alt="">
	        		<p>Compostable</p>
	        	</div>
            <div class="vcfusion__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%206.svg?alt=media&token=dd050ac1-0e39-41bc-9b3b-69bf0efcb236" alt="">
              <p>Sustainable</p>
            </div>
            <div class="vcfiber__iconrow--item">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%205.svg?alt=media&token=07bee881-0c56-4fcc-8da7-252227c543ac" alt="">
              <p>Lightweight</p>
            </div>
	        	<div class="greenmailer__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%2011.svg?alt=media&token=90b800e7-cbdb-40ea-a2f8-4efc0c7a8c30" alt="">
	        		<p>High-Performing</p>
	        	</div>
	        	<div class="greenmailer__iconrow--item">
	        		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Ficons%2FiconsAsset%204.svg?alt=media&token=1dd082a9-5a1a-4018-a719-0c71049f0ae5" alt="">
	        		<p>Affordable</p>
	        	</div>
        	</div>
        	<div class="greenmailer__iconrow--item">
        		<img class="p" src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2Fpatents%2FiconsAsset%209.svg?alt=media&token=d081378a-7f89-4d83-9cfb-92ecaf0731f9">
        	</div>
        </div>	
        <hr>
        <div>
        	<h2>Outer Dimensions:</h2>
          <table>
            <tr>
              <td> 7 X 10 </td>
              <td> 9 X 12 </td>
              <td> 12 x 16 </td>
              <td> 15 x 20 </td>
            </tr>
          </table>
        </div>
        <hr>
        <div>
          <h2>Innovative Cold Chain Packaging</h2>
          <ul>
            <li>In house design, validation, and qualification services are available</li>
            <li>Keeps products cold from packaging to receipt with customizable thermal protection duration times</li>
            <li>Outperforms competition green solutions, environmentally and structurally</li>
            <li>Design minimizes edge loss which increases temperature control</li>
            <li>Replaces environmentally harmful expanded polystyrene (EPS) foam packaging (known as Styrofoam)</li>
          </ul>
        </div>
        <hr>
        <div>
          <h2>Customizable</h2>
          <ul>
            <li>Provides customizable 12-56 hours thermal protection</li>
            <li>Multiple size options</li>
            <li>Extremely cost effective: lightweight and ships flat</li>
            <li>Customizable marketing message & logo print available for qualified volumes</li>
            <li>Stock solutions or custom options to fit your exact payload requirements, as well as temperate and duration requirements</li>
          </ul>
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
    Footer
  },
}
</script>