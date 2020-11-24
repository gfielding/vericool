<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add FAQ</h1>
      </div>
      <div class="form">
        <form @submit.prevent>
          <div class="mb-4">
            <label for="title">Question</label>
            <input type="text" placeholder="Question" v-model.trim="faqForm.question" id="title" />
          </div>
          <!-- <div>
            <label for="answer">Answer</label>
            <textarea name="answer" id="answer" cols="30" rows="10" v-model.trim="faqForm.answer" required></textarea>
          </div> -->

          <vue-editor v-model="faqForm.answer" placeholder="Answer"></vue-editor>

          <div class="flex justify-space-between">
            <router-link :to="{ name: 'listquestions' }">
              <button class="btn btn__outlined mt-4 mb-5">Cancel</button>
            </router-link>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="addFAQ()">
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
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
import { VueEditor } from "vue2-editor";
import router from '@/router'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'addquestion',
  data() {
    return {
      performingRequest: false,
      faqForm: {
        question: '',
        answer: ''
      },
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "FAQs",
          to: "/dashboard/faqs"
        },
        {
          title: "Add FAQ",
        },
      ]
    }
  },
  components: {
    NavAdmin,
    Footer,
    VueEditor
  },
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  methods: {
    addFAQ() {
      this.performingRequest = true
      setTimeout(() => {
        fb.faqCollection.add({
          question: this.faqForm.question,
          answer: this.faqForm.answer
        })
        .then(
          doc => {
            fb.faqCollection.doc(doc.id).update({
              id: doc.id,
              created: fb.firestore.FieldValue.serverTimestamp(),
            })
          }
        )
        this.performingRequest = false
        this.faqForm.question = ''
        this.faqForm.answer = ''
      }, 1000)
    },
  }
}
</script>