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
    name: "Ecommerce Website",
    image: p1,
  },
  {
    name: "Tomato Food Delivery Website",
    image: p2,
    link: "https://drive.google.com/file/d/1d92-_NEy65tXrWbsjgXjgireV2RIS5HR/view",
  },
  {
    name: "Streamify Chatting Application",
    image: p3,
    link: "https://github.com/Ajay-css/streamify-ajay/tree/main/client/public",
  },
  {
    name: "Students Tracker Website",
    image: p4,
  },
  {
    name: "Green Trendz Ecommerce Website",
    image: p5,
    link: "https://drive.google.com/drive/folders/10W9ZlOejCtjp6bxguuq0X_CbMtX9m4AS?usp=sharing",
  },
  {
    name: "Notes Application",
    image: p6,
  },
  {
    name: "Sitara Personal Virtual Assistant",
    image: p7,
  },
  {
    name: "Job Portal Application",
    image: p8,
    link: "https://drive.google.com/file/d/1Vc_GeJAjTXmLfXpERgs9bDrZQU1SLvwv/view",
  },
  {
    name: "Snake Game",
    image: p9,
  },
  {
    name: "Live Code Editor",
    image: p10,
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
        Download Project Assets
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
      ><table className="w-full text-sm border-collapse table-fixed">
          <tbody>
            {codes.map((code, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-700 hover:bg-purple-700/10 cursor-pointer"
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
                }}
              >
                {/* Project Title + Image */}
                <td className="py-3 px-3 flex items-center gap-3">
                  <img
                    src={code.image}
                    alt={code.name}
                    className="w-10 h-10 object-cover rounded"
                  />
                  <span className="font-medium">{code.name}</span>
                </td>

                {/* Button */}
                <td className="py-3 px-3 text-right">
                  <a href={code.link} target="_blank" rel="noopener noreferrer">
                    <motion.button
                      className="border rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      onClick={() => !code.link ? toast.error('No Assets Found!') : ""}
                    >
                      Download Assets
                    </motion.button>
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