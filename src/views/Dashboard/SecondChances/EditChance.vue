<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Edit Quote</h1>
      </div>
      <div class="form" v-if="chanceInfo">
        <form @submit.prevent>
          <div>
            <label for="name">First Last, Title</label>
            <input type="text" placeholder="Name and Title" v-model.trim="chanceInfo.name" id="name" required />
          </div>
          
          <div>
            <label for="quote">Quote</label>
            <textarea name="quote" id="quote" cols="30" rows="10" v-model.trim="chanceInfo.quote" required></textarea>
          </div>
          <div class="flex justify-space-between">
            <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Cancel</button>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editQuote()">
              Submit
              <transition name="fade">
                <span class="ml-2" v-if="performingRequest">
                <i class="fa fa-spinner fa-spin"></i>
                </span>
              </transition>
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'editchance',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Second Chances",
          to: "/dashboard/chances"
        },
        {
          title: "Edit Quote",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'chanceInfo']),
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getChanceFromId", this.$route.params.id);
  },
  components: {
    NavAdmin,
    Footer
  },
  methods: {
    editQuote() {
      this.performingRequest = true
      let {chance} = this.chanceInfo
      fb.chancesCollection.doc(this.chanceInfo.id).update(this.chanceInfo)
      setTimeout(() => {
        this.performingRequest = false
      }, 1000)
      let url = "/dashboard/chances"
      this.$router.push(url)
    },
    cancel() {
      let url = "/dashboard/chances"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearChanceState")
  }
}
</script>