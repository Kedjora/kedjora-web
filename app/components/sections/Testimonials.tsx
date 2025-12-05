'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Hexagon, Triangle, Circle, Box } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

interface Client {
  name: string;
  icon: LucideIcon;
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CTO',
    company: 'TechStart Inc.',
    content: "UI aplikasi mobile yang mereka desain berkelas dunia. Bersih, modern, dan persis yang kami butuhkan untuk mengamankan pendanaan Series A. Perhatian tim terhadap detail tidak tertandingi.",
    avatar: 'https://picsum.photos/100?random=11'
  },
  {
    id: '2',
    name: 'Budi Santoso',
    role: 'Founder',
    company: 'Kediri Kuliner',
    content: "KEDJORA mengubah proses pemesanan manual kami menjadi bot Telegram yang mulus. Efisiensi meningkat 40% hanya dalam dua minggu. Sangat direkomendasikan untuk bisnis lokal!",
    avatar: 'https://picsum.photos/100?random=10'
  },
  {
    id: '3',
    name: 'Marcus Chen',
    role: 'Product Lead',
    company: 'Nexus Finance',
    content: "Kami membutuhkan dashboard web berkinerja tinggi untuk platform trading crypto kami. KEDJORA menghadirkan aplikasi React yang menangani data real-time dengan sempurna. Engineering yang benar-benar mengesankan.",
    avatar: 'https://picsum.photos/100?random=12'
  }
];

const clients: Client[] = [
  { name: 'TechStart', icon: Hexagon },
  { name: 'Nexus', icon: Triangle },
  { name: 'Orbit', icon: Circle },
  { name: 'SquareOne', icon: Box },
  { name: 'Vertex', icon: TrendingUp },
  { name: 'TechStart', icon: Hexagon },
  { name: 'Nexus', icon: Triangle },
  { name: 'Orbit', icon: Circle },
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
        {/* Background Atmosphere - Optimized: reduced blur */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary-500/5 rounded-full blur-[60px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">

        {/* Logo Marquee */}
        <div className="mb-24">
            <p className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                Dipercaya oleh Perusahaan Inovatif
            </p>
            <div className="relative flex overflow-x-hidden group">
                 {/* Left/Right Fade Masks */}
                 <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-slate-950 to-transparent z-10"></div>
                 <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-slate-950 to-transparent z-10"></div>

                {/* Use CSS animation for marquee - better performance */}
                <div className="flex whitespace-nowrap gap-16 animate-marquee will-change-transform">
                    {[...clients, ...clients, ...clients].map((client, index) => (
                        <div key={index} className="flex items-center gap-3 opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
                            <client.icon size={32} className="text-white" strokeWidth={1.5} />
                            <span className="text-xl font-bold text-slate-300">{client.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Jangan hanya percaya <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">kata-kata kami</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400"
          >
            Kami bangga membangun kemitraan yang langgeng. Berikut apa yang klien kami katakan tentang bekerja sama dengan KEDJORA.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative p-8 rounded-4xl bg-slate-900 border border-slate-800 shadow-xl shadow-black/20 hover:-translate-y-2 transition-all duration-300"
            >
                {/* Decorative Quote Icon */}
                <div className="absolute top-8 right-8 text-slate-800 group-hover:text-primary-900/20 transition-colors duration-300">
                    <Quote size={64} fill="currentColor" className="opacity-50" />
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                </div>

                <p className="text-slate-300 leading-relaxed mb-8 relative z-10">
                    &quot;{testimonial.content}&quot;
                </p>

                <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                    <div className="relative">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-slate-700 shadow-md">
                            <Image src={testimonial.avatar} alt={testimonial.name} width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary-500 rounded-full border-2 border-slate-900 flex items-center justify-center">
                            <Quote size={8} className="text-white fill-white" />
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                        <p className="text-xs text-slate-400">{testimonial.role}, {testimonial.company}</p>
                    </div>
                </div>

                {/* Hover Glow Border */}
                <div className="absolute inset-0 rounded-4xl border-2 border-transparent group-hover:border-primary-500/10 pointer-events-none transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

