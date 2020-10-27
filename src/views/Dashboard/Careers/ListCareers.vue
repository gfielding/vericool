<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>All Careers</h1>
        <router-link :to="{ name: 'addcareer' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>

      <transition name="fadeStop">
        <Loader v-if="!careers || careers.length == 0" />
      </transition>

      <div class="list__item" v-for="item in careers" :key="item.id">
        <div>
          <h4>{{item.title}}</h4>
          <div v-html="$options.filters.truncate(item.description, 100)"></div>
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/career/` + item.id">
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
  name: 'listcareers',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Careers",
      }
    ]
  }),
  filters: { 
    truncate: function(string, value) {
        return string.substring(0, value) + '...';
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'careers']),
  },
  methods: {
    remove(item) {
      fb.careersCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>