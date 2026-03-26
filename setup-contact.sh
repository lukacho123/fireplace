#!/bin/bash

BASE=~/Desktop/new-register

echo "🔥 Fireplace - Contact გვერდის შექმნა..."
echo ""

# ============================================================
# 1. contact.css
# ============================================================
cat > $BASE/contact.css << 'EOF'
/* ===== CONTACT PAGE STYLES ===== */

.contact-hero {
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    color: white;
    text-align: center;
    padding: 80px 20px 60px;
}
.contact-hero h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
}
.contact-hero p {
    font-size: 1.1rem;
    opacity: 0.9;
    font-family: 'Poppins', sans-serif;
}

.contact-section {
    max-width: 960px;
    margin: 60px auto;
    padding: 0 24px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
}
@media (max-width: 720px) {
    .contact-section { grid-template-columns: 1fr; }
    .contact-hero h1 { font-size: 1.8rem; }
}

.contact-info h2 {
    color: #333;
    margin-bottom: 24px;
    font-size: 1.4rem;
    font-family: 'Poppins', sans-serif;
}
.contact-info-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    margin-bottom: 24px;
}
.contact-info-item .icon {
    width: 48px;
    height: 48px;
    background: #fff3ee;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    flex-shrink: 0;
}
.contact-info-item h4 {
    margin: 0 0 4px;
    color: #333;
    font-size: 0.88rem;
    font-weight: 600;
    font-family: 'Poppins', sans-serif;
}
.contact-info-item p {
    margin: 0;
    color: #666;
    font-size: 0.93rem;
    font-family: 'Poppins', sans-serif;
}

.contact-form-box {
    background: #fff;
    border-radius: 18px;
    padding: 36px;
    box-shadow: 0 4px 28px rgba(0,0,0,0.09);
}
.contact-form-box h2 {
    color: #333;
    margin-bottom: 24px;
    font-size: 1.3rem;
    font-family: 'Poppins', sans-serif;
}
.contact-form-box input,
.contact-form-box textarea {
    width: 100%;
    padding: 13px 16px;
    border: 1.5px solid #e0e0e0;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    margin-bottom: 16px;
    outline: none;
    transition: border-color 0.2s;
    box-sizing: border-box;
    color: #333;
}
.contact-form-box input:focus,
.contact-form-box textarea:focus { border-color: #ff6b35; }
.contact-form-box textarea { height: 120px; resize: none; }
.contact-form-box .submit-btn {
    width: 100%;
    padding: 14px;
    background: #ff523b;
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
}
.contact-form-box .submit-btn:hover { background: #e04535; }
.contact-form-box .submit-btn:active { transform: scale(0.98); }
.form-success {
    display: none;
    background: #e8f5e9;
    color: #2e7d32;
    padding: 12px 16px;
    border-radius: 8px;
    text-align: center;
    margin-top: 14px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
}

/* ===== CHATBOT ===== */
.chat-bubble {
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 24px rgba(255,107,53,0.5);
    z-index: 1000;
    transition: transform 0.2s, box-shadow 0.2s;
}
.chat-bubble:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 28px rgba(255,107,53,0.6);
}
.chat-bubble svg { width: 27px; height: 27px; fill: white; }
.chat-bubble .ai-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #222;
    color: white;
    font-size: 0.6rem;
    font-weight: 700;
    padding: 2px 6px;
    border-radius: 10px;
    font-family: 'Poppins', sans-serif;
}

.chat-window {
    position: fixed;
    bottom: 102px;
    right: 28px;
    width: 370px;
    background: white;
    border-radius: 22px;
    box-shadow: 0 10px 48px rgba(0,0,0,0.18);
    display: flex;
    flex-direction: column;
    z-index: 1000;
    overflow: hidden;
    opacity: 0;
    pointer-events: none;
    transform: translateY(20px) scale(0.95);
    transition: all 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
    max-height: 540px;
}
.chat-window.open {
    opacity: 1;
    pointer-events: all;
    transform: translateY(0) scale(1);
}
@media (max-width: 440px) {
    .chat-window { width: calc(100vw - 32px); right: 16px; }
    .chat-bubble { bottom: 20px; right: 20px; }
}

