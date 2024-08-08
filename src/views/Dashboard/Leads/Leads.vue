<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>Leads</h1>
      </div>
      <hr>
      <transition name="fadeStop">
        <Loader v-if="!realLeads || realLeads.length == 0" />
      </transition>
      <div class="list__item" v-for="item in realLeads" :key="item.id">
        <div>
          <h4>{{item.name}}<span class="light"> // {{item.company}} // {{item.date | moment("MMM Do YYYY")}}</span></h4>
        </div>
        <div class="list__button">
          <router-link :to="`/dashboard/leads/` + item.id">
            <button class="btn btn__outlined ma-2">View</button>
          </router-link>
          <button class="btn btn__outlined ma-2" @click="remove(item)"><i class="fa fa-trash"></i></button>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavAdmin from '@/components/NavAdmin.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'leads',
  data: () => ({
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
      {
        title: "Leads",
      }
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile', 'leads']),
    realLeads: function() {
      return this.leads.filter(function(lead) {
        return lead.date = new Date(lead.created.seconds * 1000)
      })
    }
  },
  methods: {
    remove(item) {
      fb.leadsCollection.doc(item.id).delete()
    }
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  }
}
</script>