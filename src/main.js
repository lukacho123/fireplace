import './style.css'
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut } from "firebase/auth";
import Swal from 'sweetalert2'

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

// Alert config
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.onmouseenter = Swal.stopTimer;
    toast.onmouseleave = Swal.resumeTimer;
  }
});

//another script
document.addEventListener("DOMContentLoaded", function () {
  let isSignUp = true;

  // Registration
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
    
      //inputs
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if ((isSignUp && !name && !email && !password) || (!isSignUp && !email && !password)) {
        Toast.fire({
          icon: "warning",
          title: "გთხოვ შეავსე ყველა ველი"
        });
        return;
      }
    
      if (isSignUp) {
        createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          if (res?.user) {
            // localStorage.setItem("user", JSON.stringify({ name, email, password }));

            updateProfile(res?.user, {displayName: name}).then(updateRes => {
              if (updateRes.displayName) {
                Toast.fire({
                  icon: "success",
                  title: "Creating account"
                });
                window.location = "/fireplace/basket.html";
              }
            }).catch(error => {
              Toast.fire({
                icon: "error",
                title: error.message
              });
            })
          }
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: error.message
          });
        });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then(res => {
            if (res?.user) {
              // localStorage.setItem("user", JSON.stringify({ name: res?.user?.displayName, email, password }));
              window.location = '/fireplace/basket.html'
            };
          })
          .catch(error => {
            console.log(error);
            Toast.fire({
              icon: "error",
              title: error.message
            });
          });
      }
    });
  }

  // Sign in if user exists in localStorage
  function autoSignIn() {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      Toast.fire({
        icon: "warning",
        title: 'მიმდინარეობს ავტორიზაცია...'
      });

    signInWithEmailAndPassword(auth, savedUser?.email, savedUser?.password)
      .then(res => {
        if (res?.user) window.location = '/fireplace/basket.html';
      })
      .catch(error => {
        console.log(error);
        Toast.fire({
          icon: "error",
          title: error.message
        });
      });
    }
  }
  // autoSignIn();

  // Logout
  const logoutBtn = document.querySelector('#logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => signOut(auth));
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (window.location.pathname !== "/fireplace/basket.html"
        window.location = '/fireplace/basket.html';
      }

      const account = document.querySelector('#account');
      account.innerText = user.displayName;
    } else {
      if (window.location.pathname !== '/') {
        window.location = '/fireplace/';
      }
    }
  })

  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");
  const title = document.getElementById("title");
  const nameContainer = document.getElementById("nameField");
  const inputGroup = document.querySelector(".input-group");

  // გადართვა Sign In რეჟიმზე
  if(signinBtn) {
    signinBtn.onclick = () => {
      isSignUp = false;
      nameContainer.style.maxHeight = "0";
      title.innerHTML = "Sign In";
      signupBtn.classList.add("disable");
      signinBtn.classList.remove("disable");
      inputGroup.style.height = "220px";
    };
  }

  // გადართვა Sign Up რეჟიმზე
  if(signupBtn) {
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
    };
  }
});