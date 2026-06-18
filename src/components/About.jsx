import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f0f1a] text-white px-6">
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-10 max-w-3xl shadow-2xl"
      >
        <h2 className="text-3xl font-bold mb-4">About Me</h2>

        <p className="text-gray-300 leading-relaxed">
          I am a passionate developer building modern AI-powered applications with React,
          Node.js, and intelligent chatbot systems. I love creating smooth UI experiences,
          glassmorphism designs, and real-world projects that combine design + logic.
        </p>

        <p className="mt-4 text-gray-400">
          Currently focused on building AI portfolio systems with chatbot integration,
          TF-IDF search engines, and GPT-based responses.
        </p>
      </motion.div>
    </section>
  );
}