import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import profileImage from "../assets/img2.webp"; // replace with your image
import { Code, Cpu, Database } from "lucide-react";

const About = () => {
  return (
    <section className="w-full min-h-screen text-white flex flex-col items-center justify-center px-4 py-20">
      {/* Section Title */}
      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-8"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        About Me
      </motion.h2>

      {/* Content Container */}
      <motion.div
        className="flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-16 max-w-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.3 } },
        }}
      >
        {/* Profile Image */}
        <motion.img
          src={profileImage}
          alt="Profile"
          className="w-48 sm:w-64 rounded-xl shadow-2xl shadow-purple-500/30"
          variants={{
            hidden: { x: -100, opacity: 0 },
            visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
          }}
        />

        {/* About Text */}
        <motion.div
          className="flex flex-col gap-4 max-w-xl"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.p
            className="text-gray-300 text-md sm:text-lg"
            variants={{
              hidden: { x: 100, opacity: 0 },
              visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
            }}
          >
            I am a passionate web developer who loves creating modern, interactive, and responsive websites. My focus is on clean code, smooth animations, and stunning UI/UX.
          </motion.p>

          {/* Skills / Highlights */}
          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
            >
              <Code size={18} />
              <span>Web Development</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
            >
              <Database size={18} />
              <span>Backend</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-2 bg-gray-800 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={{ hidden: { y: 20, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { duration: 0.5 } } }}
            >
              <Cpu size={18} />
              <span>Performance Optimization</span>
            </motion.div>
          </motion.div>

          {/* Go To Projects Button */}
          <motion.div
            className="mt-8"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1, transition: { duration: 0.7 } }}
            viewport={{ once: true }}
          >
            <NavLink to="/skills">
              <motion.button
                className="px-6 py-3 bg-purple-700 rounded-full text-white font-semibold shadow-lg"
                whileHover={{ scale: 1.1, backgroundColor: "#7e22ce" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                Go To Skills
              </motion.button>
            </NavLink>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
