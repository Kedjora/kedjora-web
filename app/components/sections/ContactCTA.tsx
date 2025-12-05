'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ContactCTA: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-slate-950 flex justify-center items-center overflow-hidden">
        {/* Large Container */}
        <div className="relative w-full max-w-6xl mx-auto">

            {/* Animated Glow Behind Card */}
            <div className="absolute inset-0 bg-linear-to-r from-primary-500 to-blue-600 rounded-[3rem] blur-2xl opacity-40 transform scale-[0.98] translate-y-4"></div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative bg-slate-900 rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl group"
            >
                {/* Internal Background Effects - Optimized: reduced blur */}
                 <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[60px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[60px] pointer-events-none" />

                <div className="relative z-10 px-8 py-20 md:p-24 text-center">

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight"
                    >
                        Siap Menyalakan <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-300 via-white to-blue-300">
                            Potensi Digital Anda?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
                    >
                        Bergabunglah dengan para visioner yang mempercayai KEDJORA. Dari konsep hingga peluncuran, kami adalah mesin di balik terobosan besar Anda berikutnya.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <a
                            href="https://wa.me/6285733820022"
                            target="_blank"
                            rel="noreferrer"
                            className="group/btn relative px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-green-500/20 overflow-hidden flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300"></div>
                            <Phone size={20} className="fill-current" />
                            <span>Chat via WhatsApp</span>
                        </a>

                        <Link
                            href="/contact"
                            className="group/btn px-8 py-4 bg-white text-slate-900 font-bold rounded-full transition-all hover:scale-105 shadow-xl shadow-white/10 flex items-center gap-3 w-full sm:w-auto justify-center"
                        >
                            <span>Mulai Project</span>
                            <ArrowRight size={20} className="group-hover/btn:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 }}
                        className="mt-8 text-sm text-slate-500"
                    >
                        Waktu respons: <span className="text-slate-300 font-semibold">Kurang dari 1 jam</span>
                    </motion.p>
                </div>
            </motion.div>
        </div>
    </section>
  );
};

export default ContactCTA;

