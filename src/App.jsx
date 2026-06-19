export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO SECTION */}
      <section style={styles.hero}>

        <div style={styles.glow}></div>

        <img
          src="/profile.jpg"
          alt="profile"
          style={styles.profile}
        />

        <h1 style={styles.name}>Areej Asif</h1>

        <p style={styles.role}>
          AI Engineer • Computer Engineering • Marketing Specialist
        </p>

        <p style={styles.summary}>
          Building intelligent systems using Artificial Intelligence, Machine Learning,
          GIS technologies, databases, and modern full-stack web development.
          Strong background in marketing strategy and digital growth systems.
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
          I am a Computer Engineering student focused on AI systems, data-driven applications,
          and intelligent automation. I enjoy building real-world solutions using Python,
          React, and Machine Learning. My marketing experience helps me design user-focused systems.
        </p>
      </section>

      {/* SKILLS */}
      <section style={styles.card}>
        <h2>Skills</h2>
        <div style={styles.skills}>
          {[
            "Python", "Java", "C++", "React", "JavaScript",
            "SQL", "Machine Learning", "Deep Learning",
            "GIS Systems", "Git", "Docker"
          ].map((s, i) => (
            <span key={i} style={styles.skill}>{s}</span>
          ))}
        </div>
      </section>

      {/* PREMIUM GALLERY (NEW APPLE STYLE SECTION) */}
      <section style={styles.gallerySection}>
        <h2 style={{ textAlign: "center" }}>Projects Gallery</h2>

        <div style={styles.grid}>

          <div style={styles.cardHover}>
            <img src="/app1.jpg" style={styles.image} />
            <h3>AI Chatbot System</h3>
            <p>Smart conversational AI system built with React.</p>
          </div>

          <div style={styles.cardHover}>
            <img src="/filecore.jpg" style={styles.image} />
            <h3>FileCore System</h3>
            <p>Advanced file management and optimization system.</p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif • Designed with Premium UI Engineering
      </footer>

    </div>
  );
}

/* ================= PREMIUM STYLES ================= */

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
    padding: "90px 20px",
    position: "relative"
  },

  glow: {
    position: "absolute",
    top: "10%",
    left: "50%",
    transform: "translateX(-50%)",
    width: "300px",
    height: "300px",
    background: "rgba(124,58,237,0.4)",
    filter: "blur(120px)",
    zIndex: 0
  },

  profile: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    objectFit: "cover",
    border: "3px solid rgba(255,255,255,0.2)",
    boxShadow: "0 0 30px rgba(124,58,237,0.5)",
    position: "relative",
    zIndex: 1
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
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)"
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
    fontSize: "14px",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  gallerySection: {
    maxWidth: "1000px",
    margin: "60px auto",
    padding: "20px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "20px",
    marginTop: "20px"
  },

  cardHover: {
    padding: "15px",
    borderRadius: "16px",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    transition: "0.3s",
    cursor: "pointer"
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "10px"
  },

  footer: {
    textAlign: "center",
    marginTop: "60px",
    opacity: 0.5
  }
};