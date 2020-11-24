<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>Second Chance Quotes</h1>
        <router-link :to="{ name: 'addchance' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!chances || chances.length == 0" />
      </transition>

      <div class="list__item" v-for="item in chances" :key="item.id">
        <div class="list__item--body">
          <v-lazy-image :src="item.picUrl" alt="" />
          <div class="inline-block">
            <h4>{{item.name}}</h4>
            <p v-html="item.quote"></p>
          </div>
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/chance/` + item.id">
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
  name: 'chances',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Second Chances",
      }
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile', 'chances']),
  },
  methods: {
    remove(item) {
      fb.chancesCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>