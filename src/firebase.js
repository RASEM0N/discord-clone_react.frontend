import firebase from 'firebase'

const firebaseConfig = {
    apiKey: 'AIzaSyDUAK2zZSH0XoHEoKXYWhplgIf5xq7JYR4',
    authDomain: 'rc-discord-clone.firebaseapp.com',
    projectId: 'rc-discord-clone',
    storageBucket: 'rc-discord-clone.appspot.com',
    messagingSenderId: '1001372338789',
    appId: '1:1001372338789:web:a2903f261870aebf6a148c',
    measurementId: 'G-30W2BSD6ME',
}

const fbApp = firebase.initializeApp(firebaseConfig)
const fbFirebase = firebase.firestore()
const fbAuth = firebase.auth()

const providerGoogle = new firebase.auth.GoogleAuthProvider()

export { fbFirebase, fbAuth, providerGoogle }
