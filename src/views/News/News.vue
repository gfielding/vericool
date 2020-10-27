<template>
	<div>
		<Nav />
	  <div class="page news">
	  	<div class="news__hero">
	    </div>
	    <div class="container">
	    	<div class="news__main">
	    		<h1>Latest Updates</h1>
	    		<hr>

	    		<transition name="fadeStop">
            <Loader v-if="!articles || articles.length == 0" />
          </transition>

      
          <div v-for="item in articles" :key="item.id" class="list__item mt-5">
          	<div>
          		<img :src="item.picUrl" style="height:auto;" alt="">
          	</div>
          	<div>
          		<div class="flex align-center justify-space-between mb-3">
		   					<h3 class="item--title">{{item.title}}</h3>
		   					<div class="light">{{item.date | moment("MMM Do, YYYY")}}</div>
	   					</div>
	            <div v-html="$options.filters.truncate(item.body, 360, '...')"></div>
	            <router-link :to="`/news/` + item.id">
	            	<button class="btn btn__primary">Read More &#8594</button>
	            </router-link>
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
  name: 'news',
  computed: {
    ...mapState(['articles']),
  },
  async mounted () {
    if (!this.articles || this.articles.length < 1) {
      this.$store.dispatch("getArticles")
    }
  },
  components: {
    Nav,
    Loader,
    Footer
  },
}
</script>