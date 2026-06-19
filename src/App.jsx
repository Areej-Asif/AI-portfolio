export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Areej Asif</h1>
        <p style={styles.subtitle}>AI Engineer • Computer Engineering • Marketing</p>
        <p style={styles.desc}>
          I build intelligent systems using AI, machine learning, databases, GIS, and modern web technologies.
        </p>
      </section>

      {/* ABOUT */}
      <section style={styles.card}>
        <h2>About Me</h2>
        <p>
          Computer Engineering student focused on AI systems, data science, and software engineering.
        </p>
      </section>

      {/* SKILLS */}
      <section style={styles.card}>
        <h2>Skills</h2>
        <div style={styles.grid}>
          {[
            "Python",
            "Java",
            "C++",
            "React",
            "JavaScript",
            "SQL",
            "Machine Learning",
            "GIS Systems",
            "Git",
          ].map((skill, i) => (
            <span key={i} style={styles.badge}>
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.card}>
        <h2>Projects</h2>
        <ul>
          <li>AI Chatbot System (Concept)</li>
          <li>Machine Learning Prediction Models</li>
          <li>GIS Mapping Platform</li>
          <li>Database Optimization System</li>
        </ul>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif • AI & Engineering Portfolio
      </footer>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    color: "white",
    fontFamily: "Arial",
    padding: "20px"
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },

  title: {
    fontSize: "60px",
    margin: 0
  },

  subtitle: {
    opacity: 0.8,
    fontSize: "18px"
  },

  desc: {
    maxWidth: "600px",
    margin: "20px auto",
    opacity: 0.6
  },

  card: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "12px"
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px"
  },

  badge: {
    padding: "8px 12px",
    background: "#111",
    borderRadius: "8px",
    fontSize: "14px"
  },

  footer: {
    textAlign: "center",
    marginTop: "50px",
    opacity: 0.5
  }
};