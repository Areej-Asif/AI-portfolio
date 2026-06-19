import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = input;
    setInput("");

    setMessages((p) => [...p, { role: "user", text: userMessage }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      setMessages((p) => [...p, { role: "ai", text: data.reply }]);
    } catch {
      setMessages((p) => [...p, { role: "ai", text: "Error connecting to AI" }]);
    }
  };

  return (
    <div style={{
      maxWidth: "700px",
      margin: "0 auto",
      background: "rgba(255,255,255,0.08)",
      padding: "20px",
      borderRadius: "12px"
    }}>
      <h2>AI Chatbot</h2>

      <div style={{
        height: "250px",
        overflowY: "auto",
        marginBottom: "10px"
      }}>
        {messages.map((m, i) => (
          <div key={i} style={{
            textAlign: m.role === "user" ? "right" : "left",
            margin: "6px 0"
          }}>
            <span style={{
              display: "inline-block",
              padding: "8px 12px",
              borderRadius: "10px",
              background: "#111"
            }}>
              {m.text}
            </span>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: "10px",
            borderRadius: "8px",
            border: "none"
          }}
          placeholder="Ask something..."
        />

        <button onClick={sendMessage} style={{
          padding: "10px 15px",
          background: "#7c3aed",
          color: "white",
          borderRadius: "8px",
          border: "none"
        }}>
          Send
        </button>
      </div>
    </div>
  );
}