import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

import project1 from "../../assets/portfolio-1.png";
import project2 from "../../assets/portfolio-2.png";
import project3 from "../../assets/portfolio-3.png";
import project4 from "../../assets/sellar-portfolio.png"
import project5 from "../../assets/sellar-catalogue.png"
import project6 from "../../assets/portfolio-4.png"

const projects = [
    {
        title: "Sellar Website",
        subtitle: "Company Portfolio",
        image: project4,
        desc: "Professional company portfolio website with premium UI, animations and responsive experience.",
        live: "https://www.sellar.in/",
        accent: "#10b981",
        tag: "Frontend",
        number: "04",
    },
    {
        title: "Sellar Catalogue",
        subtitle: "SaaS Platform",
        image: project5,
        desc: "Advanced catalogue management system for businesses with dynamic product handling.",
        live: "https://app.sellar.in/catalogue-home",
        accent: "#6366f1",
        tag: "Product",
        number: "05",
    },
    {
        title: "Task Manager",
        subtitle: "MERN Stack",
        image: project1,
        desc: "Full-stack application with authentication, dashboards, task management and responsive UI.",
        live: "https://taskmanager-frontend-k543.onrender.com/dashboard",
        accent: "#06b6d4",
        tag: "Full Stack",
        number: "01",
    },
    {
        title: "ToDo App",
        subtitle: "React",
        image: project2,
        desc: "Modern productivity app with smooth UI, task management and optimized React workflow.",
        live: "https://fantastic-gumption-1f6c60.netlify.app/",
        accent: "#a855f7",
        tag: "Frontend",
        number: "02",
    },
    {
        title: "Pinterest Clone",
        subtitle: "Node.js + EJS",
        image: project3,
        desc: "Pinterest-style application with image upload, CRUD operations and dynamic layouts.",
        live: "https://github.com/imPankajkumar/Pinterest-Clone",
        accent: "#f97316",
        tag: "Full Stack",
        number: "03",
    },
    {
        title: "Rock Paper Scissors",
        subtitle: "HTML • CSS • JavaScript",
        image: project6,
        desc: "Fun and interactive Rock Paper Scissors game with real-time score tracking and smooth gameplay using JavaScript.",
        live: "https://rps-game-wqjw.onrender.com",
        accent: "#22c55e",
        tag: "Game",
        number: "06",
    }
];

