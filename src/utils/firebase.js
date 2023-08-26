// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsztRUpZ8CY_aPan3cDDNknatTeGTCzk8",
  authDomain: "netflix-gpt-53da2.firebaseapp.com",
  projectId: "netflix-gpt-53da2",
  storageBucket: "netflix-gpt-53da2.appspot.com",
  messagingSenderId: "810609291752",
  appId: "1:810609291752:web:ecdb8c689cbf6599b2f45d",
  measurementId: "G-8BKFDKFTGZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
