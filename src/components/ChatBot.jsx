import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input;
    setInput("");

    // user message
    setMessages((prev) => [...prev, { role: "user", text: userText }]);

    // simple AI reply (SAFE for deployment)
    const reply = generateFakeAI(userText);

    setMessages((prev) => [...prev, { role: "ai", text: reply }]);
  };

  // SIMPLE AI LOGIC (no API needed → deploy-safe)
  const generateFakeAI = (text) => {
    const msg = text.toLowerCase();

    if (msg.includes("hello")) return "Hello! 👋 I’m Areej’s AI portfolio assistant.";
    if (msg.includes("skills")) return "She knows React, Python, AI, ML, SQL, and GIS.";
    if (msg.includes("projects")) return "She built AI chatbot, ML models, GIS systems, and databases.";
    if (msg.includes("who are you")) return "I’m an AI assistant inside this portfolio.";

    return "Interesting question! This AI is currently in demo mode.";
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "40px auto" }}>
      
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.role === "user" ? "right" : "left",
              margin: "6px 0",
            }}
          >
            <span className="card" style={{ display: "inline-block" }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #333",
            background: "#111",
            color: "white",
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            background: "#7c3aed",
            color: "white",
            borderRadius: "8px",
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}