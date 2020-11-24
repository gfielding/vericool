import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from './store/index.js'
import AOS from "aos"
import "aos/dist/aos.css"
import Croppa from 'vue-croppa';
import VueDragscroll from 'vue-dragscroll'
import VueMask from 'v-mask'
import VueAgile from 'vue-agile'
import { VLazyImagePlugin } from "v-lazy-image";
import VueMeta from 'vue-meta'
import VuePrlx from 'vue-prlx'
import './sass/main.scss'
const fb = require('./firebaseConfig.js')
 
Vue.use(VueAgile);
Vue.use(Croppa);
Vue.use(VueMask);
Vue.use(VueDragscroll);
Vue.use(VLazyImagePlugin);
Vue.use(VuePrlx);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

Vue.use(require('vue-moment'));

Vue.config.productionTip = false
Vue.config.devtools = true


Vue.filter('truncate', function (text, length, suffix) {
    return text.substring(0, length) + suffix;
})

Vue.directive('numflip', {
  bind: function(el, binding) {
    el.innerHTML = binding.value
  },
  update: function (el, binding, vnode) {
    var numberAnimation = function(el, oldValue, newValue) {
      var start = null, duration = 1200
      function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        el.innerHTML = Math.round(oldValue + (newValue-oldValue)*progress/duration) 
        if (progress < duration) {
          window.requestAnimationFrame(step);
        } else {
          el.innerHTML = newValue
        }
      }
      el.innerHTML = oldValue
      window.requestAnimationFrame(step);
    };
    if(binding.value != binding.oldValue && binding.value !== false) {
      numberAnimation(el, binding.oldValue, binding.value)
    }
  }
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
