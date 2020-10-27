<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <h1>Dashboard</h1>
      <hr">
      <div class="dashboard__grid">
        <div class="dashboard__grid--item" v-for="item in items" key="index">
          <router-link :to="{ name: item.name }">
            <div class="card">
              <div class="card__title"><h4>{{item.title}}</h4></div>
            </div> 
          </router-link>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'dashboard',
  data: () => ({
    items: [
      {
        title: "Careers",
        name: 'listcareers'
      },
      {
        title: "In The Press",
        name: 'listpress'
      },
      {
        title: "Second Chances",
        name: 'chances'
      },
      {
        title: "Blog Posts",
        name: 'postlist'
      },
      {
        title: "Logos",
        name: 'logolist'
      },
      {
        title: "Awards",
        name: 'listawards'
      },
      {
        title: "Impact Pics",
        name: 'impactlist'
      },
      {
        title: "Leads",
        name: 'leads'
      },
      {
        title: "Applications",
        name: 'applications'
      },
    ],
    crumbs: [
      {
        title: "Home",
        to: "/dashboard"
      },
    ]
  }),
  computed: {
    ...mapState(['currentUser', 'userProfile']),
  },
  components: {
    NavAdmin,
    Footer
  }
}
</script>