const firebase = require("firebase/app")

require("firebase/auth")
require("firebase/storage")
require("firebase/firestore")
require("firebase/functions")
require("firebase/analytics")

// firebase init goes here
const firebaseConfig = {
  apiKey: "AIzaSyAKGgdSwhVIOAo_mdCdepwG4jH6IBg6S6s",
  authDomain: "vericool-53dd0.firebaseapp.com",
  databaseURL: "https://vericool-53dd0.firebaseio.com",
  projectId: "vericool-53dd0",
  storageBucket: "vericool-53dd0.appspot.com",
  messagingSenderId: "530042176283",
  appId: "1:530042176283:web:4de2d9a17ab196ed7589be",
  measurementId: "G-D2V9VK551Q"
};
firebase.initializeApp(firebaseConfig)
firebase.analytics()
firebase.firestore().enablePersistence()

const db = firebase.firestore()
const firestore = firebase.firestore
const auth = firebase.auth()
const storageRef = firebase.storage().ref()
const currentUser = auth.currentUser
const functions = firebase.functions()

// firebase collections
const usersCollection = db.collection('users')
const careersCollection = db.collection('careers')
const pressCollection = db.collection('press')
const chancesCollection = db.collection('chances')
const articlesCollection = db.collection('articles')
const logosCollection = db.collection('logos')
const productsCollection = db.collection('products')
const leadsCollection = db.collection('leads')
const awardsCollection = db.collection('awards')
const impactPicsCollection = db.collection('impactPics')
const applicationsCollection = db.collection('applications')
const ohanaPicsCollection = db.collection('ohanaPics')
const faqCollection = db.collection('faqs')

export {
  db,
  auth,
  storageRef,
  firestore,
  currentUser,
  functions,
  usersCollection,
  careersCollection,
  pressCollection,
  chancesCollection,
  articlesCollection,
  logosCollection,
  productsCollection,
  leadsCollection,
  awardsCollection,
  impactPicsCollection,
  applicationsCollection,
  ohanaPicsCollection,
  faqCollection
}