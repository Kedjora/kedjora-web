'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { Globe, Smartphone, Bot, Palette, ArrowRight, Zap } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const services: Service[] = [
  {
    id: 'web',
    title: 'Pengembangan Website',
    description: 'Kami membuat website berkinerja tinggi yang memikat audiens Anda. Dari landing page hingga aplikasi web kompleks.',
    icon: Globe,
    features: ['React & Next.js', 'Optimasi SEO', 'UI Interaktif', 'Integrasi CMS']
  },
  {
    id: 'mobile',
    title: 'Aplikasi Mobile',
    description: 'Performa setara native dengan efisiensi cross-platform. Bangun sekali, deploy di mana saja dengan Flutter.',
    icon: Smartphone,
    features: ['iOS & Android', 'Framework Flutter', 'Animasi Halus', 'Mode Offline']
  },
  {
    id: 'bot',
    title: 'Automasi & Bot',
    description: 'Berhenti melakukan tugas berulang. Kami membangun bot cerdas untuk menangani layanan pelanggan dan alur kerja Anda.',
    icon: Bot,
    features: ['WhatsApp & Telegram', 'Data Scraping', 'Automasi Workflow', 'Integrasi API']
  },
  {
    id: 'design',
    title: 'Desain Kreatif',
    description: 'Visual storytelling yang mendefinisikan brand Anda. Kami membuat logo dan aset yang meninggalkan kesan mendalam.',
    icon: Palette,
    features: ['Identitas Brand', 'Desain UI/UX', 'Media Sosial', 'Motion Graphics']
  }
];

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 40,
      damping: 15
    }
  }
};

const ServicesSection: React.FC = () => {
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
                    <span className="text-primary-500 font-bold tracking-wider uppercase text-sm">Keahlian Kami</span>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold text-white leading-tight"
                >
                    Kami Membangun <br />
                    <span className="relative inline-block">
                        <span className="relative z-10 text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-600">Mahakarya Digital</span>
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
                Solusi digital komprehensif yang dirancang untuk mengangkat bisnis Anda di era modern.
            </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={item}
              className="group relative p-8 h-full rounded-4xl bg-slate-900 border border-slate-800 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-2"
            >
              {/* Hover Gradient Border Effect */}
              <div className="absolute inset-0 rounded-4xl bg-linear-to-br from-primary-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container */}
                <div className="mb-8 relative inline-flex">
                    <div className="absolute inset-0 bg-primary-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"></div>
                    <div className="w-16 h-16 rounded-2xl bg-slate-800 group-hover:bg-primary-500 transition-colors duration-500 flex items-center justify-center text-white group-hover:text-white shadow-sm">
                        <service.icon size={32} strokeWidth={1.5} />
                    </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-500 transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-slate-400 leading-relaxed mb-8 grow">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center text-sm text-slate-300">
                            <Zap size={14} className="text-primary-500 mr-2 shrink-0 fill-primary-500/20" />
                            {feature}
                        </div>
                    ))}
                </div>

                {/* Arrow Button */}
                <div className="pt-6 border-t border-slate-800 flex items-center text-primary-500 font-semibold group/btn cursor-pointer">
                    <span className="mr-2">Selengkapnya</span>
                    <ArrowRight size={18} className="transform transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;

