import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 
      bg-black/30 backdrop-blur-xl border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto p-5 flex justify-between">
        <h1 className="text-3xl font-bold text-cyan-400">
          Areej.dev
        </h1>

        <ul className="flex gap-6 text-white">
          <li className="hover:text-cyan-400 cursor-pointer">
            About
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Skills
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Projects
          </li>

          <li className="hover:text-cyan-400 cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;