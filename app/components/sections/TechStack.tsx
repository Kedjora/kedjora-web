'use client';

import React from 'react';
import { Cpu } from 'lucide-react';

// SVG Logo Components
const ReactLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
    <g stroke="#61DAFB" strokeWidth="1.5">
      <ellipse cx="12" cy="12" rx="10" ry="4.5"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)"/>
      <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)"/>
    </g>
  </svg>
);

const NextLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor" fillOpacity="0.1"/>
    <path d="M10 8V16L16 8V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TSLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2H20C21.1 2 22 2.9 22 4V20C22 21.1 21.1 22 20 22H4C2.9 22 2 21.1 2 20V4C2 2.9 2.9 2 4 2Z" fill="#3178C6"/>
    <path d="M12 16V8H10M12 8H14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 16C16 16 17 16 17.5 15.5C18 15 18 14 17 13.5C16 13 16 13 16 12C16 11 17 10.5 18 10.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const FlutterLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2L6 10L10 14L22 2H14Z" fill="#42A5F5"/>
    <path d="M10 14L14 18L22 10L22 15L14 23L6 15L10 14Z" fill="#0D47A1"/>
  </svg>
);

const TailwindLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.25 6C11.25 8.07107 9.57107 9.75 7.5 9.75C5.42893 9.75 3.75 8.07107 3.75 6C3.75 3.92893 5.42893 2.25 7.5 2.25C9.57107 2.25 11.25 3.92893 11.25 6Z" fill="#38BDF8"/>
    <path d="M7.5 9.75C5.42893 9.75 3.75 11.4289 3.75 13.5C3.75 15.5711 5.42893 17.25 7.5 17.25C9.57107 17.25 11.25 15.5711 11.25 13.5" stroke="#38BDF8" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20.25 12C20.25 14.0711 18.5711 15.75 16.5 15.75C14.4289 15.75 12.75 14.0711 12.75 12C12.75 9.92893 14.4289 8.25 16.5 8.25C18.5711 8.25 20.25 9.92893 20.25 12Z" fill="#38BDF8"/>
  </svg>
);

const NodeLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L4 7V17L12 22L20 17V7L12 2Z" fill="#339933"/>
    <path d="M12 22V12" stroke="#fff" strokeWidth="1.5"/>
    <path d="M12 12L20 7" stroke="#fff" strokeWidth="1.5"/>
    <path d="M12 12L4 7" stroke="#fff" strokeWidth="1.5"/>
  </svg>
);

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C8 2 6 2 6 6V8H12V10H4V6C4 2 6 2 12 2Z" fill="#3776AB"/>
    <path d="M12 22C16 22 18 22 18 18V16H12V14H20V18C20 22 18 22 12 22Z" fill="#FFD343"/>
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 12C12 14.2091 10.2091 16 8 16C5.79086 16 4 14.2091 4 12C4 9.79086 5.79086 8 8 8C10.2091 8 12 9.79086 12 12Z" fill="#0ACF83"/>
    <path d="M4 6C4 3.79086 5.79086 2 8 2C10.2091 2 12 3.79086 12 6V8H8C5.79086 8 4 6.20914 4 6Z" fill="#F24E1E"/>
    <path d="M12 6C12 3.79086 13.7909 2 16 2C18.2091 2 20 3.79086 20 6C20 8.20914 18.2091 10 16 10H12V6Z" fill="#FF7262"/>
    <path d="M12 12C12 14.2091 13.7909 16 16 16C18.2091 16 20 14.2091 20 12C20 9.79086 18.2091 8 16 8H12V12Z" fill="#A259FF"/>
    <path d="M12 16V18C12 20.2091 10.2091 22 8 22C5.79086 22 4 20.2091 4 18C4 15.7909 5.79086 14 8 14H12V16Z" fill="#1ABCFE"/>
  </svg>
);

const FirebaseLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 17.5L6.5 3.5L9.5 9.5L14.5 4.5L19.5 17.5H4.5Z" fill="#FFCA28"/>
    <path d="M4.5 17.5L6.5 3.5L13.5 17.5H4.5Z" fill="#FFA000"/>
    <path d="M13.5 17.5L14.5 4.5L19.5 17.5H13.5Z" fill="#F57C00"/>
  </svg>
);

const SupabaseLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.5 2L4 13H11.5V22L20 10H13L14.5 2Z" stroke="#3ECF8E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const technologies = [
  { name: "React", Icon: ReactLogo, color: "text-[#61DAFB]" },
  { name: "Next.js", Icon: NextLogo, color: "text-white" },
  { name: "TypeScript", Icon: TSLogo, color: "text-[#3178C6]" },
  { name: "Flutter", Icon: FlutterLogo, color: "text-[#42A5F5]" },
  { name: "TailwindCSS", Icon: TailwindLogo, color: "text-[#38BDF8]" },
  { name: "Node.js", Icon: NodeLogo, color: "text-[#339933]" },
  { name: "Python", Icon: PythonLogo, color: "text-[#3776AB]" },
  { name: "Figma", Icon: FigmaLogo, color: "text-[#F24E1E]" },
  { name: "Firebase", Icon: FirebaseLogo, color: "text-[#FFA000]" },
  { name: "Supabase", Icon: SupabaseLogo, color: "text-[#3ECF8E]" },
];

const TechStack: React.FC = () => {
  return (
    <section className="py-10 bg-slate-950 border-b border-slate-800 overflow-hidden">
      <div className="container mx-auto px-6 mb-8 text-center">
        <div className="inline-flex items-center gap-2 text-slate-400">
             <Cpu size={16} />
             <p className="text-xs font-bold uppercase tracking-widest">
               Didukung Teknologi Modern
             </p>
        </div>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Use CSS animation for marquee - better performance */}
        <div className="flex whitespace-nowrap gap-6 animate-marquee-fast will-change-transform">
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-md hover:border-primary-500/30 transition-all duration-300 min-w-[140px] group/card"
            >
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-slate-800 group-hover/card:scale-110 transition-transform duration-300">
                <tech.Icon />
              </div>
              <span className={`text-sm font-bold ${tech.color} brightness-125`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        {/* Gradients to fade edges */}
        <div className="absolute top-0 left-0 h-full w-24 bg-linear-to-r from-slate-950 to-transparent z-10" />
        <div className="absolute top-0 right-0 h-full w-24 bg-linear-to-l from-slate-950 to-transparent z-10" />
      </div>
    </section>
  );
};

export default TechStack;

