// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDCSrGYUoPbnfueDPJAR5B2mrOmgyHkaCM",
  authDomain: "ionic-f1app.firebaseapp.com",
  projectId: "ionic-f1app",
  storageBucket: "ionic-f1app.firebasestorage.app",
  messagingSenderId: "391975581945",
  appId: "1:391975581945:web:969b08634589c6128d4a28",
  measurementId: "G-QWCVF30X54",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
