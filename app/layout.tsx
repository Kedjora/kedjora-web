import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";
import { baseMetadata, JsonLd, generateOrganizationSchema, generateWebSiteSchema, generateLocalBusinessSchema, PRECONNECT_DOMAINS } from "@/lib/seo";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = baseMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to external domains for performance */}
        {PRECONNECT_DOMAINS.map((domain) => (
          <link key={domain} rel="preconnect" href={domain} crossOrigin="anonymous" />
        ))}
        <link rel="dns-prefetch" href="https://picsum.photos" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />

        {/* JSON-LD Structured Data */}
        <JsonLd data={[
          generateOrganizationSchema(),
          generateWebSiteSchema(),
          generateLocalBusinessSchema(),
        ]} />
      </head>
      <body className={`${jakarta.variable} font-sans antialiased transition-colors duration-300`} suppressHydrationWarning>
        <ThemeProvider>
          <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 selection:bg-primary-500 selection:text-white relative">
            <Navbar />
            {children}
            <Footer />
            <ChatWidget />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
