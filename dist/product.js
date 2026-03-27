// Mobile menu
var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    MenuItems.style.maxHeight = MenuItems.style.maxHeight === "0px" ? "200px" : "0px";
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
for (let i = 0; i < 240; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 1.8 + 0.2,
        speedY: Math.random() * 0.14 + 0.04,
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

// SCROLL REVEAL
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// SLIDESHOW
let currentSlide = 0;
const totalSlides = 3;
let autoPlayTimer;

function goToSlide(index) {
    document.querySelectorAll('.slide')[currentSlide].classList.remove('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.remove('active');
    currentSlide = (index + totalSlides) % totalSlides;
    document.querySelectorAll('.slide')[currentSlide].classList.add('active');
    document.querySelectorAll('.indicator')[currentSlide].classList.add('active');
    resetAutoPlay();
}

function changeSlide(dir) { goToSlide(currentSlide + dir); }

function resetAutoPlay() {
    clearInterval(autoPlayTimer);
    autoPlayTimer = setInterval(() => changeSlide(1), 5500);
}

resetAutoPlay();
