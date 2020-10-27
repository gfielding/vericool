<template>
  <div>
    <ProductNav :crumbs="crumbs" />
    <div class="page custom">
      <h1>Custom Orders</h1>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ProductNav from '@/components/ProductNav.vue'

export default {
  name: 'custom',
  data () {
    return {
      crumbs: [
        {
          title: "All Products",
          to: { name: "products"}
        },
        {
          title: "Custom Orders",
          to: false
        }
      ]
    }
  },
  components: {
    ProductNav
  },
}
</script>