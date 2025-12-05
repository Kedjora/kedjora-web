'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
}

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingTier[] = [
    {
      name: 'Starter',
      price: billingCycle === 'monthly' ? 'Rp 7,5jt' : 'Rp 6jt',
      description: 'Sempurna untuk bisnis kecil yang memulai perjalanan digital.',
      features: ['Website Satu Halaman', 'SEO Dasar', 'Responsif Mobile', 'Dukungan 1 Bulan', 'Analitik Standar']
    },
    {
      name: 'Professional',
      price: billingCycle === 'monthly' ? 'Rp 19,5jt' : 'Rp 15,6jt',
      description: 'Solusi komprehensif untuk perusahaan yang berkembang.',
      recommended: true,
      features: ['Website 5-7 Halaman', 'Integrasi CMS', 'SEO Lanjutan', 'Kit Media Sosial', 'Dukungan 3 Bulan', 'Optimasi Performa']
    },
    {
      name: 'Enterprise',
      price: 'Kustom',
      description: 'Transformasi digital dan automasi skala penuh.',
      features: ['Aplikasi Web Kustom', 'Aplikasi Mobile (iOS/Android)', 'Bot Automasi', 'Dukungan Prioritas', 'Manajer Dedikasi', 'Infrastruktur Cloud']
    }
  ];

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
            Paket Fleksibel
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Investasi untuk <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">Masa Depan Digital</span>
          </motion.h2>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mt-8"
          >
            <span className={`text-sm font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-500'}`}>Bulanan</span>
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
                Tahunan
                <span className="px-2 py-0.5 rounded-full bg-green-900/30 text-green-400 text-[10px] font-bold uppercase tracking-wide">
                    Hemat 20%
                </span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const isRecommended = plan.recommended;
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
                            <Sparkles size={14} fill="currentColor" /> Paling Populer
                        </div>
                    )}

                    <div className="mb-8">
                        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                        <p className="text-sm text-slate-400 h-10">{plan.description}</p>
                    </div>

                    <div className="mb-8 pb-8 border-b border-slate-800">
                        <div className="flex items-baseline gap-1">
                            <span className={`text-4xl font-bold tracking-tight ${isRecommended ? 'text-transparent bg-clip-text bg-linear-to-r from-primary-500 to-blue-600' : 'text-white'}`}>
                                {plan.price}
                            </span>
                            {plan.price !== 'Kustom' && (
                                <span className="text-slate-400 font-medium">/{billingCycle === 'monthly' ? 'bln' : 'thn'}</span>
                            )}
                        </div>
                        {billingCycle === 'yearly' && plan.price !== 'Kustom' && (
                            <p className="text-xs text-green-400 mt-2 font-medium">Ditagih tahunan</p>
                        )}
                    </div>

                    <ul className="space-y-4 mb-8 flex-1">
                        {plan.features.map((feature, i) => (
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
                        {plan.price === 'Kustom' ? 'Hubungi Sales' : 'Mulai Sekarang'}
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

