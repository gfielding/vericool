<template>
	<div class="logos">
		<div class="logos__grid">
			<div class="logos__grid--item" v-for="item in logos">
				<img :src="item.picUrl" :alt="item.company + ' Packaging'">
			</div>
		</div>		
	</div>
</template>

<script>
import { mapState } from 'vuex'

	export default {
		computed: {
    ...mapState(['logos']),
	  },
	  async mounted () {
	    if (!this.logos || this.logos.length < 1) {
	      this.$store.dispatch("getLogos")
	    }
	  },
	}
</script>