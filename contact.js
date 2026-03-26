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
