<template>
	<div>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__container--item">
				<img src="@/assets/logo.png" alt="Vericool Pacakging" class="footer__container--logo">
				<div>
					<a class="footer__container--social" href="https://www.facebook.com/VericoolPackaging" target="_blank">
						<i class="fab fa-facebook-square fa-2x ma-2"></i>
					</a>
					<a class="footer__container--social" href="https://www.instagram.com/vericoolcompany" target="_blank">
						<i class="fab fa-instagram-square fa-2x ma-2"></i>
					</a>

					<a class="footer__container--social" href="https://twitter.com/vericoolcompany" target="_blank">
						<i class="fab fa-twitter-square fa-2x ma-2"></i>
					</a>
					<a class="footer__container--social" href="https://www.linkedin.com/company/vericool-packaging" target="_blank">
							<i class="fab fa-linkedin fa-2x ma-2"></i>
						</a>
				</div>

				<p>Phone<br />
				<p>info@vericool</p>
				<p>925-574-7888</p>
				<h4>Corporate HQ</h4>
				<p>Livermore, CA</p>



				


				
			</div>
			<div class="footer__container--item">
				<h3>About Vericool™</h3>
				<!--<router-link :to="{ name: 'mission' }">
					<button>Mission</button>
				</router-link>-->
				<router-link :to="{ name: 'team'}">
					<button>Meet the Team</button>
				</router-link>
				<router-link :to="{ name: 'second-chance' }">
					<button>2nd Chance Program</button>
				</router-link>
				<router-link :to="{ name: 'environmental-impact'}">
					<button>Environmental Impact</button>
				</router-link>
				<router-link :to="{ name: 'industries' }">
					<button>Industries</button>
				</router-link>
				<h3 class="mt-3">Partners</h3>
				<router-link :to="{ name: 'distribution' }">
					<button>Distribution</button>
				</router-link>
				<router-link :to="{ name: 'customers' }">
					<button>Customers</button>
				</router-link>
			</div>
			<div class="footer__container--item">
				<h3>Vericoolers</h3>
				<router-link :to="{ name: 'products' }">
					<button>Products</button>
				</router-link>
				<router-link :to="{ name: 'ohana' }">
					<button>Ohana Cooler</button>
				</router-link>
				<router-link :to="{ name: 'custom' }">
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
				</router-link>
				<router-link :to="{ name: 'data' }">
					<button>Data</button>
				</router-link>
				<router-link :to="{ name: 'light-test' }">
					<button>Light Test</button>
				</router-link>
			</div>
			<div class="footer__container--item">
				<h3>Inquiries</h3>
				<router-link :to="{ name: 'careers' }" @click="inquiriesMenu == false">
					<button>Careers</button>
				</router-link>
				<router-link :to="{ name: 'pr' }" @click="inquiriesMenu == false">
					<button>In The News</button>
				</router-link>
				<router-link :to="{ name: 'buy' }" @click="inquiriesMenu == false">
					<button>Where to Buy</button>
				</router-link>
				<router-link :to="{ name: 'awards' }">
					<button>Awards</button>
				</router-link>
				<router-link :to="{ name: 'contact' }" @click="inquiriesMenu == false">
					<button>Contact Us</button>
				</router-link>
				<router-link :to="{ name: 'login' }" v-if="!currentUser">
					<button>Admin</button>
				</router-link>
				<button v-if="currentUser" @click="logout()">Logout</button>
			</div>
		</div>
		<div class="footer__legal">
			© Vericool Inc
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