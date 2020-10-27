<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
    	<h1>Applications</h1>
      <hr style="margin:2rem 0 1rem 0;">

      <transition name="fadeStop">
        <Loader v-if="!applications || applications.length == 0" />
      </transition>

      <div class="list__item" v-for="item in applications" :key="item.id">
        <div class="flex flex-grow flex-column">
          <h3 class="item--title">{{appliedDate(item) | moment("MMM Do, YYYY") }} // <span class="dark-text">{{item.name}}</span></h3>
          <p>{{item.job.title}}</p>
          <!-- <div v-html="$options.filters.truncate(item.description, 100)"></div> -->
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/applications/` + item.id">
            <button class="btn btn__outlined ma-2">View</button>
          </router-link>
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
  name: 'listapplications',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Applications",
      }
    ]
  }),
  filters: { 
    truncate: function(string, value) {
        return string.substring(0, value) + '...';
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'applications']),
  },
  methods: {
    remove(item) {
      fb.applicationCollection.doc(item.id).delete()
    },
    appliedDate(item) {
      return item.created.toDate()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>