<template>
  <div class="greyback">
    <Nav />
    <div class="page pr">
    	<div class="faq__hero">
      </div>
      <div class="container pb-8">
        <div class="faq__main">
          <h1>Frequently Asked Questions</h1>
          <hr>

          <transition name="fadeStop">
            <Loader v-if="!faqs || faqs.length == 0" />
          </transition>

          <div class="list__item" v-for="item in faqs" :key="item.id">
            <div>
              <h4>{{item.question}}</h4>
              <div v-html="item.answer"></div>
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
  name: 'faqs',
  computed: {
    ...mapState(['faqs']),
  },
  components: {
    Nav,
    Loader,
    Footer
  },
  async mounted () {
    if (!this.faqs || this.faqs.length < 1) {
      this.$store.dispatch("getFAQs")
    }
  },
  metaInfo: {
    title: 'FAQ',
  },
}
</script>