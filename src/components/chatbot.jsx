import { useState } from "react";

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input) return;

    const user = input;
    setInput("");

    setMessages((p) => [...p, { role: "user", text: user }]);

    // temporary fake reply (safe first step)
    setTimeout(() => {
      setMessages((p) => [...p, { role: "ai", text: "AI backend will be added next step 🚀" }]);
    }, 500);
  };

  return (
    <div style={styles.box}>
      <h2>AI Chatbot</h2>

      <div style={styles.chat}>
        {messages.map((m,i)=>(
          <p key={i} style={{textAlign:m.role==="user"?"right":"left"}}>
            {m.text}
          </p>
        ))}
      </div>

      <div style={styles.row}>
        <input value={input} onChange={(e)=>setInput(e.target.value)} style={styles.input}/>
        <button onClick={sendMessage} style={styles.btn}>Send</button>
      </div>
    </div>
  );
}

const styles = {
  box: {
    maxWidth: "700px",
    margin: "40px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "12px"
  },
  chat: {
    height: "250px",
    overflowY: "auto",
    marginBottom: "10px"
  },
  row: {
    display: "flex",
    gap: "10px"
  },
  input: {
    flex: 1,
    padding: "10px"
  },
  btn: {
    padding: "10px 15px",
    background: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "8px"
  }
};