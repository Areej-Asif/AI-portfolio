import Chatbot from "./components/Chatbot";

export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.title}>Areej Asif</h1>
        <p style={styles.subtitle}>AI Engineer • Computer Engineering • Marketing Systems</p>
        <p style={styles.desc}>
          I build intelligent AI systems, machine learning models, and modern web applications.
        </p>
      </section>

      {/* ABOUT */}
      <section style={styles.card}>
        <h2>About</h2>
        <p>
          Computer Engineering student focused on AI, ML, databases, and GIS systems.
        </p>
      </section>

      {/* SKILLS */}
      <section style={styles.card}>
        <h2>Skills</h2>
        <div style={styles.grid}>
          {["Python","Java","React","SQL","ML","GIS","Git"].map((s,i)=>(
            <div key={i} style={styles.badge}>{s}</div>
          ))}
        </div>
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
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e293b)",
    color: "white",
    fontFamily: "Arial",
    padding: "20px"
  },
  hero: {
    textAlign: "center",
    padding: "70px 20px"
  },
  title: {
    fontSize: "60px",
    marginBottom: "10px"
  },
  subtitle: {
    opacity: 0.8
  },
  desc: {
    maxWidth: "600px",
    margin: "20px auto",
    opacity: 0.6
  },
  card: {
    maxWidth: "900px",
    margin: "25px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.06)",
    borderRadius: "12px"
  },
  grid: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap"
  },
  badge: {
    padding: "8px 12px",
    background: "#111",
    borderRadius: "8px"
  },
  footer: {
    textAlign: "center",
    marginTop: "50px",
    opacity: 0.5
  }
};