// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKWtWT0Tiooskyssr7gZbUQ49qflQ7OlA",
  authDomain: "d8m8-datemate.firebaseapp.com",
  projectId: "d8m8-datemate",
  storageBucket: "d8m8-datemate.appspot.com",
  messagingSenderId: "852862002065",
  appId: "1:852862002065:web:c236eb8b1bce8282b07030",
  measurementId: "G-VWCRTGG1TF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// firebase.initializeApp(firebaseConfig);