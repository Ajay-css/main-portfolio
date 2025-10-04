import React from "react";
import { motion } from "framer-motion";
import img from "../assets/image.webp";
import p1 from "../assets/p-1.png";
import p2 from "../assets/p-2.png";
import p3 from "../assets/p-3.png";
import p4 from "../assets/p-4.png";
import p5 from "../assets/p-5.png";
import p6 from "../assets/p-6.png";
import p7 from "../assets/p-7.png";
import p8 from "../assets/p-8.png";
import p9 from "../assets/p-9.png";
import p10 from "../assets/p-10.png";

const projects = [
  {
    title: "Ecommerce Website",
    description: "Full-stack e-commerce application with cart and Top Notch UI/UX.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p1,
    link: "https://ajay-cart.onrender.com", // 🔗 project live link
  },
  {
    title: "Tomato Food Delivery Website",
    description: "Full Stack Food Ordering Website with cart and payment gateways",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p2,
    link: "https://tomato-ajay.onrender.com",
  },
  {
    title: "Student Management Sysytem",
    description: "Full Stack Student Management System to track the students attedenance and more info",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p4,
    link: "https://loyola-tracker.onrender.com",
  },
  {
    title: "Streamify Application",
    description: "Full Stack Online Chatting Application with Many Advanced Features",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p3,
    link: "https://streamify-ajay.vercel.app",
  },
  {
    title: "Green Trendz Ecommerce Website",
    description: "Full Stack Ecommerce website with cart and payment integrations",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p5,
    link: "https://green-trendz.vercel.app",
  },
  {
    title: "Notes Application",
    description: "Full Stack Online Notes Application with basic crud operation",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p6,
    link: "https://ajay-notes.onrender.com",
  },
  {
    title: "Sitara Virtual Assistant",
    description: "Sitara is a Online Personal Virtual Assistant to assist the users",
    tech: ["HTML", "Css", "Javascript"],
    image: p7,
    link: "https://ajay-ai.netlify.app",
  },
  {
    title: "Job Portal Application",
    description: "Full Stack Online Job Portal Application with Many Advanced Features",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p8,
    link: "https://ajay-job.onrender.com",
  },
  {
    title: "Snake Game",
    description: "Online Snake Game using HTML , CSS , JS",
    tech: ["HTML", "Css", "Javascript",],
    image: p9,
    link: "https://snake-ajay.netlify.app",
  },
  {
    title: "Online Code Editor",
    description: "Real Time online code editor for Develpers to Support Many Prgramming Language",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    image: p10,
    link: "https://xavierside.vercel.app",
  },
];

const Projects = () => {
  return (
    <section className="w-full min-h-screen text-white px-4 py-20">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="max-w-6xl mx-auto overflow-x-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-y border-gray-600">
              <th className="py-2 px-3">Project</th>
              <th className="py-2 px-3">Description</th>
              <th className="py-2 px-3">Tech Stack</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700 hover:bg-purple-700/10 cursor-pointer"
                onClick={() => window.open(project.link, "_blank")}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                {/* Project Image only */}
                <td className="py-3 px-3">
                  <div className="w-[130px] h-[70px] overflow-hidden shadow-lg">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                </td>

                {/* Description */}
                <td className="py-2 px-3 text-gray-300">{project.description}</td>

                {/* Tech Stack */}
                <td className="py-2 px-3">
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-purple-700/30 text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Projects;