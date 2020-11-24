<template>
	<div class="greyback">
		<Nav />
		<div class="page industries">
	      <h1 class="mt-5">Industries We Serve</h1>
	      <h3 class="mb-0">Cool from packaging to receipt</h3>
	      <hr>
	      <p>Vericool has created a high-performing and sustainable cold chain solution that is designed to uphold the integrity of your temperature-sensitive product throughout its entire shipment process. Utilizing our deep understanding of chemical and biological processes, we have created a solution that guarantees your product will reach your customer within its required temperature range and stay protected while doing so</p>
	      <p>Vericoolers™ can be designed to match your product needs and make you stand out to you customers. Our product performance and company mission set you apart from other competitors in your industry, showing your customers that you’re a company with not a great product, but a mission. Work with us today. </p>
	      <hr>



	      <div class="industries__grid pt-3 pb-3">
	      	<div class="industries__grid--item item card text-center"><v-lazy-image src="https://miro.medium.com/max/999/1*VB1Dl8t953eQ6GfDubvakg.jpeg" alt="Thermal Packaging Customers" />
	      		<div class="card-body  pa-3">
	      			<h4 class="card__title--link dark-text">Pharmaceuticals</h4>
	      			<p class="light">Life saving prescriptions with planet saving packaging. </p>
	      		</div>
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/kit.jpg?alt=media&token=1905ce4d-8785-4a38-9630-9031e4017c90" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Meal Kits</h4>
	      			<p class="light">The meal kit industry is expected to hit $20 billion by 2027. Stay ahead of the competition and Go Green with your shipping solution now.</p>
	      		</div>
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Products%2FVC3%2FVC3-wines-min.png?alt=media&token=2d87f7d8-3fe7-454d-b54d-581fcf327585" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Wine & Spirits</h4>
	      			<p class="light">Your wine should be ready to go whenever you are, afterall, it’s five o’clock somewhere...</p>
	      		</div>
	      		
	      	</div>
	      	<div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/meat.jpg?alt=media&token=5de6940e-aef9-4b57-bec2-bf4cc1d364f7" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Meats</h4>
	      			<p class="light">We keep your food frozen, fresh, and ready to eat.</p>
	      		</div>
						<!-- <div class="item__overlay--motion">
							<h3>Meats</h3>
						</div> -->
	      	</div>

	      	<div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/1_BjKt93JtusWyq8ekFyYeag.jpeg?alt=media&token=3bb4c4ce-3831-4512-922d-8782a1ef5634" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Neutraceuticals</h4>
	      			<p class="light">Medicines and supplements are only as good as the packaging they come in.</p>
	      		</div>
	      	</div>

	      	<!-- <div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/istock-1060456922.jpg?alt=media&token=702fbb3e-9217-4663-af12-cf11217e26a0" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Beverages</h4>
	      			<p class="light">An ice cold beer should be just that, cold.</p>
	      		</div>
	      	</div> -->

	      	<div class="industries__grid--item item card text-center">
	      		<v-lazy-image src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/iStock-994136284_0.jpg?alt=media&token=ff039183-5546-4ce9-bf73-8177cebf3fb0" alt="Thermal Packaging Customers" />
	      		<div class="card-body pa-3">
	      			<h4 class="card__title--link dark-text">Seafood</h4>
	      			<p class="light">You don’t need to live near the ocean to enjoy fresh seafood anymore.</p>
	      		</div>
	      	</div>

	      </div>
	      <!-- <hr> -->
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
  },
  metaInfo: {
    title: 'Industries',
  },
}
</script>
