<template>
	<div>
		<ProductNav :crumbs="crumbs" />
		<div class="page ohana">
			<div class="ohana__hero">
	    </div>
	  
	  	
	    <div class="ohana__main">

		  	<h1>Meet the Ohana Cooler</h1>
		  	<h3>The World's First Eco-Friendly Cooler</h3>
		  	<hr>
		  	<div class="ohana__grid">
		  		<div class="ohana__grid--item">
		  			<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FAsset%206.svg?alt=media&token=35a4d340-ad87-472d-a0a1-2ddd27a8e95c" alt="">
		  		</div>
		  		
		  		<div class="ohana__grid--item">
		  			<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FAsset%202.svg?alt=media&token=4d89fafd-4dab-4afe-9fa2-7fb065a0776d" alt="">
		  		</div>
		  		<div class="ohana__grid--item">
		  			<Spinner />
		  		</div>
		  	</div>
		  	<hr>
		  	<h2 class="primary text-center">Designed to replace styroform® coolers.</h2>
		  	<div>
		  		<ul>
		  			<li>100% Reusable, recyclable and biodegradable</li>
		  			<li>Made from recycled boxes</li>
		  			<li>Up to 10 day water resistance</li>
		  			<li>Up to 18 hour ice retention</li>
		  		</ul>
		  	</div>
		  	<hr>
		  	<div class="ohana__grid2">
		  		<div class="ohana__grid2--item">
		  			<ul>
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
		  		<div class="ohana__grid2--item">
		  			<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FAsset%203.svg?alt=media&token=dca1e562-be90-49d9-8a26-9548c9d8ff30" alt="">
		  		</div>
		  		
		  		<div class="ohana__grid2--item">
		  			<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FAsset%205.svg?alt=media&token=c44fb553-8de0-49f7-a8ce-4c952a22aef6" alt="">
		  		</div>
		  		
		  	</div>
		  	
	  	</div>
	  	<ProductScroller />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductNav from '@/components/ProductNav.vue'
import Spinner from '@/components/Spinner.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ohana',
  data () {
    return {
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
  components: {
    ProductNav,
    Spinner,
    ProductScroller,
    Footer
  },
}
</script>