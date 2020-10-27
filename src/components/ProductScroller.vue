<template>
  <div>
    <div class="product__buttons">
      <!-- <div class="product__buttons--item">
        <router-link :to="{ name: 'materials' }" tag="button" class="btn product__buttons--item--btn">
          Our Materials &#8594
          
        </router-link>
      </div>
      <div class="product__buttons--item">
        <router-link :to="{ name: 'disposal' }" tag="button" class="btn product__buttons--item--btn">
          Disposal Information &#8594
          
        </router-link>
      </div> -->

      <div class="product__buttons--item">
        <router-link :to="{ name: 'testing' }" tag="button" class="btn product__buttons--item--btn">
          Testing & Design<span class="hiddenMdAndDown"> &#8594</span>
          
        </router-link>
      </div>


      <div class="product__buttons--item">
        <router-link :to="{ name: 'data' }" tag="button" class="btn product__buttons--item--btn">
          Performance Data<span class="hiddenMdAndDown"> &#8594</span>
          
        </router-link>
      </div>
    </div>
    <hr>
    <div style="margin-top:4rem;"><h3>Explore Our Products:</h3></div>
  	<div class="product-scroller">
  		<transition name="fade">
        <Loader v-if="!products || products.length == 0" />
      </transition>
      <div v-dragscroll.x="true" class="dragscroll" v-if="products && products.length > 0">
        <div class="product-scroller--item mb-5" v-for="item in products" :key="item.id">
          
            <div class="card">
              <img :src="item.picUrl" :alt="item.title">
              <div class="card__body">
                <router-link :to="item.to">
                  <h4 class="color-text">{{item.title}}  &#8594</h4>
                </router-link>
                <!--<p class="light">{{item.text}}</p>-->
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