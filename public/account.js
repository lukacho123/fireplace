// Mobile menu
var MenuItems = document.getElementById("MenuItems");
if (MenuItems) MenuItems.style.maxHeight = "0px";
function menutoggle() {
    if (MenuItems) MenuItems.style.maxHeight = MenuItems.style.maxHeight === "0px" ? "200px" : "0px";
}

// FIXED STARS
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const stars = [];
for (let i = 0; i < 220; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.8 + 0.2,
        speedY: Math.random() * 0.12 + 0.03,
        opacity: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.018 + 0.004,
        twinkleOffset: Math.random() * Math.PI * 2,
    });
}

let frame = 0;
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    frame++;
    stars.forEach(s => {
        s.y += s.speedY;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
        const twinkle = Math.sin(frame * s.twinkleSpeed + s.twinkleOffset);
        const op = s.opacity * (0.55 + 0.45 * twinkle);
        if (s.size > 1.3) {
            const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 5);
            g.addColorStop(0, `rgba(255,200,150,${op * 0.3})`);
            g.addColorStop(1, 'rgba(0,0,0,0)');
            ctx.fillStyle = g;
            ctx.beginPath();
            ctx.arc(s.x, s.y, s.size * 5, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,235,200,${op})`;
        ctx.fill();
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// SIDEBAR NAVIGATION
function showPanel(panelId) {
    document.querySelectorAll('.account-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.sidebar-item').forEach(s => s.classList.remove('active'));
    document.getElementById(panelId).classList.add('active');
    event.currentTarget.classList.add('active');
}

// TOAST
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.querySelector('.toast-msg').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// SAVE PROFILE
function saveProfile() {
    const name = document.getElementById('profileName').value;
    const phone = document.getElementById('profilePhone').value;

    if (!name) {
        showToast('⚠️ სახელი შეიყვანე!');
        return;
    }

    // Update Firebase display name if available
    if (window.firebaseAuth && window.firebaseAuth.currentUser) {
        window.firebaseAuth.currentUser.updateProfile({ displayName: name })
            .then(() => showToast('✅ პროფილი განახლდა!'))
            .catch(() => showToast('❌ შეცდომა მოხდა'));
    } else {
        showToast('✅ პროფილი შენახულია!');
    }
}

// SAVE PASSWORD
function savePassword() {
    const current = document.getElementById('currentPassword').value;
    const newPass = document.getElementById('newPassword').value;
    const confirm = document.getElementById('confirmPassword').value;

    if (!current || !newPass || !confirm) {
        showToast('⚠️ ყველა ველი შეავსე!');
        return;
    }
    if (newPass !== confirm) {
        showToast('❌ პაროლები არ ემთხვევა!');
        return;
    }
    if (newPass.length < 6) {
        showToast('❌ პაროლი მინიმუმ 6 სიმბოლო!');
        return;
    }

    showToast('✅ პაროლი შეიცვალა!');
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmPassword').value = '';
}

// FAVORITES - from localStorage
function loadFavorites() {
    const favGrid = document.getElementById('favoritesGrid');
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');

    if (favs.length === 0) {
        favGrid.innerHTML = `
            <div class="orders-empty" style="grid-column:1/-1">
                <i class="fa-regular fa-heart"></i>
                <p>საყვარელი პროდუქტები არ გაქვს</p>
            </div>`;
        return;
    }

    favGrid.innerHTML = favs.map((fav, i) => `
        <div class="fav-card">
            <img src="${fav.img}" alt="${fav.name}">
            <div class="fav-card-body">
                <h4>${fav.name}</h4>
                <p>${fav.price}</p>
                <button class="fav-remove" onclick="removeFavorite(${i})">
                    <i class="fa-solid fa-trash-can"></i> წაშლა
                </button>
            </div>
        </div>
    `).join('');
}

function removeFavorite(index) {
    const favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    favs.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favs));
    loadFavorites();
    showToast('🗑️ წაიშალა საყვარელებიდან');
}

// INIT - fill user data from Firebase
document.addEventListener('DOMContentLoaded', () => {
    loadFavorites();

    // Try to get user from main.js Firebase auth
    // Listen for auth state via custom event or check window
    const checkUser = setInterval(() => {
        const user = window.currentUser;
        if (user) {
            clearInterval(checkUser);

            // Avatar initials
            const name = user.displayName || user.email || 'U';
            const initial = name.charAt(0).toUpperCase();
            document.getElementById('avatarInitial').textContent = initial;
            document.getElementById('headerName').textContent = user.displayName || 'მომხმარებელი';
            document.getElementById('headerEmail').textContent = user.email || '';
            document.getElementById('navAccountName').textContent = user.displayName || '';

            // Fill form
            document.getElementById('profileName').value = user.displayName || '';
            document.getElementById('profileEmail').value = user.email || '';
        }
    }, 300);

    // Fallback after 3s
    setTimeout(() => {
        clearInterval(checkUser);
        const saved = JSON.parse(localStorage.getItem('userData') || '{}');
        if (saved.name) {
            document.getElementById('avatarInitial').textContent = saved.name.charAt(0).toUpperCase();
            document.getElementById('headerName').textContent = saved.name;
            document.getElementById('headerEmail').textContent = saved.email || '';
            document.getElementById('profileName').value = saved.name;
            document.getElementById('profileEmail').value = saved.email || '';
        }
    }, 3000);
});
