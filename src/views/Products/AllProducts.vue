<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page all-products">
      <h1>All Products</h1>
      <h3>Vericool™ products can easily be placed in curbside recycling, home compost or even dissolved in water.</h3>
      <hr class="mt-5 mb-5"> 
      <transition name="fade">
        <Loader v-if="!products || products.length == 0" />
      </transition>
      <div class="all-products__grid mt-5 mb-5" v-if="products && products.length > 0">
        <div class="all-products__grid--item" v-for="item in products" :key="item.id">
          <router-link :to="item.to">
            <div class="card" data-aos="flip-left" data-aos-once="true" data-aos-delay="200">
              <img :src="item.picUrl" :alt="item.title">
              <div class="card__body">
                <h4 class="color-text">{{item.title}}</h4>
                <p class="light">{{item.text}}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
      <hr style="margin-top:3rem;">
    </div>
  </div>
</template>

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
  async mounted () {
    if (!this.products || this.products.length < 1) {
      this.$store.dispatch("getProducts")
    }
  },
  components: {
    ProductNav,
    Loader,
    Footer
  },
}
</script>