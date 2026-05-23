import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaServer,
    FaGithub,
    FaCode,
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiFirebase,
    SiCplusplus,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
    {
        name: "HTML",
        icon: <FaHtml5 />,
        level: 95,
        color: "from-orange-500 to-orange-300",
    },
    {
        name: "CSS",
        icon: <FaCss3Alt />,
        level: 90,
        color: "from-blue-500 to-cyan-300",
    },
    {
        name: "JavaScript",
        icon: <FaJs />,
        level: 85,
        color: "from-yellow-400 to-yellow-200",
    },
    {
        name: "ReactJS",
        icon: <FaReact />,
        level: 82,
        color: "from-cyan-400 to-cyan-200",
    },
    {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: 78,
        color: "from-green-500 to-green-300",
    },
    {
        name: "MongoDB",
        icon: <FaDatabase />,
        level: 70,
        color: "from-emerald-500 to-emerald-300",
    },
    {
        name: "SQL",
        icon: <FaServer />,
        level: 75,
        color: "from-slate-500 to-gray-300",
    },
    {
        name: "TypeScript",
        icon: <FaCode />,
        level: 70,
        color: "from-blue-600 to-indigo-300",
    },
    {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: 88,
        color: "from-sky-500 to-cyan-300",
    },
    {
        name: "Git & GitHub",
        icon: <FaGithub />,
        level: 85,
        color: "from-gray-300 to-white",
    },
    {
        name: "Firebase",
        icon: <SiFirebase />,
        level: 65,
        color: "from-amber-400 to-orange-300",
    },
    {
        name: "C++",
        icon: <SiCplusplus />,
        level: 60,
        color: "from-blue-400 to-blue-200",
    },
];

function Skills() {
    return (
        <section
            id="skills"
            className="relative overflow-hidden bg-black px-5 py-12 text-white"
        >
            {/* Background Glow */}
            <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"></div>
            <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl"></div>

            {/* Space Background */}
          
            <div className="relative z-10 mx-auto max-w-7xl">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <h2 className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
                        Skills & Expertise
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
                        I build modern, scalable and high-performance web applications
                        with beautiful UI, smooth animations and production-level
                        architecture.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 80, scale: 0.8 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            whileHover={{
                                y: -12,
                                scale: 1.03,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.08,
                            }}
                            viewport={{ once: true }}
                            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]">

                            {/* Animated Glow */}
                            <div className="absolute inset-0 opacity-0 transition-all duration-700 group-hover:opacity-100">
                                <div className="absolute left-[-30%] top-[-30%] h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl"></div>
                                <div className="absolute bottom-[-30%] right-[-30%] h-40 w-40 rounded-full bg-purple-500/20 blur-3xl"></div>
                            </div>

                            {/* Icon */}
                            <motion.div
                                whileHover={{ rotate: 8, scale: 1.15 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className={`relative z-10 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r ${skill.color} text-4xl text-black shadow-[0_0_30px_rgba(255,255,255,0.15)]`}
                            >
                                {skill.icon}
                            </motion.div>

                            {/* Skill Name */}
                            <h3 className="relative z-10 mt-6 text-2xl font-bold text-white">
                                {skill.name}
                            </h3>

                            {/* Percentage */}
                            <div className="relative z-10 mt-3 flex items-center justify-between">
                                <span className="text-sm text-gray-400">
                                    Proficiency
                                </span>

                                <span className="text-sm font-bold text-cyan-300">
                                    {skill.level}%
                                </span>
                            </div>

                            {/* Progress Bar */}
                            <div className="relative z-10 mt-4 h-3 overflow-hidden rounded-full bg-white/10">

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    transition={{
                                        duration: 1.4,
                                        delay: 0.2,
                                        ease: "easeOut",
                                    }}
                                    viewport={{ once: true }}
                                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-[0_0_20px_rgba(255,255,255,0.4)]`}
                                />

                            </div>

                            {/* Floating Effect */}
                            <motion.div
                                animate={{
                                    y: [0, -8, 0],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="absolute right-4 top-4 h-2 w-2 rounded-full bg-cyan-400"
                            />
                        </motion.div>
                    ))}
                </div>

                {/* Button */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 1 }}
                    viewport={{ once: true }}
                    className="mt-16 flex justify-center"
                >
                    <a href="public/Pankaj_Resume.pdf" download>
                        <button
                            className="group relative overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-10 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(6,182,212,0.4)] transition-all duration-500 hover:scale-105 hover:shadow-[0_0_60px_rgba(168,85,247,0.8)]"
                        >
                            <span className="relative z-10">
                                Download Resume
                            </span>

                            <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full"></div>
                        </button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

export default Skills;