.chat-header {
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
}
.chat-header-icon {
    width: 40px;
    height: 40px;
    background: rgba(255,255,255,0.22);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
}
.chat-header-info { flex: 1; }
.chat-header-info h4 {
    margin: 0;
    color: white;
    font-size: 0.95rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
}
.chat-header-info span {
    color: rgba(255,255,255,0.82);
    font-size: 0.73rem;
    font-family: 'Poppins', sans-serif;
}
.chat-close-btn {
    background: rgba(255,255,255,0.18);
    border: none;
    color: white;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
}
.chat-close-btn:hover { background: rgba(255,255,255,0.3); }

.chat-messages {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    min-height: 260px;
    max-height: 300px;
}
.chat-messages::-webkit-scrollbar { width: 3px; }
.chat-messages::-webkit-scrollbar-thumb { background: #e0e0e0; border-radius: 3px; }

.chat-msg {
    display: flex;
    gap: 8px;
    animation: msgSlide 0.25s ease both;
}
@keyframes msgSlide {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
}
.chat-msg.user { flex-direction: row-reverse; }
.chat-msg-avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: linear-gradient(135deg, #ff6b35, #f7931e);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    flex-shrink: 0;
    align-self: flex-end;
}
.chat-msg-bubble {
    max-width: 76%;
    padding: 10px 14px;
    border-radius: 16px;
    font-size: 0.875rem;
    line-height: 1.55;
    font-family: 'Poppins', sans-serif;
}
.chat-msg.bot .chat-msg-bubble {
    background: #f4f4f4;
    color: #333;
    border-bottom-left-radius: 4px;
}
.chat-msg.user .chat-msg-bubble {
    background: #ff6b35;
    color: white;
    border-bottom-right-radius: 4px;
}

.typing-indicator {
    display: flex;
    gap: 5px;
    align-items: center;
    padding: 2px 0;
}
.typing-indicator span {
    width: 7px;
    height: 7px;
    background: #bbb;
    border-radius: 50%;
    animation: typeBounce 1.2s infinite;
}
.typing-indicator span:nth-child(2) { animation-delay: 0.2s; }
.typing-indicator span:nth-child(3) { animation-delay: 0.4s; }
@keyframes typeBounce {
    0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
    30% { transform: translateY(-6px); opacity: 1; }
}

.chat-suggestions {
    padding: 0 14px 10px;
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
}
.chat-sug-btn {
    padding: 6px 13px;
    background: #fff3ee;
    border: 1.5px solid #ffcbb8;
    border-radius: 20px;
    font-size: 0.76rem;
    color: #ff6b35;
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    transition: all 0.15s;
}
.chat-sug-btn:hover { background: #ff6b35; color: white; border-color: #ff6b35; }

.chat-input-row {
    padding: 12px 14px 14px;
    border-top: 1px solid #f0f0f0;
    display: flex;
    gap: 10px;
    align-items: flex-end;
    flex-shrink: 0;
}
.chat-input-row textarea {
    flex: 1;
    border: 1.5px solid #e0e0e0;
    border-radius: 12px;
    padding: 10px 13px;
    font-family: 'Poppins', sans-serif;
    font-size: 0.85rem;
    resize: none;
    outline: none;
    min-height: 40px;
    max-height: 100px;
    transition: border-color 0.2s;
    color: #333;
    line-height: 1.4;
}
.chat-input-row textarea:focus { border-color: #ff6b35; }
.chat-send-btn {
    width: 42px;
    height: 42px;
    background: #ff523b;
    border: none;
    border-radius: 11px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: background 0.2s, transform 0.1s;
}
.chat-send-btn:hover { background: #e04535; }
.chat-send-btn:active { transform: scale(0.95); }
.chat-send-btn:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
.chat-send-btn svg { width: 18px; height: 18px; fill: white; }
EOF

echo "✅ contact.css შეიქმნა!"

# ============================================================
# 2. contact.js
# ============================================================
cat > $BASE/contact.js << 'EOF'
/* ===== CONTACT PAGE JAVASCRIPT ===== */

function menutoggle() {
    const menu = document.getElementById("MenuItems");
    menu.style.maxHeight = menu.style.maxHeight === "200px" ? "0px" : "200px";
}

function submitContactForm() {
    const name  = document.getElementById('cname').value.trim();
    const email = document.getElementById('cemail').value.trim();
    const msg   = document.getElementById('cmsg').value.trim();
    if (!name || !email || !msg) {
        alert('გთხოვ შეავსო ყველა ველი / Please fill in all fields');
        return;
    }
    document.getElementById('formSuccess').style.display = 'block';
    document.getElementById('cname').value  = '';
    document.getElementById('cemail').value = '';
    document.getElementById('cmsg').value   = '';
}

let chatIsOpen  = false;
let chatLoading = false;

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
    if (role === 'bot') {
        wrap.innerHTML = '<div class="chat-msg-avatar">🔥</div><div class="chat-msg-bubble">' + text + '</div>';
    } else {
        wrap.innerHTML = '<div class="chat-msg-bubble">' + text + '</div>';
    }
    box.appendChild(wrap);
    box.scrollTop = box.scrollHeight;
}

function showTyping() {
    const box = document.getElementById('chatMessages');
    const el  = document.createElement('div');
    el.className = 'chat-msg bot';
    el.id = 'typingEl';
    el.innerHTML = '<div class="chat-msg-avatar">🔥</div><div class="chat-msg-bubble"><div class="typing-indicator"><span></span><span></span><span></span></div></div>';
    box.appendChild(el);
    box.scrollTop = box.scrollHeight;
}

function hideTyping() {
    const el = document.getElementById('typingEl');
    if (el) el.remove();
}

async function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const text  = input.value.trim();
    if (!text || chatLoading) return;

    input.value = '';
    input.style.height = 'auto';
    chatLoading = true;
    document.getElementById('chatSendBtn').disabled = true;

    appendMessage('user', text);
    showTyping();

    const systemPrompt = 'შენ ხარ Fireplace-ის AI დამხმარე. პასუხობ ბუხრებთან, გათბობასთან, მონტაჟთან და Fireplace-ის პროდუქტებთან დაკავშირებულ კითხვებზე. თუ მომხმარებელი ქართულად წერს — პასუხობ ქართულად. თუ ინგლისურად წერს — პასუხობ ინგლისურად. იყავი მეგობრული და კონკრეტული.';

    try {
        const res  = await fetch('/.netlify/functions/chat', {
            method:  'POST',
            headers: { 'Content-Type': 'application/json' },
            body:    JSON.stringify({
                messages:     [{ role: 'user', content: text }],
                systemPrompt: systemPrompt
            })
        });
        const data = await res.json();
        hideTyping();
        appendMessage('bot', data.reply || 'ბოდიში, შეცდომა მოხდა.');
    } catch (e) {
        hideTyping();
        appendMessage('bot', 'Connection error / კავშირის შეცდომა. Please try again.');
    }

    chatLoading = false;
    document.getElementById('chatSendBtn').disabled = false;
    document.getElementById('chatInput').focus();
}

document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementById('chatInput');
    textarea.addEventListener('input', function () {
        this.style.height = 'auto';
        this.style.height = Math.min(this.scrollHeight, 100) + 'px';
    });
    textarea.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendChatMessage();
        }
    });
});
EOF

