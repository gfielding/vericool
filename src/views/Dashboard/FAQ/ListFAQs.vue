<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>All FAQs</h1>
        <router-link :to="{ name: 'addquestion' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>

      <transition name="fadeStop">
        <Loader v-if="!faqs || faqs.length == 0" />
      </transition>

      <div class="list__item" v-for="item in faqs" :key="item.id">
        <div>
          <h4>{{item.question}}</h4>
          <div v-html="$options.filters.truncate(item.answer, 100)"></div>
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/faqs/` + item.id">
            <button class="btn btn__outlined ma-2">Edit</button>
          </router-link>
          <button class="btn btn__outlined ma-2" @click="remove(item)"><i class="fa fa-trash"></i></button>
        </div>
    </div>
  </div>
  <Footer />
</div>
</template>

<script>
import { mapState } from 'vuex'
import NavAdmin from '@/components/NavAdmin.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'listquestions',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "FAQs",
      }
    ]
  }),
  filters: { 
    truncate: function(string, value) {
        return string.substring(0, value) + '...';
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'faqs']),
  },
  methods: {
    remove(item) {
      fb.faqCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>