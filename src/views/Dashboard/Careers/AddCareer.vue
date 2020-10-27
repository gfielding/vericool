<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add Career</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="mb-4">
            <label for="title">Title</label>
            <input type="text" placeholder="Job Title" v-model.trim="careerForm.title" id="title" />
          </div>
          <vue-editor v-model="careerForm.description" placeholder="Job Description"></vue-editor>

          <div class="flex justify-space-between">
            <router-link :to="{ name: 'listcareers' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addCareer()">
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
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'addcareer',
  data() {
    return {
      performingRequest: false,
      careerForm: {
        title: '',
        description: ''
      },
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
          title: "Add Career",
        },
      ]
    }
  },
  components: {
    VueEditor,
    NavAdmin,
    Footer
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  methods: {
    addCareer() {
      this.performingRequest = true
      setTimeout(() => {
        let career = this
        fb.careersCollection.add({
          title: this.careerForm.title,
          description: this.careerForm.description
        })
        .then(
          doc => {
            fb.careersCollection.doc(doc.id).update({
              id: doc.id,
              created: fb.firestore.FieldValue.serverTimestamp(),
            })
          }
        )
        this.performingRequest = false
        this.careerForm.title = ''
        this.careerForm.description = ''
      }, 1000)
    },
  }
}
</script>