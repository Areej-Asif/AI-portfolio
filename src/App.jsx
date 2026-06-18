import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO */}
      <section style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "20px"
      }}>

        <h1 style={{
          fontSize: "60px",
          fontWeight: "bold"
        }}>
          Areej Asif
        </h1>

        <p style={{ fontSize: "18px", marginTop: "10px" }}>
          Computer Engineering • AI Systems • Marketing Specialist
        </p>

        <p style={{ maxWidth: "650px", marginTop: "20px" }}>
          AI developer focused on machine learning, databases, GIS systems, and modern web apps.
          Experienced in marketing, analytics, and automation systems.
        </p>

        <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
          <a
            href="mailto:your-email@gmail.com"
            style={{
              padding: "10px 20px",
              background: "#7c3aed",
              color: "white",
              borderRadius: "8px",
              textDecoration: "none"
            }}
          >
            Contact Me
          </a>

          <a href="#projects" style={{
            padding: "10px 20px",
            border: "1px solid #7c3aed",
            color: "#7c3aed",
            borderRadius: "8px",
            textDecoration: "none"
          }}>
            View Projects
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>About</h2>
        <p>
          Computer Engineering student focused on AI, machine learning, databases,
          GIS systems, and software engineering.
        </p>
      </section>

      {/* SKILLS */}
      <section style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>Skills</h2>
        <p>Python • Java • C++ • React • SQL • Machine Learning • GIS • Git</p>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>Projects</h2>

        <div className="card">AI Chatbot System</div>
        <div className="card">Database Optimization System</div>
        <div className="card">GIS Mapping Platform</div>
        <div className="card">Machine Learning Model</div>
      </section>

      {/* CHATBOT */}
      <Chatbot />

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        margin: "50px 0",
        color: "#777"
      }}>
        © 2026 Areej Asif
      </footer>

    </div>
  );
}