import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import AOS from "aos"
import "aos/dist/aos.css"
import './sass/main.scss'
const fb = require('./firebaseConfig.js')

Vue.config.productionTip = false
Vue.config.devtools = true

Vue.filter('readMore', function (text, length, suffix) {
  return text.substring(0, length) + suffix;
})

let app
fb.auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      el: '#app',
      router,
      store,
      created() {
    		AOS.init({ 
    			easing: 'ease-in-out',
    			offset: 0,
      		duration: 600,
    		});
    	},
      render: h => h(App)
    })
  }
})
