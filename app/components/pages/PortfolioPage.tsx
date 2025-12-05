'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Code2, Layers, Eye, Trophy, Coffee, CheckCircle } from 'lucide-react';
import ContactCTA from '@/components/sections/ContactCTA';
import { useTranslations } from 'next-intl';
import { BLUR_DATA_URL } from '@/lib/constants';

interface Project {
  id: string;
  titleKey: string;
  categoryKey: 'website' | 'mobile' | 'bot' | 'design';
  image: string;
  descriptionKey: string;
  tags: string[];
  featured?: boolean;
}

const allProjectsData: Project[] = [
  {
    id: '1',
    titleKey: 'projects.neon.title',
    categoryKey: 'website',
    image: 'https://picsum.photos/1200/800?random=101',
    descriptionKey: 'projects.neon.description',
    tags: ['Next.js', 'Three.js', 'Shopify Headless', 'Tailwind'],
    featured: true
  },
  {
    id: '2',
    titleKey: 'projects.fitpulse.title',
    categoryKey: 'mobile',
    image: 'https://picsum.photos/800/800?random=102',
    descriptionKey: 'projects.fitpulse.description',
    tags: ['Flutter', 'Firebase', 'HealthKit'],
    featured: false
  },
  {
    id: '3',
    titleKey: 'projects.signalmaster.title',
    categoryKey: 'bot',
    image: 'https://picsum.photos/800/800?random=103',
    descriptionKey: 'projects.signalmaster.description',
    tags: ['Python', 'Telegram API', 'Binance API'],
    featured: false
  },
  {
    id: '4',
    titleKey: 'projects.aura.title',
    categoryKey: 'design',
    image: 'https://picsum.photos/800/800?random=104',
    descriptionKey: 'projects.aura.description',
    tags: ['Branding', 'Figma', 'Motion Graphics'],
    featured: false
  },
  {
    id: '5',
    titleKey: 'projects.urban.title',
    categoryKey: 'website',
    image: 'https://picsum.photos/800/800?random=105',
    descriptionKey: 'projects.urban.description',
    tags: ['React', 'Mapbox', 'Node.js'],
    featured: false
  },
  {
    id: '6',
    titleKey: 'projects.tasty.title',
    categoryKey: 'mobile',
    image: 'https://picsum.photos/800/800?random=106',
    descriptionKey: 'projects.tasty.description',
    tags: ['Flutter', 'Google Maps', 'Stripe'],
    featured: false
  },
  {
    id: '7',
    titleKey: 'projects.findash.title',
    categoryKey: 'website',
    image: 'https://picsum.photos/800/800?random=107',
    descriptionKey: 'projects.findash.description',
    tags: ['Vue.js', 'D3.js', 'Supabase'],
    featured: false
  },
  {
    id: '8',
    titleKey: 'projects.autoresponder.title',
    categoryKey: 'bot',
    image: 'https://picsum.photos/800/800?random=108',
    descriptionKey: 'projects.autoresponder.description',
    tags: ['OpenAI', 'Python', 'WhatsApp Business'],
    featured: false
  }
];

const categoryKeys = ['all', 'website', 'mobile', 'bot', 'design'] as const;

export default function PortfolioPageContent() {
  const [filter, setFilter] = useState<string>('all');
  const filteredProjects = filter === 'all' ? allProjectsData : allProjectsData.filter(p => p.categoryKey === filter);
  const featuredProject = allProjectsData.find(p => p.featured);

  return (
    <div className="bg-slate-950 min-h-screen">
      <HeroSection />
      {featuredProject && <FeaturedProject project={featuredProject} />}
      <ProjectGallery projects={filteredProjects} filter={filter} setFilter={setFilter} categoryKeys={categoryKeys} />
      <ContactCTA />
    </div>
  );
}

