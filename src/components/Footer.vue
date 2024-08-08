<template>
	<div>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__grid">
			<div class="footer__grid--item--1">
				<img src="@/assets/logo.png" alt="Vericool Pacakging" class="footer__grid--item--logo" />
				<div class="footer__grid--item--social">
					<a href="https://www.facebook.com/VericoolPackaging" target="_blank">
						<i class="fab fa-facebook-square fa-2x ma-2"></i>
					</a>
					<a href="https://www.instagram.com/vericoolcompany" target="_blank">
						<i class="fab fa-instagram-square fa-2x ma-2"></i>
					</a>

					<a href="https://twitter.com/vericoolcompany" target="_blank">
						<i class="fab fa-twitter-square fa-2x ma-2"></i>
					</a>
					<a href="https://www.linkedin.com/company/vericool-packaging" target="_blank">
							<i class="fab fa-linkedin fa-2x ma-2"></i>
						</a>
				</div>
				<h4>Corporate Office</h4>
				<address>
					7066 Las Positas Road<br />
					Suites C/D<br />
					Livermore, CA 94550
				</address>
				<a href="tel:925-238-8847">
					<button><strong>(925) 238-8847</strong></button>
				</a>
				<a href="mailto:info@vericoolpackaging.com"><button><strong>info@vericoolpackaging.com</strong></button></a>
			</div>
			<div class="footer__grid--item--2 hiddenMdAndDown">
				<!-- <h3>About Vericool™</h3> -->
				<!--<router-link :to="{ name: 'mission' }">
					<button>Mission</button>
				</router-link>-->
				<!-- <router-link :to="{ name: 'team'}">
					<button>Meet the Team</button>
				</router-link> -->
				<router-link :to="{ name: 'second-chance' }">
					<button>2nd Chance Program</button>
				</router-link>
				<router-link :to="{ name: 'environmental-impact'}">
					<button>Environmental Impact</button>
				</router-link>
				<router-link :to="{ name: 'industries' }">
					<button>Industries</button>
				</router-link>
				<!-- <router-link :to="{ name: 'awards' }">
					<button>Awards</button>
				</router-link> -->
				<router-link :to="{ name: 'careers' }">
					<button>Careers</button>
				</router-link>
				<!-- <h3 class="mt-3">Partners</h3>
				<router-link :to="{ name: 'distribution' }">
					<button>Distribution</button>
				</router-link>
				<router-link :to="{ name: 'customers' }">
					<button>Customers</button>
				</router-link> -->
			</div>
			<div class="footer__grid--item--3 hiddenMdAndDown">
				<!-- <h3>Vericoolers</h3> -->
				<router-link :to="{ name: 'products' }">
					<button>Products</button>
				</router-link>
				<!-- <router-link :to="{ name: 'vericooler' }">
					<button>Ohana Cooler</button>
				</router-link> -->
				<!-- <router-link :to="{ name: 'custom' }">
					<button>Custom Orders</button>
				</router-link>
				<router-link :to="{ name: 'stock' }">
					<button>Stock Orders</button>
				</router-link>
				<router-link :to="{ name: 'disposal' }">
					<button>Disposal</button>
				</router-link>
				<router-link :to="{ name: 'materials' }">
					<button>Our Materials</button>
				</router-link>
				<router-link :to="{ name: 'competitors' }">
					<button>Competitors</button>
				</router-link> -->
				<router-link :to="{ name: 'data' }">
					<button>Performance</button>
				</router-link>
				<router-link :to="{ name: 'testing' }">
					<button>Testing</button>
				</router-link>
				<router-link :to="{ name: 'light-test' }">
					<button>Light Test</button>
				</router-link>
			</div>
			<div class="footer__grid--item--4 hiddenMdAndDown">
				<!-- <h3>Inquiries</h3> -->
				<router-link :to="{ name: 'faq' }">
					<button>FAQs</button>
				</router-link>
				
				<router-link :to="{ name: 'pr' }">
					<button>In The News</button>
				</router-link>
				<router-link :to="{ name: 'news' }">
					<button>Blog</button>
				</router-link>
				<!-- <router-link :to="{ name: 'buy' }"">
					<button>Where to Buy</button>
				</router-link> -->
				
				<!-- <router-link :to="{ name: 'contact' }">
					<button>Contact Us</button>
				</router-link> -->
				<router-link :to="{ name: 'login' }" v-if="!currentUser">
					<button>Login</button>
				</router-link>
				<button v-if="currentUser" @click="logout()">Logout</button>
			</div>
		</div>
		</div>
		<div class="footer__legal">
			© Vericool Inc  //  
			<!-- <router-link :to="{ name: 'terms' }">Terms & Conditions</router-link>  //   -->
			<router-link :to="{ name: 'privacy' }">Privacy Policy</router-link>
		</div>
	</footer>
	<div class="pt-3 gradient block"></div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  },
}
</script>