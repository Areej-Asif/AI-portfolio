export default function App() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>

        {/* PROFILE IMAGE */}
        <img
          src="/profile.jpg"
          alt="profile"
          style={styles.profile}
        />

        <h1 style={styles.title}>Areej Asif</h1>

        <p style={styles.subtitle}>
          AI Engineer • Computer Engineering • Marketing Specialist
        </p>

        <p style={styles.desc}>
          I build intelligent systems using AI, machine learning, databases, GIS, and modern web technologies.
        </p>

        <div style={styles.contact}>
          <p>📧 yourgmail@gmail.com</p>
          <p>📞 +92-XXX-XXXXXXX</p>
        </div>

      </section>

      {/* ABOUT */}
      <section style={styles.card}>
        <h2>About Me</h2>
        <p>
          Computer Engineering student focused on AI systems, machine learning, software development, and data-driven solutions.
        </p>
      </section>

      {/* SKILLS */}
      <section style={styles.card}>
        <h2>Skills</h2>
        <div style={styles.grid}>
          {[
            "Python","Java","C++","React",
            "JavaScript","SQL","Machine Learning",
            "GIS","Git"
          ].map((skill, i) => (
            <span key={i} style={styles.badge}>{skill}</span>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section style={styles.card}>
        <h2>Projects</h2>

        <div style={styles.project}>
          <img src="/app1.jpg" style={styles.projectImg} />
          <h3>App 1 Project</h3>
        </div>

      </section>

      {/* FOOTER */}
      <footer style={styles.footer}>
        © 2026 Areej Asif • Portfolio
      </footer>

    </div>
  );
}

const styles = {

  page: {
    background: "#0b0f19",
    color: "white",
    fontFamily: "Arial",
    minHeight: "100vh"
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px"
  },

  profile: {
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px",
    border: "2px solid #333"
  },

  title: {
    fontSize: "55px",
    margin: "10px 0"
  },

  subtitle: {
    opacity: 0.8
  },

  desc: {
    maxWidth: "700px",
    margin: "15px auto",
    opacity: 0.6
  },

  contact: {
    marginTop: "20px",
    opacity: 0.8
  },

  card: {
    maxWidth: "900px",
    margin: "30px auto",
    padding: "20px",
    background: "rgba(255,255,255,0.05)",
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
    borderRadius: "8px"
  },

  project: {
    marginTop: "10px"
  },

  projectImg: {
    width: "100%",
    borderRadius: "10px"
  },

  footer: {
    textAlign: "center",
    marginTop: "50px",
    opacity: 0.5
  }
};