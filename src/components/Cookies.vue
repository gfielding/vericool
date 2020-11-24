<template>
	<transition name="fade">
		<div class="cookie" v-if="!cool">
			<h3>We use Cookies</h3>
			<p>We only use functional cookies and cookies for analytics to ensure proper website performance. These cookies do not use any of your personal data.</p>
			<div class="flex align-center justify-space-between">
				<button class="btn mt-3" @click="persist">
					That's Cool
				</button>
				<router-link :to="{ name: 'privacy'}" style="color:white; margin-right: 2rem;">Privacy Policy</router-link>
			</div>
		</div>
</transition>
</template>

<script>
	export default {
		data: () => {
	    return {
	      cool: true,
	    }
	  },
	  mounted() {
	  	if (localStorage.cool) {
	  		this.cool = localStorage.cool;
	  	}
	  },
	  watch: {
	    cool(cool) {
	      localStorage.cool = cool;
	    }
	  },
	  methods: {
	  	persist() {
	  		this.cool = true;
	  		localStorage.cool = true;
	  		console.log(localStorage.cool);
	  		localStorage.setItem("cool", localStorage.cool);
	  	}
	  }
	}
</script>