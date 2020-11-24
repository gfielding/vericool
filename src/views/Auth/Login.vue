<template>
  <div>
    <Nav />
  
    <div class="page login">
    	<div class="container-small">
        <h2 style="text-align:center;">Admin Login</h2>
        <div class="login__form">
          <form @submit.prevent>
            <div>
              <label for="email1">Email</label>
              <input type="text" placeholder="you@email.com" v-model.trim="loginForm.email" id="email1" />
            </div>
            <div>
              <label for="password1">Password</label>
              <input type="password" placeholder="******" id="password1" v-model.trim="loginForm.password" />
            </div>
            <button class="btn btn__primary mt-5 mb-5" @click="login()">
              Log In
              <transition name="fade">
                <span class="ml-2" v-if="performingRequest">
                <i class="fa fa-spinner fa-spin"></i>
                </span>
              </transition>
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
const fb = require('../../firebaseConfig.js')
import Footer from '@/components/Footer.vue'

export default {
  name: 'login',
  data() {
    return {
      performingRequest: false,
      loginForm: {
        email: '',
        password: ''
      }
    }
  },
  components: {
    Nav,
    Footer
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  async mounted () {
    if (this.currentUser && (Object.keys(this.currentUser).length > 0)) {
        this.$router.push('/dashboard')
    } else {

    }
  },
  methods: {
    login() {
      this.performingRequest = true
      this.errorMsg = ''
      setTimeout(() => {
        fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(user => {
          console.log(user)
          this.$store.commit('setCurrentUser', user.user)
          this.$store.dispatch('fetchUserProfile')
          this.$router.push('/dashboard')
        }).catch(err => {
          console.log(err)
          this.errorMsg = err.message
        })
        this.performingRequest = false
      }, 1000)
    },
    login2() {
      this.$store.dispatch('login', {
        email: this.loginForm.email,
        password: this.loginForm.password
      })
    }
  },
  metaInfo: {
    title: 'Admin Login',
    meta: [
      { name: 'description', content: 'Your Vericool Account Login' }
    ],
  },
}
</script>