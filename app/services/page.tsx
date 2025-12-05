import type { Metadata } from 'next';
import ServicesPageContent from '@/components/pages/ServicesPage';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema, generateServiceSchema, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Layanan',
  description: 'Jasa pembuatan website profesional, aplikasi mobile Android & iOS, bot automasi WhatsApp/Telegram, dan desain UI/UX berkualitas.',
  openGraph: {
    title: 'Layanan | KEDJORA',
    description: 'Jasa pembuatan website, aplikasi mobile, bot automasi, dan desain UI/UX.',
    url: `${SITE_CONFIG.url}/services`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/services` },
};

const services = [
  { name: "Pembuatan Website", description: "Website profesional dengan React & Next.js, SEO friendly" },
  { name: "Aplikasi Mobile", description: "Aplikasi Android & iOS dengan Flutter" },
  { name: "Bot Automasi", description: "Bot WhatsApp, Telegram, dan automasi workflow" },
  { name: "Desain UI/UX", description: "Desain antarmuka modern dan branding" },
];

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({ title: 'Layanan', description: metadata.description as string, path: '/services' }),
        generateBreadcrumbSchema([{ name: 'Beranda', path: '/' }, { name: 'Layanan', path: '/services' }]),
        generateServiceSchema(services),
      ]} />
      <ServicesPageContent />
    </>
  );
}

