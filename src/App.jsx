import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div>

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
          fontWeight: "bold",
          letterSpacing: "-1px"
        }}>
          Areej Asif
        </h1>

        <p style={{ marginTop: "10px", fontSize: "18px" }}>
          Computer Engineering • AI Systems • Marketing Specialist
        </p>

        <p style={{ maxWidth: "650px", marginTop: "20px" }}>
          Building intelligent systems using AI, machine learning, databases,
          GIS technologies, and modern web development. 4+ years experience in marketing,
          email campaigns, and digital strategy.
        </p>

        <div style={{ marginTop: "25px", display: "flex", gap: "12px" }}>
          <button className="card"
            onClick={() => window.location.href = "mailto:jeerafisa2@gmail.com"}>
            Contact Me
          </button>

          <a className="card" href="#projects">
            View Projects
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="card" style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>About</h2>
        <p>
          Computer Engineering student at Karabuk University. Focused on AI, machine learning,
          databases, GIS systems, and software engineering. Strong background in marketing,
          communication strategy, and analytics-driven growth.
        </p>
      </section>

      {/* EXPERIENCE */}
      <section style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>Experience</h2>

        <div className="card" style={{ marginBottom: "12px" }}>
          <h3>Marketing Specialist (4 Years)</h3>
          <p>Email marketing, campaign optimization, brand strategy, customer engagement.</p>
        </div>

        <div className="card">
          <h3>Email Marketing Lead</h3>
          <p>Designed conversion-focused email campaigns and analytics-driven improvements.</p>
        </div>
      </section>

      {/* SKILLS */}
      <section style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>Skills</h2>

        <div style={{ display: "grid", gap: "10px" }}>
          <div className="card">Python • Java • C • C++</div>
          <div className="card">React • JavaScript • UI Development</div>
          <div className="card">SQL • Databases • Oracle</div>
          <div className="card">Machine Learning • Data Science</div>
          <div className="card">GIS Systems • Spatial Analysis</div>
          <div className="card">Git • GitHub • Docker</div>
          <div className="card">Microsoft Office Suite</div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ maxWidth: "900px", margin: "0 auto 40px" }}>
        <h2>Projects</h2>

        <div className="card">
          <h3>AI Chatbot System</h3>
          <p>React-based GPT chatbot with API integration.</p>
        </div>

        <div className="card">
          <h3>Database Optimization System</h3>
          <p>SQL relational database design and performance tuning.</p>
        </div>

        <div className="card">
          <h3>GIS Mapping Platform</h3>
          <p>Spatial analysis and geographic visualization system.</p>
        </div>

        <div className="card">
          <h3>Machine Learning Prediction Model</h3>
          <p>Data classification and predictive analytics in Python.</p>
        </div>

        <div className="card">
          <h3>Food Calorie Analysis System</h3>
          <p>Nutrition tracking and calorie optimization model.</p>
        </div>
      </section>

      {/* CHATBOT */}
      <div style={{ marginTop: "80px" }}>
        <Chatbot />
      </div>

      {/* FOOTER */}
      <footer style={{
        textAlign: "center",
        margin: "60px 0",
        color: "#666"
      }}>
        © 2026 Areej Asif • Built with AI + Engineering mindset
      </footer>

    </div>
  );
}