/* ── Project Card ── */
function ProjectCard({ project, index }) {
    const [hovered, setHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const cardRef = useRef(null);

    function handleMouseMove(e) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        setMousePos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 80, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, margin: "-50px" }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onMouseMove={handleMouseMove}
            className="group relative"
            style={{ perspective: "1000px" }}
        >
            <motion.div
                whileHover={{ y: -10, rotateY: 2, rotateX: -2 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] h-full"
                style={{ transformStyle: "preserve-3d" }}
            >
                {/* Dynamic spotlight following cursor */}
                <AnimatePresence>
                    {hovered && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 pointer-events-none z-10 rounded-2xl transition-none"
                            style={{
                                background: `radial-gradient(circle 220px at ${mousePos.x}% ${mousePos.y}%, ${project.accent}22, transparent 70%)`,
                            }}
                        />
                    )}
                </AnimatePresence>

                {/* Glowing border on hover */}
                <motion.div
                    className="absolute inset-0 rounded-2xl pointer-events-none z-20"
                    animate={{
                        boxShadow: hovered
                            ? `inset 0 0 0 1px ${project.accent}60, 0 0 60px ${project.accent}20`
                            : "inset 0 0 0 1px rgba(255,255,255,0.05)",
                    }}
                    transition={{ duration: 0.4 }}
                />

                {/* Image area */}
                <div className="relative h-52 overflow-hidden">
                    <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: hovered ? 1.08 : 1 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    />

                    {/* Gradient overlay */}
                    <div
                        className="absolute inset-0"
                        style={{
                            background: `linear-gradient(to bottom, transparent 30%, #080d18 100%), linear-gradient(to right, ${project.accent}30, transparent)`,
                        }}
                    />

                    {/* Project number - big translucent */}
                    <div
                        className="absolute -right-3 -top-3 text-[120px] font-black leading-none select-none pointer-events-none"
                        style={{ color: `${project.accent}15`, fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                        {project.number}
                    </div>

                    {/* Tag badge */}
                    <div
                        className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase"
                        style={{
                            background: `${project.accent}22`,
                            border: `1px solid ${project.accent}50`,
                            color: project.accent,
                        }}
                    >
                        {project.tag}
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 pt-4">
                    <div className="mb-1 text-xs tracking-[0.2em] uppercase font-medium" style={{ color: project.accent }}>
                        {project.subtitle}
                    </div>

                    <h3
                        className="text-2xl font-black text-white mb-3 leading-tight"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em", fontSize: "1.6rem" }}
                    >
                        {project.title}
                    </h3>

                    <p className="text-sm text-gray-400 leading-6 mb-6">{project.desc}</p>

                    {/* CTA button */}
                    <a href={project.live} target="_blank" rel="noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                            className="relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white"
                            style={{ background: `linear-gradient(135deg, ${project.accent}, ${project.accent}99)` }}
                        >
                            {/* shimmer sweep */}
                            <motion.div
                                className="absolute inset-0 -skew-x-12"
                                style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent)", translateX: "-100%" }}
                                animate={hovered ? { translateX: "200%" } : { translateX: "-100%" }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                            />
                            <span className="relative z-10">View Live</span>
                            <motion.span
                                className="relative z-10 text-base"
                                animate={hovered ? { x: 4 } : { x: 0 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                →
                            </motion.span>
                        </motion.button>
                    </a>
                </div>

                {/* Bottom accent line */}
                <motion.div
                    className="absolute bottom-0 left-0 h-[2px] rounded-full"
                    style={{ background: `linear-gradient(90deg, ${project.accent}, transparent)` }}
                    animate={{ width: hovered ? "100%" : "0%" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
            </motion.div>
        </motion.div>
    );
}

/* ── Main Section ── */
function Projects() {
    const sectionRef = useRef(null);

    return (
        <>
            {/* Google Font import */}
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700&display=swap');
                
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.8; }
                }
                .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }

                @keyframes float-up {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-12px); }
                }
                .float { animation: float-up 6s ease-in-out infinite; }
            `}</style>

            <section
                ref={sectionRef}
                id="projects"
                className="relative overflow-hidden bg-[#050810] px-5 py-12 text-white"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
            >

                {/* Background Glow */}
                <div className="absolute left-[-120px] top-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-500/20 blur-3xl"></div>

                <div className="absolute bottom-[-120px] right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/20 blur-3xl"></div>

                {/* Space Background */}
                <div className="absolute inset-0 overflow-hidden">

                    {/* Radial Space Gradient */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.9),#000_75%)]"></div>

                    {/* Stars */}
                    {[...Array(120)].map((_, i) => (
                        <span
                            key={`star-${i}`}
                            className="absolute rounded-full bg-white opacity-70 animate-pulse"
                            style={{
                                width: `${Math.random() * 3 + 1}px`,
                                height: `${Math.random() * 3 + 1}px`,
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                animationDuration: `${2 + Math.random() * 5}s`,
                            }}
                        />
                    ))}

                    {/* Nebula Glow */}
                    <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl"></div>

                    <div className="absolute right-[-150px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>

                {/* Ambient blobs */}
                <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px] pulse-glow" />
                <div className="absolute right-[-200px] bottom-[15%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px] pulse-glow" style={{ animationDelay: "1.5s" }} />
                <div className="absolute left-[40%] top-[50%] h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[80px] pulse-glow" style={{ animationDelay: "0.7s" }} />

                <div className="relative z-10 mx-auto max-w-7xl">

                    {/* ── Heading ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        {/* Eyebrow */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs tracking-[0.25em] uppercase font-semibold mb-6"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            My Work
                        </motion.div>

                        {/* Main title */}
                        <div className="overflow-hidden">
                            <motion.h2
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                viewport={{ once: true }}
                                className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
                                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
                            >
                                <span className="text-white">FEATURED </span>
                                <span
                                    className="bg-clip-text text-transparent"
                                    style={{ backgroundImage: "linear-gradient(135deg, #06b6d4, #a855f7, #f97316)" }}
                                >
                                    PROJECTS
                                </span>
                            </motion.h2>
                        </div>

                        {/* Animated underline */}
                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            viewport={{ once: true }}
                            className="h-px mt-6 mx-auto max-w-sm origin-center"
                            style={{ background: "linear-gradient(90deg, transparent, #06b6d4, #a855f7, transparent)" }}
                        />

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.7 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-6 max-w-xl text-sm sm:text-base text-gray-500 leading-7"
                        >
                            Real-world projects crafted with modern technologies, premium UI design and scalable architecture.
                        </motion.p>

                        {/* Stats row */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            viewport={{ once: true }}
                            className="flex justify-center gap-10 mt-10"
                        >
                            {[["5+", "Projects"], ["3+", "Tech Stacks"], ["100%", "Live"]].map(([num, label]) => (
                                <div key={label} className="text-center">
                                    <div
                                        className="text-2xl font-black bg-clip-text text-transparent"
                                        style={{ backgroundImage: "linear-gradient(135deg, #06b6d4, #a855f7)", fontFamily: "'Bebas Neue', sans-serif", fontSize: "2rem" }}
                                    >
                                        {num}
                                    </div>
                                    <div className="text-xs text-gray-500 tracking-widest uppercase mt-0.5">{label}</div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* ── Cards Grid ── */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Projects;