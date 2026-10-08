import React from 'react'

function App() {
  return (
    <div className="min-h-screen">
      {/* Navbar Sederhana (Opsional) */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <div className="font-bold text-xl tracking-tighter">Nama Anda.</div>
        <button className="text-text-muted hover:text-accent-blue transition">Kontak</button>
      </nav>

      <main className="max-w-6xl mx-auto px-6">
        {/* 1. Hero Section */}
        <section className="min-h-[80vh] flex flex-col justify-center items-start">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Software Engineer & <br /> Tech Entrepreneur
          </h1>
          <p className="text-text-muted text-lg mb-8 max-w-xl">
            Membangun produk digital yang fungsional, bersih, dan berpusat pada pengguna.
          </p>
          <button className="bg-accent-blue text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition">
            Lihat Karya Saya
          </button>
        </section>

        {/* 2. Identitas / About Me */}
        <section className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          {/* Konten akan ditambahkan nanti */}
        </section>

        {/* 3. Startup & Jasa */}
        <section className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Services</h2>
          {/* Konten akan ditambahkan nanti */}
        </section>

        {/* 4. Pengalaman Magang */}
        <section className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          {/* Konten akan ditambahkan nanti */}
        </section>

        {/* 5. Portofolio Project */}
        <section className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Selected Projects</h2>
          {/* Konten akan ditambahkan nanti */}
        </section>

        {/* 6. Kontak & Footer */}
        <section className="py-20 border-t border-gray-800">
          <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
          {/* Konten akan ditambahkan nanti */}
        </section>
      </main>
    </div>
  )
}

export default App