echo "✅ contact.js შეიქმნა!"

# ============================================================
# 3. contact.html
# ============================================================
cat > $BASE/contact.html << 'EOF'
<!DOCTYPE html>
<html lang="ka">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact - Fireplace</title>
    <link rel="stylesheet" href="basketstyle.css">
    <link rel="stylesheet" href="contact.css">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" crossorigin="anonymous" referrerpolicy="no-referrer"/>
</head>
<body>

<!-- NAVBAR -->
<div class="header">
    <div class="container">
        <div class="navbar">
            <div class="logo">
                <img src="photoebi_buxari/buxrisfotoJ.webp" width="100px" alt="Fireplace Logo">
            </div>
            <nav>
                <ul id="MenuItems">
                    <li><a href="basket.html">Home</a></li>
                    <li><a href="product.html">Products</a></li>
                    <li><a href="./AboutUsPage.html">About</a></li>
                    <li><a href="contact.html" style="color:#ff523b;font-weight:600;">Contact</a></li>
                    <li><a href="#!" id="account"></a></li>
                    <li><a href="#!" id="logout-btn">Logout</a></li>
                </ul>
            </nav>
            <img src="images/cart.png" width="30px" height="30px" alt="cart">
            <img src="images/menu.png" class="menu-icon" onclick="menutoggle()" alt="menu">
        </div>
    </div>
</div>

<!-- HERO -->
<div class="contact-hero">
    <h1>🔥 დაგვიკავშირდი / Contact Us</h1>
    <p>გვიპასუხეთ ნებისმიერ კითხვაზე · We're here to help you</p>
</div>

