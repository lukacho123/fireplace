// Mobile menu
function menutoggle() {
    const menu = document.getElementById("MenuItems");
    if (menu) menu.style.maxHeight = menu.style.maxHeight === "200px" ? "0px" : "200px";
}

// FIXED STARS
const canvas = document.getElementById('starsCanvas');
const ctx = canvas.getContext('2d');
function resizeCanvas() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
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
            ctx.fillStyle = g; ctx.beginPath(); ctx.arc(s.x, s.y, s.size * 5, 0, Math.PI * 2); ctx.fill();
        }
        ctx.beginPath(); ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,235,200,${op})`; ctx.fill();
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// CONTACT FORM
function submitContactForm() {
    const name    = document.getElementById('cname').value.trim();
    const email   = document.getElementById('cemail').value.trim();
    const msg     = document.getElementById('cmsg').value.trim();
    if (!name || !email || !msg) { alert('გთხოვ შეავსო ყველა სავალდებულო ველი!'); return; }
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('cname').value  = '';
    document.getElementById('cemail').value = '';
    document.getElementById('csubject').value = '';
    document.getElementById('cmsg').value   = '';
    setTimeout(() => document.getElementById('formSuccess').style.display = 'none', 5000);
}

// CHATBOT
let chatIsOpen  = false;
let chatLoading = false;
const chatHistory = [];

function toggleChat() {
    chatIsOpen = !chatIsOpen;
    document.getElementById('chatWindow').classList.toggle('open', chatIsOpen);
    if (chatIsOpen) document.getElementById('chatInput').focus();
}

function quickAsk(btn) {
    document.getElementById('chatInput').value = btn.textContent;
    document.getElementById('chatSuggestions').style.display = 'none';
    sendChatMessage();
}

function appendMessage(role, text) {
    const box  = document.getElementById('chatMessages');
    const wrap = document.createElement('div');
    wrap.className = 'chat-msg ' + role;
    wrap.innerHTML = role === 'bot'
        ? `<div class="chat-msg-avatar">🔥</div><div class="chat-msg-bubble">${text}</div>`
        : `<div class="chat-msg-bubble">${text}</div>`;
    box.appendChild(wrap);
    box.scrollTop = box.scrollHeight;
}

function showTyping() {
    const box = document.getElementById('chatMessages');
    const el  = document.createElement('div');
    el.className = 'chat-msg bot'; el.id = 'typingEl';
    el.innerHTML = `<div class="chat-msg-avatar">🔥</div><div class="chat-msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>`;
    box.appendChild(el); box.scrollTop = box.scrollHeight;
}

function hideTyping() { const el = document.getElementById('typingEl'); if (el) el.remove(); }

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text  = input.value.trim();
    if (!text || chatLoading) return;

    input.value = '';
    input.style.height = 'auto';
    chatLoading = true;
    document.getElementById('chatSendBtn').disabled = true;

    appendMessage('user', text);
    chatHistory.push({ role: 'user', content: text });
    showTyping();

    const systemPrompt = `შენ ხარ Fireplace-ის პროფესიონალი AI დამხმარე. Fireplace არის საქართველოს წამყვანი ბუხრების მაღაზია თბილისში.

პროდუქტები და ფასები:
🔥 კლასიკური ხის ბუხრები — $50-$200
🏠 ჩაშენებული ბუხრები — $150-$500  
🌿 ბიოეთანოლის ბუხრები — $80-$300
⚡ ელექტრო ბუხრები — $60-$250
💎 პრემიუმ მოდელები — $300+

სერვისები: უფასო კონსულტაცია, პროფესიონალური მონტაჟი, 2 წლიანი გარანტია, მიწოდება მთელ საქართველოში.
სამუშაო საათები: ორშ-პარ 10:00-19:00 | ტელ: +995 555 123 456 | თბილისი

წესები: ქართულად → ქართულად, ინგლისურად → ინგლისურად. იყავი მეგობრული და კონკრეტული. გირჩიე სათანადო პროდუქტი.`;

    try {
        const res  = await fetch('/.netlify/functions/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ messages: chatHistory, systemPrompt })
        });
        const data = await res.json();
        hideTyping();
        const reply = data.reply || 'ბოდიში, შეცდომა მოხდა.';
        appendMessage('bot', reply);
        chatHistory.push({ role: 'assistant', content: reply });
    } catch (e) {
        hideTyping();
        appendMessage('bot', 'კავშირის შეცდომა. სცადე თავიდან.');
    }

    chatLoading = false;
    document.getElementById('chatSendBtn').disabled = false;
    document.getElementById('chatInput').focus();
}

document.addEventListener('DOMContentLoaded', function () {
    // Textarea auto-resize
    const textarea = document.getElementById('chatInput');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 90) + 'px';
    });
    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChatMessage(); }
    });

    // Animate stats
    document.querySelectorAll('.stat-num[data-target]').forEach(el => {
        const target = parseInt(el.dataset.target);
        const suffix = el.dataset.suffix || '';
        let current = 0;
        const step = target / 60;
        const timer = setInterval(() => {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = Math.floor(current) + suffix;
        }, 20);
    });
});
