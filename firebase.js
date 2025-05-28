// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwonloiD7vHsXq-gl9oG1KfPhwbKXiy-Y",
  authDomain: "fir-8eb6e.firebaseapp.com",
  projectId: "fir-8eb6e",
  storageBucket: "fir-8eb6e.firebasestorage.app",
  messagingSenderId: "645750254318",
  appId: "1:645750254318:web:f16562d257006c6d3761ff",
  measurementId: "G-KHJ914YPD1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);