<!-- CONTENT -->
<div class="contact-section">

    <div class="contact-info">
        <h2>საკონტაქტო ინფო / Info</h2>

        <div class="contact-info-item">
            <div class="icon">📍</div>
            <div>
                <h4>მისამართი / Address</h4>
                <p>თბილისი, საქართველო / Tbilisi, Georgia</p>
            </div>
        </div>
        <div class="contact-info-item">
            <div class="icon">📞</div>
            <div>
                <h4>ტელეფონი / Phone</h4>
                <p>+995 555 123 456</p>
            </div>
        </div>
        <div class="contact-info-item">
            <div class="icon">📧</div>
            <div>
                <h4>ელ-ფოსტა / Email</h4>
                <p>info@fireplace.ge</p>
            </div>
        </div>
        <div class="contact-info-item">
            <div class="icon">🕐</div>
            <div>
                <h4>სამუშაო საათები / Hours</h4>
                <p>ორშ–პარ / Mon–Fri: 10:00 – 19:00</p>
            </div>
        </div>
    </div>

    <div class="contact-form-box">
        <h2>შეტყობინება / Send a Message</h2>
        <input type="text"  id="cname"  placeholder="სახელი / Name">
        <input type="email" id="cemail" placeholder="ელ-ფოსტა / Email">
        <textarea id="cmsg" placeholder="შეტყობინება / Message..."></textarea>
        <button class="submit-btn" onclick="submitContactForm()">გაგზავნა / Send →</button>
        <div class="form-success" id="formSuccess">
            ✅ გმადლობთ! მალე დაგიკავშირდებით. / Thank you! We'll be in touch soon.
        </div>
    </div>

</div>

<!-- CHAT BUBBLE -->
<div class="chat-bubble" onclick="toggleChat()">
    <svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
    <span class="ai-badge">AI</span>
</div>

<!-- CHAT WINDOW -->
<div class="chat-window" id="chatWindow">
    <div class="chat-header">
        <div class="chat-header-icon">🔥</div>
        <div class="chat-header-info">
            <h4>Fireplace AI Assistant</h4>
            <span>Online · ქართული / English</span>
        </div>
        <button class="chat-close-btn" onclick="toggleChat()">✕</button>
    </div>

    <div class="chat-messages" id="chatMessages">
        <div class="chat-msg bot">
            <div class="chat-msg-avatar">🔥</div>
            <div class="chat-msg-bubble">
                გამარჯობა! 👋 მე ვარ Fireplace-ის AI დამხმარე.<br>
                Hello! I'm the Fireplace AI assistant.<br><br>
                დამისვი კითხვა ქართულად ან ინგლისურად!<br>
                Ask me anything in Georgian or English!
            </div>
        </div>
    </div>

    <div class="chat-suggestions" id="chatSuggestions">
        <button class="chat-sug-btn" onclick="quickAsk(this)">რა ბუხრები გაქვთ?</button>
        <button class="chat-sug-btn" onclick="quickAsk(this)">What fireplaces do you have?</button>
        <button class="chat-sug-btn" onclick="quickAsk(this)">ფასები / Prices?</button>
        <button class="chat-sug-btn" onclick="quickAsk(this)">Delivery?</button>
    </div>

    <div class="chat-input-row">
        <textarea id="chatInput" placeholder="კითხვა... / Ask anything..." rows="1"></textarea>
        <button class="chat-send-btn" id="chatSendBtn" onclick="sendChatMessage()">
            <svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
        </button>
    </div>
</div>

<script src="contact.js"></script>
</body>
</html>
EOF

echo "✅ contact.html შეიქმნა!"
echo ""

# ============================================================
# 4. Contact ლინკების გასწორება ყველა გვერდზე
# ============================================================
for f in $BASE/basket.html $BASE/product.html $BASE/AboutUsPage.html $BASE/cart.html; do
    if [ -f "$f" ]; then
        sed -i '' 's|<li><a href="">Contact</a></li>|<li><a href="contact.html">Contact</a></li>|g' "$f"
        echo "✅ $(basename $f) — Contact ლინკი გასწორდა!"
    fi
done

echo ""
echo "========================================"
echo "🎉 დასრულდა! 3 ფაილი შეიქმნა:"
echo "   📄 contact.html"
echo "   🎨 contact.css"
echo "   ⚙️  contact.js"
echo "========================================"
echo ""
echo "🚀 ახლა გაუშვი:"
echo ""
echo "   cd ~/Desktop/new-register && git add . && git commit -m 'Add contact page with AI chatbot' && git push"
