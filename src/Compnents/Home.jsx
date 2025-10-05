import React from "react";
import Image from "../assets/imagev1.0.png";
import { Element } from "react-scroll";
import { GrDxc, GrArchlinux, GrCode } from "react-icons/gr";
import RotatingText from "../animation/RotatingText";
// Import motion from Framer Motion
import { motion } from "framer-motion";

const Home = () => {
  // Define animation variants for the container.
  // This will allow us to stagger the animation of child elements.
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Time delay between each child animating in
      },
    },
  };

  // Define a reusable animation variant for items that will slide up and fade in.
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };
  
  // A slightly different variant for the image for a different feel
  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", damping: 15, stiffness: 100 },
    }
  }

  return (
    <Element
      name="project" // I think you meant "home" or "about" here, but keeping "project" as in your original code
      className="md:flex items-center justify-between md:px-5 lg:px-10 z-0 px-4 bg-green-200 min-h-screen w-full overflow-hidden"
    >
      {/* Motion container for the text content */}
      <motion.div
        className="md:text px-5"
        variants={containerVariants}
        initial="hidden" // Initial state of the animation
        whileInView="visible" // Animate when the component is in view
        viewport={{ once: true, amount: 0.5 }} // Animate only once when 50% is visible
      >
        <motion.h1
          variants={itemVariants}
          className="md:text-3xl lg:text-6xl text-4xl font-bold flex gap-5 items-center"
        >
          Hey I'M
          {/* Added hover effects to icons */}
          <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}>
             <GrCode className="text-green-400" />
          </motion.div>
          <motion.div whileHover={{ scale: 1.2, rotate: 15 }} transition={{ type: "spring", stiffness: 400 }}>
             <GrDxc className="text-green-400" />
          </motion.div>
        </motion.h1>

        <motion.h1
          variants={itemVariants}
          className="md:text-3xl lg:text-6xl text-4xl font-bold flex gap-5 items-center mt-4"
        >
          <motion.div whileHover={{ scale: 1.2, rotate: -15 }} transition={{ type: "spring", stiffness: 400 }}>
            <GrArchlinux className="text-green-400" />
          </motion.div>
          MD ALFAHAD
        </motion.h1>

        <motion.div
          variants={itemVariants}
          className="text hidden md:flex gap-2 items-center mt-4"
        >
          <h1 className="md:text-2xl lg:text-4xl text-2xl font-semibold ">
            Creative
          </h1>
          <RotatingText
            texts={[
              "Web Developer",
              "IoT Developer",
              "UI Designer",
              "Tech Enthusiast",
            ]}
            mainClassName="px-2 md:text-xl lg:text-2xl text-xl font-semibold sm:px-2 w-60 md:px-2 border border-green-400 rounded-full text-green-400 overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.025}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            rotationInterval={2000}
          />
        </motion.div>

        {/* Refined the paragraph text for better flow */}
        <motion.p
          variants={itemVariants}
          className="md:text-[16px] flex mt-5 max-w-[500px] items-center text-gray-700"
        >
          Passionate about my craft, I'm driven by a deep curiosity that
          pushes me to explore the depths of technology and create innovative solutions.
        </motion.p>
      </motion.div>

      {/* Motion container for the image */}
      <motion.div
        className="photo px-5"
        variants={imageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        {/* Added a subtle hover effect to the image */}
        <motion.img
          className="lg:h-[95vh] w-full object-contain"
          src={Image}
          alt="MD Alfahad"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 200, damping: 10 }}
        />
      </motion.div>
    </Element>
  );
};

export default Home;