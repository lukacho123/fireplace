exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { messages, systemPrompt } = JSON.parse(event.body);

    const allMessages = systemPrompt
      ? [{ role: "system", content: systemPrompt }, ...messages]
      : messages;

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://fireplaceluka.netlify.app",
        "X-Title": "Fireplace Assistant"
      },
      body: JSON.stringify({
        model: "google/gemma-3n-e4b-it:free",
        messages: allMessages
      })
    });

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content || JSON.stringify(data);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply })
    };
  } catch(e) {
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply: "შეცდომა: " + e.message })
    };
  }
};
