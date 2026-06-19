export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>

        <h1 style={styles.name}>Areej Asif</h1>

        <p style={styles.role}>
          AI Engineer • Computer Engineering Student • Marketing Specialist
        </p>

        <p style={styles.summary}>
          Building intelligent systems using Artificial Intelligence, Machine Learning,
          GIS technologies, databases, and modern web development. Strong experience in
          marketing strategy, email automation, and digital analytics.
        </p>

        <div style={styles.contact}>
          <p>📧 jeerafisa2@gmail.com</p>
          <p>📞 +90 505 674 66 78</p>
          <p>📍 Karabuk, Türkiye</p>
        </div>

      </section>

      {/* ABOUT */}
      <section style={styles.card}>
        <h2>About Me</h2>
        <p>
          I am a Computer Engineering student focused on AI systems, software engineering,
          and data-driven applications. I enjoy building real-world solutions using Python,
          React, and Machine Learning. My marketing background helps me design user-focused systems.
        </p>
      </section>

      {/* EDUCATION */}
      <section style={styles.card}>
        <h2>Education</h2>
        <p><b>Karabuk University</b></p>
        <p>Bachelor of Computer Engineering</p>
        <p>Specialization: AI, Machine Learning, Databases, Software Engineering</p>
      </section>

      {/* EXPERIENCE */}
      <section style={styles.card}>
        <h2>Experience</h2>

        <div style={styles.item}>
          <h3>Marketing Specialist (4+ Years)</h3>
          <p>
            • Email marketing campaigns<br/>
            • Customer engagement strategy<br/>
            • Brand growth and analytics<br/>
            • Conversion optimization
          </p>
        </div>

        <div style={styles.item}>
          <h3>Email Marketing Lead</h3>
          <p>
            • Designed automated email funnels<br/>
            • Improved engagement using analytics<br/>
            • Managed campaign performance tracking
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section style={styles.card}>
        <h2>Skills</h2>

        <div style={styles.skills}>
          {[
            "Python",
            "Java",
            "C++",
            "React",
            "JavaScript",
            "SQL",
            "Machine Learning",
            "Deep Learning",
            "GIS Systems",
            "Git & GitHub",
            "Docker"
          ].map((skill, i) => (
            <span key={i} style={styles.skill}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.card}>
        <h2>Projects</h2>

        <div style={styles.project}>
          <h3>AI Chatbot System</h3>
          <p>Smart conversational AI system using React and logic-based responses.</p>
        </div>

        <div style={styles.project}>
          <h3>Machine Learning Prediction Model</h3>
          <p>Data classification and predictive analytics using Python.</p>
        </div>

        <div style={styles.project}>
          <h3>GIS Mapping Platform</h3>
          <p>Geographic data visualization and spatial analysis system.</p>
        </div>

        <div style={styles.project}>
          <h3>Database Optimization System</h3>
          <p>SQL performance tuning and relational database design.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif • AI Engineering Portfolio
      </footer>

    </div>
  );
}

/* ===== PREMIUM STYLES ===== */

const styles = {

  page: {
    background: "radial-gradient(circle at top, #111827, #05070f)",
    color: "white",
    fontFamily: "Arial",
    minHeight: "100vh",
    paddingBottom: "60px"
  },

  hero: {
    textAlign: "center",
    padding: "90px 20px"
  },

  name: {
    fontSize: "60px",
    margin: "10px 0"
  },

  role: {
    opacity: 0.85,
    fontSize: "18px"
  },

  summary: {
    maxWidth: "750px",
    margin: "20px auto",
    opacity: 0.6,
    lineHeight: "1.6"
  },

  contact: {
    marginTop: "20px",
    opacity: 0.8
  },

  card: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "25px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "16px",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  skills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  },

  skill: {
    padding: "8px 12px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "20px",
    fontSize: "14px"
  },

  item: {
    marginBottom: "15px"
  },

  project: {
    marginBottom: "15px",
    padding: "10px",
    background: "rgba(255,255,255,0.03)",
    borderRadius: "10px"
  },

  footer: {
    textAlign: "center",
    marginTop: "50px",
    opacity: 0.5
  }
};