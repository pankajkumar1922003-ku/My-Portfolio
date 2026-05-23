import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

// ── Social Icons (inline SVG, no extra deps) ──
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);


/* ── Social Link Button ── */
function SocialLink({ href, icon: Icon, label, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="relative flex items-center gap-3 px-5 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-gray-300 overflow-hidden transition-colors"
      style={{ color: hovered ? accent : undefined }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{
          boxShadow: hovered
            ? `inset 0 0 0 1px ${accent}60, 0 0 30px ${accent}20`
            : "inset 0 0 0 1px rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.35 }}
      />
      {/* spotlight */}
      {hovered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 pointer-events-none rounded-xl"
          style={{ background: `radial-gradient(circle 120px at 50% 50%, ${accent}18, transparent 70%)` }}
        />
      )}
      <span className="relative z-10"><Icon /></span>
      <span className="relative z-10 text-sm font-semibold tracking-wide">{label}</span>
      {/* bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] rounded-full"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }}
        animate={{ width: hovered ? "100%" : "0%" }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.a>
  );
}

/* ── Main Contact Section ── */
function Contact() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const sendEmail = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const response = await fetch(
        "https://formspree.io/f/xaqkwkae",
        {
          method: "POST",
          body: new FormData(form.current),
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setSent(true);
        form.current.reset();

        setTimeout(() => {
          setSent(false);
        }, 3000);
      } else {
        console.log("Form submit failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }

    setSending(false);
  };

  const inputBase = "w-full bg-white/[0.04] border border-white/10 rounded-xl px-5 py-3.5 text-white text-sm placeholder-gray-600 outline-none transition-all duration-300 focus:bg-white/[0.07] resize-none";

  const getFieldStyle = (field, accent = "#06b6d4") => ({
    borderColor: focusedField === field ? `${accent}70` : undefined,
    boxShadow: focusedField === field ? `0 0 0 3px ${accent}15` : undefined,
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@300;400;500;700&display=swap');

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.8; }
        }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }

        .contact-input:-webkit-autofill,
        .contact-input:-webkit-autofill:hover,
        .contact-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0px 1000px #080d18 inset !important;
          -webkit-text-fill-color: white !important;
        }
      `}</style>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#050810] px-5 py-12 text-white"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Space Background (same as Projects) ── */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.9),#000_75%)]" />

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

          {/* Nebula Glows */}
          <div className="absolute left-[-150px] top-[20%] h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-3xl" />
          <div className="absolute right-[-150px] bottom-[10%] h-[350px] w-[350px] rounded-full bg-purple-500/10 blur-3xl" />
        </div>

        {/* Ambient blobs */}
        <div className="absolute left-[-200px] top-[20%] h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[100px] pulse-glow" />
        <div className="absolute right-[-200px] bottom-[15%] h-[500px] w-[500px] rounded-full bg-purple-500/5 blur-[100px] pulse-glow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute left-[40%] top-[50%] h-[300px] w-[300px] rounded-full bg-indigo-500/5 blur-[80px] pulse-glow" style={{ animationDelay: "0.7s" }} />

        <div className="relative z-10 mx-auto max-w-3xl">

          {/* ── Heading ── */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
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
              Contact Me
            </motion.div>

            {/* Main Title */}
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                viewport={{ once: true }}
                className="text-5xl sm:text-7xl md:text-8xl font-black leading-none tracking-tight"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
              >
                <span className="text-white">GET IN </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: "linear-gradient(135deg, #06b6d4, #a855f7, #f97316)" }}
                >
                  TOUCH
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
              className="mx-auto mt-6 max-w-md text-sm sm:text-base text-gray-500 leading-7"
            >
              Have a project, idea or collaboration in mind? Let's connect!
            </motion.p>
          </motion.div>

          {/* ── Contact Card ── */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080d18] p-8 sm:p-10"
          >
            {/* Card glow border */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{ boxShadow: "inset 0 0 0 1px rgba(6,182,212,0.15), 0 0 80px rgba(6,182,212,0.05)" }}
            />

            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl"
              style={{ background: "linear-gradient(90deg, #06b6d4, #a855f7, #f97316)" }}
            />

            {/* Spotlight on card */}
            <div
              className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)" }}
            />

            <form ref={form} onSubmit={sendEmail} className="space-y-5 relative z-10">

              {/* Name */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase font-semibold text-cyan-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Pankaj Kumar"
                  className={`${inputBase} contact-input`}
                  style={getFieldStyle("name")}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase font-semibold text-purple-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="pankaj@example.com"
                  className={`${inputBase} contact-input`}
                  style={getFieldStyle("email", "#a855f7")}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <label className="block text-xs tracking-[0.2em] uppercase font-semibold text-orange-400 mb-2">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Hey Pankaj! I'd love to collaborate on..."
                  className={`${inputBase} contact-input`}
                  style={getFieldStyle("message", "#f97316")}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                />
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: sending ? 1 : 1.02 }}
                  whileTap={{ scale: sending ? 1 : 0.97 }}
                  className="relative w-full overflow-hidden flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-sm font-bold text-white tracking-wide"
                  style={{
                    background: sent
                      ? "linear-gradient(135deg, #10b981, #059669)"
                      : "linear-gradient(135deg, #06b6d4, #a855f7)",
                    opacity: sending ? 0.75 : 1,
                  }}
                >
                  {/* Shimmer sweep */}
                  {!sending && !sent && (
                    <motion.div
                      className="absolute inset-0 -skew-x-12 pointer-events-none"
                      style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.18), transparent)" }}
                      animate={{ translateX: ["-100%", "200%"] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", repeatDelay: 1 }}
                    />
                  )}

                  <AnimatePresence mode="wait">
                    {sent ? (
                      <motion.span
                        key="sent"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="flex items-center gap-2"
                      >
                        ✔ Message Sent!
                      </motion.span>
                    ) : sending ? (
                      <motion.span
                        key="sending"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="idle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex items-center gap-2"
                      >
                        Send Message
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          →
                        </motion.span>
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.div>
            </form>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/[0.06]" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-[#080d18] px-4 text-xs text-gray-600 tracking-[0.2em] uppercase">Or find me on</span>
              </div>
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-3"
            >
              <SocialLink
                href="https://github.com/imPankajkumar"
                icon={GithubIcon}
                label="GitHub"
                accent="#06b6d4"
              />
              <SocialLink
                href="https://www.instagram.com/_pankajprajapati_78"
                icon={InstagramIcon}
                label="Instagram"
                accent="#a855f7"
              />
              <SocialLink
                href="https://linkedin.com/in/pankaj-kumar-12959533a"
                icon={LinkedinIcon}
                label="LinkedIn"
                accent="#f97316"
              />
            </motion.div>
          </motion.div>

          {/* Bottom tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            viewport={{ once: true }}
            className="text-center mt-10 text-xs text-gray-600 tracking-[0.15em] uppercase"
          >
            Built with ❤️ · Open to freelance & full-time opportunities
          </motion.p>
        </div>
      </section>
    </>
  );
}

export default Contact;
