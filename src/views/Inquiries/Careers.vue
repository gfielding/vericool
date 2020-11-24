<template>
  <div class="greyback">
    <Nav />
    <div class="page careers">
      <div class="careers__hero">
      </div>
    	<div class="container">

        <div class="careers__main">

          <h1>Current Job Openings</h1>
          <hr>

          <transition name="fadeStop">
            <Loader v-if="!careers || careers.length == 0" />
          </transition>

      
          <div v-for="item in careers" :key="item.id" class="list__item mt-5">
            <div class="flex align-center justify-space-between">
              <h3 class="item--title">{{item.title}}</h3>
              <router-link :to="`/careers/` + item.id">
                <button class="btn btn__primary mb-3">Apply
                  <i class="ml-2 fad fa-external-link"></i>
                </button>
              </router-link>
            </div>
            <div v-html="item.description"></div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.list__item {
  flex-direction: column;
}
</style>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'careers',
  computed: {
    ...mapState(['careers']),
  },
  async mounted () {
    if (!this.careers || this.careers.length < 1) {
      this.$store.dispatch("getCareers")
    }
  },
  components: {
    Nav,
    Loader,
    Footer
  },
  metaInfo: {
    title: 'Career Opportunities',
    meta: [
      { name: 'description', content: 'Find your next career at Vericool' }
    ],
  },
}
</script>