<template>
	<div class="navtop">
		<div v-if="navMenu">
			<transition name="fade2">
				<div class="full__nav">
					<div class="nav-container">
						<div class="close-container flex justify-end">
							<button class="close" @click="close()">
								<i class="fad fa-times fa-2x"></i>
							</button>
						</div>
					</div>
					<div class="full__nav--box">
						<img src="@/assets/logoWhite.png" alt="Vericool Pacakging">
						<!-- <router-link :to="{ name: 'team'}" @click="navMenu = false" tag="button">
							Meet the Team
						</router-link> -->

							<router-link to="{ name: 'home' }" tag="button" @click="close()">
								Home<i class="fad fa-chevron-right ml-4"></i>
							</router-link>
						
							<router-link :to="{ name: 'products' }" tag="button" @click="close()">
								Our Products<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'environmental-impact'}" tag="button" @click="close()">
								Environmental Impact<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'second-chance' }" @click="close()" tag="button">
								2nd Chances<i class="fad fa-chevron-right ml-4"></i>
							</router-link>
						
							<router-link :to="{ name: 'industries' }" tag="button" @click="close()">
								Industry Solutions<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'data' }" tag="button" @click="close()">
								Performance Data<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'testing' }" tag="button" @click="close()">
								Testing<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'light-test' }" tag="button" @click="close()">
								Light Test<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'faq' }" tag="button" @click="close()">
								FAQs<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'pr' }" tag="button" @click="close()">
								In The News<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<!-- <router-link :to="{ name: 'awards' }" tag="button" @click="close()">
								Awards<i class="fad fa-chevron-right ml-4"></i>
							</router-link> -->

							<router-link :to="{ name: 'careers' }" tag="button" @click="close()">
								Careers<i class="fad fa-chevron-right ml-4"></i>
							</router-link>
							
							<router-link :to="{ name: 'news' }" tag="button" @click="close()">
								Blog<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

							<router-link :to="{ name: 'getstarted' }" tag="button" @click="close()">
								Contact Us<i class="fad fa-chevron-right ml-4"></i>
							</router-link>

					</div>
				</div>
			</transition>
		</div>
		<!-- <div class="pre-nav hiddenSmAndDown">
			<div class="pre-nav__container">
				<div class="pre-nav__items">
					<div v-for="item in articles.slice(0, 1)">
						<router-link :to="`/news/` + item.id">
            	<div>Latest Update: <strong>{{item.title}} &#8594</strong></div>
            </router-link>
          </div>
				</div>
			</div>
		</div> -->
		<div class="navbar">
			<div class="navbar__container">
				<div class="navbar__logo">
					<router-link to="/">


						
						<img src="@/assets/logo.png" alt="Vericool Pacakging" class="navbar__logo-textLogo">
						<!--<img src="@/assets/vericool-icon-white.png" alt="Vericool Pacakging" class="navbar__logo-iconLogo">-->
					</router-link>
				</div>
				
					<div class="navbar__items">


						<!-- <router-link to="/2" tag="button">
							Home Alt
						</router-link> -->


						<!-- <button v-on:mouseover="showAbout" v-on:mouseleave="hideAbout" @click="aboutMenu = !aboutMenu">
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
									
								</div>
							</transition>
						</button> -->
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
						
						<!--<button v-on:mouseover="showCoolers" v-on:mouseleave="hideCoolers" @click="coolersMenu = !coolersMenu" :class="{'router-link-active': subProducts == true}">
							Vericoolers
							<transition name="fade">
								<div class="dropdown" v-if="coolersMenu">
									<router-link :to="{ name: 'products' }" @click="coolersMenu == false">
										<button>Products</button>
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
						</button>-->

						<router-link to="{ name: 'home' }" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								<!-- <span class="hiddenLgAndUp">Explore Our Products</span> -->
								<span class="hiddenMdAndDown">Home</span>
							</span>
						</router-link>

						<router-link :to="{ name: 'all-products' }" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								<!-- <span class="hiddenLgAndUp">Explore Our Products</span> -->
								<span class="hiddenMdAndDown">Products</span>
							</span>
						</router-link>

						<router-link :to="{ name: 'industries' }" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								Industries
							</span>
						</router-link>

						<router-link :to="{ name: 'environmental-impact'}" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								Environmental Impact
							</span>
						</router-link>

						<router-link :to="{ name: 'second-chance' }" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								2nd Chances
							</span>
						</router-link>

						<!-- <router-link :to="{ name: 'customers' }" tag="button">
							Customers
						</router-link> -->
						
						<router-link :to="{ name: 'news' }" tag="button" class="hiddenMdAndDown">
							<span class="hov">
								News
							</span>
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

				<div class="navbar__right">
				
					<div class="navbar__right--social hiddenSmAndDown">
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
					<div class="navbar__right--buttons">

						<router-link :to="{ name: 'getstarted' }" tag="button" class="btn btn__large btn__primary hiddenXsOnly" v-if="!currentUser">
							Contact Us
						</router-link>

						<router-link :to="{ name: 'getstarted' }" tag="button" class="btn btn__primary hiddenSmAndUp" v-if="!currentUser">
							Contact Us
						</router-link>


						<router-link :to="{ name: 'dashboard' }" v-if="currentUser">
							<button class="btn btn__primary">Dashboard</button>
						</router-link>
					</div>
					<button @click="showMenu()" class="navbar__right--bars">
						<i class="fad fa-bars fa-2x"></i>
					</button>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
	props: ['subProducts'],
	data: () => ({
		partnersMenu: false,
		aboutMenu: false,
		coolersMenu: false,
		inquiriesMenu: false,
		navMenu: false,
	}),
	computed: {
    ...mapState(['currentUser', 'articles']),
    article() {
      return this.articles.slice(0, 1)
    }
  },
  async mounted () {
    if (!this.articles || this.articles.length < 1) {
      this.$store.dispatch("getArticles")
    }
  },
	methods: {
		showMenu() {
			this.navMenu = true;
		},
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
		close() {
			this.navMenu = false;
			this.$nextTick(); 
		}
	}
}
</script>