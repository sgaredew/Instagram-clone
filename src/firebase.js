
// import firebase from "firebase";

// // const firebaseApp = firebase.initializeApp({
// //     apiKey: "AIzaSyBKM_qJm7k2kHhSA1GbGEXHNzQc6E8wfmQ",
// //     authDomain: "instagram-clone-react-70113.firebaseapp.com",
// //     databaseURL: "https://instagram-clone-react-70113.firebaseio.com",
// //     projectId: "instagram-clone-react-70113",
// //     storageBucket: "instagram-clone-react-70113.appspot.com",
// //     messagingSenderId: "375283177912",
// //     appId: "1:375283177912:web:ae590d1e7bf10a800b574d",
// //     measurementId: "G-GR8GZJQZ3L"

// // });
// const firebaseConfig = {
//   apiKey: "AIzaSyAWAo2jy1cEI4g5MyENHyxAxQx9DS0xgiA",
//   authDomain: "clone-6abca.firebaseapp.com",
//   projectId: "clone-6abca",
//   storageBucket: "clone-6abca.firebasestorage.app",
//   messagingSenderId: "27544485688",
//   appId: "1:27544485688:web:18f4fd540f86d2ab4b4bcd",
//   measurementId: "G-NJXTQGY3E3",
// };
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

// export { db, auth, storage };

// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAWAo2jy1cEI4g5MyENHyxAxQx9DS0xgiA",
//   authDomain: "clone-6abca.firebaseapp.com",
  projectId: "clone-6abca",
  storageBucket: "clone-6abca.appspot.com", // fixed `.firebasestorage.app` to `.appspot.com`
  messagingSenderId: "27544485688",
  appId: "1:27544485688:web:18f4fd540f86d2ab4b4bcd",
  measurementId: "G-NJXTQGY3E3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Services
const db = getFirestore(app);
// const auth = getAuth(app);
const storage = getStorage(app);

export { db, storage };
