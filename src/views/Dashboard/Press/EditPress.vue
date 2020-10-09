<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Edit Press Link</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Title</label>
            <input type="text" placeholder="Link Title" v-model.trim="pressInfo.title" id="title" required />
          </div>
          <div class="">
            <label for="date">Published Date</label>
            <input type="date" placeholder="Date Published" v-model.trim="pressInfo.date" id="date" required />
          </div>
          <div class="">
            <label for="url">URL</label>
            <input type="url" placeholder="Paste Link Here" v-model.trim="pressInfo.url" id="url" required />
          </div>
          
          <div>
            <label for="excerpt">Excerpt</label>
            <textarea name="excerpt" id="excerpt" cols="30" rows="10" v-model.trim="pressInfo.excerpt" required></textarea>
          </div>
          <div class="flex justify-space-between">
            <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Cancel</button>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editPress()">
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
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'
import NavAdmin from '@/components/NavAdmin.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'editpress',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "In The Press",
          to: "/dashboard/press"
        },
        {
          title: "Edit Press",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'pressInfo']),
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getPressFromId", this.$route.params.id);
  },
  components: {
    NavAdmin,
  },
  methods: {
    editPress() {
      this.performingRequest = true
      let {press} = this.pressInfo
      fb.pressCollection.doc(this.pressInfo.id).update(this.pressInfo)
      setTimeout(() => {
        this.performingRequest = false
      }, 1000)
      let url = "/dashboard/press"
      this.$router.push(url)
    },
    cancel() {
      let url = "/dashboard/press"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearPressState")
  }
}
</script>