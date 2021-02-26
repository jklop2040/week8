const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCkdYmZlPbEh5ZzDku_9nHYDZOTV4Qt2J8",
  authDomain: "kiei-451-76acb.firebaseapp.com",
  projectId: "kiei-451-76acb",
  storageBucket: "kiei-451-76acb.appspot.com",
  messagingSenderId: "25260936786",
  appId: "1:25260936786:web:48082db9aa53f41cc4198b"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase