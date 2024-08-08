<template>
  <div>
    <NavAdmin :crumbs="crumbs" />
    <div class="page dashboard">
      <div class="dashboard__lead">
      	<h1>View Lead</h1>
      </div>
      <hr class="mt-2 lead-format">
      <div v-if="leadInfo">
        <h2 class="pb-0">{{leadInfo.name}}</h2>
        <h3>{{leadInfo.company}}</h3>
        <div class="lead-format">{{realDate | moment("MMM Do YYYY")}}</div>
        <div class="lead-format">Email: {{leadInfo.email}}</div>
        <div class="lead-format">Phone: {{leadInfo.phone}}</div>
        <div class="lead-format">Location: {{leadInfo.location}}</div>
        <div class="lead-format">Current Product: {{leadInfo.currentProduct}}</div>
        <div class="lead-format">Current Packaging Type: {{leadInfo.currentPackagingType}}</div>
        <div class="lead-format">Current Monthly Quantities Per Size: {{leadInfo.currentMonthlyQuantitiesPerSize}}</div>
        <div class="lead-format">Current Payload Sizes: {{leadInfo.currentPayloadSizes}}</div>
        <div class="lead-format">Current Insulation Thickness: {{leadInfo.currentInsulationThickness}}</div>
        <div class="lead-format">Current Inner Shipper Dimensions: {{leadInfo.currentInnerShipperDimensions}}</div>
        <div class="lead-format">Current Outer Shipper Dimensions: {{leadInfo.currentOuterShipperDimensions}}</div>
        <div class="lead-format">Dry Ice Or Gel Packs: {{leadInfo.dryIceOrGelPacks}}</div>
        <div class="lead-format">Weight Of Coolant: {{leadInfo.weightOfCoolant}}</div>
        <div class="lead-format">Preconditioned Coolant Temperature: {{leadInfo.preconditionedCoolantTemperature}}</div>
        <div class="lead-format">Preconditioned Product Temperature: {{leadInfo.preconditionedProductTemperature}}</div>
        <div class="lead-format">Current Distribution Locations: {{leadInfo.currentDistributionLocations}}</div>
        <div class="lead-format">Current Monthly Growth Rate: {{leadInfo.currentMonthlyGrowthRate}}</div>
        <div class="lead-format">Desired Controlled Temperature: {{leadInfo.desiredControlledTemperature}}</div>
        <div class="lead-format">Duration Of Transit: {{leadInfo.durationOfTransit}}</div>
        <div class="lead-format">Ambient Test Profile: {{leadInfo.ambientTestProfile}}</div>
        <div class="lead-format">Biggest Customer Complaint: {{leadInfo.biggestCustomerComplaint}}</div>
        <div class="lead-format">Current Desired Cost: {{leadInfo.currentDesiredCost}}</div>
      </div>


      <!-- <div class="form">
        <form @submit.prevent>
          <div class="">
            <label for="title">Title</label>
            <input type="text" placeholder="Link Title" v-model.trim="pressInfo.title" id="title" required />
          </div>
          <div class="">
            <label for="date">Published Date</label>
            <input type="date" placeholder="Date Published" v-model.trim="pressInfo.date" id="date" required />
          </div>
          <div class="">
            <label for="url">URL</label>
            <input type="url" placeholder="Paste Link Here" v-model.trim="pressInfo.url" id="url" required />
          </div>
          
          <div>
            <label for="excerpt">Excerpt</label>
            <textarea name="excerpt" id="excerpt" cols="30" rows="10" v-model.trim="pressInfo.excerpt" required></textarea>
          </div>
          <div class="flex justify-space-between">
            <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Cancel</button>
            <button class="btn btn__primary mt-4 mb-5 mr-4" @click="editPress()">
              Submit
              <transition name="fade">
                <span class="ml-2" v-if="performingRequest">
                <i class="fa fa-spinner fa-spin"></i>
                </span>
              </transition>
            </button>
          </div>
        </form>
      </div> -->
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import router from '@/router'
import NavAdmin from '@/components/NavAdmin.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../../firebaseConfig.js')

export default {
  name: 'lead',
  data() {
    return {
      performingRequest: false,
      crumbs: [
        {
          title: "Home",
          to: "/dashboard"
        },
        {
          title: "Leads",
          to: "/dashboard/leads"
        },
        {
          title: "View Lead",
        },
      ]
    }
  },
  computed: {
    ...mapState(['currentUser', 'userProfile', 'leadInfo']),
    realDate() {
      return new Date(this.leadInfo.created.seconds * 1000)
    }
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getLeadFromId", this.$route.params.id);
  },
  components: {
    NavAdmin,
    Footer
  },
  methods: {
    editPress() {
      this.performingRequest = true
      let {lead} = this.leadInfo
      fb.leadCollection.doc(this.leadInfo.id).update(this.leadInfo)
      setTimeout(() => {
        this.performingRequest = false
      }, 1000)
      let url = "/dashboard/leads"
      this.$router.push(url)
    },
    cancel() {
      let url = "/dashboard/leads"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearLeadState")
  }
}
</script>