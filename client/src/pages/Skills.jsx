import React from "react";
import { motion } from "framer-motion";

// Import icons from correct packs
import {
    SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiBootstrap, SiPhp, SiFlutter, SiGithub
} from "react-icons/si";
import { FaJava, FaNodeJs, FaPython } from "react-icons/fa";
import { DiMongodb } from "react-icons/di"; // DevIcons for MongoDB
import { GrMysql } from "react-icons/gr";   // Grommet Icons for MySQL

export const skills = [
    { name: "HTML", icon: <SiHtml5 />, side: "left", color: "#e34c26" },
    { name: "CSS", icon: <SiCss3 />, side: "right", color: "#264de4" },
    { name: "JavaScript", icon: <SiJavascript />, side: "left", color: "#f0db4f" },
    { name: "React", icon: <SiReact />, side: "right", color: "#61dafb" },
    { name: "Node.js", icon: <FaNodeJs />, side: "left", color: "#68a063" },
    { name: "Express.js", icon: <FaNodeJs />, side: "right", color: "#000000" },
    { name: "MongoDB", icon: <DiMongodb />, side: "left", color: "#4db33d" },
    { name: "MySQL", icon: <GrMysql />, side: "right", color: "#00758f" },
    { name: "Python", icon: <FaPython />, side: "left", color: "#306998" },
    { name: "Java", icon: <FaJava />, side: "right", color: "#f89820" },
    { name: "TailwindCSS", icon: <SiTailwindcss />, side: "left", color: "#38b2ac" },
    { name: "Bootstrap", icon: <SiBootstrap />, side: "right", color: "#7952b3" },
    { name: "GitHub", icon: <SiGithub />, side: "left", color: "#fff" },
    { name: "PHP", icon: <SiPhp />, side: "right", color: "#777bb4" },
    { name: "Flutter", icon: <SiFlutter />, side: "left", color: "#02569b" },
];

const Skills = () => {
    const cardGap = 50;

    return (
        <div className="relative w-full min-h-screen flex flex-col items-center py-20 bg-[#0d1224]">
            <h2 className="text-4xl font-bold text-white mb-16">🌳 My Skills Tree</h2>

            {/* Vertical Line (stem) */}
            <div className="absolute top-[200px] bottom-0 left-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 transform -translate-x-1/2"></div>

            <div className="relative flex flex-col gap-20">
                {skills.map((skill, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: skill.side === "left" ? -150 : 150 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`relative flex items-center justify-${skill.side === "left" ? "start" : "end"} w-full`}
                    >
                        {/* Branch line */}
                        <div
                            className="absolute h-[2px]"
                            style={{
                                top: "50%",
                                [skill.side === "left" ? "left" : "right"]: `calc(50% + ${cardGap}px)`,
                                width: `calc(50% - ${cardGap + 20}px)`,
                                background: skill.side === "left"
                                    ? "linear-gradient(to left, #0ff, #00f)"
                                    : "linear-gradient(to right, #0ff, #00f)",
                                transform: "translateY(-50%)",
                            }}
                        ></div>

                        {/* Animated dot on branch */}
                        <motion.div
                            className="absolute top-[80px] w-4 h-4 rounded-full"
                            style={{
                                backgroundColor: skill.color,
                                [skill.side === "left" ? "left" : "right"]: `calc(50% + ${cardGap}px)`,
                                transform: "translateY(-50%)",
                            }}
                            animate={{
                                x: skill.side === "left" ? -cardGap / 2 : cardGap / 2,
                            }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "reverse",
                                duration: 1.5,
                                ease: "easeInOut",
                            }}
                        ></motion.div>

                        {/* Skill card */}
                        <div
                            className={`relative z-10 flex items-center gap-3 px-6 py-3 rounded-xl shadow-lg 
                                bg-gradient-to-r from-[#1a1f3c] to-[#11152b] border border-blue-500/40 text-white ${skill.side === "right" ? "justify-end text-right" : ""}`}
                            style={{ width: "200px" }}
                        >
                            {skill.side === "left" ? (
                                <>
                                    <span style={{ color: skill.color }}>{skill.icon}</span>
                                    <p className="font-semibold">{skill.name}</p>
                                </>
                            ) : (
                                <>
                                    <p className="font-semibold">{skill.name}</p>
                                    <span style={{ color: skill.color }}>{skill.icon}</span>
                                </>
                            )}
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
