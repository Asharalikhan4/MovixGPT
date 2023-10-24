// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAp30AcMKUMdgkHTsc-GPVbsXSwGc4v7U0",
  authDomain: "netflixgpt-aa38b.firebaseapp.com",
  projectId: "netflixgpt-aa38b",
  storageBucket: "netflixgpt-aa38b.appspot.com",
  messagingSenderId: "95320177313",
  appId: "1:95320177313:web:c389f7b8dcb4d99d2d4ee0",
  measurementId: "G-3MQ7E908ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();