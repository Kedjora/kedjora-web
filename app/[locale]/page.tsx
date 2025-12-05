import { setRequestLocale } from "next-intl/server";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import ContactCTA from "@/components/sections/ContactCTA";
import {
  JsonLd,
  generateFAQSchema,
  generateServiceSchema,
  HOMEPAGE_FAQS,
} from "@/lib/seo";

const homepageServices = [
  {
    name: "Pembuatan Website",
    description:
      "Website profesional dengan React & Next.js, SEO friendly dan performa tinggi.",
  },
  {
    name: "Aplikasi Mobile",
    description:
      "Aplikasi Android & iOS dengan Flutter, satu kode untuk semua platform.",
  },
  {
    name: "Bot Automasi",
    description:
      "Bot WhatsApp, Telegram, dan automasi workflow untuk efisiensi bisnis.",
  },
  {
    name: "Desain UI/UX",
    description: "Desain antarmuka modern, branding, dan motion graphics.",
  },
];

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="grow">
      <JsonLd
        data={[
          generateFAQSchema(HOMEPAGE_FAQS),
          generateServiceSchema(homepageServices),
        ]}
      />
      <Hero />
      <TechStack />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <ContactCTA />
    </main>
  );
}

