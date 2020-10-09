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
    getCareerFromId({ commit }, payload) {
      fb.careersCollection.where("id", "==", payload)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          commit("setCareerInfo", doc.data())
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
    clearData({ commit }) {
      commit('setCurrentUser', null)
      commit('setCareerInfo', null)
      commit('setUserProfile', {})
      commit('setPress', [])
      commit('setChances', [])
      commit('setCareers', [])
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
    setPress(state, val) {
      if (val) {
        state.press = val
      } else {
        state.press = []
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
    
  },
})
