<template>
	<footer class="footer">
		<div class="footer__container">
			<div class="footer__container-item">
				wgwrg
			</div>
			<div class="footer__container-item">
				wgwrg
			</div>
			<div class="footer__container-item">
				wgwrg
			</div>
			<div class="footer__container-item">
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