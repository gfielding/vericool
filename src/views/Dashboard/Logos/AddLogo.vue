<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Logo</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Logo</label>
            <croppa 
              v-model="logo.pic"
              :prevent-white-space="false"
              :width="240"
              :height="240"
              :quality="10"
              canvas-color="transparent"
              initial-size="contain"
            ></croppa>

          </div>
          <div class="mb-5">
            <label for="name">Company Name</label>
            <input type="text" placeholder="Company Name" v-model.trim="logo.company" id="name" required />
          </div>
          
          
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'logolist' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addLogo()">
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
  name: 'addlogo',
  data() {
    return {
      performingRequest: false,
      logo: {
        company: '',
        pic: null,
        quote: ''
      },
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Logos",
          to: "/dashboard/logolist"
        },
        {
          title: "Add Logo",
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
    addLogo() {
      this.performingRequest = true
      this.logo.pic.generateBlob(
        blob => {
          let downloadURL
          let company = this.logo.company
          let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
          let picRef = fb.storageRef.child('logoPics/' + rand)
          picRef.put(blob).then((snap) => {
            picRef.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL)
              fb.logosCollection.add({
                company: company,
                picUrl: downloadURL,
              })
              .then(
                doc => {
                  fb.logosCollection.doc(doc.id).update({
                    id: doc.id,
                    created: fb.firestore.FieldValue.serverTimestamp(),
                  })
                }
              )
            })
          })
          setTimeout(() => {
            let url = "/dashboard/logos"
            this.$router.push(url)
          }, 2000)
        }
      )
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.logo.company = ''
    this.logo.pic = null
  }
}
</script>