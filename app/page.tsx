export default function Home() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Halo, gw Khoirul 👋</h1>
        <p className="text-xl text-gray-400 mb-6">
          Web Developer & Designer dari Indonesia
        </p>
        <a
          href="#contact"
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
        >
          Hubungi Gw
        </a>
      </section>

      {/* ABOUT */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Tentang</h2>
        <p className="text-gray-300 leading-relaxed">
          Gw suka bikin website yang simple dan enak dilihat.
          Sekarang lagi belajar Next.js dan TypeScript.
        </p>
      </section>

      {/* SKILLS */}
      <section className="px-6 py-20 bg-gray-900">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Skill</h2>
          <div className="flex flex-wrap gap-3">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind"].map((s) => (
              <span key={s} className="bg-blue-600 px-4 py-2 rounded-full text-sm">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-6 py-20 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Project</h2>
        <div className="grid gap-4">
          {[
            { title: "Website Toko", desc: "Toko online sederhana pakai React." },
            { title: "Aplikasi Cuaca", desc: "Cek cuaca pakai API OpenWeather." },
          ].map((p) => (
            <div key={p.title} className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-gray-400">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-20 bg-gray-900 text-center">
        <h2 className="text-3xl font-bold mb-4">Kontak</h2>
        <p className="text-gray-400 mb-6">Email: khoirul@example.com</p>
        <div className="flex gap-4 justify-center">
          <a href="https://github.com/usernamekamu" className="text-blue-400 hover:underline">GitHub</a>
          <a href="https://linkedin.com/in/usernamekamu" className="text-blue-400 hover:underline">LinkedIn</a>
        </div>
      </section>

    </main>
  );
}