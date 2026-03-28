import './style.css'
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";
import Swal from 'sweetalert2'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "fir-9fb39.firebaseapp.com",
  projectId: "fir-9fb39",
  storageBucket: "fir-9fb39.firebasestorage.app",
  messagingSenderId: "591389234395",
  appId: "1:591389234395:web:f8a69851f96edc87aae8fe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

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

document.addEventListener("DOMContentLoaded", function () {
  let isSignUp = true;

  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      const name = document.getElementById("name")?.value;
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      if ((isSignUp && !name && !email && !password) || (!isSignUp && !email && !password)) {
        Toast.fire({ icon: "warning", title: "გთხოვ შეავსე ყველა ველი" });
        return;
      }

      if (isSignUp) {
        createUserWithEmailAndPassword(auth, email, password)
          .then((res) => {
            if (res?.user) {
              sendEmailVerification(res.user, { url: "https://fireplaceluka.netlify.app/verify.html", handleCodeInApp: false });
              updateProfile(res.user, { displayName: name }).then(() => {
                Toast.fire({ icon: "success", title: "✅ გაიარე ვერიფიკაცია მაილზე და შემდეგ შედი!" });
              }).catch(error => {
                Toast.fire({ icon: "error", title: error.message });
              });
            }
          })
          .catch((error) => {
            Toast.fire({ icon: "error", title: error.message });
          });
      } else {
        signInWithEmailAndPassword(auth, email, password)
          .then(async res => {
            if (res?.user) {
              await res.user.reload();
              if (false) { //emailVerified disabled
                Toast.fire({ icon: 'error', title: 'გთხოვ ჯერ დაადასტურე შენი email' });
                return;
              }
              window.location = '/basket.html';
            }
          })
          .catch(error => {
            console.log(error);
            Toast.fire({ icon: "error", title: error.message });
          });
      }
    });
  }

  const logoutBtn = document.querySelector('#logout-btn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => signOut(auth).then(() => window.location = '/'));
  }

  onAuthStateChanged(auth, (user) => {
    if (user) {
      user.reload().then(() => {
        const freshUser = auth.currentUser;
        if (freshUser) {
          const allowedPages = ['/basket.html', '/product.html', '/account.html', '/AboutUsPage.html', '/cart.html', '/contact.html', '/product', '/contact', '/account', '/about', '/basket', '/verify.html'];
          if (!allowedPages.some(p => window.location.pathname.includes(p))) {
            window.location = '/basket.html';
          }
          const account = document.querySelector('#account');
          if (account) account.innerText = freshUser.displayName || '';
          window.currentUser = freshUser;
        }
      });
    } else {
      if (window.location.pathname !== '/' && !window.location.pathname.includes('verify')) {
        window.location = '/';
      }
    }
  });

  const signupBtn = document.getElementById("signupBtn");
  const signinBtn = document.getElementById("signinBtn");
  const title = document.getElementById("title");
  const nameContainer = document.getElementById("nameField");
  const inputGroup = document.querySelector(".input-group");

  if (signinBtn) {
    signinBtn.onclick = () => {
      isSignUp = false;
      nameContainer.style.maxHeight = "0";
      title.innerHTML = "Sign In";
      signupBtn.classList.add("disable");
      signinBtn.classList.remove("disable");
      inputGroup.style.height = "220px";
    };
  }

  if (signupBtn) {
    signupBtn.onclick = () => {
      if (!isSignUp) {
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
