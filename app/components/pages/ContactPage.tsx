'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, MessageCircle, Calendar, Shield, Plus, Minus, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const steps = [
    { icon: Send, title: '1. Pengiriman', desc: 'Anda mengirim formulir. Kami menerimanya secara instan.' },
    { icon: Calendar, title: '2. Penjadwalan', desc: 'Kami menghubungi dalam 24 jam untuk menjadwalkan panggilan discovery.' },
    { icon: Shield, title: '3. Proposal', desc: 'Kami menilai kebutuhan Anda dan mengirim rencana yang disesuaikan.' },
  ];

  const faqs = [
    { q: "Apakah Anda menandatangani NDA?", a: "Tentu saja. Kami menghormati kekayaan intelektual Anda dan dengan senang hati menandatangani NDA sebelum membahas detail sensitif proyek Anda." },
    { q: "Berapa kisaran budget tipikal Anda?", a: "Proyek kami biasanya dimulai dari Rp 25 juta untuk website dasar dan bisa mencapai Rp 750 juta+ untuk aplikasi enterprise kompleks. Kami menawarkan tier fleksibel untuk berbagai kebutuhan." },
    { q: "Apakah Anda bekerja dengan klien internasional?", a: "Ya! 80% klien kami berasal dari AS, Eropa, dan Australia. Kami terbiasa bekerja lintas zona waktu menggunakan komunikasi asinkron." },
  ];

  return (
    <div className="bg-slate-950 min-h-screen">

      {/* 1. Hero & Form Section - Optimized */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8"
                >
                    <MessageCircle size={14} className="text-primary-500" />
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                        Mulai Percakapan
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
                >
                    Mari Bangun yang <br />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">Luar Biasa</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-xl text-slate-400 leading-relaxed"
                >
                    Punya proyek dalam pikiran? Kami ingin mendengarnya.
                </motion.p>
            </div>

            <div className="max-w-6xl mx-auto bg-slate-900 rounded-[3rem] shadow-2xl shadow-black/20 border border-slate-800 overflow-hidden flex flex-col lg:flex-row">

                {/* Left Panel: Contact Info - Optimized */}
                <div className="lg:w-2/5 p-10 md:p-14 bg-slate-900 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[50px] opacity-20 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 rounded-full blur-[50px] opacity-20 pointer-events-none"></div>

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold mb-2">Informasi Kontak</h3>
                            <p className="text-slate-400 mb-10">Isi formulir dan tim kami akan menghubungi Anda dalam 24 jam.</p>

                            <div className="space-y-6">
                                <a href="mailto:hello@kedjora.id" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Email</p>
                                        <p className="text-lg font-medium">hello@kedjora.id</p>
                                    </div>
                                </a>
                                <a href="tel:+6285733820022" className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-primary-500 transition-colors">
                                        <Phone size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Telepon / WhatsApp</p>
                                        <p className="text-lg font-medium">+62 857-3382-0022</p>
                                    </div>
                                </a>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Lokasi</p>
                                        <p className="text-lg font-medium">Kediri, Jawa Timur, ID</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12">
                             <p className="text-xs text-slate-400 uppercase tracking-wider font-bold mb-4">Terhubung dengan kami</p>
                             <div className="flex gap-4">
                                 {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                                     <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-all">
                                         <Icon size={18} />
                                     </a>
                                 ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Right Panel: Form */}
                <div className="lg:w-3/5 p-10 md:p-14 bg-slate-900">
                    <form className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Nama</label>
                                <input type="text" className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-white" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-300 ml-1">Email</label>
                                <input type="email" className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-white" placeholder="john@example.com" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">Saya tertarik dengan...</label>
                            <div className="flex flex-wrap gap-3">
                                {['Pengembangan Web', 'Aplikasi Mobile', 'Bot Automasi', 'Desain UI/UX', 'Lainnya'].map((service) => (
                                    <label key={service} className="cursor-pointer">
                                        <input type="checkbox" name="service" className="peer sr-only" />
                                        <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm font-medium transition-all peer-checked:bg-primary-500 peer-checked:text-white peer-checked:border-primary-500 hover:bg-slate-700">
                                            {service}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">Budget Proyek</label>
                             <div className="flex flex-wrap gap-3">
                                {['< Rp 15jt', 'Rp 15jt - 75jt', 'Rp 75jt - 150jt', 'Rp 150jt+'].map((budget) => (
                                    <label key={budget} className="cursor-pointer">
                                        <input type="radio" name="budget" className="peer sr-only" />
                                        <div className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-400 text-sm font-medium transition-all peer-checked:bg-white peer-checked:text-slate-900 peer-checked:border-white hover:bg-slate-700">
                                            {budget}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-slate-300 ml-1">Pesan</label>
                            <textarea rows={4} className="w-full px-5 py-4 rounded-xl bg-slate-800 border border-slate-700 focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all placeholder:text-slate-400 text-white resize-none" placeholder="Ceritakan sedikit tentang tujuan proyek Anda..."></textarea>
                        </div>

                        <button type="button" className="group w-full py-4 bg-linear-to-r from-primary-500 to-blue-600 hover:from-primary-400 hover:to-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-primary-500/30 flex items-center justify-center gap-3 transform active:scale-[0.98]">
                            Kirim Pesan
                            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
      </section>

      {/* 2. What Happens Next? */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
          <div className="container mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-2xl font-bold text-white mb-4">Apa yang terjadi selanjutnya?</h2>
                  <p className="text-slate-400">Proses onboarding kami yang mulus memastikan Anda tidak pernah dibiarkan dalam kegelapan.</p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  {steps.map((step, i) => (
                      <div key={i} className="relative text-center">
                          {i !== steps.length - 1 && (
                              <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-800 -z-10"></div>
                          )}
                          <div className="w-16 h-16 mx-auto bg-slate-900 rounded-2xl border border-slate-800 shadow-lg flex items-center justify-center text-primary-500 mb-6 relative z-10">
                              <step.icon size={28} />
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                          <p className="text-sm text-slate-400 px-4">{step.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* 3. Engagement FAQ */}
      <section className="py-20">
          <div className="container mx-auto px-6 max-w-3xl">
               <h2 className="text-3xl font-bold text-center text-white mb-12">FAQ Kerjasama</h2>
               <div className="space-y-4">
                   {faqs.map((faq, i) => (
                       <div key={i} className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
                           <button
                                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left font-bold text-white hover:bg-slate-800/50 transition-colors"
                           >
                               {faq.q}
                               <span className={`p-1 rounded-full ${activeFaq === i ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                                   {activeFaq === i ? <Minus size={16} /> : <Plus size={16} />}
                               </span>
                           </button>
                           <AnimatePresence>
                                {activeFaq === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 pb-6 pt-2 text-slate-400 leading-relaxed">
                                            {faq.a}
                                        </div>
                                    </motion.div>
                                )}
                           </AnimatePresence>
                       </div>
                   ))}
               </div>
          </div>
      </section>

    </div>
  );
};

export default Contact;