function HeroSection() {
  const t = useTranslations('portfolio');
  const statConfigs = [
    { icon: CheckCircle, value: '50+', key: 'stats.projects' },
    { icon: Trophy, value: '12', key: 'stats.awards' },
    { icon: Coffee, value: '1.2k', key: 'stats.coffees' }
  ];

  return (
    <section className="pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-1/3 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[60px]" />
      </div>
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8">
          <Layers size={14} className="text-primary-500" />
          <span className="text-xs font-bold tracking-wide uppercase text-slate-300">{t('badge')}</span>
        </motion.div>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          {t('title1')} <br /><span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-12">
          {t('description')}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="inline-flex flex-wrap justify-center gap-8 md:gap-16 p-6 bg-slate-900/80 rounded-2xl border border-slate-800">
          {statConfigs.map((stat, i) => (
            <div key={i} className="flex items-center gap-3">
              <stat.icon className="text-primary-500" size={20} />
              <div className="text-left">
                <div className="font-bold text-white leading-none">{stat.value}</div>
                <div className="text-xs text-slate-400 uppercase tracking-wide">{t(stat.key)}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FeaturedProject({ project }: { project: Project }) {
  const t = useTranslations('portfolio');
  return (
    <section className="py-10 pb-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group">
          <div className="absolute inset-0">
            <Image src={project.image} alt={t(project.titleKey)} fill className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
            <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
          </div>
          <div className="relative z-10 p-8 md:p-16 lg:p-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-bold uppercase tracking-wide mb-6 border border-primary-500/30">
                <Sparkles size={12} fill="currentColor" /> {t('featuredCaseStudy')}
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{t(project.titleKey)}</h2>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-lg">{t(project.descriptionKey)}</p>
              <div className="flex flex-wrap gap-2 mb-10">
                {project.tags.map(tag => (<span key={tag} className="px-3 py-1 rounded-lg bg-white/15 text-white text-sm border border-white/10">{tag}</span>))}
              </div>
              <button className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold hover:bg-primary-50 transition-colors flex items-center gap-2">{t('viewCaseStudy')} <ArrowRight size={18} /></button>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="p-6 rounded-2xl bg-white/10 border border-white/10 w-64 space-y-4">
                <div className="flex items-center gap-3 text-white"><Code2 size={20} className="text-primary-400" /><span className="font-bold">{t('technology')}</span></div>
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

function ProjectGallery({ projects, filter, setFilter, categoryKeys }: { projects: Project[]; filter: string; setFilter: (f: string) => void; categoryKeys: readonly string[] }) {
  const t = useTranslations('portfolio');
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="flex justify-center mb-16">
          <div className="inline-flex flex-wrap justify-center gap-1 p-1.5 bg-slate-900 border border-slate-800 rounded-full shadow-lg">
            {categoryKeys.map((cat) => (
              <button key={cat} onClick={() => setFilter(cat)} className={`relative px-5 py-2.5 rounded-full text-sm font-medium transition-colors z-10 ${filter === cat ? 'text-white' : 'text-slate-400 hover:text-white'}`}>
                {filter === cat && <motion.div layoutId="activeFilterPage" className="absolute inset-0 bg-slate-700 rounded-full -z-10" transition={{ type: "spring", stiffness: 300, damping: 30 }} />}
                {t(`categories.${cat}`)}
              </button>
            ))}
          </div>
        </div>
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence mode="popLayout">
            {projects.filter(p => !p.featured || filter !== 'all').map((project) => (
              <motion.div key={project.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="group">
                <div className="relative aspect-4/3 rounded-4xl overflow-hidden bg-slate-900 mb-6">
                  <Image src={project.image} alt={t(project.titleKey)} fill className="object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" placeholder="blur" blurDataURL={BLUR_DATA_URL} />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="px-6 py-3 bg-white/30 rounded-full text-white font-bold border border-white/20 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform"><Eye size={18} /> {t('viewDetail')}</div>
                  </div>
                  <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/95 rounded-xl text-xs font-bold uppercase tracking-wider text-white border border-slate-800">{t(`categories.${project.categoryKey}`)}</div>
                </div>
                <div className="px-2">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary-500 transition-colors">{t(project.titleKey)}</h3>
                    <div className="p-2 rounded-full bg-slate-800 text-slate-400 group-hover:bg-primary-500 group-hover:text-white transition-all transform group-hover:-rotate-45"><ArrowRight size={20} /></div>
                  </div>
                  <p className="text-slate-400 mb-4 line-clamp-2">{t(project.descriptionKey)}</p>
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