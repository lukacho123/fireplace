import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth, onAuthStateChanged, signOut } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const app = initializeApp({ apiKey: "AIzaSyC75gk-OZgLn2hE_b1LeFD5BWljx6Kv8VA", authDomain: "fir-9fb39.firebaseapp.com", projectId: "fir-9fb39" });
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('display-name').innerText = user.displayName || 'მითითებული არ არის';
    document.getElementById('email').innerText = user.email;
    document.getElementById('status').innerText = user.emailVerified ? '✅ დადასტურებული' : '⚠️ დაუდასტურებელი';
  } else {
    window.location = '/';
  }
});

document.getElementById('logout-btn').addEventListener('click', () => {
  signOut(auth).then(() => { window.location = '/'; });
});
