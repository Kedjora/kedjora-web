"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { MessageSquare, PenTool, Code2, Rocket } from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { LucideIcon } from "lucide-react";

interface StepConfig {
  id: number;
  key: "discuss" | "design" | "develop" | "launch";
  icon: LucideIcon;
  color: string;
}

const stepConfigs: StepConfig[] = [
  {
    id: 1,
    key: "discuss",
    icon: MessageSquare,
    color: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    key: "design",
    icon: PenTool,
    color: "from-indigo-400 to-indigo-600",
  },
  {
    id: 3,
    key: "develop",
    icon: Code2,
    color: "from-violet-400 to-violet-600",
  },
  {
    id: 4,
    key: "launch",
    icon: Rocket,
    color: "from-primary-400 to-primary-600",
  },
];

const Process: React.FC = () => {
  const t = useTranslations("process");
  const tCommon = useTranslations("common");
  const locale = useLocale();

  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 inset-x-0 h-px bg-linear-to-r from-transparent via-slate-800 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-primary-300 text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-primary-500/10"
          >
            {t("badge")}
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            {t("title1")}{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary-400 to-blue-500">
              {t("title2")}
            </span>
          </motion.h2>
          <p className="text-lg text-slate-400 leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Desktop Staggered Layout with Curve */}
        <div className="relative hidden lg:block h-[500px]">
          {/* Enhanced Curved Line */}
          <svg
            className="absolute top-0 left-0 w-full h-full pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="lineGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                <stop offset="10%" stopColor="#3b82f6" stopOpacity="0.5" />
                <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
                <stop offset="90%" stopColor="#ec4899" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* The path follows the center of the cards: High (15%), Low (85%), High (15%), Low (85%) */}
            {/* Adjusted points to hit the icon centers roughly */}
            <motion.path
              d="M 120 100 C 300 100, 300 400, 500 400 C 700 400, 700 100, 900 100 C 1100 100, 1100 400, 1280 400"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="10 10"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 0.6 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>

          <div className="grid grid-cols-4 gap-4 h-full relative z-10">
            {stepConfigs.map((step, index) => {
              const isEven = index % 2 !== 0; // 0=Top, 1=Bottom, 2=Top, 3=Bottom
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: isEven ? 50 : -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 40,
                  }}
                  className={`flex flex-col items-center ${
                    isEven ? "justify-end pb-10" : "justify-start pt-10"
                  } h-full`}
                >
                  <div className="relative group w-full max-w-[280px]">
                    {/* Floating Number */}
                    <div
                      className={`absolute ${
                        isEven ? "-top-12" : "-bottom-12"
                      } left-1/2 -translate-x-1/2 text-8xl font-black text-slate-800/30 select-none z-0 transition-all duration-500 group-hover:text-primary-900/20 group-hover:scale-110`}
                    >
                      0{step.id}
                    </div>

                    {/* Card Content */}
                    <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-800 hover:border-primary-500/40 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] hover:-translate-y-2 text-center group-hover:bg-slate-900">
                      {/* Glow effect */}
                      <div
                        className={`absolute inset-0 rounded-3xl bg-linear-to-b ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                      />

                      <div
                        className={`w-16 h-16 mx-auto rounded-2xl bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-slate-300 shadow-lg mb-6 group-hover:border-primary-500 group-hover:text-white transition-colors duration-300 relative`}
                      >
                        <step.icon size={28} strokeWidth={1.5} />
                        {/* Connector Dot */}
                        <div
                          className={`absolute ${
                            isEven ? "-top-3" : "-bottom-3"
                          } left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 ring-4 ring-slate-950`}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                        {t(`steps.${step.key}.title`)}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed">
                        {t(`steps.${step.key}.description`)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile/Tablet Vertical Timeline (Fallback) */}
        <div className="lg:hidden space-y-12 relative">
          <div className="absolute left-8 top-8 bottom-8 w-px bg-slate-800" />
          {stepConfigs.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-start gap-8 group"
            >
              {/* Number & Dot */}
              <div className="relative z-10 shrink-0 w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl font-bold text-slate-400 group-hover:border-primary-500 group-hover:text-primary-400 transition-colors duration-300 shadow-xl">
                {step.id}
                {index !== stepConfigs.length - 1 && (
                  <div className="absolute -bottom-12 left-1/2 w-px h-12 bg-slate-800 -translate-x-1/2" />
                )}
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <step.icon
                    size={24}
                    className={`text-slate-500 group-hover:text-primary-400 transition-colors`}
                  />
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 p-1 pr-4 rounded-full bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-primary-600 flex items-center justify-center">
              <Rocket size={14} className="text-white" />
            </div>
            <span className="text-slate-400 text-sm">
              {t("cta")}{" "}
              <Link
                href={`/${locale}/contact`}
                className="text-white font-semibold hover:text-primary-400 transition-colors ml-1"
              >
                {tCommon("contactUs")}
              </Link>
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Process;
