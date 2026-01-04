import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/image.png";
import { NavLink } from "react-router-dom";

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.3,
    },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 text-center flex flex-col items-center"
      >
        {/* Title */}
        <motion.h1
          variants={fadeUp}
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          variants={fadeUp}
          className="text-gray-400 text-md sm:text-lg mb-8 max-w-md"
        >
          Hi Buddy! I’m Ajay Arumugam, a MERN Full Stack Developer.  
          Come with me and explore about me 
        </motion.p>

        {/* Hero Image */}
        <motion.div
          variants={fadeUp}
          className="w-56 sm:w-72 rounded-2xl shadow-2xl shadow-purple-500/20 mb-10"
          style={{ perspective: 1200 }}
          whileHover={{
            rotateX: 8,
            rotateY: -8,
            scale: 1.05,
          }}
          transition={{ type: "spring", stiffness: 120, damping: 18 }}
        >
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-full rounded-2xl"
          />
        </motion.div>

        {/* Button */}
        <motion.div variants={fadeUp}>
          <NavLink to="/about">
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-purple-700 rounded-full text-white font-medium shadow-lg hover:bg-purple-600"
            >
              About Me
            </motion.button>
          </NavLink>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
