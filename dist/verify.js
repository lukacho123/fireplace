import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js';
import { getAuth, applyActionCode, confirmPasswordReset } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js';

const app = initializeApp({ apiKey: "AIzaSyC75gk-OZgLn2hE_b1LeFD5BWljx6Kv8VA", authDomain: "fir-9fb39.firebaseapp.com", projectId: "fir-9fb39" });
const auth = getAuth(app);
const p = new URLSearchParams(window.location.search);
const mode = p.get('mode');
const code = p.get('oobCode');

if (mode === 'verifyEmail') {
  applyActionCode(auth, code).then(() => {
    document.getElementById('icon').innerText = '✅';
    document.getElementById('title').innerText = 'Email დადასტურებულია!';
    document.getElementById('msg').innerText = 'ახლა შეგიძლია შეხვიდე.';
    document.getElementById('login-btn').style.display = 'inline-block';
  }).catch(() => {
    document.getElementById('icon').innerText = '❌';
    document.getElementById('title').innerText = 'შეცდომა!';
    document.getElementById('msg').innerText = 'ლინკი ვადაგასულია.';
    document.getElementById('login-btn').style.display = 'inline-block';
  });
} else if (mode === 'resetPassword') {
  document.getElementById('icon').innerText = '🔑';
  document.getElementById('title').innerText = 'ახალი პაროლი';
  document.getElementById('reset-form').style.display = 'block';
  document.getElementById('reset-btn').addEventListener('click', () => {
    const np = document.getElementById('new-password').value;
    const cp = document.getElementById('confirm-password').value;
    if (np !== cp) { alert('პაროლები არ ემთხვევა!'); return; }
    confirmPasswordReset(auth, code, np).then(() => {
      document.getElementById('icon').innerText = '✅';
      document.getElementById('title').innerText = 'პაროლი შეიცვალა!';
      document.getElementById('reset-form').style.display = 'none';
      document.getElementById('login-btn').style.display = 'inline-block';
    }).catch(e => alert(e.message));
  });
}
