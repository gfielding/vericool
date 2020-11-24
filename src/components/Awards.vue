<template>
	<div class="awards">
		
		<!-- <div class="awards__grid">
			<div class="awards__grid--item" v-for="item in awards">
				<img :src="item.picUrl" :alt="item.title + ' Award'" />
			</div>
		</div>	 -->
		<div class="content-wrapper">
			<div class="awards__flex">
				<div class="awards__flex--item" v-for="item in awards">
					<img :src="item.picUrl" :alt="item.title + ' Award'" />
				</div>
			</div>		
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

	export default {
		computed: {
    ...mapState(['awards']),
	  },
	  async mounted () {
	    if (!this.awards || this.awards.length < 1) {
	      this.$store.dispatch("getAwards")
	    }
	  },
	}
</script>