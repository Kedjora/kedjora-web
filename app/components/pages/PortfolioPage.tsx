'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Layers, Eye, Trophy, Coffee, CheckCircle } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

interface Project {
  id: string;
  title: string;
  category: 'Website' | 'Aplikasi Mobile' | 'Bot Automasi' | 'Desain';
  image: string;
  description: string;
  tags: string[];
  featured?: boolean;
}

const allProjects: Project[] = [
  {
    id: '1',
    title: 'Neon E-Commerce',
    category: 'Website',
    image: 'https://picsum.photos/1200/800?random=101',
    description: 'Pengalaman belanja futuristik dengan preview produk 3D, rekomendasi berbasis AI, dan arsitektur headless CMS.',
    tags: ['Next.js', 'Three.js', 'Shopify Headless', 'Tailwind'],
    featured: true
  },
  {
    id: '2',
    title: 'FitPulse Tracker',
    category: 'Aplikasi Mobile',
    image: 'https://picsum.photos/800/800?random=102',
    description: 'Pendamping kesehatan cross-platform dibangun dengan Flutter. Fitur sinkronisasi biometrik real-time dan tantangan sosial.',
    tags: ['Flutter', 'Firebase', 'HealthKit'],
    featured: false
  },
  {
    id: '3',
    title: 'SignalMaster Bot',
    category: 'Bot Automasi',
    image: 'https://picsum.photos/800/800?random=103',
    description: 'Bot trading crypto frekuensi tinggi terintegrasi dengan Telegram untuk alert beli/jual instan dan manajemen portfolio.',
    tags: ['Python', 'Telegram API', 'Binance API'],
    featured: false
  },
  {
    id: '4',
    title: 'Aura Branding',
    category: 'Desain',
    image: 'https://picsum.photos/800/800?random=104',
    description: 'Perombakan identitas visual lengkap untuk startup energi terbarukan di Bali, fokus pada keberlanjutan dan teknologi modern.',
    tags: ['Branding', 'Figma', 'Motion Graphics'],
    featured: false
  },
  {
    id: '5',
    title: 'Urban Estates',
    category: 'Website',
    image: 'https://picsum.photos/800/800?random=105',
    description: 'Portal real estate mewah dengan pencarian peta interaktif, tur virtual, dan sistem booking otomatis.',
    tags: ['React', 'Mapbox', 'Node.js'],
    featured: false
  },
  {
    id: '6',
    title: 'TastyExpress',
    category: 'Aplikasi Mobile',
    image: 'https://picsum.photos/800/800?random=106',
    description: 'Ekosistem pengiriman makanan hyper-local menghubungkan 500+ vendor. Termasuk aplikasi driver, dashboard merchant, dan aplikasi konsumen.',
    tags: ['Flutter', 'Google Maps', 'Stripe'],
    featured: false
  },
  {
    id: '7',
    title: 'FinDash Pro',
    category: 'Website',
    image: 'https://picsum.photos/800/800?random=107',
    description: 'Dashboard SaaS untuk analitik keuangan dengan visualisasi data real-time dan kemampuan ekspor.',
    tags: ['Vue.js', 'D3.js', 'Supabase'],
    featured: false
  },
  {
    id: '8',
    title: 'AutoResponder AI',
    category: 'Bot Automasi',
    image: 'https://picsum.photos/800/800?random=108',
    description: 'Agen AI layanan pelanggan yang menangani 80% pertanyaan support masuk secara otomatis melalui WhatsApp dan Email.',
    tags: ['OpenAI', 'Python', 'WhatsApp Business'],
    featured: false
  }
];

const categories = ['Semua', 'Website', 'Aplikasi Mobile', 'Bot Automasi', 'Desain'];

export default function PortfolioPageContent() {
  const [filter, setFilter] = useState('Semua');
  const filteredProjects = filter === 'Semua' ? allProjects : allProjects.filter(p => p.category === filter);
  const featuredProject = allProjects.find(p => p.featured);

  return (
    <div className="bg-slate-950 min-h-screen">
      <HeroSection />
      {featuredProject && <FeaturedProject project={featuredProject} />}
      <ProjectGallery projects={filteredProjects} filter={filter} setFilter={setFilter} categories={categories} />
      <ContactCTA />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/3 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[60px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8">
          <Layers size={14} className="text-primary-500" />
          <span className="text-xs font-bold tracking-wide uppercase text-slate-300">Portfolio Kami</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          Karya <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">Pilihan</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          Koleksi produk digital terkurasi yang memadukan estetika, performa, dan inovasi.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex flex-wrap justify-center gap-8 md:gap-16 p-6 bg-slate-900/80 rounded-2xl border border-slate-800">
          {[{ icon: CheckCircle, value: '50+', label: 'Project Selesai' }, { icon: Trophy, value: '12', label: 'Penghargaan' }, { icon: Coffee, value: '1.2k', label: 'Kopi Diminum' }].map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <stat.icon className="text-primary-500" size={20} />
              <div className="text-left">
                <div className="font-bold text-white leading-none">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  return (
    <section className="py-10 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
          <div className="absolute inset-0">
            <Image src={project.image} alt={project.title} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" unoptimized />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wide mb-6 border border-primary-500/30">
                <Sparkles size={12} fill="currentColor" /> Studi Kasus Unggulan
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{project.title}</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (<span key={tag} className="px-3 py-1 rounded-lg bg-white/15 text-white text-sm border border-white/10">{tag}</span>))}
              </div>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-primary-50 transition-colors flex items-center gap-2">Lihat Studi Kasus <ArrowRight size={18} /></button>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/10 w-64 space-y-4">
                <div className="flex items-center gap-3 text-white"><Code2 size={20} className="text-primary-400" /><span className="font-bold">Teknologi</span></div>
                <div className="h-px bg-white/10" />
                <ul className="space-y-3">{project.tags.map((tag, i) => (<li key={i} className="text-slate-300 text-sm flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-400" />{tag}</li>))}</ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectGallery({ projects, filter, setFilter, categories }: { projects: Project[]; filter: string; setFilter: (f: string) => void; categories: string[] }) {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 bg-slate-900 border border-slate-800 rounded-full shadow-lg">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${filter === cat ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                {filter === cat && <motion.div layoutId="activeFilterPage" className="absolute inset-0 bg-slate-700 rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                {cat}
              </button>
            ))}
          </div>
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {projects.filter(p => !p.featured || filter !== 'Semua').map((project) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
                <div className="relative aspect-4/3 rounded-4xl overflow-hidden bg-slate-900 mb-6">
                  <Image src={project.image} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" unoptimized />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-6 py-3 bg-white/30 rounded-full text-white font-bold border border-white/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"><Eye size={18} /> Lihat Detail</div>
                  </div>
                  <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/95 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-slate-800">{project.category}</div>
                </div>
                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors">{project.title}</h3>
                    <div className="p-2 rounded-full bg-slate-800 text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all transform group-hover:-rotate-45"><ArrowRight size={20} /></div>
                  </div>
                  <p className="text-slate-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">{project.tags.map(tag => (<span key={tag} className="text-xs font-medium text-slate-500 px-2 py-1 rounded-md bg-slate-900 border border-slate-800">#{tag}</span>))}</div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}