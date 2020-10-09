<template>
	<div>
		<div class="pre-nav">
			<div class="pre-nav__container">
				<div class="pre-nav__items">
					<router-link :to="{ name: 'second-chance' }">
						<button>Latest Blog Post Title &#8594</button>
					</router-link>
				</div>
			</div>
		</div>
		<div class="navbar">
			<div class="navbar__container">
				<div class="navbar__logo">
					<router-link to="/">
						<img src="@/assets/logo.png" alt="Vericool Pacakging" class="navbar__logo-textLogo">
						<!--<img src="@/assets/vericool-icon-white.png" alt="Vericool Pacakging" class="navbar__logo-iconLogo">-->
					</router-link>
				
					<div class="navbar__items">
						<button v-on:mouseover="showAbout" v-on:mouseleave="hideAbout" @click="aboutMenu = !aboutMenu">
							Who We Are
							<transition name="fade">
								<div class="dropdown" v-if="aboutMenu">
									<router-link :to="{ name: 'mission' }" @click="aboutMenu == false">
										<button>Mission</button>
									</router-link>
									<router-link :to="{ name: 'team'}" @click="aboutMenu == false">
										<button>Meet the Team</button>
									</router-link>
									<router-link :to="{ name: 'second-chance' }" @click="aboutMenu == false">
										<button>2nd Chance Program</button>
									</router-link>
									<router-link :to="{ name: 'environmental-impact'}" @click="aboutMenu == false">
										<button>Environmental Impact</button>
									</router-link>
								</div>
							</transition>
						</button>
						<!--<button v-on:mouseover="showPartners" v-on:mouseleave="hidePartners" @click="partnersMenu = !partnersMenu">
							Partners
							<transition name="fade">
								<div class="dropdown" v-if="partnersMenu">
									<router-link :to="{ name: 'distribution' }" @click="partnersMenu == false">
										<button>Distribution</button>
									</router-link>
									<router-link :to="{ name: 'customers' }" @click="partnersMenu == false">
										<button>Customers</button>
									</router-link>
								</div>
							</transition>
						</button>-->
						
						<button v-on:mouseover="showCoolers" v-on:mouseleave="hideCoolers" @click="coolersMenu = !coolersMenu">
							Vericoolers
							<transition name="fade">
								<div class="dropdown" v-if="coolersMenu">
									<router-link :to="{ name: 'products' }" @click="coolersMenu == false">
										<button>Products</button>
									</router-link>
									<router-link :to="{ name: 'ohana' }" @click="coolersMenu == false">
										<button>Ohana Cooler</button>
									</router-link>
									<router-link :to="{ name: 'custom' }" @click="coolersMenu == false">
										<button>Custom Orders</button>
									</router-link>
									<router-link :to="{ name: 'stock' }" @click="coolersMenu == false">
										<button>Stock Orders</button>
									</router-link>
									<router-link :to="{ name: 'disposal' }" @click="coolersMenu == false">
										<button>Disposal</button>
									</router-link>
									<router-link :to="{ name: 'materials' }" @click="coolersMenu == false">
										<button>Our Materials</button>
									</router-link>
									<router-link :to="{ name: 'competitors' }" @click="coolersMenu == false">
										<button>Competitors</button>
									</router-link>
									<router-link :to="{ name: 'data' }" @click="coolersMenu == false">
										<button>Data</button>
									</router-link>
								</div>
							</transition>
						</button>

						<router-link :to="{ name: 'customers' }" @click="partnersMenu == false">
							<button>Customers</button>
						</router-link>
						
						<router-link :to="{ name: 'news' }">
							<button>News</button>
						</router-link>
						<!--<button v-on:mouseover="showInquiries" v-on:mouseleave="hideInquiries" @click="inquiriesMenu = !inquiriesMenu">
							Inquiries
							<transition name="fade">
								<div class="dropdown" v-if="inquiriesMenu">
									<router-link :to="{ name: 'careers' }" @click="inquiriesMenu == false">
										<button>Careers</button>
									</router-link>
									<router-link :to="{ name: 'pr' }" @click="inquiriesMenu == false">
										<button>In The News</button>
									</router-link>
									<router-link :to="{ name: 'buy' }" @click="inquiriesMenu == false">
										<button>Where to Buy</button>
									</router-link>
									<router-link :to="{ name: 'contact' }" @click="inquiriesMenu == false">
										<button>Contact Us</button>
									</router-link>
								</div>
							</transition>
						</button>-->
					</div>
				</div>
				<div class="navbar__right">
					<button class="btn btn__large btn__primary" v-if="!currentUser">Contact Sales</button>
					<router-link :to="{ name: 'dashboard' }" v-if="currentUser">
						<button class="btn btn__outlined">Dashboard</button>
					</router-link>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	data: () => ({
		partnersMenu: false,
		aboutMenu: false,
		coolersMenu: false,
		inquiriesMenu: false,
	}),
	computed: {
    ...mapState(['currentUser']),
  },
	methods: {
		showPartners() {
			this.partnersMenu = true;
		},
		hidePartners() {
			this.partnersMenu = false;
		},
		showAbout() {
			this.aboutMenu = true;
		},
		hideAbout() {
			this.aboutMenu = false;
		},
		showCoolers() {
			this.coolersMenu = true;
		},
		hideCoolers() {
			this.coolersMenu = false;
		},
		showInquiries() {
			this.inquiriesMenu = true;
		},
		hideInquiries() {
			this.inquiriesMenu = false;
		},
	}
}
</script>