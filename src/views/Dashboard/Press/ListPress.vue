<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>In The Press</h1>
        <router-link :to="{ name: 'addpress' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!press || press.length == 0" />
      </transition>

      <div class="list__item" v-for="item in press" :key="item.id">
        <div>
          <h4>{{item.title}}<span class="light"> // {{item.date}}</span></h4>
          <p v-html="$options.filters.truncate(item.excerpt, 100)"></p>
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/press/` + item.id">
            <button class="btn btn__outlined ma-2">Edit</button>
          </router-link>
          <a :href="item.url" target="_blank" nofollow>
            <button class="btn btn__outlined ma-2">Visit</button>
          </a>
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
  name: 'press',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "In The Press",
      }
    ]
  }),
  filters: { 
    truncate: function(string, value) {
        return string.substring(0, value) + '...';
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'press']),
  },
  methods: {
    remove(item) {
      fb.pressCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>