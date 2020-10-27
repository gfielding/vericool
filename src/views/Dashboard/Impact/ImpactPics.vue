<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>Impact Pics</h1>
        <router-link :to="{ name: 'addimpactpic' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!impactPics || impactPics.length == 0" />
      </transition>

      <div class="list__item" v-for="item in impactPics" :key="item.id">
        <div class="list__item--body--sm">
          <img :src="item.picUrl" alt="">
        </div>
        <div class="list__button">
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
  name: 'impactlist',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Impact Pics",
      }
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile', 'impactPics']),
  },
  async mounted() {
    this.$store.dispatch("getImpactPics")
  },
  methods: {
    remove(item) {
      fb.impactPicsCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>