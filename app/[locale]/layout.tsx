import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { locales, type Locale } from "@/i18n/config";
import "../globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import {
  baseMetadata,
  JsonLd,
  generateOrganizationSchema,
  generateWebSiteSchema,
  generateLocalBusinessSchema,
  PRECONNECT_DOMAINS,
} from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = baseMetadata;

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client side
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        {PRECONNECT_DOMAINS.map((domain) => (
          <link
            key={domain}
            rel="preconnect"
            href={domain}
            crossOrigin="anonymous"
          />
        ))}
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* Alternate language links for SEO */}
        <link rel="alternate" hrefLang="id" href="https://kedjora.id/id" />
        <link rel="alternate" hrefLang="en" href="https://kedjora.id/en" />
        <link
          rel="alternate"
          hrefLang="x-default"
          href="https://kedjora.id/id"
        />

        {/* JSON-LD Structured Data */}
        <JsonLd
          data={[
            generateOrganizationSchema(),
            generateWebSiteSchema(),
            generateLocalBusinessSchema(),
          ]}
        />
      </head>
      <body
        className={`${jakarta.variable} font-sans antialiased transition-colors duration-300`}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>
            <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-primary-500 selection:text-white relative">
              <Navbar />
              {children}
              <Footer />
              <ChatWidget />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

