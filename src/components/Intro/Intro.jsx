import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Sparkles, Menu, X } from "lucide-react";

function Intro() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 40);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden bg-black text-white"
        >

            {/* ================= NAVBAR ================= */}
            <nav
                className={`
    fixed top-3 left-1/2 -translate-x-1/2
    z-50
    w-[92%] md:w-[95%]
    max-w-7xl
    rounded-2xl
    transition-all
    duration-500

    ${scrolled
                        ? "border border-white/10 bg-black/20 backdrop-blur-2xl shadow-[0_8px_40px_rgba(0,0,0,0.45)]"
                        : "bg-transparent"
                    }
  `}
            >
                <div className="relative flex items-center justify-center md:justify-between px-3 py-3 md:px-10 md:py-4">

                    {/* Logo */}
                    <h1 className="hidden md:block bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-lg sm:text-xl md:text-2xl font-black text-transparent cursor-pointer whitespace-nowrap">
                        Pankaj.dev
                    </h1>

                    {/* Navbar Links */}
                    <>
                        {/* Premium Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none"></div>

                        <ul className="flex w-full items-center justify-between md:justify-center md:gap-8">

                            {["Home", "About", "Skills", "Projects", "Contact"].map((item, index) => (
                                <li key={index} className="flex-1 md:flex-none">

                                    <Link
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="
                        relative
                        flex
                        items-center
                        justify-center
                        rounded-xl
                        px-2
                        py-2.5
                        text-[13px]
                        sm:text-sm
                        md:text-base
                        font-semibold
                        tracking-wide
                        text-gray-300
                        transition-all
                        duration-300
                        hover:bg-white/10
                        hover:text-cyan-300
                        active:scale-95
                        cursor-pointer
                    "
                                    >
                                        {item}
                                    </Link>

                                </li>
                            ))}

                        </ul>
                    </>
                    {/* Button */}
                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="hidden sm:block"
                    >
                        <button className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-4 md:px-6 py-2.5 md:py-3 text-xs md:text-sm font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.4)] transition-all duration-300 hover:scale-105 whitespace-nowrap">
                            Let's Talk
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu */}
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="md:hidden mx-4 mt-2 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-2xl shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                    >
                        <div className="flex flex-col items-center gap-6 py-8">

                            {["Home", "About", "Skills", "Projects", "Contact"].map(
                                (item, index) => (
                                    <Link
                                        key={index}
                                        to={item.toLowerCase()}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        onClick={() => setMenuOpen(false)}
                                        className="w-[85%] rounded-xl border border-transparent bg-white/5 py-3 text-center text-lg font-medium text-gray-300 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}

                        </div>
                    </motion.div>
                )}
            </nav>

            {/* Space Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,30,0.8),#000_70%)]"></div>

            {/* Stars */}
            <div className="absolute inset-0">
                {[...Array(80)].map((_, i) => (
                    <span
                        key={i}
                        className="absolute h-[2px] w-[2px] rounded-full bg-white opacity-70 animate-pulse"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                        }}
                    />
                ))}
            </div>

            {/* Falling Asteroids */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        x: Math.random() * 1400,
                        y: -200,
                        opacity: 0,
                    }}
                    animate={{
                        x: Math.random() * -400,
                        y: 1200,
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 5 + Math.random() * 6,
                        repeat: Infinity,
                        delay: Math.random() * 5,
                        ease: "linear",
                    }}
                    className="absolute h-[3px] w-[140px] rotate-[-35deg] rounded-full bg-gradient-to-r from-transparent via-cyan-400 to-white blur-[1px]"
                />
            ))}

            {/* Glows */}
            <div className="absolute left-[-100px] top-[-100px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl"></div>
            <div className="absolute bottom-[-100px] right-[-100px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl"></div>

            {/* Main Content */}
            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-5 pt-20 pb-16 sm:px-8 md:px-12">
                <div className="w-full max-w-3xl text-center md:text-left">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-2 backdrop-blur-xl"
                    >
                        <Sparkles className="h-4 w-4 text-cyan-400" />
                        <span className="text-sm tracking-wide text-cyan-300">
                            Welcome To My Universe
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 80 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-4xl font-black leading-tight xs:text-5xl sm:text-6xl md:text-7xl"
                    >
                        Hi, I'm{" "}
                        <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            Pankaj Kumar
                        </span>
                    </motion.h1>

                    {/* Role */}
                    <motion.h2
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="mt-5 text-2xl font-bold text-cyan-300 sm:text-3xl md:text-4xl"
                    >
                        Full Stack Developer 🚀
                    </motion.h2>

                    {/* Paragraph */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        className="mt-6 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base md:text-lg md:leading-8"
                    >
                        I create modern, scalable and high-performance web applications
                        using React, Node.js, Express and MongoDB. Passionate about building
                        immersive digital experiences with clean UI, smooth animations and
                        interactive designs.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9, duration: 0.8 }}
                        className="mt-10 flex flex-row flex-wrap items-center justify-center gap-4 md:justify-start"
                    >
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            <button className="group flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(168,85,247,0.8)] cursor-pointer w-full sm:w-auto">
                                Hire Me
                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </button>
                        </Link>

                        <a href="public/Pankaj_Resume.pdf" download>
                            <button className="rounded-full border border-cyan-400/30 bg-white/5 px-6 sm:px-8 py-4 font-semibold text-cyan-300 backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-white cursor-pointer whitespace-nowrap">
                                Download CV
                            </button>
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 1 }}
                        className="mt-14 flex items-start justify-between gap-4 sm:gap-8"
                    >

                        {/* Projects */}
                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">
                                10+
                            </h3>

                            <p className="whitespace-nowrap text-sm sm:text-base text-gray-400">
                                Projects Built
                            </p>
                        </div>

                        {/* Experience */}
                        <div className="text-center">
                            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 leading-tight">
                                Experience With Production Apps
                            </h3>

                            <p className="mt-1 text-sm sm:text-base text-gray-400">
                                Ready To Work
                            </p>
                        </div>

                        {/* Creativity */}
                        <div className="text-center">
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400">
                                ∞
                            </h3>

                            <p className="whitespace-nowrap text-sm sm:text-base text-gray-400">
                                Creativity Level
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Intro;