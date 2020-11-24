<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>Logos</h1>
        <router-link :to="{ name: 'addlogo' }">
          <button class="btn"><i class="fad fa-plus fa-2x"></i></button>
        </router-link>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!logos || logos.length == 0" />
      </transition>

      <div class="list__item" v-for="item in logos" :key="item.id">
        <div class="list__item--body--sm">
          <v-lazy-image :src="item.picUrl" alt="" /> 
          <div class="inline-block">
            <h4>{{item.company}}</h4>
          </div>
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
  name: 'logolist',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Logos",
      }
    ]
  }),
  filters: { 
    truncate: function(string, value) {
        return string.substring(0, value) + '...';
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'logos']),
  },
  methods: {
    remove(item) {
      fb.logosCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>