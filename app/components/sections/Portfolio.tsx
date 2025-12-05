'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PortfolioItem {
  id: string;
  projectKey: string;
  categoryKey: 'website' | 'mobile' | 'bot' | 'design';
  image: string;
}

const projects: PortfolioItem[] = [
  {
    id: '1',
    projectKey: 'neon',
    categoryKey: 'website',
    image: 'https://picsum.photos/800/800?random=101'
  },
  {
    id: '2',
    projectKey: 'fitpulse',
    categoryKey: 'mobile',
    image: 'https://picsum.photos/800/800?random=102'
  },
  {
    id: '3',
    projectKey: 'signalmaster',
    categoryKey: 'bot',
    image: 'https://picsum.photos/800/800?random=103'
  },
  {
    id: '4',
    projectKey: 'aura',
    categoryKey: 'design',
    image: 'https://picsum.photos/800/800?random=104'
  },
  {
    id: '5',
    projectKey: 'urban',
    categoryKey: 'website',
    image: 'https://picsum.photos/800/800?random=105'
  },
  {
    id: '6',
    projectKey: 'tasty',
    categoryKey: 'mobile',
    image: 'https://picsum.photos/800/800?random=106'
  }
];

const categoryKeys = ['all', 'website', 'mobile', 'bot', 'design'] as const;

const PortfolioSection: React.FC = () => {
  const t = useTranslations('portfolio');
  const [filter, setFilter] = useState<string>('all');

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.categoryKey === filter);

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="portfolio">
        {/* Background Atmosphere - Optimized: reduced blur */}
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-500/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[60px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Sparkles size={16} className="text-primary-500" />
            <span className="text-primary-500 font-bold tracking-wider uppercase text-sm">{t('badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-8"
          >
            {t('title1')} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
          </motion.h2>

          {/* Filter Dock */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex flex-wrap justify-center gap-1 p-1.5 bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-full shadow-lg shadow-black/20"
          >
            {categoryKeys.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 z-10 ${
                    filter === cat ? 'text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter === cat && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-linear-to-r from-primary-500 to-blue-600 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {t(`categories.${cat}`)}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative h-[450px] rounded-4xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500"
              >
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src={project.image}
                        alt={t(`projects.${project.projectKey}.title`)}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
                </div>

                {/* Glass Info Card (Floating Bottom) */}
                <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-slate-900/40 backdrop-blur-xl border border-white/20 p-6 rounded-3xl transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-2 group-hover:bg-slate-900/60">
                        <div className="flex justify-between items-start mb-2">
                             <span className="inline-block px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-200 text-xs font-bold uppercase tracking-wider">
                                {t(`categories.${project.categoryKey}`)}
                            </span>
                             <div className="w-10 h-10 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                                <ArrowUpRight size={20} />
                             </div>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-2 leading-tight">
                            {t(`projects.${project.projectKey}.title`)}
                        </h3>

                        <div className="h-0 overflow-hidden group-hover:h-auto group-hover:mt-2 transition-all duration-300">
                             <p className="text-slate-200 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                {t(`projects.${project.projectKey}.description`)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Top Corner Badge */}
                 <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/30 backdrop-blur-md text-white px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 flex items-center gap-1.5">
                        <Eye size={12} /> {t('featuredCaseStudy')}
                    </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <div className="mt-16 text-center">
             <button className="px-8 py-4 rounded-full border border-slate-800 text-slate-300 font-semibold hover:bg-slate-800 transition-colors">
                {t('viewAllProjects')}
             </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;

