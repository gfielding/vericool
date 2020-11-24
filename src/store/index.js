import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
const fb = require('../firebaseConfig.js')
Vue.use(Vuex)

fb.auth.onAuthStateChanged(user => {
  if (user) {
    store.commit('setCurrentUser', user)
    store.dispatch('fetchUserProfile')
    store.dispatch('getCareers')
    store.dispatch('getPress')
    store.dispatch('getChances')
    store.dispatch('getArticles')
    store.dispatch('getLogos')
    store.dispatch('getLeads')
    store.dispatch('getAwards')
    store.dispatch('getImpactPics')
    store.dispatch('getOhanaPics')
    store.dispatch('getApplications')
    store.dispatch('getFAQs')
  } else {
    store.commit('setCurrentUser', null)
  }
})

export const store = new Vuex.Store({
  state: {
  	currentUser: null,
    userProfile: {},
    careers: [],
    careerInfo: {},
    press: [],
    pressInfo: {},
    chances: [],
    chanceInfo: {},
    articles: [],
    articleInfo: {},
    logos: [],
    logoInfo: {},
    products: [],
    leads: [],
    leadInfo: {},
    awards: [],
    awardInfo: {},
    impactPics: [],
    applications: [],
    applicationInfo: {},
    ohanaPics: [],
    faqs: [],
    faqInfo: {},
  },
  actions: {
    fetchUserProfile({ commit, state }) {
      fb.usersCollection.doc(state.currentUser.uid)
      .onSnapshot(function (doc) {
        if (doc.exists) {
          commit('setUserProfile', doc.data())
        } else {
        }
      })
    },
    async logout({ commit, dispatch }) {
      await fb.auth.signOut()
      dispatch('clearData')
      router.push('/')
    },
    getCareers({ commit }) {
      fb.careersCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let careersArray = []
        querySnapshot.forEach(doc => {
          let career = doc.data()
          career.id = doc.id
          careersArray.push(career)
        })
        commit('setCareers', careersArray)
      })
    },
    getPress({ commit }) {
      fb.pressCollection.orderBy('date', 'desc').onSnapshot(querySnapshot => {
        let pressArray = []
        querySnapshot.forEach(doc => {
          let press = doc.data()
          press.id = doc.id
          pressArray.push(press)
        })
        commit('setPress', pressArray)
      })
    },
    getFAQs({ commit }) {
      fb.faqCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let faqArray = []
        querySnapshot.forEach(doc => {
          let faq = doc.data()
          faq.id = doc.id
          faqArray.push(faq)
        })
        commit('setFAQ', faqArray)
      })
    },
    getChances({ commit }) {
      fb.chancesCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let chancesArray = []
        querySnapshot.forEach(doc => {
          let chances = doc.data()
          chances.id = doc.id
          chancesArray.push(chances)
        })
        commit('setChances', chancesArray)
      })
    },
    getLogos({ commit }) {
      fb.logosCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let logosArray = []
        querySnapshot.forEach(doc => {
          let logos = doc.data()
          logos.id = doc.id
          logosArray.push(logos)
        })
        commit('setLogos', logosArray)
      })
    },
    getImpactPics({ commit }) {
      fb.impactPicsCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let impactPicsArray = []
        querySnapshot.forEach(doc => {
          let impactPics = doc.data()
          impactPics.id = doc.id
          impactPicsArray.push(impactPics)
        })
        commit('setImpactPics', impactPicsArray)
      })
    },
    getOhanaPics({ commit }) {
      fb.ohanaPicsCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let ohanaPicsArray = []
        querySnapshot.forEach(doc => {
          let ohanaPics = doc.data()
          ohanaPics.id = doc.id
          ohanaPicsArray.push(ohanaPics)
        })
        commit('setOhanaPics', ohanaPicsArray)
      })
    },
    getAwards({ commit }) {
      fb.awardsCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let awardsArray = []
        querySnapshot.forEach(doc => {
          let awards = doc.data()
          awards.id = doc.id
          awardsArray.push(awards)
        })
        commit('setAwards', awardsArray)
      })
    },
    getApplications({ commit }) {
      fb.applicationsCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let applicationsArray = []
        querySnapshot.forEach(doc => {
          let applications = doc.data()
          applications.id = doc.id
          applicationsArray.push(applications)
        })
        commit('setApplications', applicationsArray)
      })
    },
    getCareerFromId({ commit }, payload) {
      fb.careersCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setCareerInfo", doc.data())
        })
      })
    },


    getArticles({ commit }) {
      fb.articlesCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let articlesArray = []
        querySnapshot.forEach(doc => {
          let articles = doc.data()
          articles.id = doc.id
          articlesArray.push(articles)
        })
        commit('setArticles', articlesArray)
      })
    },
    getArticleFromId({ commit }, payload) {
      fb.articlesCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setArticleInfo", doc.data())
        })
      })
    },
    getApplicationFromId({ commit }, payload) {
      fb.applicationsCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setApplicationInfo", doc.data())
        })
      })
    },


    getPressFromId({ commit }, payload) {
      fb.pressCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setPressInfo", doc.data())
        })
      })
    },
    getChanceFromId({ commit }, payload) {
      fb.chancesCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setChanceInfo", doc.data())
        })
      })
    },
    getAwardFromId({ commit }, payload) {
      fb.awardsCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setAwardInfo", doc.data())
        })
      })
    },
    getLogoFromId({ commit }, payload) {
      fb.logosCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setLogoInfo", doc.data())
        })
      })
    },
    getProducts({ commit }) {
      fb.productsCollection.orderBy('title', 'desc').onSnapshot(querySnapshot => {
        let productsArray = []
        querySnapshot.forEach(doc => {
          let products = doc.data()
          products.id = doc.id
          productsArray.push(products)
        })
        commit('setProducts', productsArray)
      })
    },
    newLead({ commit }, payload) {
      fb.leadsCollection.add(payload)
      .then(
        doc => {
          fb.leadsCollection.doc(doc.id).update({
            id: doc.id,
            created: fb.firestore.FieldValue.serverTimestamp(),
          })
        }
      )
    },
    newApplication({commit}, payload) {
      fb.applicationsCollection.add(payload)
      .then(
        doc => {
          fb.applicationsCollection.doc(doc.id).update({
            id: doc.id,
            created: fb.firestore.FieldValue.serverTimestamp(),
          })
        }
      )
    },
    getLeads({ commit }) {
      fb.leadsCollection.orderBy('created', 'desc').onSnapshot(querySnapshot => {
        let leadsArray = []
        querySnapshot.forEach(doc => {
          let leads = doc.data()
          leads.id = doc.id
          leadsArray.push(leads)
        })
        commit('setLeads', leadsArray)
      })
    },
    getLeadFromId({ commit }, payload) {
      fb.leadsCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setLeadInfo", doc.data())
        })
      })
    },
    getFAQFromId({ commit }, payload) {
      fb.faqCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setFAQInfo", doc.data())
        })
      })
    },

    clearData({ commit }) {
      commit('setCurrentUser', null)
      commit('setCareerInfo', null)
      commit('setFAQInfo', null)
      commit('setUserProfile', {})
      commit('setPress', [])
      commit('setChances', [])
      commit('setCareers', [])
      commit('setLogos', [])
      commit('setProducts', [])
      commit('setLeads', [])
      commit('setImpactPics', [])
      commit('setOhanaPics', [])
      commit('setAwards', [])
      commit('setApplications', [])
    },
    clearLeadState({ commit }) {
      commit('setLeadInfo', null)
    },
    clearCareerState({ commit }) {
      commit('setCareerInfo', null)
    },
    clearPressState({ commit }) {
      commit('setPressInfo', null)
    },
    clearChanceState({ commit }) {
      commit('setChanceInfo', null)
    },
    clearApplicationState({ commit }) {
      commit('setApplicationInfo', null)
    },
    clearArticleState({ commit }) {
      commit('setArticleInfo', null)
    },
    clearFAQState({ commit }) {
      commit('setFAQInfo', null)
    },
  },
  mutations: {
  	setCurrentUser(state, val) {
      state.currentUser = val
    },
    setUserProfile(state, val) {
      state.userProfile = val
    },
    setCareers(state, val) {
      if (val) {
        state.careers = val
      } else {
        state.careers = []
      }
    },
    setChances(state, val) {
      if (val) {
        state.chances = val
      } else {
        state.chances = []
      }
    },
    setAwards(state, val) {
      if (val) {
        state.awards = val
      } else {
        state.awards = []
      }
    },
    setPress(state, val) {
      if (val) {
        state.press = val
      } else {
        state.press = []
      }
    },
    setArticles(state, val) {
      if (val) {
        state.articles = val
      } else {
        state.articles = []
      }
    },
    setLeads(state, val) {
      if (val) {
        state.leads = val
      } else {
        state.leads = []
      }
    },
    setLogos(state, val) {
      if (val) {
        state.logos = val
      } else {
        state.logos = []
      }
    },
    setProducts(state, val) {
      if (val) {
        state.products = val
      } else {
        state.products = []
      }
    },
    setImpactPics(state, val) {
      if (val) {
        state.impactPics = val
      } else {
        state.impactPics = []
      }
    },
    setOhanaPics(state, val) {
      if (val) {
        state.ohanaPics = val
      } else {
        state.ohanaPics = []
      }
    },
    setFAQ(state, val) {
      if (val) {
        state.faqs = val
      } else {
        state.faqs = []
      }
    },
    setApplications(state, val) {
      if (val) {
        state.applications = val
      } else {
        state.applications = []
      }
    },
    setCareerInfo(state, payload) {
      state.careerInfo = payload
    },
    setPressInfo(state, payload) {
      state.pressInfo = payload
    },
    setChanceInfo(state, payload) {
      state.chanceInfo = payload
    },
    setAwardInfo(state, payload) {
      state.awardInfo = payload
    },
    setArticleInfo(state, payload) {
      state.articleInfo = payload
    },
    setLogoInfo(state, payload) {
      state.logoInfo = payload
    },
    setLeadInfo(state, payload) {
      state.leadInfo = payload
    },
    setFAQInfo(state, payload) {
      state.faqInfo = payload
    },
    setApplicationInfo(state, payload) {
      state.applicationInfo = payload
    },
  },
})
