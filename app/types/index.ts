// Navigation Types
export interface NavItem {
  label: string;
  href: string;
}

// Service Types
export interface Service {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
  color: string;
}

export interface DetailedService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  color: string;
  features: string[];
  visual: 'browser' | 'phone' | 'terminal' | 'layers';
}

// Portfolio Types
export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Website' | 'Mobile App' | 'Bot Automation' | 'Design';
  image: string;
  description: string;
  tags: string[];
  link?: string;
  featured?: boolean;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  rating: number;
}

// Pricing Types
export interface PricingTier {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

// Team Types
export interface TeamMember {
  name: string;
  role: string;
  image: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

// FAQ Types
export interface FAQItem {
  q: string;
  a: string;
}

// Process Step Types
export interface ProcessStep {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

// Contact Step Types
export interface ContactStep {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  desc: string;
}

// Stats Types
export interface Stat {
  icon?: React.ComponentType<{ size?: number; className?: string }>;
  value: string;
  label: string;
}

// Timeline Types
export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

// Value Types
export interface Value {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  description: string;
}

