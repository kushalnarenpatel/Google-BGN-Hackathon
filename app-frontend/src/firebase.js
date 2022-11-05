import firebase from "firebase/compat/app";
import "firebase/compat/auth"; // for authentication
import "firebase/compat/storage"; // for storage
import "firebase/compat/database"; // for realtime database
import "firebase/compat/firestore"; // for cloud firestore

const firebaseConfig = {
  apiKey: "AIzaSyCJzVEXHL900iuQYlLJIEaKv6rNdbfDkDE",

  authDomain: "bgn-hack22lon-6506.firebaseapp.com",

  projectId: "bgn-hack22lon-6506",

  storageBucket: "bgn-hack22lon-6506.appspot.com",

  messagingSenderId: "116285399780",

  appId: "1:116285399780:web:890cfb767245469e2282f1",

  // measurementId: "G-BXL1E4T441"

  
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
