// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwHp5glBHkE24mk2RRoxrW6bo-pcoCpb8",
  authDomain: "aravind-demo.firebaseapp.com",
  projectId: "aravind-demo",
  storageBucket: "aravind-demo.appspot.com",
  messagingSenderId: "28539537807",
  appId: "1:28539537807:web:5527de7ac01b77e2eae3fa",
  measurementId: "G-FS4YD6HRFF"
};

initializeApp(firebaseConfig);

const db = getFirestore();
export default db