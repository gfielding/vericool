<template>
  <div>
    <Nav />
    <div class="page pr">
    	<div class="pr__hero">
      </div>
      <div class="container">
        <div class="pr__main">
          <h1>In The News</h1>
          <hr>

          <transition name="fadeStop">
            <Loader v-if="!press || press.length == 0" />
          </transition>

          <div v-for="item in press" :key="item.id" class="list__item mt-5">
            <div class="flex align-start justify-space-between">
              <h3 class="item--title">{{item.date | moment("MMM Do YYYY") }} // <span class="dark-text">{{item.title}}</span></h3>
              <div class="ml-4">
                <a :href="item.url" target="_blank" nofollow>
                  <button class="btn btn__primary">Visit
                    <i class="ml-2 fad fa-external-link"></i>
                  </button>
                </a>
              </div>
            </div>
            <div v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'pr',
  computed: {
    ...mapState(['press']),
  },
  components: {
    Nav,
    Loader
  },
  async mounted () {
    if (!this.press || this.press.length < 1) {
      this.$store.dispatch("getPress")
    }
  },
}
</script>