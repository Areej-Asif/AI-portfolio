import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Areej Asif</h1>
        <p style={styles.subtitle}>AI Engineer • Computer Engineering • Marketing</p>
        <p style={styles.desc}>
          I build intelligent systems using AI, machine learning, databases, and modern web technologies.
        </p>
      </section>

      {/* ABOUT */}
      <section style={styles.card}>
        <h2>About Me</h2>
        <p>
          Computer Engineering student specializing in AI, ML, GIS systems, and software development.
        </p>
      </section>

      {/* PROJECTS */}
      <section style={styles.card}>
        <h2>Projects</h2>
        <ul>
          <li>AI Chatbot System</li>
          <li>Machine Learning Models</li>
          <li>GIS Mapping System</li>
          <li>Database Optimization</li>
        </ul>
      </section>

      {/* CHATBOT */}
      <Chatbot />

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif
      </footer>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "Arial",
    background: "linear-gradient(135deg,#0f0f0f,#1a1a2e)",
    color: "white",
    minHeight: "100vh",
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
    opacity: 0.7
  },
  desc: {
    maxWidth: "600px",
    margin: "20px auto",
    opacity: 0.6
  },
  card: {
    maxWidth: "800px",
    margin: "30px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "12px"
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    opacity: 0.5
  }
};