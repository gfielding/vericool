<template>
	<div>
		<Nav />
		<div class="page ordering">
			<div class="container">
	      <h1 class="mt-5">How to Order</h1>
	      <h3 class="mb-0">Here's how to get started with Vericool™</h3>
	      <hr style="margin-top:1rem;">
	      <h2>Stock Orders</h2>
	      <p>We stock many of the most popular products, ready for you to use. Ordering is simple and delivery is fast. Please complete the form below to help us recommend the best solutions for your needs.</p>
	      <hr>
	      <h2>Custom Orders</h2>
	      <p>We specialize in engineering customized Vericoolers for your specific needs. This ensures maximum performance and efficiency based on product payload, pack out instructions, palletizing configurations and shipping profile. Please complete the form below to help us recommend the best solutions for your needs.</p>
			</div>
			<div class="background pt-5 pb-5 mt-5 mb-5">
				<div class="container pt-5 pb-5">
					<LeadForm />
				</div>
			</div>
		</div>
		<Footer />
	</div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LeadForm from '@/components/LeadForm.vue'
import Footer from '@/components/Footer.vue'

export default {
	name: 'getstarted',
	components: {
		Nav,
		LeadForm,
		Footer
	}
}
	
</script>