"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

const Scene3D = dynamic(() => import("../components/Scene3D"), { ssr: false });

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const skills = [
  { name: "HTML5", logo: "/logos/html.svg" },
  { name: "CSS3", logo: "/logos/css.svg" },
  { name: "JavaScript", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Java", logo: "/logos/java.svg" },
  { name: "Spring Boot", logo: "/logos/spring.svg" },
  { name: "PHP", logo: "/logos/php.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "PostgreSQL", logo: "/logos/postgresql.svg" },
  { name: "Git", logo: "/logos/git.svg" },
  { name: "Docker", logo: "/logos/docker.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
];

const projects = [
  {
    title: "Website Toko Online",
    desc: "E-commerce modern dengan integrasi payment gateway dan dashboard admin.",
    tech: ["Next.js", "TypeScript", "Stripe"],
    link: "https://github.com/daengkoen",
    year: "2025",
  },
  {
    title: "Aplikasi Cuaca Realtime",
    desc: "Monitoring cuaca multi-kota dengan data realtime dan visualisasi interaktif.",
    tech: ["React", "REST API", "Tailwind"],
    link: "https://github.com/daengkoen",
    year: "2025",
  },
  {
    title: "Dashboard Analytics",
    desc: "Dashboard interaktif untuk monitoring data bisnis dengan chart realtime.",
    tech: ["Next.js", "Chart.js", "PostgreSQL"],
    link: "https://github.com/daengkoen",
    year: "2024",
  },
  {
    title: "REST API E-Commerce",
    desc: "Backend API untuk platform e-commerce dengan autentikasi JWT dan role management.",
    tech: ["Java", "Spring Boot", "MySQL"],
    link: "https://github.com/daengkoen",
    year: "2024",
  },
];

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    period: "2023 — Sekarang",
    desc: "Membangun aplikasi web modern untuk klien dari berbagai industri.",
  },
  {
    role: "Backend Developer",
    company: "Personal Projects",
    period: "2022 — 2023",
    desc: "Mengembangkan REST API dengan Java Spring Boot dan PHP.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">

      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <Scene3D />

        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs tracking-widest uppercase backdrop-blur">
            Available for Work
          </span>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-blue-500 bg-clip-text text-transparent">
            Khoirul Jamil
          </h1>

          <p className="text-lg md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto font-light">
            Full Stack Developer
          </p>

          <p className="text-base md:text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
            Membangun aplikasi web modern dengan fokus pada performa, skalabilitas,
            dan pengalaman pengguna yang optimal.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-semibold transition-all shadow-lg shadow-blue-500/30"
            >
              Hubungi Saya
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

      {/* ABOUT + PHOTO */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 max-w-6xl mx-auto"
      >
        <span className="text-blue-400 text-sm tracking-widest uppercase">01 — Tentang</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Tentang Saya</h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Foto Profil */}
          <div className="relative">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
              <Image
                src="/profile.jpg"
                alt="Khoirul Jamil"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 w-full h-full rounded-2xl border border-blue-500/30 -z-10" />
          </div>

          {/* Bio */}
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Saya adalah seorang <span className="text-blue-400 font-medium">Full Stack Developer</span>{" "}
              yang berfokus membangun aplikasi web modern dan scalable. Berpengalaman
              dalam mengembangkan produk digital end-to-end, mulai dari perancangan UI/UX,
              frontend development, hingga backend API dan database.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Tech stack utama saya mencakup{" "}
              <span className="text-blue-400 font-medium">Next.js</span>,{" "}
              <span className="text-blue-400 font-medium">TypeScript</span>,{" "}
              <span className="text-blue-400 font-medium">Java Spring Boot</span>, dan{" "}
              <span className="text-blue-400 font-medium">PHP</span>. Saya selalu
              antusias mempelajari teknologi baru dan menerapkan best practice dalam
              setiap project.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              <div>
                <div className="text-3xl font-bold text-blue-400">3+</div>
                <div className="text-sm text-gray-500 mt-1">Tahun Coding</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">10+</div>
                <div className="text-sm text-gray-500 mt-1">Project Selesai</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400">16+</div>
                <div className="text-sm text-gray-500 mt-1">Tech Stack</div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* SKILLS dengan LOGO */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 bg-gradient-to-b from-gray-950 to-black"
      >
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-400 text-sm tracking-widest uppercase">02 — Skill</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Tech Stack</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">
            Teknologi dan tools yang saya gunakan untuk membangun aplikasi modern.
          </p>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -6 }}
                className="group flex flex-col items-center justify-center gap-3 p-5 rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur hover:border-blue-500/50 hover:bg-blue-500/5 transition-all"
              >
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-full h-full object-contain transition-transform group-hover:scale-110"
                  />
                </div>
                <span className="text-xs text-gray-400 text-center group-hover:text-white transition-colors">
                  {s.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* EXPERIENCE */}
      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.8 }}
        className="px-6 py-32 max-w-4xl mx-auto"
      >
        <span className="text-blue-400 text-sm tracking-widest uppercase">03 — Pengalaman</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-12">Pengalaman</h2>

        <div className="space-y-8">
          {experiences.map((e, i) => (
            <motion.div
              key={e.role}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
            >
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-500/20" />
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">{e.role}</h3>
                <span className="text-sm text-blue-400">{e.period}</span>
              </div>
              <p className="text-blue-400/80 text-sm mb-3">{e.company}</p>
              <p className="text-gray-400 leading-relaxed">{e.desc}</p>
            </motion.div>
          ))}
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
        className="px-6 py-32 bg-gradient-to-b from-black to-gray-950"
      >
        <div className="max-w-5xl mx-auto">
          <span className="text-blue-400 text-sm tracking-widest uppercase">04 — Project</span>
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
                className="group block p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 hover:bg-blue-500/[0.03] transition-all relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">
                    {p.title}
                  </h3>
                  <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">
                    {p.year}
                  </span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                  Lihat Project <span>→</span>
                </span>
              </motion.a>
            ))}
          </div>
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
        className="px-6 py-32 bg-gradient-to-b from-gray-950 to-blue-950/20 text-center"
      >
        <div className="max-w-3xl mx-auto">
          <span className="text-blue-400 text-sm tracking-widest uppercase">05 — Kontak</span>
          <h2 className="text-4xl md:text-6xl font-bold mt-4 mb-6">
            Mari Berkolaborasi
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Terbuka untuk peluang freelance, full-time, atau diskusi seputar
            teknologi dan pengembangan produk digital.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="mailto:lismianto496@gmail.com"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 font-semibold transition-all shadow-lg shadow-blue-500/30"
            >
              Kirim Email
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

          <div className="mt-16 pt-8 border-t border-white/5 text-sm text-gray-500">
            <p>lismianto496@gmail.com</p>
          </div>
        </div>
      </motion.section>

      {/* FOOTER */}
      <footer className="px-6 py-8 text-center text-gray-500 text-sm border-t border-white/5">
        © 2026 Khoirul Jamil. All rights reserved.
      </footer>

    </main>
  );
}