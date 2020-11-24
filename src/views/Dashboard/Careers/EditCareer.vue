<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
        <h1>Edit Career</h1>
      </div>
      <div class="form" v-if="careerInfo">
        <form @submit.prevent>
          <div class="mb-4">
            <label for="title">Title</label>
            <input type="text" placeholder="Job Title" v-model.trim="careerInfo.title" id="title" />
          </div>
          <vue-editor v-model="careerInfo.description" placeholder="Job Description"></vue-editor>

          <div class="flex justify-space-between">
            <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Cancel</button>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editCareer()">
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
import { VueEditor } from "vue2-editor";
import router from '@/router'
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'editcareer',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Careers",
          to: "/dashboard/careers"
        },
        {
          title: "Edit Career",
        },
      ]
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getCareerFromId", this.$route.params.id);
  },
  components: {
    VueEditor,
    NavAdmin,
    Footer
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'careerInfo']),
  },
  methods: {
    editCareer() {
      this.performingRequest = true
      let {career} = this.careerInfo
      fb.careersCollection.doc(this.careerInfo.id).update(this.careerInfo)
      setTimeout(() => {
        this.performingRequest = false
      }, 2000)
      let url = "/dashboard/careers"
      this.$router.push(url)
    },
    cancel() {
      let url = "/dashboard/careers"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearCareerState")
  }
}
</script>