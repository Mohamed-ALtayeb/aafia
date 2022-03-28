// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgTJzgcIK3LcJQnng9QNKzFe8dx4i0_t4",
  authDomain: "aafia-dashboard.firebaseapp.com",
  projectId: "aafia-dashboard",
  storageBucket: "aafia-dashboard.appspot.com",
  messagingSenderId: "1086526301095",
  appId: "1:1086526301095:web:d9638f9c5356df13cb8c82",
  measurementId: "G-S4T9N10S2M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();
