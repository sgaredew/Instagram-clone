// firebase.js
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWAo2jy1cEI4g5MyENHyxAxQx9DS0xgiA",
  authDomain: "clone-6abca.firebaseapp.com",
  projectId: "clone-6abca",
  storageBucket: "clone-6abca.appspot.com",
  messagingSenderId: "27544485688",
  appId: "1:27544485688:web:18f4fd540f86d2ab4b4bcd",
  measurementId: "G-NJXTQGY3E3",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Export services
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
