import { motion } from "framer-motion";

const projects = [
  {
    title: "AI Portfolio Chatbot",
    desc: "Smart chatbot using TF-IDF + GPT API + Firebase login",
    img: "https://source.unsplash.com/600x400/?ai,technology",
    link: "#",
  },
  {
    title: "Glassmorphism Dashboard",
    desc: "Modern UI dashboard with animations and blur effects",
    img: "https://source.unsplash.com/600x400/?dashboard,ui",
    link: "#",
  },
  {
    title: "React Animation Portfolio",
    desc: "Framer Motion powered personal portfolio system",
    img: "https://source.unsplash.com/600x400/?coding,react",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="min-h-screen bg-[#0a0a14] text-white px-6 py-20">

      <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={project.img}
              alt={project.title}
              className="h-48 w-full object-cover"
            />

            <div className="p-5">
              <h3 className="text-xl font-bold">{project.title}</h3>
              <p className="text-gray-300 text-sm mt-2">{project.desc}</p>

              <a
                href={project.link}
                className="inline-block mt-4 text-purple-400 hover:text-purple-200"
              >
                View Project →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}