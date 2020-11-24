<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Ohana Pic</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Upload</label>
            <croppa 
              v-model="ohana.pic"
              :prevent-white-space="false"
              :width="360"
              :height="360"
              :quality="1"
              canvas-color="transparent"
              initial-size="cover"
            ></croppa>

          </div>
          
          <div class="flex justify-space-between">
            <router-link :to="{ name: 'logolist' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addPic()">
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
  name: 'addohanapic',
  data() {
    return {
      performingRequest: false,
      ohana: {
        pic: null,
      },
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Ohana Pics",
          to: "/dashboard/ohanapics"
        },
        {
          title: "Add Ohana Image",
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
    addPic() {
      this.performingRequest = true
      this.ohana.pic.generateBlob(
        blob => {
          let downloadURL
          let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
          let picRef = fb.storageRef.child('logoPics/' + rand)
          picRef.put(blob).then((snap) => {
            picRef.getDownloadURL().then(function(downloadURL) {
              console.log('File available at', downloadURL)
              fb.ohanaPicsCollection.add({
                picUrl: downloadURL,
              })
              .then(
                doc => {
                  fb.ohanaPicsCollection.doc(doc.id).update({
                    id: doc.id,
                    created: fb.firestore.FieldValue.serverTimestamp(),
                  })
                }
              )
            })
          })
          setTimeout(() => {
            let url = "/dashboard/ohanapics"
            this.$router.push(url)
          }, 5000)
        }
      )
    },
  },
  beforeDestroy(){
    this.performingRequest = false
    this.ohana.pic = null
  }
}
</script>