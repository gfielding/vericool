<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Award</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Image</label>
            <croppa 
              v-model="award.pic"
              :prevent-white-space="false"
              :width="240"
              :height="240"
              :quality="10"
              canvas-color="transparent"
              initial-size="contain"
            ></croppa>

          </div>
          <div>
            <label for="title">Award Title</label>
            <input type="text" placeholder="Title" v-model.trim="award.title" id="title" required />
          </div>
          
          <div>
            <label for="description">Description</label>
            <textarea name="description" id="description" cols="30" rows="10" v-model.trim="award.description" required></textarea>
          </div>
          <div class="">
            <label for="url">URL</label>
            <input type="url" placeholder="Paste Link Here" v-model.trim="award.url" id="url" required />
          </div>
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'awards' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addAward()">
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
  name: 'addaward',
  data() {
    return {
      performingRequest: false,
      award: {
        title: '',
        pic: null,
        description: '',
        url: ''
      },
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
          title: "Add Award",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    NavAdmin,
    Footer
  },
  methods: {
    addAward() {
      this.performingRequest = true
      this.award.pic.generateBlob(
        blob => {
          let downloadURL
          let title = this.award.title
          let description = this.award.description
          let url = this.award.url
          let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
          let picRef = fb.storageRef.child('profilePics/' + rand)
          picRef.put(blob).then((snap) => {
            picRef.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL)
              fb.awardsCollection.add({
                title: title,
                picUrl: downloadURL,
                description: description,
                url: url,
              })
              .then(
                doc => {
                  fb.awardsCollection.doc(doc.id).update({
                    id: doc.id,
                    created: fb.firestore.FieldValue.serverTimestamp(),
                  })
                }
              )
            })
          })
          setTimeout(() => {
            let url = "/dashboard/awards"
            this.$router.push(url)
          }, 2000)
        }
      )
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.award.title = ''
    this.award.pic = null
    this.award.description = ''
    this.award.url = ''
  }
}
</script>