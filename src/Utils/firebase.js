// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyW16VL9t7EcEK-t1gHpRIKgxm2oXA4ek",
  authDomain: "netflixgpt-8bdf7.firebaseapp.com",
  projectId: "netflixgpt-8bdf7",
  storageBucket: "netflixgpt-8bdf7.firebasestorage.app",
  messagingSenderId: "858185358367",
  appId: "1:858185358367:web:81e4848c1caf4b01e0492a",
  measurementId: "G-4L5N95HC3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();