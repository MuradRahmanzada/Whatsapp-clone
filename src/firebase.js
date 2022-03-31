import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "whatsapp-clone-86670.firebaseapp.com",
  projectId: "whatsapp-clone-86670",
  storageBucket: "whatsapp-clone-86670.appspot.com",
  messagingSenderId: "790852619963",
  appId: "1:790852619963:web:fd4baa893c9178826aa39e",
  measurementId: "G-C697WMEJCF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;
