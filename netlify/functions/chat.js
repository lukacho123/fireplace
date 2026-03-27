exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    const { message } = JSON.parse(event.body);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "HTTP-Referer": "https://peaceful-gingersnap-410c29.netlify.app",
        "X-Title": "Fireplace Assistant"
      },
      body: JSON.stringify({
        model: "nvidia/nemotron-3-super-120b-a12b:free",
        messages: [
          { role: "system", content: "შენ ხარ Fireplace-ის ასისტენტი. პასუხობ ქართულად." },
          { role: "user", content: message }
        ]
      })
    });

    const data = await response.json();
    const reply = JSON.stringify(data);

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
