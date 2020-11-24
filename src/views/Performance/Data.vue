<template>
  <div class="greyback">
    <Nav />
    <div class="page data">
      <div class="container">
        <h1 class="mt-5">Vericool™ Performance Data</h1>
        <hr>
        <div class="text-center">
          <h3 class="mt-5 mb-3">VC Plus vs EPS (Styrofoam®)</h3>
          <div class="flex-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F1-Vc-plus-vsEps-min.jpg?alt=media&token=3d2f4090-986d-419a-a18b-c00e365bb7c9" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
          </div>
          <h3 class="mt-5 mb-3">VC Plus vs Competition (Frozen Meat)</h3>
          <div class="flex-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F2-vc-plus-vs-comp-frozenmeat1-min.jpg?alt=media&token=93e42b6b-0ccf-444d-bc5d-73308e1626ff" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
          </div>
          <h3 class="mt-5 mb-3">VC Plus vs Competition (Frozen Meat)</h3>
          <div class="flex-img">
            <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F3-vc-plus-vs-comp-frozenmeat2-min.jpg?alt=media&token=2eaea755-e52a-4960-ac71-94293adb3561" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
          </div>
        </div>
      </div>
      <div class="callout pb-8">
        <div class="container">
          <div class="text-center">
            <h2>Performance Testing</h2>
            <h3 class="mt-5 mb-3">Pharmaceuticals</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F4-vc-plus-performance-middlecorner-min.jpg?alt=media&token=e2bb62b2-b3e0-4315-89b6-92a91fff21fb" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
            <h3 class="mt-5 mb-3">Pharmaceuticals</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F5-Fiber-perfomancepharma-min.jpg?alt=media&token=179646da-9ddb-4e51-87ae-18f169f6eebe" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
            <h3 class="mt-5 mb-3">Pharmaceuticals</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F6-Vc-plus-perfomancepharma-min.jpg?alt=media&token=b41f93e5-8aaa-4c9f-aa83-baffef6c389f" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
            <h3 class="mt-5 mb-3">Medical</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F7-vc-plus-performancemedical-min.jpg?alt=media&token=bb3ad7ce-f072-415b-aad6-5c15279ad690" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
            <h3 class="mt-5 mb-3">Medical</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F8-Vc-plus-perfomancemedical-min.jpg?alt=media&token=2ee0ad35-4f32-4b3a-8aa7-02586f6419e8" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
            <h3 class="mt-5 mb-3">Frozen Meats</h3>
            <div class="flex-img">
              <img src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Data%2F9-fiber-performancefrozen-meats-min.jpg?alt=media&token=ffe0e555-449c-4d34-a72b-835bf6cd07f8" alt="" data-aos="fade" data-aos-once="true" data-aos-delay="200">
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <ProductButtons />
      </div>
    </div>
    <div class="callout">
      <div class="container">
        <ProductScroller />
      </div>
    </div>
    <Footer />
  </div>
</template>


<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'
import ProductScroller from '@/components/ProductScroller.vue'
import ProductButtons from '@/components/ProductButtons.vue'

export default {
  name: 'data',
  components: {
    Nav,
    ProductScroller,
    ProductButtons,
    Footer
  },
  metaInfo: {
    title: 'Performance Data',
    meta: [
      { name: 'description', content: 'Thermal Packaging that Performs as well as EPS' }
    ],
  },
}
</script>