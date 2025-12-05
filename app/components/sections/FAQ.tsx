'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

const FAQ: React.FC = () => {
  const t = useTranslations('faq');
  const tCommon = useTranslations('common');
  const locale = useLocale();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqKeys = ['timeline', 'pricing', 'revision', 'support', 'payment'] as const;

  return (
    <section className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-primary-500 font-bold tracking-wider uppercase text-sm"
            >
              {t('badge')}
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-white"
            >
              {t('title1')} {t('title2')}
            </motion.h2>
            <p className="text-slate-400 mb-8">
              {t('description')}
            </p>
            <Link
              href={`/${locale}/contact`}
              className="inline-block px-6 py-3 rounded-xl bg-slate-800 text-white font-semibold hover:bg-slate-700 transition-colors"
            >
              {tCommon('askQuestion')}
            </Link>
          </div>

          <div className="md:w-2/3">
            <div className="space-y-4">
              {faqKeys.map((key, index) => (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="rounded-2xl border border-slate-800 bg-slate-900 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-white text-lg pr-4">
                      {t(`items.${key}.question`)}
                    </span>
                    <span className={`p-2 rounded-full transition-colors ${activeIndex === index ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                      {activeIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                    </span>
                  </button>
                  <AnimatePresence>
                    {activeIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-800/50 mt-2 pt-4">
                          {t(`items.${key}.answer`)}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

