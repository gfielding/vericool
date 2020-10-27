<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Edit Award</h1>
      </div>
      <div class="form" v-if="awardInfo">
        <form @submit.prevent>
          <div>
            <label for="title">Title</label>
            <input type="text" placeholder="Title" v-model.trim="awardInfo.title" id="title" required />
          </div>
          
          <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" v-model.trim="awardInfo.description" required></textarea>
          </div>
          <div class="">
            <label for="url">URL</label>
            <input type="url" placeholder="Paste Link Here" v-model.trim="awardInfo.url" id="url" required />
          </div>
          <div class="flex justify-space-between">
            <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Cancel</button>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editAward()">
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
  name: 'editaward',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Awards",
          to: "/dashboard/awards"
        },
        {
          title: "Edit Award",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'awardInfo']),
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getAwardFromId", this.$route.params.id);
  },
  components: {
    NavAdmin,
    Footer
  },
  methods: {
    editAward() {
      this.performingRequest = true
      let {award} = this.awardInfo
      fb.awardsCollection.doc(this.awardInfo.id).update(this.awardInfo)
      setTimeout(() => {
        this.performingRequest = false
      }, 1000)
      let url = "/dashboard/awards"
      this.$router.push(url)
    },
    cancel() {
      let url = "/dashboard/awards"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearChanceState")
  }
}
</script>