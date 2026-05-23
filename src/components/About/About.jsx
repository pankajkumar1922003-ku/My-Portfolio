import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Palette,
  Rocket,
  Sparkles,
} from "lucide-react";

function About() {
  const skills = [
    {
      icon: <Code2 size={40} />,
      title: "Front-End Development",
      desc: "Crafting responsive, modern and interactive interfaces using React.js, JavaScript and Tailwind CSS with smooth animations and premium UI experiences.",
      color: "from-cyan-500 to-blue-500",
    },

    {
      icon: <Database size={40} />,
      title: "Back-End Development",
      desc: "Building scalable APIs, authentication systems and database architectures using Node.js, Express.js and MongoDB for production-ready applications.",
      color: "from-purple-500 to-pink-500",
    },

    {
      icon: <Palette size={40} />,
      title: "UI/UX Design",
      desc: "Designing immersive user experiences with modern layouts, clean typography and user-focused interactions that improve engagement and usability.",
      color: "from-pink-500 to-orange-500",
    },

    {
      icon: <Rocket size={40} />,
      title: "Performance & Optimization",
      desc: "Optimizing website speed, responsiveness and performance while fixing bugs, integrating APIs and improving overall user experience.",
      color: "from-cyan-400 to-purple-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black pt-6 pb-20 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(20,20,30,0.8),#000_70%)]"></div>

      {/* Stars */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
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

      {/* Glow Effects */}
      <div className="absolute top-0 left-[-120px] h-[300px] w-[300px] rounded-full bg-cyan-500/10 blur-3xl"></div>

      <div className="absolute bottom-0 right-[-120px] h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-3xl"></div>

      {/* Floating Gradient Orb */}
      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-40 right-20 hidden h-32 w-32 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl md:block"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 md:px-12">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-white/5 px-5 py-0 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-cyan-400" />

            <span className="text-sm tracking-wide text-cyan-300">
              What I Do
            </span>
          </div>

          <h2 className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-4xl font-black text-transparent sm:text-5xl md:text-6xl">
            Building Digital Experiences
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base md:text-lg">
            I specialize in creating high-performance web applications
            with modern UI, scalable backend systems and immersive user
            experiences that help brands and businesses stand out online.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:border-cyan-400/20"
            >
              {/* Card Glow */}
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-gradient-to-br ${skill.color} blur-3xl`}
              ></div>

              {/* Content */}
              <div className="relative z-10">

                {/* Icon */}
                <div
                  className={`mb-6 inline-flex rounded-2xl bg-gradient-to-r ${skill.color} p-4 text-white shadow-[0_0_30px_rgba(59,130,246,0.3)]`}
                >
                  {skill.icon}
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold">
                  {skill.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-7 text-gray-300">
                  {skill.desc}
                </p>
              </div>

              {/* Border Glow */}
              <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-cyan-400/20"></div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Achievement Bar */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
        >
          <div className="grid gap-8 text-center sm:grid-cols-3">

            <div>
              <h3 className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-4xl font-black text-transparent">
                10+
              </h3>

              <p className="mt-2 text-gray-400">
                Projects Completed
              </p>
            </div>

            <div>
              <h3 className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-4xl font-black text-transparent">
                6+
              </h3>

              <p className="mt-2 text-gray-400">
                Months Experience
              </p>
            </div>

            <div>
              <h3 className="bg-gradient-to-r from-pink-400 to-orange-500 bg-clip-text text-4xl font-black text-transparent">
                100%
              </h3>

              <p className="mt-2 text-gray-400">
                Passion For Development
              </p>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;