import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent! Thank you 😎");
    setFormData({ name: "", email: "", message: "" });
  };

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <section className="relative w-full min-h-screen text-white px-4 py-20 flex flex-col items-center overflow-hidden">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#1f2937" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          particles: {
            color: { value: "#7e22ce" },
            links: { enable: true, color: "#7e22ce", distance: 120, opacity: 0.3, width: 1 },
            collisions: { enable: false },
            move: { direction: "none", enable: true, outModes: "bounce", random: true, speed: 0.5 },
            number: { density: { enable: true, area: 800 }, value: 50 },
            opacity: { value: 0.4 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <motion.h2
        className="text-3xl sm:text-4xl font-bold mb-12 relative z-10"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        Get In Touch
      </motion.h2>

      <motion.div
        className="flex flex-col lg:flex-row gap-12 max-w-6xl w-full relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6">
          <motion.div
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={24} className="text-purple-500" />
            <span>djalok9306@gmail.com</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={24} className="text-purple-500" />
            <span>+91 8122286426</span>
          </motion.div>
          <motion.div
            className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl shadow-lg hover:shadow-purple-500/50 transition-shadow cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={24} className="text-purple-500" />
            <span>Tirunelveli, India</span>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.form
          className="flex-1 flex flex-col gap-4 bg-gray-800 p-8 rounded-xl shadow-2xl"
          onSubmit={handleSubmit}
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="p-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all resize-none h-32"
            required
          />
          <motion.button
            type="submit"
            className="mt-4 px-6 py-3 bg-purple-700 rounded-full font-semibold text-white shadow-lg self-start"
            whileHover={{ scale: 1.1, backgroundColor: "#7e22ce" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>
    </section>
  );
};

export default Contact;