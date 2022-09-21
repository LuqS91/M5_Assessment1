import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDGKI0lbSmOq2Ssbth4Gh6iO3vAwGKS170",
  authDomain: "m5assessment1.firebaseapp.com",
  projectId: "m5assessment1",
  storageBucket: "m5assessment1.appspot.com",
  messagingSenderId: "114029158007",
  appId: "1:114029158007:web:b6c5c6b6130a09350c7072",
  measurementId: "G-0RQ61B1CQ4"
  };


  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth()
  const db = firebase.firestore()


  export { auth };
  export { db };
  export default firebaseConfig;
  
  
  
  