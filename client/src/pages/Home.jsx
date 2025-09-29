import React from "react";
import { motion } from "framer-motion";
import heroImage from "../assets/image.webp"; // replace with your image
import { NavLink } from "react-router-dom"

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center px-4">
      <div className="relative z-10 text-center flex flex-col items-center justify-center">
        {/* Title */}
        <motion.h1
          className="text-3xl sm:text-4xl font-bold text-white mb-4"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Welcome to My Portfolio
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          className="text-gray-400 text-md sm:text-lg mb-8 max-w-md"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Hi Buddy!. Iam Ajay Arumugam, MERN Full Stack Developer. Come with me , To Learn My Journey!
        </motion.p>

        {/* Hero Image with fast 3D flip on hover */}
        <motion.div
          className="w-56 sm:w-72 rounded-xl shadow-2xl shadow-purple-500/30 mb-8 perspective"
          style={{ perspective: 1000 }}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{
            rotateX: 20,
            rotateY: 15,
            scale: 1.08,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 1.05 }}
        >
          <motion.img
            src={heroImage}
            alt="Hero"
            className="w-full h-full rounded-xl"
            style={{ backfaceVisibility: "hidden" }}
          />
        </motion.div>


        {/* Button */}
        <motion.button
          className="px-6 py-3 bg-purple-700 rounded-full text-white font-medium hover:bg-purple-600 shadow-md"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <NavLink to={'/about'}>
            About Me
          </NavLink>
        </motion.button>
      </div>
    </div>
  );
};

export default Home;