<template>
  <div>
    <Nav />
    <div class="page careers">
      <div class="apply__hero">
      </div>
    	<div class="container">

        <div class="apply__main">

          <h1>Submit Application</h1>
          <hr>

          <transition name="fade">
            <Loader v-if="!careerInfo" />
          </transition>

          <transition name="fade">
            <div v-if="careerInfo && !showForm">
              <div class="lead__form pt-5 pb-5">
                <h2>Thank you!</h2>
                <h4>Someone from our team will be in touch shortly.</h4>
                <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Go Back</button>
              </div>
            </div>
          </transition>

          <transition name="fade">
            <div v-if="careerInfo && showForm">
              <h3>{{careerInfo.title}}</h3>
              <div v-html="careerInfo.description"></div>
              <div class="container pt-5 pb-5">
                <form @submit.prevent>
                  <div>
                    <label for="name">Your Name</label>
                    <input type="text" placeholder="First and Last Name" v-model.trim="contactForm.name" id="name" required />
                  </div>
                  <div>
                    <label for="email">Your Email Address</label>
                    <input type="text" placeholder="Email" v-model.trim="contactForm.email" id="email" required />
                  </div>
                  <div>
                    <label for="phone">Your Phone</label>
                    <input type="text" placeholder="(###)-###-####" v-mask="'(###)-###-####'" v-model.trim="contactForm.phone" id="phone" required/>
                  </div>
                  <div>
                    <label for="why">Why Would You Like to Work for Vericool?</label>
                    <textarea id="why" cols="30" rows="4" v-model.trim="contactForm.why" required></textarea>
                  </div>
                  <div>
                    <label for="experience">What Relevant Experience do you Have for this Position?</label>
                    <textarea id="experience" cols="30" rows="4" v-model.trim="contactForm.experience" required></textarea>
                  </div>
                  <div>
                    <label for="availability">What is Your Availability for an Interview?</label>
                    <textarea id="availability" cols="30" rows="4" v-model.trim="contactForm.availability" required></textarea>
                  </div>

                  <div>
                    <label for="upload">Please Upload your Resumé</label>
                    <input type="file" 
                      style="display:none;" 
                      ref="upload" 
                      accept="image/*,application/pdf,.doc"
                      required
                      @change="onDocPicked">
                    </input>
                    <button class="btn btn__outlined mt-3" @click="onPickDoc"> Choose File
                      <transition name="fade">
                        <span class="ml-2" v-if="performingRequest2">
                        <i class="fa fa-spinner fa-spin"></i>
                        </span>
                      </transition>
                      <transition name="fade">
                        <span class="ml-2" v-if="docUrl">
                        <i class="fa fa-check" style="color:green"></i>
                        </span>
                      </transition>
                    </button>
                  </div>

                  <transition name="fade">
                    <div v-if="docErr">{{docErr}}</div>
                  </transition>
                  <hr>
                  <div class="flex justify-space-between mt-3">
                    <button class="btn btn__outlined mt-4 mb-5" @click="cancel()">Go Back</button>
                    <button class="btn btn__primary mt-4 mb-5 mr-4" @click="apply()">
                      Submit
                      <transition name="fade">
                        <span class="ml-2" v-if="performingRequest">
                        <i class="fa fa-spinner fa-spin"></i>
                        </span>
                      </transition>
                    </button>
                  </div>


                </form>
              </div>
            </div>
          </transition>

        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<style scoped>
.list__item {
  flex-direction: column;
}
</style>

<script>
import { mapState } from 'vuex'
import Nav from '@/components/Nav.vue'
import Loader from '@/components/Loader.vue'
import Footer from '@/components/Footer.vue'
const fb = require('../../firebaseConfig.js')

export default {
  name: 'apply',
  data: () => ({
    performingRequest: false,
    performingRequest2: false,
    showForm: true,
    file: null,
    docUrl: '',
    docErr: '',
    contactForm: {
      name: '',
      email: '',
      phone: '',
      why: '',
      experience: '',
      availability: ''
    }
  }),
  computed: {
    ...mapState(['careerInfo']),
  },
  created () {
    console.log(this.$route.params.id)
    this.$store.dispatch("getCareerFromId", this.$route.params.id);
  },
  methods: {
    onPickDoc () {
      this.$refs.upload.click()
    },
    onDocPicked (event) {
      if (event.target.files[0].size > 3097152){
       this.docErr = 'Please choose a file under 3MB.'
      } else {
      this.performingRequest2 = true
      this.docErr = ''
      let docUrl
      let docLoc
      const files = event.target.files
      let filename = files[0].name
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.fileUrl = fileReader.result
      })
      this.file = files[0]
      console.log(filename)
      let file = this.file
      let rand = (Math.random().toString(36).substring(2, 16) + Math.random().toString(36).substring(2, 16)).toUpperCase()
      let docRef = fb.storageRef.child('applications' + '/uploads/' + rand)
      docRef.put(file).then((snap) => {
        docRef.getDownloadURL().then(function(downloadURL) {
          console.log('File available at', downloadURL)
          docLoc = downloadURL
        })
      })
      setTimeout(() => {
        this.docUrl = docLoc
        console.log(this.docUrl)
        this.performingRequest2 = false
      }, 3000)
      }
    },
    apply() {
      this.performingRequest = true
      let application = {
        name: this.contactForm.name,
        email: this.contactForm.email,
        phone: this.contactForm.phone,
        why: this.contactForm.why,
        experience: this.contactForm.experience,
        availability: this.contactForm.availability,
        job: this.careerInfo,
        docUrl: this.docUrl
      }
      this.$store.dispatch('newApplication', application)
      setTimeout(() => {
        this.performingRequest = false
        this.contactForm.name = '',
        this.contactForm.email = '',
        this.contactForm.phone = '',
        this.contactForm.why = '',
        this.contactForm.experience = '',
        this.contactForm.availability = '',
        this.file = null,
        this.docUrl = '',
        this.docErr = '',
        this.showForm = false
      }, 3000)
    },
    cancel() {
      let url = "/careers"
      this.$router.push(url)
    }
  },
  beforeDestroy(){
    this.$store.dispatch("clearCareerState")
    this.contactForm.name = '',
    this.contactForm.email = '',
    this.contactForm.phone = '',
    this.contactForm.why = '',
    this.contactForm.experience = '',
    this.contactForm.availability = '',
    this.showForm = true,
    this.file = null,
    this.docUrl = '',
    this.docErr = ''
  },
  components: {
    Nav,
    Loader,
    Footer
  }
}
</script>