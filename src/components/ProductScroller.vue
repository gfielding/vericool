<template>
  <div>
    
    <!-- <hr> -->
    <div class="mt-5"><h2>Explore Our Products:</h2></div>
  	<div class="product-scroller">
  		<transition name="fade">
        <Loader v-if="!products || products.length == 0" />
      </transition>
      <div v-dragscroll.x="true" class="dragscroll" v-if="products && products.length > 0">
        <div class="product-scroller--item mb-6" v-for="item in products" :key="item.id">
          
            <div class="card">
              <img :src="item.picUrl" :alt="item.title" />
              <div class="card__body">
                <router-link :to="`/products/` + item.to" tag="button" class="btn btn__ghost">
                  <span>{{item.title}}</span><i class="fad fa-chevron-right ml-3"></i>
                  <!-- <h4 class="color-text">{{item.title}}  &#8594</h4> -->
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
  components: {
    Loader
  },
}
</script>