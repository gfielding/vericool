<template>
	<div>
		<div class="pre-nav" style="display: none;">
			<div class="pre-nav__container">
				<div class="pre-nav__items">
					<router-link :to="{ name: 'second-chance' }">
						<button>2nd Chance Program</button>
					</router-link>
					<router-link :to="{ name: 'careers' }">
						<button>Careers</button>
					</router-link>
				</div>
			</div>
		</div>
		<div class="navbar navbar__admin">
			<div class="navbar__container">
				<div class="navbar__logo">
					<router-link to="/">
						<img src="@/assets/logo.png" alt="Vericool Pacakging" class="navbar__logo-textLogo">
						<!--<img src="@/assets/vericool-icon-white.png" alt="Vericool Pacakging" class="navbar__logo-iconLogo">-->
					</router-link>
				
					<div class="navbar__admin__items">
				
						<button v-on:mouseover="showCareers" v-on:mouseleave="hideCareers" @click="careersMenu = !careersMenu">
							Careers
							<transition name="fade">
								<div class="dropdown" v-if="careersMenu">
									<router-link :to="{ name: 'listcareers' }" @click="careersMenu == false">
										<button>All Careers</button>
									</router-link>
									<router-link :to="{ name: 'addcareer' }" @click="careersMenu == false">
										<button>Add Career</button>
									</router-link>
								</div>
							</transition>
						</button>
						<button>Customers</button>
						<button>Articles</button>
						<button v-on:mouseover="showPress" v-on:mouseleave="hidePress" @click="pressMenu = !pressMenu">
							In The Press
							<transition name="fade">
								<div class="dropdown" v-if="pressMenu">
									<router-link :to="{ name: 'listpress' }" @click="pressMenu == false">
										<button>All Listings</button>
									</router-link>
									<router-link :to="{ name: 'addpress' }" @click="pressMenu == false">
										<button>Add Listing</button>
									</router-link>
								</div>
							</transition>
						</button>

						<button v-on:mouseover="showChances" v-on:mouseleave="hideChances" @click="chancesMenu = !chancesMenu">
							Second Chances
							<transition name="fade">
								<div class="dropdown" v-if="chancesMenu">
									<router-link :to="{ name: 'chances' }" @click="chancesMenu == false">
										<button>All Quotes</button>
									</router-link>
									<router-link :to="{ name: 'addchance' }" @click="chancesMenu == false">
										<button>Add Quote</button>
									</router-link>
								</div>
							</transition>
						</button>

						<button v-on:mouseover="showPosts" v-on:mouseleave="hidePosts" @click="postsMenu = !postsMenu">
							Posts
							<transition name="fade">
								<div class="dropdown" v-if="postsMenu">
									<router-link :to="{ name: 'postlist' }" @click="postsMenu == false">
										<button>Posts</button>
									</router-link>
									<router-link :to="{ name: 'newpost' }" @click="postsMenu == false">
										<button>New Post</button>
									</router-link>
								</div>
							</transition>
						</button>


						

						
					</div>
				</div>
				<div class="navbar__right">
					<button class="btn btn__outlined" @click="logout">Logout</button>
				</div>
			</div>
		</div>
		<div class="breadcrumb" v-if="crumbs && crumbs.length > 0">
			<div class="breadcrumb__container">
				<div class="breadcrumb__items">
					<div class="breadcrumb__items--item" v-for="item in crumbs">
						<router-link :to="item.to" v-if="item.to">
							<button class="btn" :key="item.title">
								{{item.title}}
							</button>
						</router-link>
						<button class="btn" :key="item.title" v-if="!item.to">
							{{item.title}}
						</button>
						<div class="arrow">
							/
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: ['crumbs'],
	data: () => ({
		careersMenu: false,
		pressMenu: false,
		chancesMenu: false,
		postsMenu: false,
	}),
	methods: {
    logout() {
      this.$store.dispatch('logout')
    },
		showCareers() {
			this.careersMenu = true;
		},
		hideCareers() {
			this.careersMenu = false;
		},
		showPress() {
			this.pressMenu = true;
		},
		hidePress() {
			this.pressMenu = false;
		},
		showChances() {
			this.chancesMenu = true;
		},
		hideChances() {
			this.chancesMenu = false;
		},
		showPosts() {
			this.postsMenu = true;
		},
		hidePosts() {
			this.postsMenu = false;
		}
	}
}
</script>