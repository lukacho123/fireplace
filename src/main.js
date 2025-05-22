import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// enc credentials
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey,
  authDomain: `${projectId}.firebaseapp.com`,
  projectId,
  storageBucket: `${projectId}.firebasestorage.app`,
  messagingSenderId,
  appId: `1:${messagingSenderId}:web:f8a69851f96edc87aae8fe`,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
//submit button

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  
    //inputs
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        alert("Creating Account...");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  });
}

//another script
document.addEventListener("DOMContentLoaded", function () {
  const nameField = document.querySelector("#nameField input");
  const emailField = document.querySelector('input[type="email"]');
  const passwordField = document.querySelector('input[type="password"]');
  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");
  const title = document.getElementById("title");
  const nameContainer = document.getElementById("nameField");
  const inputGroup = document.querySelector(".input-group");

  let isSignUp = true;

  // გადართვა Sign In რეჟიმზე
  signinBtn.onclick = () => {
    isSignUp = false;
    nameContainer.style.maxHeight = "0";
    title.innerHTML = "Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
    inputGroup.style.height = "220px";
  };

  // გადართვა Sign Up რეჟიმზე
  signupBtn.onclick = () => {
    if (!isSignUp) {
      // ჯერ მხოლოდ ფორმის გადართვა
      isSignUp = true;
      nameContainer.style.maxHeight = "60px";
      title.innerHTML = "Sign Up";
      signupBtn.classList.remove("disable");
      signinBtn.classList.add("disable");
      inputGroup.style.height = "280px";
      return;
    }

    // Sign Up რეჟიმში მონაცემების დამუშავება
    const name = nameField.value.trim();
    const email = emailField.value.trim();
    const password = passwordField.value;

    if (!name || !email || !password) {
      alert("გთხოვ შეავსე ყველა ველი");
      return;
    }

    localStorage.setItem("user", JSON.stringify({ name, email, password }));
    alert("რეგისტრაცია წარმატებით დასრულდა!");
  };

  // Sign In ღილაკზე რეგისტრირებული მონაცემების შემოწმება
  signinBtn.addEventListener("click", () => {
    if (isSignUp) return; // თუ ჯერ არ გადართულია

    const email = emailField.value.trim();
    const password = passwordField.value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      alert(`მოგესალმები, ${savedUser.name}!`);
    } else {
      alert("მომხმარებელი ვერ მოიძებნა ან პაროლი არასწორია");
    }
  });
});
