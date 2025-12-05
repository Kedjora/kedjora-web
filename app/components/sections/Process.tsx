'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Code2, Rocket, ArrowRight } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { LucideIcon } from 'lucide-react';

interface StepConfig {
  id: number;
  key: 'discuss' | 'design' | 'develop' | 'launch';
  icon: LucideIcon;
  color: string;
}

const stepConfigs: StepConfig[] = [
  { id: 1, key: 'discuss', icon: MessageSquare, color: 'from-blue-400 to-blue-600' },
  { id: 2, key: 'design', icon: PenTool, color: 'from-indigo-400 to-indigo-600' },
  { id: 3, key: 'develop', icon: Code2, color: 'from-violet-400 to-violet-600' },
  { id: 4, key: 'launch', icon: Rocket, color: 'from-primary-400 to-primary-600' },
];

const Process: React.FC = () => {
  const t = useTranslations('process');
  const tCommon = useTranslations('common');
  const locale = useLocale();

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
        {/* Background Decorations - Optimized: reduced blur */}
        <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
        <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/5 rounded-full blur-[60px]" />
             <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[60px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-primary-900/30 text-primary-300 text-xs font-bold uppercase tracking-widest mb-4"
          >
            {t('badge')}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t('title1')} <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
          </motion.h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t('description')}
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 rounded-full overflow-hidden">
             <motion.div
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="h-full bg-linear-to-r from-blue-400 via-primary-500 to-indigo-500 opacity-30"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stepConfigs.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
                className="group relative"
              >
                <div className="relative h-full bg-slate-900/50 backdrop-blur-sm p-8 rounded-4xl border border-slate-800 hover:border-primary-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2 z-10">

                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-slate-800 text-xs font-bold text-slate-400 mb-6 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                    {t('step')} 0{step.id}
                  </div>

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center text-white shadow-lg mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon size={28} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors">
                    {t(`steps.${step.key}.title`)}
                  </h3>

                  <p className="text-slate-400 text-sm leading-relaxed">
                    {t(`steps.${step.key}.description`)}
                  </p>

                  {/* Giant Background Number */}
                  <div className="absolute -bottom-4 -right-4 text-9xl font-black text-slate-800/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 select-none -z-10 rotate-12">
                    {step.id}
                  </div>
                </div>

                {/* Arrow Connector (Desktop only, except last item) */}
                {index < stepConfigs.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 -translate-y-1/2 z-20 items-center justify-center text-slate-700">
                        <ArrowRight size={20} />
                    </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action Mini */}
        <div className="mt-20 text-center">
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="text-slate-400 text-sm"
            >
                {t('cta')} <Link href={`/${locale}/contact`} className="text-primary-500 font-bold hover:underline">{tCommon('contactUs')}</Link>
            </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Process;

