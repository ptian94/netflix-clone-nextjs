// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDRpQJNF5fESp7wL28TsPBFKZIaaS68_fg',
  authDomain: 'netflix-clone-red.firebaseapp.com',
  projectId: 'netflix-clone-red',
  storageBucket: 'netflix-clone-red.appspot.com',
  messagingSenderId: '620991182074',
  appId: '1:620991182074:web:287d1ade82966da42dc543',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore()
const auth = getAuth()

export default app
export { db, auth }
