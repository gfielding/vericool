<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>Awards</h1>
        <router-link :to="{ name: 'addaward' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!awards || awards.length == 0" />
      </transition>

      <div class="list__item" v-for="item in awards" :key="item.id">
        <div class="list__item--body">
          <v-lazy-image :src="item.picUrl" alt="" />
          <div class="inline-block">
            <h4>{{item.title}}</h4>
          </div>
        </div>
        <div class="list__button">
          <!-- <router-link :to="`/dashboard/awards/` + item.id">
            <button class="btn btn__outlined ma-2">Edit</button>
          </router-link> -->
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
  name: 'listawards',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Awards",
      }
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile', 'awards']),
  },
  methods: {
    remove(item) {
      fb.awardsCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>