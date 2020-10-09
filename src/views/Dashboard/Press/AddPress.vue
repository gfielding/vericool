<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Press Link</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Title</label>
            <input type="text" placeholder="Link Title" v-model.trim="press.title" id="title" required />
          </div>
          <div class="">
            <label for="date">Published Date</label>
            <input type="date" placeholder="Date Published" v-model.trim="press.date" id="date" required />
          </div>
          <div class="">
            <label for="url">URL</label>
            <input type="url" placeholder="Paste Link Here" v-model.trim="press.url" id="url" required />
          </div>
          
          <div>
            <label for="excerpt">Excerpt</label>
            <textarea name="excerpt" id="excerpt" cols="30" rows="10" v-model.trim="press.excerpt" required></textarea>
          </div>
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'listpress' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addPress()">
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
  name: 'addpress',
  data() {
    return {
      performingRequest: false,
      press: {
        title: '',
        excerpt: '',
        url: '',
        date: ''
      },
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
          title: "Add Press",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    NavAdmin,
  },
  methods: {
    addPress() {
      this.performingRequest = true
      setTimeout(() => {
        fb.pressCollection.add({
          title: this.press.title,
          excerpt: this.press.excerpt,
          url: this.press.url,
          date: this.press.date
        })
        .then(
          doc => {
            fb.pressCollection.doc(doc.id).update({
              id: doc.id,
              created: fb.firestore.FieldValue.serverTimestamp(),
            })
          }
        )
        let url = "/dashboard/press"
        this.$router.push(url)
      }, 1000)
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.press.title = ''
    this.press.excerpt = ''
    this.press.url = '',
    this.press.date = ''
  }
}
</script>