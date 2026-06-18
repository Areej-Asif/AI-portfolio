export async function getAIResponse(input) {
  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You are a helpful AI assistant for a portfolio website."
          },
          {
            role: "user",
            content: input
          }
        ]
      })
    });

    const data = await res.json();

    if (!data.choices || !data.choices[0]) {
      return "AI quota finished or API error.";
    }

    return data.choices[0].message.content;

  } catch (err) {
    return "AI request failed.";
  }
}