'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Palette } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { BentoGrid, BentoCard } from '@/components/ui/bento-grid';

// Background untuk Web Development - Browser mockup dengan code
const WebBackground = () => (
  <div className="absolute top-4 right-4 w-[60%] h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <div className="relative w-full h-full bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
      {/* Browser header */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-slate-700/50 border-b border-slate-600">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
        <div className="ml-2 flex-1 h-4 bg-slate-600 rounded text-[8px] text-slate-400 flex items-center px-2">kedjora.id</div>
      </div>
      {/* Code lines */}
      <div className="p-2 space-y-1.5">
        <div className="flex gap-2">
          <span className="text-primary-400 text-[10px]">{"<div>"}</span>
          <div className="h-2 w-16 bg-slate-600 rounded" />
        </div>
        <div className="flex gap-2 ml-3">
          <span className="text-blue-400 text-[10px]">{"<h1>"}</span>
          <div className="h-2 w-20 bg-primary-500/30 rounded" />
        </div>
        <div className="flex gap-2 ml-3">
          <div className="h-2 w-24 bg-slate-600 rounded" />
        </div>
      </div>
    </div>
  </div>
);

// Background untuk Mobile - Phone mockup
const MobileBackground = () => (
  <div className="absolute top-4 right-4 w-20 h-36 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <div className="relative w-full h-full bg-slate-800 rounded-2xl overflow-hidden border-2 border-slate-700">
      {/* Phone notch */}
      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-slate-700 rounded-full" />
      {/* App content */}
      <div className="mt-4 p-2 space-y-2">
        <div className="w-full h-8 bg-primary-500/20 rounded-lg" />
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-slate-700 rounded" />
          <div className="flex-1 space-y-1">
            <div className="h-2 w-full bg-slate-700 rounded" />
            <div className="h-2 w-2/3 bg-slate-700 rounded" />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="w-6 h-6 bg-slate-700 rounded" />
          <div className="flex-1 space-y-1">
            <div className="h-2 w-full bg-slate-700 rounded" />
            <div className="h-2 w-1/2 bg-slate-700 rounded" />
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-1 bg-slate-600 rounded-full" />
    </div>
  </div>
);

// Background untuk Bot - Chat bubbles
const BotBackground = () => (
  <div className="absolute top-4 right-4 w-28 h-32 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <div className="space-y-2">
      {/* Bot message */}
      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-primary-500/50 flex items-center justify-center">
          <Bot size={12} className="text-primary-300" />
        </div>
        <div className="bg-slate-700 rounded-lg rounded-tl-none px-2 py-1.5 max-w-20">
          <div className="h-1.5 w-12 bg-slate-500 rounded mb-1" />
          <div className="h-1.5 w-8 bg-slate-500 rounded" />
        </div>
      </div>
      {/* User message */}
      <div className="flex gap-2 items-start justify-end">
        <div className="bg-primary-500/30 rounded-lg rounded-tr-none px-2 py-1.5 max-w-[60px]">
          <div className="h-1.5 w-10 bg-primary-400/50 rounded" />
        </div>
      </div>
      {/* Bot typing */}
      <div className="flex gap-2 items-start">
        <div className="w-6 h-6 rounded-full bg-primary-500/50 flex items-center justify-center">
          <Bot size={12} className="text-primary-300" />
        </div>
        <div className="bg-slate-700 rounded-lg rounded-tl-none px-3 py-2 flex gap-1">
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse" />
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse delay-75" />
          <div className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-pulse delay-150" />
        </div>
      </div>
    </div>
  </div>
);

// Background untuk Design - Layers/shapes
const DesignBackground = () => (
  <div className="absolute top-4 right-4 w-[55%] h-28 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
    <div className="relative w-full h-full">
      {/* Floating shapes */}
      <div className="absolute top-0 left-0 w-12 h-12 border-2 border-pink-500/50 rounded-lg rotate-12" />
      <div className="absolute top-4 left-8 w-16 h-16 bg-linear-to-br from-purple-500/30 to-pink-500/30 rounded-2xl -rotate-6" />
      <div className="absolute top-2 right-8 w-10 h-10 bg-linear-to-br from-primary-500/40 to-blue-500/40 rounded-full" />
      <div className="absolute bottom-0 left-16 w-14 h-8 bg-slate-700 rounded-lg flex items-center justify-center gap-1">
        <div className="w-2 h-4 bg-primary-500/50 rounded-sm" />
        <div className="w-2 h-6 bg-pink-500/50 rounded-sm" />
        <div className="w-2 h-3 bg-blue-500/50 rounded-sm" />
      </div>
      {/* Color palette */}
      <div className="absolute bottom-2 right-0 flex gap-1">
        <div className="w-4 h-4 rounded-full bg-primary-500/60" />
        <div className="w-4 h-4 rounded-full bg-pink-500/60" />
        <div className="w-4 h-4 rounded-full bg-blue-500/60" />
        <div className="w-4 h-4 rounded-full bg-purple-500/60" />
      </div>
    </div>
  </div>
);

interface ServiceConfig {
  id: string;
  key: 'web' | 'mobile' | 'bot' | 'design';
  icon: LucideIcon;
  className: string;
  background: ReactNode;
}

const serviceConfigs: ServiceConfig[] = [
  { id: 'web', key: 'web', icon: Globe, className: 'md:col-span-2', background: <WebBackground /> },
  { id: 'mobile', key: 'mobile', icon: Smartphone, className: 'md:col-span-1', background: <MobileBackground /> },
  { id: 'bot', key: 'bot', icon: Bot, className: 'md:col-span-1', background: <BotBackground /> },
  { id: 'design', key: 'design', icon: Palette, className: 'md:col-span-2', background: <DesignBackground /> }
];

const ServicesSection: React.FC = () => {
  const t = useTranslations('services');
  const tCommon = useTranslations('common');

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="services">
        {/* Background Elements - Optimized: reduced blur */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-600/5 rounded-full blur-[60px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[60px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 mb-4"
                >
                    <span className="h-px w-8 bg-primary-500"></span>
                    <span className="text-primary-500 font-bold tracking-wider uppercase text-sm">{t('badge')}</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                    {t('title1')} <br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
                        <span className="absolute bottom-1 left-0 w-full h-3 bg-primary-900/30 z-0 -rotate-1"></span>
                    </span>
                </motion.h2>
            </div>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="max-w-md text-slate-400 text-lg leading-relaxed"
            >
                {t('description')}
            </motion.p>
        </div>

        <BentoGrid className="grid-cols-1 md:grid-cols-3 auto-rows-[20rem]">
          {serviceConfigs.map((service) => (
            <BentoCard
              key={service.id}
              name={t(`items.${service.key}.title`)}
              description={t(`items.${service.key}.description`)}
              Icon={service.icon}
              className={service.className}
              href="#contact"
              cta={tCommon('learnMore')}
              background={service.background}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default ServicesSection;

