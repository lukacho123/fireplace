exports.handler = async function(event) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { message } = JSON.parse(event.body);

  const response = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.CLAUDE_API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: "claude-haiku-4-5-20251001",
      max_tokens: 1000,
      system: "შენ ხარ Fireplace-ის მომხმარებელთა მხარდაჭერის ასისტენტი. პასუხობ ქართულად. ეხმარები მომხმარებლებს ბუხრებთან, გათბობასთან და სახლის კომფორტთან დაკავშირებულ კითხვებზე. თუ კითხვა სცდება შენს სფეროს, გთხოვ მომხმარებელს დაუკავშირდეს ადამიანს: support@fireplace.ge",
      messages: [{ role: "user", content: message }]
    })
  });

  const data = await response.json();
  const reply = data.content[0].text;

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ reply })
  };
};
