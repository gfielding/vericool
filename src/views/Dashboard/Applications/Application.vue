<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="flex justify-space-between">
        <h1 class="mb-0">Application</h1>
        <div>
          <button class="btn btn__primary" @click="cancel()">Go Back
          </button>
        </div>
      </div>
      <hr>

      <transition name="fade">
        <div v-if="!applicationInfo">
          <Loader />
        </div>
      </transition>
      <transition name="fade">
        <div v-if="applicationInfo">
          <!-- <h2 class="mb-2">{{applicationInfo.name}}</h2>
          <h4>{{appliedDate | moment("MMM Do, YYYY")}}</h4> -->
          <table>
            
              <td><strong>Name</strong></td>
              <td>{{applicationInfo.name}}</td>
            </tr>
            <tr>
            <tr>
              <td><strong>Email</strong></td>
              <td>{{applicationInfo.email}}</td>
            </tr>
            <tr>
              <td><strong>Phone:</strong></td>
              <td>{{applicationInfo.phone}}</td>
            </tr>
            <tr>
              <td><strong>Postion: </strong></td>
              <td>{{applicationInfo.job.title}}</td>
            </tr>
            <tr>
              <td><strong>Applied Date</strong></td>
              <td>{{appliedDate | moment("MMM Do, YYYY")}}</td>
            </tr>
            <tr>
            <tr>
              <td><strong>Why:</strong></td>
              <td>{{applicationInfo.ehy}}</td>
            </tr>
            <tr>
              <td><strong>Experience:</strong></td>
              <td>{{applicationInfo.experience}}</td>
            </tr>
            <tr>
              <td><strong>Availability</strong></td>
              <td>{{applicationInfo.availability}}</td>
            </tr>
            <tr>
              <td><strong>Resumé</strong></td>
              <td>
                <a :href="applicationInfo.docUrl" target="_blank">Open</a>
              </td>
            </tr>
          </table>
        </div>
      </transition>
      </div>
      <Footer />
    </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'
import NavAdmin from '@/components/NavAdmin.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'application',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "applications",
          to: "/dashboard/applications"
        },
        {
          title: "Application",
        },
      ]
    }
  },
  created () {
    this.$store.dispatch("getApplicationFromId", this.$route.params.id);
  },
  components: {
    NavAdmin,
    Loader,
    Footer
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'applicationInfo']),
    appliedDate() {
      return this.applicationInfo.created.toDate()
    }
  },
  methods: {
    cancel() {
      let url = "/dashboard/applications"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearApplicationState")
  }
}
</script>