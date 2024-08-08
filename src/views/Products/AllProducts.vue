<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page all-products">
      <h1 class="pt-5">All Products</h1>
      <!-- <h3>Vericool™ products can easily be placed in curbside recycling, home compost or even dissolved in water.</h3> -->
      <hr class="mt-3 mb-3"> 
      <transition name="fade">
        <Loader v-if="!products || products.length == 0" />
      </transition>
      <div class="all-products__grid mt-5 mb-5" v-if="products && products.length > 0">
        <div class="all-products__grid--item" v-for="item in products" :key="item.id">
          <router-link :to="item.to">
            <div class="card" data-aos="flip-left" data-aos-once="true" data-aos-delay="200">
              <v-lazy-image :src="item.picUrl" :alt="item.title" />
              <div class="card__body">
                <h4>{{item.title}}</h4>
                <p>{{item.text}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
Vericooler™

<script>
import { mapState } from 'vuex'
import ProductNav from '@/components/ProductNav.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'all-products',
  data () {
    return {
      crumbs: [
        {
          title: "All Products",
          to: false
        }
      ]
    }
  },
  computed: {
    ...mapState(['products']),
  },
  components: {
    ProductNav,
    Loader,
    Footer
  },
  metaInfo: {
    title: 'Products'
  },
}
</script>