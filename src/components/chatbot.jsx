import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    setMessages((p) => [...p, { role: "user", text: userText }]);

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: userText }),
    });

    const data = await res.json();

    setMessages((p) => [...p, { role: "ai", text: data.reply }]);
  };

  return (
    <div style={{
      maxWidth: "700px",
      margin: "50px auto",
      padding: "20px",
      background: "rgba(255,255,255,0.05)",
      borderRadius: "12px"
    }}>
      <h2>AI Chatbot</h2>

      <div style={{ height: "300px", overflowY: "auto" }}>
        {messages.map((m, i) => (
          <p key={i} style={{ textAlign: m.role === "user" ? "right" : "left" }}>
            {m.text}
          </p>
        ))}
      </div>

      <div style={{ display: "flex", marginTop: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
          placeholder="Ask something..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}