<template>
	<div>
    <Nav />
    <div class="page article">

    	<transition name="fadeStop">
        <Loader v-if="!articleInfo" />
      </transition>


	      <div v-if="articleInfo" class="article__hero" v-bind:style="{ backgroundImage: 'url(' + articleInfo.picUrl + ')' }"></div>
	    	<div class="container">

        <div class="article__main" v-if="articleInfo">

          <h1>{{articleInfo.title}}</h1>
          <div class="light">
        		{{articleInfo.date | moment("MMM Do YYYY")}}
        	</div>
          <hr>
          <div v-html="articleInfo.body"></div>
          <hr>
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
  name: 'article',
  computed: {
    ...mapState(['articleInfo']),
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getArticleFromId", this.$route.params.id);
  },
  components: {
    Nav,
    Loader,
    Footer
  }
}
</script>