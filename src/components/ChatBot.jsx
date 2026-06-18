import { useState } from "react";
import { getAIResponse } from "../services/ai";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const text = input;
    setInput("");

    setMessages(prev => [...prev, { role: "user", text }]);

    const reply = await getAIResponse(text);

    setMessages(prev => [...prev, { role: "ai", text: reply }]);
  };

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "40px auto" }}>

      <div style={{ height: "300px", overflowY: "auto", marginBottom: "10px" }}>
        {messages.map((m, i) => (
          <div
            key={i}
            style={{
              textAlign: m.role === "user" ? "right" : "left",
              margin: "6px 0"
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
            color: "white"
          }}
        />

        <button
          onClick={sendMessage}
          style={{
            padding: "10px 20px",
            background: "#7c3aed",
            color: "white",
            borderRadius: "8px"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}