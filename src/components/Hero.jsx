import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section 
      className="
      min-h-screen 
      bg-black 
      text-white 
      flex 
      justify-center 
      items-center
      relative
      overflow-hidden"
    >

      {/* Background Glow */}
      <div className="
      absolute 
      w-96 h-96 
      bg-cyan-500/20 
      rounded-full 
      blur-3xl">
      </div>


      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}

        className="text-center z-10"
      >

        <div className="
        w-40 h-40 
        rounded-full 
        bg-gradient-to-r 
        from-cyan-400 
        to-purple-500
        mx-auto
        mb-6
        animate-pulse">
        </div>


        <h1 className="text-6xl font-bold">
          Hi, I'm Areej 👋
        </h1>


        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI Engineer",
            2000,
            "React Developer",
            2000,
          ]}
          speed={50}
          repeat={Infinity}
          className="text-3xl text-cyan-400 mt-4"
        />


        <p className="
        max-w-xl 
        mx-auto 
        mt-6 
        text-gray-400">
          I create modern websites, AI applications,
          and intelligent digital experiences.
        </p>


        <div className="mt-8 flex justify-center gap-5">

          <button className="
          bg-cyan-500 
          px-6 py-3 
          rounded-xl 
          hover:scale-110 
          transition">
            Hire Me
          </button>


          <button className="
          border 
          border-cyan-500 
          px-6 py-3 
          rounded-xl
          hover:bg-cyan-500
          transition">
            My Projects
          </button>

        </div>


      </motion.div>

    </section>
  );
}

export default Hero;