import firebase from './firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
//import { auth, database } from "./firebase";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEJ6nTl-lPd9GsQe7amQs87RB4l3SDibU",
  authDomain: "onestep-fc79b.firebaseapp.com",
  projectId: "onestep-fc79b",
  storageBucket: "onestep-fc79b.appspot.com",
  messagingSenderId: "971771793590",
  appId: "1:971771793590:web:81cd7a68f8f14bd03c1617",
  measurementId: "G-3ZKCVYDJ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const signIn = signInWithEmailAndPassword;