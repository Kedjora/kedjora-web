'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Award, Clock, Heart, Lightbulb, Shield, ArrowRight, Linkedin, Twitter } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';

const About: React.FC = () => {
  return (
    <div className="bg-slate-950 min-h-screen">

      {/* 1. Cinematic Hero - Optimized */}
      <section className="pt-40 pb-20 relative overflow-hidden">
         <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[60px]" />
             <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[60px]" />
         </div>

         <div className="container mx-auto px-6 relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-4xl mx-auto text-center"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8">
                    <Heart size={14} className="text-primary-500 fill-primary-500" />
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                        Cerita & Budaya Kami
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
                    Kami Adalah <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">Arsitek Digital</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 leading-relaxed font-light">
                    KEDJORA lebih dari sekadar agensi pengembang. Kami adalah kolektif pemimpi, pemikir, dan pembuat yang berdedikasi untuk menciptakan masa depan web.
                </p>
            </motion.div>
         </div>
      </section>

      {/* 2. Stats Strip */}
      <section className="py-12 border-y border-slate-800 bg-slate-900/80">
        <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { label: 'Tahun Pengalaman', value: '5+', icon: Clock },
                  { label: 'Project Selesai', value: '50+', icon: Award },
                  { label: 'Klien Puas', value: '30+', icon: Users },
                  { label: 'Kopi Diseduh', value: '∞', icon: Zap }
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex flex-col items-center justify-center text-center"
                  >
                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-slate-500">
                        <stat.icon size={14} className="text-primary-500" />
                        {stat.label}
                    </div>
                  </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 3. The Manifesto (Mission) */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-3xl font-bold text-white mb-6">Asal Mula</h2>
                    <div className="prose prose-invert lg:prose-lg text-slate-400">
                        <p className="mb-6 leading-relaxed">
                            <strong className="text-primary-500">KEDJORA</strong> (berasal dari &quot;Kediri Jorah&quot;) dimulai sebagai kolektif kecil pengembang yang bersemangat di Jawa Timur. &quot;Jorah&quot; menyiratkan keunggulan dan menjadi juara—semangat yang kami tanamkan dalam setiap baris kode yang kami tulis.
                        </p>
                        <p className="leading-relaxed mb-6">
                            Kami melihat celah di industri: agensi terlalu fokus pada desain tanpa substansi, atau terlalu teknis tanpa jiwa. Kami bertekad untuk menjembatani celah itu.
                        </p>
                        <p className="leading-relaxed">
                            Saat ini, kami membantu bisnis di seluruh dunia menavigasi lanskap digital yang kompleks, mengubah ide-ide samar menjadi produk yang kuat, skalabel, dan indah.
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <div className="absolute inset-0 bg-linear-to-tr from-primary-500 to-blue-600 rounded-4xl rotate-3 opacity-20 blur-lg"></div>
                    <div className="relative bg-slate-900 rounded-4xl p-10 border border-slate-800 shadow-2xl overflow-hidden min-h-[400px] flex flex-col justify-end">
                        <div className="absolute top-0 right-0 p-32 bg-primary-500/20 rounded-full blur-[50px]"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/20 flex items-center justify-center mb-6">
                                <Target size={32} className="text-white" />
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">Misi Kami</h3>
                            <p className="text-slate-300 text-lg leading-relaxed">
                                &quot;Mendemokratisasi rekayasa digital kelas atas. Kami percaya setiap bisnis ambisius berhak mendapatkan teknologi kelas dunia, terlepas dari ukuran mereka.&quot;
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
      </section>

      {/* 4. Core Values */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Filosofi Kami</h2>
                <p className="text-slate-400">Prinsip-prinsip panduan yang mendorong keputusan kami dan membentuk budaya kami.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {[
                    { title: 'Inovasi Utama', desc: "Kami tidak puas dengan \"cukup baik\". Kami terus mengeksplorasi teknologi baru untuk memberi Anda keunggulan.", icon: Lightbulb, color: 'text-yellow-500' },
                    { title: 'Transparansi Radikal', desc: 'Tanpa biaya tersembunyi, tanpa jargon teknis. Kami memberi informasi di setiap langkah.', icon: Shield, color: 'text-green-500' },
                    { title: 'Obsesi Pengguna', desc: 'Kami mendesain untuk manusia, bukan robot. Setiap piksel memiliki tujuan untuk pengguna akhir.', icon: Heart, color: 'text-red-500' }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="group p-8 rounded-4xl bg-slate-950 border border-slate-800 hover:border-primary-500/50 hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
                    >
                        <div className={`w-14 h-14 rounded-2xl bg-slate-900 shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${item.color}`}>
                            <item.icon size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                        <p className="text-slate-400 leading-relaxed">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. The Team */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6">
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Kenali Tim Kami</h2>
                    <p className="text-slate-400 max-w-md">Individu-individu berbakat yang bekerja di balik layar untuk mewujudkan visi Anda.</p>
                </div>
                <button className="flex items-center gap-2 text-primary-500 font-bold hover:gap-3 transition-all">
                    Bergabung dengan Tim <ArrowRight size={20} />
                </button>
             </div>

             <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { id: 1, name: 'Alex Wijaya', role: 'Lead Developer' },
                  { id: 2, name: 'Sarah Putri', role: 'Desainer UI/UX' },
                  { id: 3, name: 'Budi Santoso', role: 'Mobile Developer' },
                  { id: 4, name: 'Maya Lestari', role: 'Manajer Proyek' },
                ].map((member) => (
                    <motion.div
                        key={member.id}
                        whileHover={{ y: -10 }}
                        className="group relative rounded-2xl overflow-hidden bg-slate-800 aspect-3/4"
                    >
                        <Image
                            src={`https://picsum.photos/400/500?random=${member.id + 20}`}
                            alt={`Foto ${member.name} - ${member.role} di KEDJORA`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            unoptimized
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent opacity-80" />

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                            <h4 className="text-white font-bold text-lg">{member.name}</h4>
                            <p className="text-slate-300 text-sm mb-4">{member.role}</p>
                            <div className="flex gap-3">
                                <a href="#" aria-label={`LinkedIn ${member.name}`} className="p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors">
                                    <Linkedin size={16} />
                                </a>
                                <a href="#" aria-label={`Twitter ${member.name}`} className="p-2 rounded-full bg-white/30 hover:bg-white/50 text-white transition-colors">
                                    <Twitter size={16} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
             </div>
        </div>
      </section>

      {/* 6. Timeline Journey */}
      <section className="py-24 bg-slate-900 border-t border-slate-800">
          <div className="container mx-auto px-6">
             <h2 className="text-3xl font-bold text-center text-white mb-16">Perjalanan Kami</h2>

             <div className="max-w-3xl mx-auto space-y-12 relative">
                 <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-slate-800" />

                 {[
                     { year: '2023', title: 'Awal Mula', desc: 'KEDJORA didirikan di garasi kecil di Kediri oleh dua teman kuliah.' },
                     { year: '2023', title: 'Klien Besar Pertama', desc: 'Mendapatkan kontrak internasional pertama, memperluas jangkauan kami ke luar Indonesia.' },
                     { year: '2024', title: 'Ekspansi Tim', desc: 'Berkembang menjadi tim 10 spesialis penuh waktu di bidang desain, mobile, dan web.' },
                     { year: 'Kini', title: 'Berkembang Pesat', desc: 'Meluncurkan produk SaaS sendiri sambil melayani klien enterprise secara global.' }
                 ].map((event, i) => (
                     <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2 }}
                        className="relative flex gap-8"
                     >
                         <div className="relative z-10 w-11 h-11 rounded-full bg-slate-900 border-4 border-slate-800 shadow-lg flex items-center justify-center text-xs font-bold text-primary-500 shrink-0">
                             {event.year.includes('Now') ? <div className="w-3 h-3 bg-primary-500 rounded-full" /> : <div className="w-3 h-3 bg-slate-700 rounded-full" />}
                         </div>
                         <div className="pt-2">
                             <div className="text-sm font-bold text-primary-500 mb-1">{event.year}</div>
                             <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                             <p className="text-slate-400 leading-relaxed">{event.desc}</p>
                         </div>
                     </motion.div>
                 ))}
             </div>
          </div>
      </section>

      <ContactCTA />

    </div>
  );
};

export default About;

