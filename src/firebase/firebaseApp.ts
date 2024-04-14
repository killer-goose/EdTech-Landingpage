// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFtsVALg-HHCThB1VA8K9L9jo9PGl9Lyw',
  authDomain: 'studyforge-d5fce.firebaseapp.com',
  projectId: 'studyforge-d5fce',
  storageBucket: 'studyforge-d5fce.appspot.com',
  messagingSenderId: '162030661220',
  appId: '1:162030661220:web:d0a944c60978d385e5f971',
  measurementId: 'G-J7XCW851B0',
  databaseURL:
    'https://studyforge-d5fce-default-rtdb.asia-southeast1.firebasedatabase.app',
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
