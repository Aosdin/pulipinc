import firebase from 'firebase/app'
import 'firebase/auth'

// The configuration below is not sensitive data. You can serenely add your config here
const config = {
  apiKey: 'AIzaSyAlqvqm8G1r-9GhT-21ilYGYTJG0uI50aA',
  authDomain: '',
  databaseURL: '',
  projectId: 'new-pulipin',
  storageBucket: '',
  messagingSenderId: ''
}

firebase.initializeApp(config)
