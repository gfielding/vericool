<template>
  <div class="greyback">
    <Nav />
    <div class="page pr">
    	<div class="awards__hero">
      </div>
      <div class="container pb-8">
        <div class="awards__main">
          <h1>Awards</h1>
          <hr>

          <transition name="fadeStop">
            <Loader v-if="!awards || awards.length == 0" />
          </transition>

          <div v-for="item in awards" :key="item.id" class="list__item mt-5">
            <div class="flex align-start justify-space-between">
              <div class="flex">
                <div>
                  <v-lazy-image :src="item.picUrl" alt="" class="award__item--pic" />
                </div>
                <div>
                  <h3 class="item--title"><span class="dark-text">{{item.title}}</span></h3>
                  <div v-html="item.description"></div>
                </div>
              </div>
              <div class="ml-4">
                <a :href="item.url" target="_blank" nofollow>
                  <button class="btn btn__primary flex">Visit
                    <i class="ml-2 fad fa-external-link"></i>
                  </button>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'awards',
  computed: {
    ...mapState(['awards']),
  },
  components: {
    Nav,
    Loader,
    Footer
  },
  async mounted () {
    if (!this.awards || this.awards.length < 1) {
      this.$store.dispatch("getAwards")
    }
  },
  metaInfo: {
    title: 'Awards',
  },
}
</script>