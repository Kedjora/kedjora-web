import type { Metadata } from 'next';
import ContactPageContent from '@/components/pages/ContactPage';
import { JsonLd, generateBreadcrumbSchema, generateWebPageSchema, generateFAQSchema, SITE_CONFIG, CONTACT_FAQS } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Kontak',
  description: 'Hubungi KEDJORA untuk konsultasi gratis. Mari diskusikan project Anda dan wujudkan ide digital bersama kami.',
  openGraph: {
    title: 'Kontak | KEDJORA',
    description: 'Hubungi kami untuk memulai project digital Anda.',
    url: `${SITE_CONFIG.url}/contact`,
  },
  alternates: { canonical: `${SITE_CONFIG.url}/contact` },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={[
        generateWebPageSchema({ title: 'Kontak', description: metadata.description as string, path: '/contact' }),
        generateBreadcrumbSchema([{ name: 'Beranda', path: '/' }, { name: 'Kontak', path: '/contact' }]),
        generateFAQSchema(CONTACT_FAQS),
      ]} />
      <ContactPageContent />
    </>
  );
}

