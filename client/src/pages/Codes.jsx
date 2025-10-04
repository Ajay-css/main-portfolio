import React from "react";
import { motion } from "framer-motion";
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
import toast from "react-hot-toast"

const codes = [
  {
    title: "Ecommerce Website",
    description: "Full-stack e-commerce application with cart and Top Notch UI/UX.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p1,
    link: "https://github.com/Ajay-Vite/Mern", // 🔗 project live link
  },
  {
    title: "Tomato Food Delivery Website",
    description: "Full Stack Food Ordering Website with cart and payment gateways",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p2,
    link: "https://github.com/Ajay-Vite/Tomato-Mern",
  },
  {
    title: "Student Management Sysytem",
    description: "Full Stack Student Management System to track the students attedenance and more info",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p4,
    link: "https://github.com/Ajay-css/loyola-tracker",
  },
  {
    title: "Streamify Application",
    description: "Full Stack Online Chatting Application with Many Advanced Features",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p3,
    link: "https://github.com/Ajay-css/streamify-ajay",
  },
  {
    title: "Green Trendz Ecommerce Website",
    description: "Full Stack Ecommerce website with cart and payment integrations",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p5,
    link: "https://github.com/Ajay-css/green-trends",
  },
  {
    title: "Notes Application",
    description: "Full Stack Online Notes Application with basic crud operation",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p6,
    link: "https://github.com/Ajay-css/mern-notes",
  },
  {
    title: "Sitara Virtual Assistant",
    description: "Sitara is a Online Personal Virtual Assistant to assist the users",
    tech: ["HTML", "Css", "Javascript"],
    image: p7,
  },
  {
    title: "Job Portal Application",
    description: "Full Stack Online Job Portal Application with Many Advanced Features",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    image: p8,
    link: "https://github.com/Ajay-css/job-poortal",
  },
  {
    title: "Snake Game",
    description: "Online Snake Game using HTML , CSS , JS",
    tech: ["HTML", "Css", "Javascript",],
    image: p9,
  },
  {
    title: "Online Code Editor",
    description: "Real Time online code editor for frontend developers",
    tech: ["HTML", "Css", "Javascript"],
    image: p10,
    link: "https://github.com/Ajay-css/xavier-s-ide",
  },
];

const Codes = () => {
  return (
    <section className="w-full min-h-screen text-white px-4 py-20">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center mb-12"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        My Code Repositories
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
              <th className="py-2 px-3">Name</th>
              <th className="py-2 px-3">Tech Stack</th>
              <th className="py-2 px-3">GitHub</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((code, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                {/* Project Title with image */}
                <td className="py-2 px-3 flex items-center gap-2">
                  <img
                    src={code.image}
                    alt={code.title}
                    className="w-10 h-10 object-cover rounded"
                  />
                </td>

                {/* Description */}
                <td className="py-2 px-3 text-gray-300">
                  {code.title}
                </td>

                {/* Tech Stack */}
                <td className="py-2 px-3">
                  <div className="flex flex-wrap gap-1">
                    {code.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-purple-700/30 text-purple-300 text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </td>

                {/* GitHub Link */}
                <td className="py-2 px-3">
                  <a
                    href={code.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:underline"
                    onClick={() => !code.link ? toast.error("Source Code Not Found!") : ""}
                  >
                    View Code
                  </a>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
};

export default Codes;