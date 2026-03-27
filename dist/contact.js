async function sendMessage() {
  const input = document.getElementById('user-input');
  const messages = document.getElementById('chat-messages');
  const btn = document.getElementById('send-btn');
  const message = input.value.trim();
  if (!message) return;

  messages.innerHTML += `
    <div class="message user">
      <div class="avatar">👤</div>
      <div class="bubble">${message}</div>
    </div>`;
  input.value = '';
  btn.disabled = true;

  messages.innerHTML += `
    <div class="message bot" id="typing">
      <div class="avatar">🔥</div>
      <div class="typing"><span></span><span></span><span></span></div>
    </div>`;
  messages.scrollTop = messages.scrollHeight;

  try {
    const res = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message })
    });
    const data = await res.json();
    document.getElementById('typing')?.remove();
    const reply = data.reply || data.error || JSON.stringify(data);
    messages.innerHTML += `
      <div class="message bot">
        <div class="avatar">🔥</div>
        <div class="bubble">${reply}</div>
      </div>`;
  } catch (e) {
    document.getElementById('typing')?.remove();
    messages.innerHTML += `
      <div class="message bot">
        <div class="avatar">🔥</div>
        <div class="bubble">შეცდომა: ${e.message}</div>
      </div>`;
  }
  btn.disabled = false;
  messages.scrollTop = messages.scrollHeight;
}

document.getElementById('user-input').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') sendMessage();
});
