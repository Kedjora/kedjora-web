'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Calendar, ArrowRight, Sparkles, ChevronRight } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Masa Depan Web: Mengapa Kami Beralih ke Next.js 14',
    excerpt: 'Server actions, partial prerendering, dan compiler baru. Inilah mengapa agensi kami sepenuhnya mengadopsi ekosistem Next.js terbaru untuk klien enterprise.',
    category: 'Rekayasa',
    author: { name: 'Alex Doe', avatar: 'https://ui-avatars.com/api/?name=Alex+Doe&background=0D8ABC&color=fff' },
    date: '10 Mar 2025',
    readTime: '6 menit baca',
    image: 'https://picsum.photos/1200/800?random=201',
    featured: true
  },
  {
    id: '2',
    title: 'Mendesain untuk Kepercayaan: Psikologi Glassmorphism',
    excerpt: 'Bagaimana efek transparansi dan blur dalam desain UI dapat meningkatkan kepercayaan pengguna dan nilai premium yang dirasakan dari aplikasi Anda.',
    category: 'Desain',
    author: { name: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=E91E63&color=fff' },
    date: '08 Mar 2025',
    readTime: '4 menit baca',
    image: 'https://picsum.photos/800/600?random=202'
  },
  {
    id: '3',
    title: 'Mengotomatisasi Dukungan Pelanggan dengan Python & Telegram',
    excerpt: 'Panduan langkah demi langkah membangun bot tangguh yang menangani 80% pertanyaan pelanggan Anda tanpa intervensi manusia.',
    category: 'Automasi',
    author: { name: 'Mike R.', avatar: 'https://ui-avatars.com/api/?name=Mike+R&background=22c55e&color=fff' },
    date: '05 Mar 2025',
    readTime: '8 menit baca',
    image: 'https://picsum.photos/800/600?random=203'
  },
  {
    id: '4',
    title: 'Flutter vs React Native di 2025',
    excerpt: 'Debat abadi berlanjut. Kami menguraikan metrik performa, pengalaman developer, dan dukungan komunitas untuk kedua raksasa ini.',
    category: 'Mobile',
    author: { name: 'Alex Doe', avatar: 'https://ui-avatars.com/api/?name=Alex+Doe&background=0D8ABC&color=fff' },
    date: '28 Feb 2025',
    readTime: '10 menit baca',
    image: 'https://picsum.photos/800/600?random=204'
  },
  {
    id: '5',
    title: 'Mengoptimalkan SEO untuk Single Page Applications',
    excerpt: 'SPA sering kesulitan dengan SEO. Pelajari teknik yang kami gunakan untuk memastikan aplikasi React kami ranking #1 di Google.',
    category: 'Marketing',
    author: { name: 'Emily W.', avatar: 'https://ui-avatars.com/api/?name=Emily+W&background=F59E0B&color=fff' },
    date: '20 Feb 2025',
    readTime: '5 menit baca',
    image: 'https://picsum.photos/800/600?random=205'
  },
  {
    id: '6',
    title: 'Kebangkitan Tools No-Code di Agensi Profesional',
    excerpt: 'Mengapa kami terkadang memilih Framer atau Webflow daripada kode kustom untuk situs marketing, dan mengapa ini menguntungkan klien.',
    category: 'Bisnis',
    author: { name: 'Sarah J.', avatar: 'https://ui-avatars.com/api/?name=Sarah+J&background=E91E63&color=fff' },
    date: '15 Feb 2025',
    readTime: '3 menit baca',
    image: 'https://picsum.photos/800/600?random=206'
  }
];

const categories = ['Semua', 'Rekayasa', 'Desain', 'Automasi', 'Mobile', 'Bisnis'];

const BlogPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Semua');
  const [searchQuery, setSearchQuery] = useState('');

  const featuredPost = blogPosts.find(p => p.featured);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'Semua' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch && !post.featured;
  });

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* 1. Header & Featured Hero */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[60px]" />
            <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8"
                >
                    <Sparkles size={14} className="text-primary-500" />
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                        Wawasan & Pemikiran
                    </span>
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Jurnal <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">KEDJORA</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
                >
                    Pembahasan mendalam tentang teknologi, filosofi desain, dan masa depan pengembangan produk digital.
                </motion.p>
            </div>

            {featuredPost && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="relative w-full aspect-video md:aspect-21/9 rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl"
                >
                    <Image src={featuredPost.image} alt={featuredPost.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" unoptimized />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/50 to-transparent" />

                    <div className="absolute bottom-0 left-0 p-8 md:p-16 max-w-4xl">
                        <div className="flex items-center gap-3 mb-6">
                            <span className="px-3 py-1 rounded-full bg-primary-500 text-white text-xs font-bold uppercase tracking-wider">
                                Unggulan
                            </span>
                            <span className="text-slate-300 text-sm font-medium flex items-center gap-2">
                                <Calendar size={14} /> {featuredPost.date}
                            </span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight group-hover:text-primary-400 transition-colors">
                            {featuredPost.title}
                        </h2>
                        <p className="text-lg text-slate-300 mb-8 line-clamp-2 md:line-clamp-none max-w-2xl">
                            {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-3">
                                <Image src={featuredPost.author.avatar} alt={featuredPost.author.name} width={40} height={40} className="rounded-full border-2 border-white/20" unoptimized />
                                <div className="text-sm">
                                    <p className="text-white font-bold">{featuredPost.author.name}</p>
                                    <p className="text-slate-400">{featuredPost.readTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
      </section>

      {/* 2. Filter & Grid */}
      <section className="py-12 bg-slate-900 border-t border-slate-800 min-h-[800px]">
        <div className="container mx-auto px-6">

            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-16">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                                activeCategory === cat
                                ? 'bg-white text-slate-900 border-white'
                                : 'bg-transparent text-slate-500 hover:text-white border-slate-700'
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="relative w-full md:w-80">
                    <input
                        type="text"
                        placeholder="Cari artikel..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-full bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all text-sm text-white placeholder:text-slate-400"
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <AnimatePresence>
                    {filteredPosts.map((post) => (
                        <motion.div
                            layout
                            key={post.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            className="group flex flex-col h-full bg-slate-950 rounded-4xl border border-slate-800 overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300"
                        >
                            <div className="relative aspect-4/3 overflow-hidden">
                                <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" unoptimized />
                                <div className="absolute top-4 left-4 px-3 py-1.5 bg-slate-900/95 rounded-lg text-xs font-bold uppercase tracking-wider text-primary-400">
                                    {post.category}
                                </div>
                            </div>

                            <div className="p-8 flex flex-col grow">
                                <div className="flex items-center gap-3 text-xs font-medium text-slate-400 mb-4">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                                    <span className="w-1 h-1 rounded-full bg-slate-700"></span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-slate-400 text-sm leading-relaxed mb-6 grow line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-slate-800">
                                    <div className="flex items-center gap-2">
                                        <Image src={post.author.avatar} alt={post.author.name} width={32} height={32} className="rounded-full" unoptimized />
                                        <span className="text-sm font-bold text-slate-300">{post.author.name}</span>
                                    </div>
                                    <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all duration-300">
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredPosts.length === 0 && (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 mb-4">
                        <Search size={24} className="text-slate-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Tidak ada artikel ditemukan</h3>
                    <p className="text-slate-500">Coba sesuaikan pencarian atau filter kategori Anda.</p>
                </div>
            )}

            {filteredPosts.length > 0 && (
                <div className="mt-16 text-center">
                    <button className="px-8 py-3 rounded-full border border-slate-800 text-slate-400 font-semibold hover:bg-slate-800 transition-colors inline-flex items-center gap-2">
                        Muat Lebih Banyak <ChevronRight size={16} />
                    </button>
                </div>
            )}

        </div>
      </section>

      {/* 3. Newsletter CTA - Optimized */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[60px]" />
         <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[60px]" />

         <div className="container mx-auto px-6 relative z-10 text-center">
             <div className="max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Tetap selangkah lebih maju</h2>
                 <p className="text-slate-300 mb-10 text-lg">
                     Bergabung dengan 5.000+ developer dan founder yang mendapatkan wawasan terbaru tentang teknologi, desain, dan automasi langsung ke inbox mereka.
                 </p>

                 <form className="flex flex-col sm:flex-row gap-4">
                     <input
                        type="email"
                        placeholder="Masukkan email Anda"
                        className="grow px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                     />
                     <button className="px-8 py-4 rounded-xl bg-primary-500 text-white font-bold hover:bg-primary-600 transition-colors shadow-lg shadow-primary-500/20">
                         Berlangganan
                     </button>
                 </form>
                 <p className="text-xs text-slate-500 mt-4">Tanpa spam. Berhenti berlangganan kapan saja.</p>
             </div>
         </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default BlogPage;

