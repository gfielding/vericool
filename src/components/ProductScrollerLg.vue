<template>
  <div class="content-wrapper" style="margin-top:6rem;">
    <h2>Explore Our Products:</h2>
	<div class="product-scroller-lg">
		<transition name="fade">
      <Loader v-if="!products || products.length == 0" />
    </transition>
    <div v-dragscroll.x="true" class="dragscroll">
      <div v-if="products && products.length > 0" class=" product-scroller-lg--item mt-5 mb-5" v-for="item in products" :key="item.id">
        
          <div class="card">
            <img :src="item.picUrl" :alt="item.title">
            <div class="card__body">
              <router-link :to="`products/` + item.to">
                <h4 class="card__title--link">{{item.title}} &#8594</h4>
              </router-link>
              <!--<p class="light">{{item.text}}</p>-->
            </div>
          </div>
        
      </div>
    </div>
  </div>
</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '@/components/Loader.vue'

export default {
  computed: {
    ...mapState(['products']),
  },
  async mounted () {
    if (!this.products || this.products.length < 1) {
      this.$store.dispatch("getProducts")
    }
  },
  components: {
    Loader
  },
}
</script>