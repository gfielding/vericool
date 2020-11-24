<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead text-center">
      	<h1>Add FAQ</h1>
      </div>
      <transition name="fade" />
        <div v-if="!faqInfo">
          <Loader />
        </div>
      </transition>
      <div class="form" v-if="faqInfo">
        <form @submit.prevent>
          <div class="mb-4">
            <label for="title">Question</label>
            <input type="text" placeholder="Question" v-model.trim="faqInfo.question" id="title" />
          </div>
          <!-- <div>
            <label for="answer">Answer</label>
            <textarea name="answer" id="answer" cols="30" rows="10" v-model.trim="faqInfo.answer" required></textarea>
          </div> -->

          <vue-editor v-model="faqInfo.answer" placeholder="Answer"></vue-editor>

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
import Loader from '@/components/Loader.vue'
import { VueEditor } from "vue2-editor";
import router from '@/router'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'editquestion',
  data() {
    return {
      performingRequest: false,
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
          title: "Edit FAQ",
        },
      ]
    }
  },
  components: {
    NavAdmin,
    Footer,
    Loader,
    VueEditor
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getFAQFromId", this.$route.params.id);
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'faqInfo']),
  },
  methods: {
    addFAQ() {
      this.performingRequest = true
      fb.faqCollection.doc(this.faqInfo.id).update(this.faqInfo)
      setTimeout(() => {
        this.performingRequest = false
        let url = "/dashboard/faqs"
        this.$router.push(url)
      }, 2000)
    },
  },
  beforeDestroy(){
    this.$store.dispatch("clearFAQState")
  }
}
</script>