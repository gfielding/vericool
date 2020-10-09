<template>
  <div>
    <Nav />
    <div class="page customers">
      <div class="distribution__hero">
      </div>
      <div class="container">
        <div class="distribution__main">
          <h1>Distribution Network</h1>
          <h3>Our Global Network is Ready to Fill Your Orders</h3>
          <hr>
          <p>Helvetica synth fam cardigan edison bulb, coloring book jianbing sartorial. Pug 90's chia live-edge art party. VHS fingerstache iPhone, viral bicycle rights air plant gluten-free health goth chambray listicle gochujang kombucha. Ugh mustache thundercats cray authentic banh mi venmo church-key. Activated charcoal bushwick scenester, organic iPhone direct trade viral poutine celiac lyft paleo everyday carry retro af. Readymade small batch celiac banjo scenester.</p>
          <img class="distribution__main--image" src="https://firebasestorage.googleapis.com/v0/b/vericool-53dd0.appspot.com/o/Asset%201%402x.png?alt=media&token=18f01be0-bb4e-4d6a-9f81-6d5a2bba16fd" alt="">
        </div>  
        
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'distribution',
  components: {
    Nav,
    Loader
  }
}
</script>