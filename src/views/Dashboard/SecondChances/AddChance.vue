<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Quote</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Profile Image</label>
            <croppa 
              v-model="chance.pic"
              :prevent-white-space="true"
              :width="240"
              :height="240"
              :quality="10"
              canvas-color="#eeeeee"
              initial-size="cover"
            ></croppa>

          </div>
          <div>
            <label for="name">First Last, Title</label>
            <input type="text" placeholder="Name and Title" v-model.trim="chance.name" id="name" required />
          </div>
          
          <div>
            <label for="quote">Quote</label>
            <textarea name="quote" id="quote" cols="30" rows="10" v-model.trim="chance.quote" required></textarea>
          </div>
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'chances' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addQuote()">
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
  name: 'addchance',
  data() {
    return {
      performingRequest: false,
      chance: {
        name: '',
        pic: null,
        quote: ''
      },
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
          title: "Add Quote",
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
    addQuote() {
      this.performingRequest = true
      this.chance.pic.generateBlob(
        blob => {
          let downloadURL
          let name = this.chance.name
          let quote = this.chance.quote
          let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
          let picRef = fb.storageRef.child('profilePics/' + rand)
          picRef.put(blob).then((snap) => {
            picRef.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL)
              fb.chancesCollection.add({
                name: name,
                picUrl: downloadURL,
                quote: quote,
              })
              .then(
                doc => {
                  fb.chancesCollection.doc(doc.id).update({
                    id: doc.id,
                    created: fb.firestore.FieldValue.serverTimestamp(),
                  })
                }
              )
            })
          })
          setTimeout(() => {
            let url = "/dashboard/chances"
            this.$router.push(url)
          }, 2000)
        }
      )
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.chance.name = ''
    this.chance.pic = null
    this.chance.quote = ''
  }
}
</script>