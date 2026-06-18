
import { motion } from "framer-motion";

const skills = [
  "React.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Firebase",
  "Tailwind CSS",
  "Framer Motion",
  "GPT APIs",
  "TF-IDF NLP",
];

export default function Skills() {
  return (
    <section className="min-h-screen bg-[#0b0b16] text-white flex flex-col items-center justify-center px-6">

      <h2 className="text-4xl font-bold mb-10">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ scale: 1.1 }}
            className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl p-5 text-center shadow-lg hover:shadow-purple-500/20"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
}