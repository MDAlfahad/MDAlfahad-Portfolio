import { Link } from "react-router-dom";
import { Element } from "react-scroll";
import Image from "../assets/about-image.jpeg";
import { ScrollVelocity } from "../animation/ScrollVelocity";


import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const About = () => {
  return (
    <Element name="about" className="w-full bg-white ">
      <div className="flex w-full h-30 items-center justify-center bg-green-500 py-8 overflow-hidden shadow-inner">
        <ScrollVelocity
          texts={["React Tailwindcss", "Figma GitHub"]}
          className="custom-scroll-text"
        />
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-10 md:gap-20 w-full max-w-6xl mx-auto px-6 lg:px-8 md:mt-16 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center group overflow-hidden" 
        >
          <img
            className="rounded-xl w-full max-w-md object-cover transform transition-all duration-500 group-hover:scale-105 group-hover:shadow-green-300/50"
            src={Image}
            alt="MD Alfahad"
          />
        </motion.div>

        <motion.div className="flex flex-col items-start">
          <motion.p
            variants={itemVariants}
            className="bg-gray-900 px-4 text-sm py-1 my-6 rounded-full text-green-400 font-semibold"
          >
            About Me
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="text-3xl lg:text-4xl font-bold text-gray-800 leading-tight"
          >
            I'm Available For
            <br />
            <span className="text-green-500">
              Web, IoT, & UI Design
            </span>{" "}
            Projects
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-5 text-gray-600 text-lg leading-relaxed"
          >
            A passionate frontend developer, web designer, and innovator with a
            strong interest in IoT, AI, and product development. I love
            combining creativity with technology—whether it’s designing modern,
            user-friendly web interfaces or building IoT-based solutions that
            solve real-world problems. As the founder of Techowear, a startup
            dedicated to developing smart safety and wearable devices, I aim to
            create impactful technologies that enhance security and convenience
            in everyday life.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-8">
            <Link
              to="contact" 
              smooth={true}
              duration={500}
              className="group inline-flex items-center gap-3 px-6 py-3 border-2 border-green-500 bg-green-500 text-white font-bold rounded-full transition-all duration-300 ease-in-out hover:bg-transparent hover:text-green-500 shadow-lg hover:shadow-green-500/30"
            >
              Get in Touch
              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </Element>
  );
};

export default About;