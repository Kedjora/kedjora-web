'use client';

import React, { useSyncExternalStore } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, BarChart3, Globe, ShieldCheck, Play } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

// Safe client-side detection using React 18+ recommended pattern
const emptySubscribe = () => () => {};
const useIsClient = () => useSyncExternalStore(emptySubscribe, () => true, () => false);

const Hero: React.FC = () => {
  const t = useTranslations('hero');
  const locale = useLocale();
  const isClient = useIsClient();

  return (
    <section className="relative min-h-[110vh] lg:min-h-screen flex items-center pt-32 overflow-hidden bg-slate-950">
      {/* Background Atmosphere - Optimized: reduced blur, removed animate-pulse */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden will-change-transform">
        {/* Static Gradient Orbs - reduced blur for better performance */}
        <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[60px]" />

        {/* Grid Pattern - removed external noise texture */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/60 backdrop-blur-sm border border-slate-700 mb-8 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
                {t('badge')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
            >
              {t('title1')} <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 via-blue-500 to-indigo-500">
                {t('title2')}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed max-w-lg"
            >
              {t('description')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href={`/${locale}/contact`}
                className="group relative px-8 py-4 rounded-full bg-white text-slate-900 font-bold shadow-xl shadow-white/10 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex items-center justify-center gap-2"
              >
                <span className="relative z-10">{t('cta.startProject')}</span>
                <ArrowRight className="relative z-10 group-hover:translate-x-1 transition-transform" size={20} />
                <div className="absolute inset-0 bg-linear-to-r from-primary-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>

              <Link
                href={`/${locale}/portfolio`}
                className="px-8 py-4 rounded-full bg-slate-800/50 backdrop-blur-sm text-white font-semibold border border-slate-700 hover:bg-slate-800 hover:border-primary-500/30 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center shadow-sm text-primary-500">
                    <Play size={12} fill="currentColor" />
                </div>
                {t('cta.viewPortfolio')}
              </Link>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-12 flex items-center gap-8 pt-8 border-t border-slate-800/50"
            >
                <div>
                    <h4 className="text-2xl font-bold text-white">50+</h4>
                    <p className="text-sm text-slate-400">{t('stats.projects')}</p>
                </div>
                <div className="w-px h-8 bg-slate-800"></div>
                 <div>
                    <h4 className="text-2xl font-bold text-white">98%</h4>
                    <p className="text-sm text-slate-400">{t('stats.satisfaction')}</p>
                </div>
            </motion.div>
          </div>

          {/* Right Visual (Digital Console) - Removed parallax scroll for performance */}
          <div className="relative h-[500px] w-full hidden lg:block perspective-1000">
            <AnimatePresence>
              {isClient && (
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Layer 1: The Code Editor (Back) */}
                  <motion.div
                      initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
                      animate={{ opacity: 1, rotateX: 5, rotateY: -5, scale: 1 }}
                      transition={{ duration: 1, delay: 0.1 }}
                      className="absolute top-0 right-10 w-[400px] h-[280px] bg-slate-900 rounded-2xl border border-slate-700 shadow-2xl p-4 overflow-hidden z-10"
                  >
                      <div className="flex gap-2 mb-4 border-b border-slate-800 pb-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <div className="space-y-2 font-mono text-xs">
                          <div className="flex gap-2"><span className="text-slate-500">1</span> <span className="text-purple-400">const</span> <span className="text-yellow-300">kedjora</span> = <span className="text-purple-400">new</span> <span className="text-blue-400">Agency</span>();</div>
                          <div className="flex gap-2"><span className="text-slate-500">2</span> <span className="text-yellow-300">kedjora</span>.<span className="text-blue-400">superpower</span>({'{'}</div>
                          <div className="flex gap-2 ml-4"><span className="text-slate-500">3</span> <span className="text-sky-300">design</span>: <span className="text-green-400">&apos;Premium&apos;</span>,</div>
                          <div className="flex gap-2 ml-4"><span className="text-slate-500">4</span> <span className="text-sky-300">code</span>: <span className="text-green-400">&apos;Clean&apos;</span>,</div>
                          <div className="flex gap-2 ml-4"><span className="text-slate-500">5</span> <span className="text-sky-300">speed</span>: <span className="text-orange-400">100</span></div>
                          <div className="flex gap-2"><span className="text-slate-500">6</span> {'}'});</div>
                          <div className="flex gap-2"><span className="text-slate-500">7</span> <span className="text-slate-400">{`// Ready to launch...`}</span></div>
                      </div>
                      {/* Glowing Cursor Line */}
                      <div className="absolute top-[60%] left-0 w-full h-8 bg-primary-500/10 border-l-2 border-primary-500" />
                  </motion.div>

                  {/* Layer 2: The Analytics Card (Middle) */}
                  <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="absolute bottom-20 left-10 w-[340px] h-[200px] bg-slate-800/90 backdrop-blur-xl rounded-2xl border border-slate-600 shadow-2xl p-5 z-20 flex flex-col"
                  >
                      <div className="flex justify-between items-center mb-2">
                          <div className="flex items-center gap-2">
                               <div className="p-1.5 bg-green-900/50 rounded-lg text-green-400 shadow-sm">
                                  <BarChart3 size={16} />
                               </div>
                               <span className="text-sm font-bold text-slate-200">Growth</span>
                          </div>
                          <div className="flex items-center gap-1">
                               <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                               <span className="text-xs font-bold text-green-400">+128%</span>
                          </div>
                      </div>

                      {/* SVG Chart */}
                      <div className="relative w-full grow mt-2">
                          {/* Grid Lines - using slate color to prevent white flash */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                               <div className="w-full h-px bg-slate-600/10" />
                               <div className="w-full h-px bg-slate-600/10" />
                               <div className="w-full h-px bg-slate-600/10" />
                          </div>

                          <svg className="w-full h-full overflow-visible" viewBox="0 0 100 50" preserveAspectRatio="none">
                              <defs>
                                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                      <stop offset="0%" stopColor="#22c55e" stopOpacity="0.4" />
                                      <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
                                  </linearGradient>
                              </defs>

                              {/* Area Fill */}
                              <motion.path
                                  d="M0,50 L0,35 Q10,35, 15,30 T 30,25 T 45,35 T 60,15 T 75,20 T 90,5 T 100,10 L 100,50 Z"
                                  fill="url(#chartGradient)"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ duration: 1, delay: 0.6 }}
                              />

                              {/* Line Stroke */}
                              <motion.path
                                  d="M0,35 Q10,35, 15,30 T 30,25 T 45,35 T 60,15 T 75,20 T 90,5 T 100,10"
                                  fill="none"
                                  stroke="#22c55e"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  initial={{ pathLength: 0 }}
                                  animate={{ pathLength: 1 }}
                                  transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
                              />

                              {/* End Dot - using slate bg to prevent white flash */}
                              <motion.circle
                                  cx="100" cy="10" r="3"
                                  fill="#1e293b" stroke="#22c55e" strokeWidth="2"
                                  initial={{ scale: 0 }}
                                  animate={{ scale: 1 }}
                                  transition={{ delay: 2.3, type: "spring" }}
                              />
                               {/* Pulse Ring */}
                               <motion.circle
                                  cx="100" cy="10" r="8"
                                  fill="#22c55e"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: [0, 0.5, 0], scale: [1, 2] }}
                                  transition={{ delay: 2.3, duration: 2, repeat: Infinity }}
                              />
                          </svg>
                      </div>
                  </motion.div>

                  {/* Layer 3: Floating Elements - Use CSS animations for better performance */}
                  <div className="absolute top-10 left-0 p-4 rounded-2xl bg-slate-800 shadow-xl border border-slate-700 z-30 animate-float-slow">
                      <Globe size={32} className="text-blue-500" />
                  </div>

                  <div className="absolute bottom-40 right-0 p-4 rounded-2xl bg-slate-800 shadow-xl border border-slate-700 z-30 animate-float-slow-reverse">
                      <ShieldCheck size={32} className="text-green-500" />
                  </div>

                  {/* Background glow - static for performance */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-500/20 rounded-full blur-2xl -z-10" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

