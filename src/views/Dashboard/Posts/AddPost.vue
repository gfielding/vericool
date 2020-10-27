<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>New Post</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Hero Image</label>
            <croppa 
              v-model="post.pic"
              :prevent-white-space="true"
              :width="480"
              :height="270"
              :quality="10"
              canvas-color="#eeeeee"
              initial-size="cover"
            ></croppa>

          </div>
          <div>
            <label for="title">Title</label>
            <input type="text" placeholder="Title" v-model.trim="post.title" id="title" required />
          </div>

          <div class="mb-5">
            <label for="date">Published Date</label>
            <input type="date" placeholder="Date Published" v-model.trim="post.date" id="date" required />
          </div>

          <vue-editor v-model="post.body" placeholder="Article Body"></vue-editor>
   
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'postlist' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addPost()">
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
          title: "New Post",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    NavAdmin,
    VueEditor,
    Footer
  },
  methods: {
    addPost() {
      this.performingRequest = true
      this.post.pic.generateBlob(
        blob => {
          let downloadURL
          let title = this.post.title
          let body = this.post.body
          let date = this.post.date
          let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
          let picRef = fb.storageRef.child('articlePics/' + rand)
          picRef.put(blob).then((snap) => {
            picRef.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL)
              fb.articlesCollection.add({
                title: title,
                picUrl: downloadURL,
                body: body,
                date: date
              })
              .then(
                doc => {
                  fb.articlesCollection.doc(doc.id).update({
                    id: doc.id,
                    created: fb.firestore.FieldValue.serverTimestamp(),
                  })
                }
              )
            })
          })
          setTimeout(() => {
            let url = "/dashboard/posts"
            this.$router.push(url)
          }, 2000)
        }
      )
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.post.title = ''
    this.post.pic = null
    this.post.body = ''
    this.post.date = ''
  }
}
</script>