<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Edit Post</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Hero Image</label>
            <img :src="articleInfo.picUrl" alt="" style="width:100%;">

          </div>
          <div>
            <label for="title">Title</label>
            <input type="text" placeholder="Title" v-model.trim="articleInfo.title" id="title" required />
          </div>

          <div class="mb-5">
            <label for="date">Published Date</label>
            <input type="date" placeholder="Date Published" v-model.trim="articleInfo.date" id="date" required />
          </div>

          <vue-editor v-model="articleInfo.body" placeholder="Article Body"></vue-editor>
   
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'postlist' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editPost()">
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
import { VueEditor } from "vue2-editor";
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'newpost',
  data() {
    return {
      performingRequest: false,
      post: {
        title: '',
        pic: null,
        body: '',
        date: ''
      },
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Posts",
          to: "/dashboard/posts"
        },
        {
          title: "Edit Post",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'articleInfo']),
  },
  components: {
    NavAdmin,
    VueEditor,
    Footer
  },
  created () {
    this.$store.dispatch("getArticleFromId", this.$route.params.id);
  },
  methods: {
    editPost() {
      this.performingRequest = true
      let {article} = this.articleInfo
      fb.articlesCollection.doc(this.articleInfo.id).update(this.articleInfo)
      setTimeout(() => {
        this.performingRequest = false
        let url = "/dashboard/posts"
        this.$router.push(url)
      }, 2000)
      
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.$store.dispatch("clearArticleState")
  }
}
</script>