<template>
	<div>
		<Nav />
		<div class="page industries">
	      <h1 class="mt-5">Industries We Serve</h1>
	      <h3 class="mb-0">Cool from packaging to receipt</h3>
	      <hr style="margin-top:1rem;">
	      <p>Vericool has created a high-performing and sustainable cold chain solution that is designed to uphold the integrity of your temperature-sensitive product throughout its entire shipment process. Utilizing our deep understanding of chemical and biological processes, we have created a solution that guarantees your product will reach your customer within its required temperature range and stay protected while doing so</p>
	      <p>Vericoolers™ can be designed to match your product needs and make you stand out to you customers. Our product performance and company mission set you apart from other competitors in your industry, showing your customers that you’re a company with not a great product, but a mission. Work with us today. </p>
	      <hr>



	      <div class="industries__grid">
	      	<div class="industries__grid--item item card text-center"><img src="https://miro.medium.com/max/999/1*VB1Dl8t953eQ6GfDubvakg.jpeg" alt="">
	      		<div class="card-body  pa-3">
	      			<h4 class="card__title--link dark-text">Pharmaceuticals</h4>
	      			<p class="light">Life saving prescriptions with planet saving packaging. </p>
	      		</div>
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/kit.jpg?alt=media&token=1905ce4d-8785-4a38-9630-9031e4017c90" alt="">
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Meal Kits</h4>
	      			<p class="light">The meal kit industry is expected to hit $20 billion by 2027. Stay ahead of the competition and Go Green with your shipping solution now.</p>
	      		</div>
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585" alt="">
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Wine & Spirits</h4>
	      			<p class="light">Your wine should be ready to go whenever you are, afterall, it’s five o’clock somewhere...</p>
	      		</div>
	      		
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/crowd-cow-delivery-package.jpg?alt=media&token=f3f33acf-d7b0-470a-8d0b-d1bd55f70e91" alt="">
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Meats</h4>
	      			<p class="light">We keep your food frozen, fresh, and ready to eat.</p>
	      		</div>
						<!-- <div class="item__overlay--motion">
							<h3>Meats</h3>
						</div> -->
	      	</div>
	      </div>
	      <hr>
	  	</div>
	  <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'industries',
  components: {
  	Nav,
  	Footer
  }
}
</script>
