import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #0f172a, #1e293b)",
      color: "white",
      fontFamily: "Arial",
      padding: "20px"
    }}>

      {/* HERO */}
      <div style={{
        textAlign: "center",
        padding: "80px 20px"
      }}>
        <h1 style={{
          fontSize: "60px",
          marginBottom: "10px"
        }}>
          Areej Asif
        </h1>

        <p style={{ fontSize: "18px", opacity: 0.8 }}>
          AI Engineer • Computer Engineering • Marketing
        </p>

        <p style={{
          maxWidth: "600px",
          margin: "20px auto",
          opacity: 0.6
        }}>
          Building intelligent AI systems, machine learning models,
          databases, GIS platforms, and modern web applications.
        </p>
      </div>

      {/* CARDS */}
      <div style={{
        maxWidth: "900px",
        margin: "0 auto",
        display: "grid",
        gap: "20px"
      }}>

        <div style={cardStyle}>
          <h2>About</h2>
          <p>
            Computer Engineering student focused on AI, ML, and software systems.
          </p>
        </div>

        <div style={cardStyle}>
          <h2>Skills</h2>
          <p>React • Python • Java • SQL • Machine Learning • GIS • Git</p>
        </div>

        <div style={cardStyle}>
          <h2>Projects</h2>
          <p>AI Chatbot • ML Models • GIS System • Database Projects</p>
        </div>
      </div>

      {/* CHATBOT */}
      <div style={{ marginTop: "40px" }}>
        <Chatbot />
      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        opacity: 0.5
      }}>
        © 2026 Areej Asif
      </div>

    </div>
  );
}

const cardStyle = {
  background: "rgba(255,255,255,0.08)",
  padding: "20px",
  borderRadius: "12px",
  backdropFilter: "blur(10px)"
};