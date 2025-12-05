'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot, Palette, Check, Zap, Shield, Cpu, Sparkles, Layers, type LucideIcon } from 'lucide-react';
import Pricing from '@/components/sections/Pricing';
import ContactCTA from '@/components/sections/ContactCTA';
import { useTranslations } from 'next-intl';

interface ServiceConfig {
  id: string;
  icon: LucideIcon;
  color: string;
  visual: 'browser' | 'phone' | 'terminal' | 'layers';
  featuresCount: number;
}

const serviceConfigs: ServiceConfig[] = [
  { id: 'web', icon: Globe, color: 'from-blue-400 to-cyan-400', visual: 'browser', featuresCount: 4 },
  { id: 'mobile', icon: Smartphone, color: 'from-indigo-400 to-purple-400', visual: 'phone', featuresCount: 4 },
  { id: 'automation', icon: Bot, color: 'from-emerald-400 to-green-500', visual: 'terminal', featuresCount: 4 },
  { id: 'design', icon: Palette, color: 'from-pink-400 to-rose-500', visual: 'layers', featuresCount: 4 }
];

const standardConfigs = [
  { key: 'speed', icon: Zap, color: 'text-yellow-500' },
  { key: 'security', icon: Shield, color: 'text-green-500' },
  { key: 'scalable', icon: Cpu, color: 'text-blue-500' }
];

export default function ServicesPageContent() {
  const t = useTranslations('servicesPage');
  return (
    <div className="bg-slate-950 min-h-screen">
      {/* 1. Services Hero - Optimized */}
      <section className="pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[60px]" />
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[60px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 mb-8"
          >
            <Sparkles size={14} className="text-primary-500" />
            <span className="text-xs font-bold tracking-wide uppercase text-slate-300">
              {t('badge')}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight"
          >
            {t('title1')} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="space-y-32">
            {serviceConfigs.map((service, index) => (
              <div key={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="flex-1"
                >
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${service.color} flex items-center justify-center text-white shadow-lg mb-6`}>
                    <service.icon size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t(`services.${service.id}.title`)}</h2>
                  <p className="text-lg font-medium text-primary-400 mb-6">{t(`services.${service.id}.subtitle`)}</p>
                  <p className="text-slate-400 leading-relaxed mb-8 text-lg">{t(`services.${service.id}.description`)}</p>

                  <ul className="grid sm:grid-cols-2 gap-4">
                    {Array.from({ length: service.featuresCount }, (_, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-primary-900/30 flex items-center justify-center shrink-0 text-primary-500">
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium">{t(`services.${service.id}.features.${i}`)}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9, rotate: index % 2 === 0 ? 5 : -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="flex-1 w-full"
                >
                  <div className="relative aspect-square md:aspect-video lg:aspect-square rounded-[3rem] bg-linear-to-br from-slate-900 to-slate-800 border border-slate-800 shadow-2xl p-8 flex items-center justify-center overflow-hidden group">
                    <div className={`absolute top-0 right-0 w-full h-full bg-linear-to-br ${service.color} opacity-10 blur-3xl`} />
                    <ServiceVisual type={service.visual} />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Standards */}
      <section className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">{t('standards.title')}</h2>
            <p className="text-slate-400">{t('standards.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {standardConfigs.map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-950 border border-slate-800 text-center hover:border-primary-500/50 transition-colors">
                <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-slate-900 shadow-sm flex items-center justify-center ${item.color}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="font-bold text-white text-xl mb-2">{t(`standards.items.${item.key}.title`)}</h3>
                <p className="text-slate-400 text-sm">{t(`standards.items.${item.key}.description`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Pricing />
      <ContactCTA />
    </div>
  );
}

function ServiceVisual({ type }: { type: 'browser' | 'phone' | 'terminal' | 'layers' }) {
  if (type === 'browser') {
    return (
      <div className="relative w-full max-w-sm bg-slate-950 rounded-xl shadow-2xl border border-slate-800 overflow-hidden transform group-hover:-translate-y-4 transition-transform duration-500">
        <div className="h-8 bg-slate-900 border-b border-slate-800 flex items-center px-4 gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
          <div className="ml-4 flex-1 h-4 bg-slate-800 rounded-full opacity-50" />
        </div>
        <div className="p-8 space-y-4">
          <div className="h-32 bg-slate-900 rounded-lg" />
          <div className="grid grid-cols-3 gap-4">
            <div className="h-20 bg-slate-900 rounded-lg" />
            <div className="h-20 bg-slate-900 rounded-lg" />
            <div className="h-20 bg-slate-900 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  if (type === 'phone') {
    return (
      <div className="relative w-48 h-96 bg-slate-900 rounded-[2.5rem] border-4 border-slate-800 shadow-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
        <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 z-10 rounded-b-xl mx-10" />
        <div className="h-full bg-slate-800 p-4 space-y-4 pt-10">
          <div className="w-full h-32 bg-indigo-500/20 rounded-2xl" />
          <div className="space-y-2">
            <div className="w-full h-12 bg-white/10 rounded-xl" />
            <div className="w-full h-12 bg-white/10 rounded-xl" />
            <div className="w-full h-12 bg-white/10 rounded-xl" />
          </div>
          <div className="absolute bottom-4 right-4 w-12 h-12 bg-indigo-500 rounded-full shadow-lg" />
        </div>
      </div>
    );
  }

  if (type === 'terminal') {
    return (
      <div className="w-full max-w-sm bg-slate-950 rounded-xl border border-slate-800 shadow-2xl p-6 font-mono text-sm transform group-hover:rotate-1 transition-transform duration-500">
        <div className="flex gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="space-y-2">
          <div className="flex gap-2 text-slate-400"><span className="text-green-400">$</span> npm run automate</div>
          <div className="text-slate-500">Initialising bot engine...</div>
          <div className="text-blue-400">✓ Connected to Telegram API</div>
          <div className="text-blue-400">✓ Database Synced</div>
          <div className="text-slate-500">Listening for events...</div>
          <div className="flex gap-2 mt-4"><span className="text-green-400">●</span> <span className="text-white">Bot Active</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-64 h-64 transform group-hover:rotate-6 transition-transform duration-500">
      <div className="absolute top-0 left-0 w-48 h-48 bg-slate-800 rounded-2xl shadow-xl border border-slate-700 z-10 flex items-center justify-center">
        <Palette size={48} className="text-pink-500" />
      </div>
      <div className="absolute top-8 left-8 w-48 h-48 bg-slate-800/90 rounded-2xl shadow-xl border border-slate-700 z-20 flex items-center justify-center">
        <Layers size={48} className="text-purple-500" />
      </div>
      <div className="absolute top-16 left-16 w-48 h-48 bg-linear-to-br from-pink-500 to-rose-500 rounded-2xl shadow-2xl z-30 flex items-center justify-center text-white">
        <Zap size={64} fill="currentColor" />
      </div>
    </div>
  );
}
