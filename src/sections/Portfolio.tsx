import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

// Asset handling: React + Vite/CRA — import images as modules so bundler resolves final URLs



// =============================================================================
// ===== VARIAN B – React + Vite/CRA (Import aset) =============================
//     –>   GUNAKAN jika proyek Anda **BUKAN** Next.js melainkan React biasa
//           (Vite, CRA) sehingga folder /public tidak di‑serve sama persis
//           di production build.
// =============================================================================

import layananImg from '../components/layanan.jpg';
import arstoreImg from '../components/Arstore.jpg';
import tolentopImg from '../components/tolentop.jpg';
import mykostImg from '../components/mykost.jpg';
import portfolioImg from '../components/webnotfound.jpg';
import notfoundImg from '../components/notfound404.jpg';

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string; // url hasil import (string)
  description: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Layanan Masyarakat Purbalingga',
    category: 'Web Development',
    imageUrl: layananImg,
    description:
      'Website yang dirancang khusus sesuai kebutuhan masyarakat Purbalingga.',
  },
  {
    id: 2,
    title: 'ArStore App',
    category: 'Web Development',
    imageUrl: arstoreImg,
    description:
      'Aplikasi web yang menawarkan berbagai produk fashion seperti kemeja, hijab, dll.',
  },
  {
    id: 3,
    title: 'Tolentop Web',
    category: 'Web Development',
    imageUrl: tolentopImg,
    description:
      'Platform penjualan laptop dengan fokus pada pengalaman pengguna.',
  },
  {
    id: 4,
    title: 'MyKost Web',
    category: 'Web Development',
    imageUrl: mykostImg,
    description: 'Aplikasi web responsif untuk melacak kost terdekat dari UIN Saizu.',
  },
  {
    id: 5,
    title: 'Portfolio Website',
    category: 'Web Development',
    imageUrl: portfolioImg,
    description: 'Situs web portofolio 404 Not Found untuk memamerkan karya tim.',
  },
  {
    id: 6,
    title: '404 Not Found',
    category: 'UI/UX Design',
    imageUrl: notfoundImg,
    description: 'Desain UI platform 404 Not Found Coming Soon Instagram yang intuitif.',
  },
];

// ==================== LOGIKA UI TETAP SAMA ===================================

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="card group">
    <div className="relative overflow-hidden">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-primary-500 bg-opacity-0 group-hover:bg-opacity-70 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
        <a href="#" className="bg-white text-primary-500 p-3 rounded-full">
          <ExternalLink size={20} />
        </a>
      </div>
    </div>
    <div className="p-6">
      <span className="text-primary-500 text-sm font-medium mb-2 block">
        {project.category}
      </span>
      <h3 className="font-heading font-semibold text-xl mb-2">
        {project.title}
      </h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'UI/UX Design', name: 'UI/UX Design' },
    { id: 'Web Development', name: 'Web Development' },
  ];

  const filteredProjects =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 md:py-28">
      <div className="container-custom">
        <h2 className="section-title">Portofolio Kami</h2>
        <p className="section-subtitle">
          Jelajahi proyek terbaru dan karya kreatif kami di berbagai domain.
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setFilter(c.id)}
              className={`px-5 py-2 rounded-full ${
                filter === c.id
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors`}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
