export default function App() {
  return (
    <div style={styles.page}>

      {/* BACKGROUND GLOW */}
      <div style={styles.glow1}></div>
      <div style={styles.glow2}></div>

      {/* HERO */}
      <section style={styles.hero}>
        <p style={styles.tag}>AI ENGINEER • COMPUTER ENGINEERING • SYSTEM DESIGN</p>

        <h1 style={styles.title}>
          Areej Asif
        </h1>

        <p style={styles.subtitle}>
          Building intelligent systems with AI, machine learning & modern web technologies
        </p>

        <div style={styles.buttonRow}>
          <a href="#projects" style={styles.primaryBtn}>View Work</a>
          <a href="mailto:your@email.com" style={styles.secondaryBtn}>Contact</a>
        </div>
      </section>

      {/* GRID SECTION */}
      <section style={styles.grid}>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>About</h2>
          <p style={styles.text}>
            Computer Engineering student focused on AI systems, data science, GIS,
            and scalable software architecture.
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Focus Areas</h2>
          <p style={styles.text}>
            Artificial Intelligence • Machine Learning • Backend Systems • Databases • GIS
          </p>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Experience</h2>
          <p style={styles.text}>
            Marketing Systems • Email Automation • Analytics Driven Growth • 4+ Years Experience
          </p>
        </div>

      </section>

      {/* PROJECTS */}
      <section id="projects" style={styles.projects}>
        <h2 style={styles.sectionTitle}>Projects</h2>

        <div style={styles.projectCard}>AI Chatbot System</div>
        <div style={styles.projectCard}>Machine Learning Prediction Models</div>
        <div style={styles.projectCard}>GIS Mapping Platform</div>
        <div style={styles.projectCard}>Database Optimization System</div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif • Built with AI + Engineering mindset
      </footer>

    </div>
  );
}

const styles = {

  page: {
    minHeight: "100vh",
    background: "#05070f",
    color: "white",
    fontFamily: "Inter, Arial",
    overflowX: "hidden",
    position: "relative",
    paddingBottom: "80px"
  },

  /* glowing background */
  glow1: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "#7c3aed",
    filter: "blur(150px)",
    top: "-100px",
    left: "-100px",
    opacity: 0.4
  },

  glow2: {
    position: "absolute",
    width: "400px",
    height: "400px",
    background: "#06b6d4",
    filter: "blur(150px)",
    bottom: "-100px",
    right: "-100px",
    opacity: 0.3
  },

  hero: {
    textAlign: "center",
    padding: "120px 20px 80px",
    position: "relative"
  },

  tag: {
    fontSize: "12px",
    letterSpacing: "2px",
    opacity: 0.6
  },

  title: {
    fontSize: "72px",
    margin: "20px 0",
    fontWeight: "bold"
  },

  subtitle: {
    maxWidth: "600px",
    margin: "0 auto",
    opacity: 0.7,
    fontSize: "18px"
  },

  buttonRow: {
    marginTop: "30px",
    display: "flex",
    justifyContent: "center",
    gap: "15px"
  },

  primaryBtn: {
    padding: "12px 20px",
    background: "linear-gradient(135deg,#7c3aed,#06b6d4)",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold"
  },

  secondaryBtn: {
    padding: "12px 20px",
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: "10px",
    color: "white",
    textDecoration: "none"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px"
  },

  card: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "20px",
    backdropFilter: "blur(10px)"
  },

  cardTitle: {
    marginBottom: "10px"
  },

  text: {
    opacity: 0.7,
    lineHeight: "1.6"
  },

  projects: {
    textAlign: "center",
    padding: "60px 20px"
  },

  sectionTitle: {
    fontSize: "32px",
    marginBottom: "20px"
  },

  projectCard: {
    maxWidth: "600px",
    margin: "10px auto",
    padding: "15px",
    background: "rgba(255,255,255,0.04)",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.08)"
  },

  footer: {
    textAlign: "center",
    marginTop: "60px",
    opacity: 0.4
  }
};