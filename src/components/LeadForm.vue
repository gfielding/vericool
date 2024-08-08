<template>
	<div>
		<transition name="fade">
			<div v-if="!showForm">
				<div class="lead__form pt-5 pb-5">
					<h2>Thank you!</h2>
					<h4>Someone from our team will be in touch shortly.</h4>
				</div>
			</div>
		</transition>
		<transition name="fade">
		<div v-if="showForm">
			
				<div class="lead__form pt-5 pb-5">
					<h2>Request More Information</h2>
					<form @submit.prevent>
						<div class="flex flex-wrap">
							<div class="col-1 pa-2">
								<div>
					        <label for="name">Your Name*</label>
					        <input type="text" placeholder="First and Last Name" v-model.trim="contactForm.name" id="name" required />
					      </div>
					      <div>
					        <label for="company">Company Name*</label>
					        <input type="text" placeholder="XYZ Industries" v-model.trim="contactForm.company" id="company" required/>
					      </div>
					      <div>
					        <label for="email">Your Email*</label>
					        <input type="text" placeholder="you@email.com" v-model.trim="contactForm.email" id="email" required/>
					      </div>
					      <div>
					        <label for="phone">Your Phone*</label>
					        <input type="text" placeholder="(###)-###-####" v-mask="'(###)-###-####'" v-model.trim="contactForm.phone" id="phone" required/>
					      </div>
					      <div>
					        <label for="location">Your Location</label>
					        <input type="text" placeholder="For Example: Phoenix, AZ" v-model.trim="contactForm.location" id="location" />
					      </div>

					      <div>
					        <label for="currentProduct">Current Product</label>
					        <input type="text" placeholder="What are you currently using?" v-model.trim="contactForm.currentProduct" id="currentProduct" />
					      </div>

					      <div>
					        <label for="currentPackagingType">Current Packaging Type</label>
					        <input type="text" placeholder="What type of packaging are you using?" v-model.trim="contactForm.currentPackagingType" id="currentPackagingType" />
					      </div>

					      <div>
					        <label for="currentMonthlyQuantitiesPerSize">Current Monthly Quantities Per Size*</label>
					        <textarea name="qty" id="currentMonthlyQuantitiesPerSize" cols="30" rows="4" v-model.trim="contactForm.currentMonthlyQuantitiesPerSize" required></textarea>
					      </div>

					      <div>
					        <label for="currentPayloadSizes">Current Payload Sizes</label>
					        <input type="text" placeholder="What sizes of packaging are you currently ordering?" v-model.trim="contactForm.currentPayloadSizes" id="currentPayloadSizes" />
					      </div>

					      <div>
					        <label for="currentInsulationThickness">Current Insulation Thickness</label>
					        <input type="text" v-model.trim="contactForm.currentInsulationThickness" id="currentInsulationThickness" />
					      </div>

					      <div>
					        <label for="currentInnerShipperDimensions">Current Inner Shipper Dimensions (ID)*</label>
					        <input type="text" v-model.trim="contactForm.currentInnerShipperDimensions" id="currentInnerShipperDimensions" required />
					      </div>

					      <div>
					        <label for="currentOuterShipperDimensions">Current Outer Shipper Dimensions (OD)</label>
					        <input type="text" v-model.trim="contactForm.currentOuterShipperDimensions" id="currentOuterShipperDimensions" />
					      </div>

					      <div>
					        <label for="dryIceOrIcePacks">Dry Ice Or Gel Packs?*</label>
					        <input type="text" v-model.trim="contactForm.dryIceOrGelPacks" id="dryIceOrGelPacks" required/>
					      </div>
					      
							</div>
							<div class="col-2 pa-2">
								<div>
					        <label for="weightOfCoolant">Weight Of Coolant</label>
					        <input type="text" v-model.trim="contactForm.weightOfCoolant" id="weightOfCoolant" />
					      </div>

					      <div>
					        <label for="preconditionedCoolantTemperature">Preconditioned Coolant Temperature</label>
					        <input type="text" v-model.trim="contactForm.preconditionedCoolantTemperature" id="preconditionedCoolantTemperature" />
					      </div>

					      <div>
					        <label for="preconditionedProductTemperature">Preconditioned Product Temperature</label>
					        <input type="text" v-model.trim="contactForm.preconditionedProductTemperature" id="preconditionedProductTemperature" />
					      </div>

					      <div>
					        <label for="currentDistributionLocations">How Many Current Distribution Locations and Where?</label>
					        <textarea name="qty" id="currentDistributionLocations" cols="30" rows="4" v-model.trim="contactForm.currentDistributionLocations"></textarea>
					      </div>

					      <div>
					        <label for="currentMonthlyGrowthRate">Current Monthly Growth Rate</label>
					        <input type="text" v-model.trim="contactForm.currentMonthlyGrowthRate" id="currentMonthlyGrowthRate" />
					      </div>

					      <div>
					        <label for="desiredControlledTemperature">Desired Controlled Temperature</label>
					        <input type="text" v-model.trim="contactForm.desiredControlledTemperature" id="desiredControlledTemperature" />
					      </div>

					      <div>
					        <label for="durationOfTransit">What is the Duration of Transit?*</label>
					        <input type="text" v-model.trim="contactForm.durationOfTransit" id="durationOfTransit" required/>
					      </div>

					      <div>
					        <label for="ambientTestProfile">What is the Ambient Test Profile?</label>
					        <input type="text" v-model.trim="contactForm.ambientTestProfile" id="ambientTestProfile" />
					      </div>

					      <div>
					        <label for="biggestCustomerComplaint">What is the Biggest Customer Packaging Complaint?</label>
					        <textarea name="qty" id="biggestCustomerComplaint" cols="30" rows="4" v-model.trim="contactForm.biggestCustomerComplaint"></textarea>
					      </div>

					      <div>
					        <label for="currentDesiredCost">What are Your Current and Desired Costs?</label>
					        <textarea name="qty" id="currentDesiredCost" cols="30" rows="4" v-model.trim="contactForm.currentDesiredCost"></textarea>
					      </div>


								<button class="btn btn__primary btn__large mt-5 mb-5" @click="submit()">
					        Submit
					        <transition name="fade">
					          <span class="ml-2" v-if="performingRequest">
					          <i class="fa fa-spinner fa-spin"></i>
					          </span>
					        </transition>
					      </button>
							</div>
						</div>
			      
					</form>		
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    performingRequest: false,
    showForm: true,
    contactForm: {
    	// to: "Dj@vericool-sol.com, gregpfielding@gmail.com",
    	name: '',
    	company: '',
      email: '',
      phone: '',
      location: '',
      currentProduct: '',
      currentPackagingType: '',
      currentMonthlyQuantitiesPerSize: '',
      currentPayloadSizes: '',
      currentInsulationThickness: '',
      currentInnerShipperDimensions: '',
      currentOuterShipperDimensions: '',
      dryIceOrGelPacks: '',
      weightOfCoolant: '',
      preconditionedCoolantTemperature: '',
      preconditionedProductTemperature: '',
      currentDistributionLocations: '',
      currentMonthlyGrowthRate: '',
      desiredControlledTemperature: '',
      durationOfTransit: '',
      ambientTestProfile: '',
      biggestCustomerComplaint: '',
      currentDesiredCost: ''
    }
  }),
  methods: {
    submit() {
      this.performingRequest = true
      let contact = this.contactForm;
      console.log(contact)
      this.$store.dispatch('newLead', contact)
      setTimeout(() => {
      // 	this.contactForm.name = '',
	    	// this.contactForm.company = '',
	     //  this.contactForm.email = '',
	     //  this.contactForm.phone = '',
	     //  this.contactForm.location = '',
	     //  this.contactForm.currentProduct = '',
	     //  this.contactForm.currentPackagingType = '',
	     //  this.contactForm.currentMonthlyQuantitiesPerSize = '',
	     //  this.contactForm.currentPayloadSizes = '',
	     //  this.contactForm.currentInsulationThickness = '',
	     //  this.contactForm.currentInnerShipperDimensions = '',
	     //  this.contactForm.currentOuterShipperDimensions = '',
	     //  this.contactForm.dryIceOrGelPacks = '',
	     //  this.contactForm.weightOfCoolant = '',
	     //  this.contactForm.preconditionedCoolantTemperature = '',
	     //  this.contactForm.preconditionedProductTemperature = '',
	     //  this.contactForm.currentDistributionLocations = '',
	     //  this.contactForm.currentMonthlyGrowthRate = '',
	     //  this.contactForm.desiredControlledTemperature = '',
	     //  this.contactForm.durationOfTransit = '',
	     //  this.contactForm.ambientTestProfile = '',
	     // 	this.contactForm.biggestCustomerComplaint = '',
	     //  this.contactForm.currentDesiredCost = '',
        this.performingRequest = false,
        this.showForm = false
      }, 2000)
      
    }
  },
  beforeDestroy() {
  	this.contactForm.name = '',
  	this.contactForm.company = '',
    this.contactForm.email = '',
    this.contactForm.phone = '',
    this.contactForm.location = '',
    this.contactForm.currentProduct = '',
    this.contactForm.currentPackagingType = '',
    this.contactForm.currentMonthlyQuantitiesPerSize = '',
    this.contactForm.currentPayloadSizes = '',
    this.contactForm.currentInsulationThickness = '',
    this.contactForm.currentInnerShipperDimensions = '',
    this.contactForm.currentOuterShipperDimensions = '',
    this.contactForm.dryIceOrGelPacks = '',
    this.contactForm.weightOfCoolant = '',
    this.contactForm.preconditionedCoolantTemperature = '',
    this.contactForm.preconditionedProductTemperature = '',
    this.contactForm.currentDistributionLocations = '',
    this.contactForm.currentMonthlyGrowthRate = '',
    this.contactForm.desiredControlledTemperature = '',
    this.contactForm.durationOfTransit = '',
    this.contactForm.ambientTestProfile = '',
   	this.contactForm.biggestCustomerComplaint = '',
    this.contactForm.currentDesiredCost = '',
    this.showForm = true
  }
}
</script>