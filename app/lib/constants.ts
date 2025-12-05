import type { NavItem } from '@/types';

// Navigation Items
export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Company Info
export const COMPANY = {
  name: 'KEDJORA',
  tagline: 'Digital Development Agency',
  email: 'hello@kedjora.id',
  phone: '+62 857-3382-0022',
  whatsapp: '6285733820022',
  location: 'Kediri, East Java, ID',
  social: {
    github: 'https://github.com/kedjora',
    linkedin: 'https://linkedin.com/company/kedjora',
    twitter: 'https://twitter.com/kedjora',
    instagram: 'https://instagram.com/kedjora',
  },
};

// Stats
export const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '30+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support Available' },
];

// Tech Stack Logos
export const TECH_LOGOS = [
  { name: 'React', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Next.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'TypeScript', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Node.js', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'Flutter', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
  { name: 'Firebase', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
  { name: 'PostgreSQL', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'MongoDB', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Tailwind', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'Figma', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'Docker', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
];

// Client Logos
export const CLIENT_LOGOS = [
  { name: 'Vercel', url: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' },
  { name: 'Supabase', url: 'https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png' },
  { name: 'Stripe', url: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/stripe/stripe-original.svg' },
];

// Portfolio Categories
export const PORTFOLIO_CATEGORIES = ['All', 'Website', 'Mobile App', 'Bot Automation', 'Design'];

// Blog Categories
export const BLOG_CATEGORIES = ['All', 'Engineering', 'Design', 'Automation', 'Mobile', 'Business'];

// Service Categories for Contact Form
export const SERVICE_OPTIONS = ['Web Development', 'Mobile App', 'Automation Bot', 'UI/UX Design', 'Other'];

// Budget Options for Contact Form
export const BUDGET_OPTIONS = ['< $1k', '$1k - $5k', '$5k - $10k', '$10k+'];

