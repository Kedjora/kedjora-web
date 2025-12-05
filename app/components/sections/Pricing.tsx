'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface PlanConfig {
  key: 'starter' | 'professional' | 'enterprise';
  recommended?: boolean;
}

const planConfigs: PlanConfig[] = [
  { key: 'starter' },
  { key: 'professional', recommended: true },
  { key: 'enterprise' }
];

const Pricing: React.FC = () => {
  const t = useTranslations('pricing');
  const tCommon = useTranslations('common');
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden" id="pricing">
       {/* Background Atmosphere - Optimized: reduced blur */}
       <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-500/5 rounded-full blur-[60px]" />
        </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary-500 font-bold tracking-wider uppercase text-sm mb-4"
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
            {t('title1')} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">{t('title2')}</span>
          </motion.h2>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>{tCommon('monthly')}</span>
            <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                className="w-16 h-8 bg-slate-800 rounded-full p-1 relative transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            >
                <motion.div
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    className={`w-6 h-6 bg-primary-500 rounded-full shadow-lg ${billingCycle === 'yearly' ? 'translate-x-8' : 'translate-x-0'}`}
                />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-2 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-500'}`}>
                {tCommon('yearly')}
                <span className="px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 text-[10px] font-bold uppercase tracking-wide">
                    {tCommon('save')} 20%
                </span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {planConfigs.map((plan, index) => {
            const isRecommended = plan.recommended;
            const isCustom = plan.key === 'enterprise';
            const price = isCustom
              ? tCommon('custom')
              : billingCycle === 'monthly'
                ? t(`tiers.${plan.key}.priceMonthly`)
                : t(`tiers.${plan.key}.priceYearly`);
            const features = t.raw(`tiers.${plan.key}.features`) as string[];

            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
                    className={`relative p-8 rounded-4xl border transition-all duration-300 flex flex-col h-full ${
                        isRecommended
                        ? 'bg-slate-900 border-primary-500 shadow-2xl shadow-primary-500/20 md:scale-105 z-10'
                        : 'bg-slate-900/80 border-slate-800 hover:border-primary-500/30 hover:shadow-xl'
                    }`}
                >
                    {isRecommended && (
                        <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-linear-to-r from-primary-500 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wide shadow-lg shadow-primary-500/30 flex items-center gap-2">
                            <Sparkles size={14} fill="currentColor" /> {tCommon('mostPopular')}
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">{t(`tiers.${plan.key}.name`)}</h3>
                        <p className="text-sm text-slate-400 h-10">{t(`tiers.${plan.key}.description`)}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-slate-800">
                        <div className="flex items-baseline gap-1">
                            <span className={`text-4xl font-bold tracking-tight ${isRecommended ? 'text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-blue-600' : 'text-white'}`}>
                                {price}
                            </span>
                            {!isCustom && (
                                <span className="text-slate-400 font-medium">{billingCycle === 'monthly' ? t('perMonth') : t('perYear')}</span>
                            )}
                        </div>
                        {billingCycle === 'yearly' && !isCustom && (
                            <p className="text-xs text-green-400 mt-2 font-medium">{t('billedYearly')}</p>
                        )}
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                                <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isRecommended ? 'bg-primary-900/30 text-primary-400' : 'bg-slate-800 text-slate-500'}`}>
                                    <Check size={12} strokeWidth={3} />
                                </div>
                                <span className="leading-tight">{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`w-full py-4 rounded-xl font-bold text-sm transition-all duration-300 ${
                            isRecommended
                            ? 'bg-linear-to-r from-primary-500 to-blue-600 text-white shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 hover:scale-[1.02]'
                            : 'bg-slate-800 border border-slate-700 text-white hover:bg-slate-700'
                        }`}
                    >
                        {isCustom ? tCommon('contactSales') : tCommon('getStarted')}
                    </button>
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;

