<template>
	<div class="navbar">
		<div class="navbar__container">
			<div class="navbar__logo">
				<router-link to="/">
					<img src="@/assets/logo.png" alt="Vericool Pacakging">
				</router-link>
			</div>
			<div class="navbar__items">
				<router-link to="/about">
					<button>About</button>
				</router-link>
				<button v-on:mouseover="showPartners" v-on:mouseleave="hidePartners" @click="partnersMenu = !partnersMenu">
					Partners
					<transition name="fade">
						<div class="dropdown" v-if="partnersMenu">
							<router-link to="/distribution" @click="partnersMenu == false">
								<button>Distribution</button>
							</router-link>
							<router-link to="/customers" @click="partnersMenu == false">
								<button>Customers</button>
							</router-link>
						</div>
					</transition>
				</button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data: () => ({
		partnersMenu: false,
	}),
	methods: {
		showPartners() {
			this.partnersMenu = true;
		},
		hidePartners() {
			this.partnersMenu = false;
		}
	}
}
</script>