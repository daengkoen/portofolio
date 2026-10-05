"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("../components/Scene3D"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  "HTML", "CSS", "JavaScript", "TypeScript",
  "React", "Next.js", "Tailwind", "Node.js",
  "Git", "Figma", "Three.js", "Framer Motion",
];

const projects = [
  {
    title: "Website Toko Online",
    desc: "E-commerce modern pakai Next.js + Stripe payment gateway.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    link: "https://github.com/daengkoen",
  },
  {
    title: "Aplikasi Cuaca Realtime",
    desc: "Cek cuaca kota manapun pakai OpenWeather API + animasi.",
    tech: ["React", "API", "Tailwind"],
    link: "https://github.com/daengkoen",
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard interaktif dengan chart & data realtime.",
    tech: ["Next.js", "Chart.js", "PostgreSQL"],
    link: "https://github.com/daengkoen",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO dengan 3D Background */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Scene3D />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10"
        >
          <span className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest uppercase backdrop-blur">
            Portfolio 2026
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
            Halo, gw Khoirul 👋
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Web Developer & Designer — bikin website modern, cepat, dan enak dilihat.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-semibold transition-all shadow-lg shadow-blue-500/30"
            >
              Hubungi Gw
            </a>
            <a
              href="#projects"
              className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 font-semibold transition-all backdrop-blur"
            >
              Lihat Project
            </a>
          </div>
        </motion.div>

        <div className="absolute bottom-10 animate-bounce text-gray-500 text-2xl">
          ↓
        </div>
      </section>

      {/* ABOUT */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 max-w-4xl mx-auto"
      >
        <span className="text-blue-400 text-sm tracking-widest uppercase">01 — Tentang</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-8">Tentang Gw</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Gw suka bikin website yang simple, cepat, dan enak dilihat.
          Sekarang lagi fokus belajar <span className="text-blue-400">Next.js</span>,{" "}
          <span className="text-blue-400">TypeScript</span>, dan{" "}
          <span className="text-blue-400">Three.js</span> buat bikin web experience
          yang beda dari yang lain.
        </p>
      </motion.section>

      {/* SKILLS */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 bg-gradient-to-b from-gray-950 to-black"
      >
        <div className="max-w-4xl mx-auto">
          <span className="text-blue-400 text-sm tracking-widest uppercase">02 — Skill</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Tech Stack</h2>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur hover:border-blue-500/50 hover:bg-blue-500/10 transition-all text-center font-medium"
              >
                {s}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* PROJECTS */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 max-w-5xl mx-auto"
      >
        <span className="text-blue-400 text-sm tracking-widest uppercase">03 — Project</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Project Pilihan</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
              className="group block p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent hover:border-blue-500/50 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-blue-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all" />

              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {p.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-blue-400 text-sm font-medium group-hover:translate-x-2 inline-block transition-transform">
                  Lihat Project →
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* CONTACT */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 bg-gradient-to-b from-black to-blue-950/30 text-center"
      >
        <span className="text-blue-400 text-sm tracking-widest uppercase">04 — Kontak</span>
        <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
          Ada Project? <br />
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Mari Ngobrol.
          </span>
        </h2>
        <p className="text-gray-400 mb-10 max-w-xl mx-auto">
          Terbuka buat kolaborasi, freelance, atau sekadar ngobrol soal teknologi.
        </p>

        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="mailto:lismianto496@gmail.com"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-semibold transition-all shadow-lg shadow-blue-500/30"
          >
            📧 Email Gw
          </a>
          <a
            href="https://github.com/daengkoen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-white/20 hover:border-white/50 font-semibold transition-all"
          >
            GitHub
          </a>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-gray-500 text-sm border-t border-white/5">
        © 2026 Khoirul. Dibikin dengan ☕ & Next.js.
      </footer>

    </main>
  );
}