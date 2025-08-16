"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react"
import { NewsletterForm } from "./newsletter-form"
import { FooterPopup } from "./footer-popup"
import { Button } from "@/components/ui/button"

type FooterSection = {
  id: string
  title: string
  items: string[]
}

const footerSections: FooterSection[] = [
  {
    id: "services",
    title: "Services",
    items: ["Web Development", "Mobile Apps", "Physical Products", "SEO", "Google Ads", "Patent Services"],
  },
  {
    id: "company",
    title: "Company",
    items: ["About", "Portfolio", "Projects", "Process", "Careers", "Blog"],
  },
  {
    id: "resources",
    title: "Resources",
    items: ["Documentation", "Support", "API", "Status", "Security", "Downloads"],
  },
  {
    id: "legal",
    title: "Legal",
    items: ["Privacy", "Terms", "Cookies", "GDPR", "Accessibility", "Licenses"],
  },
]

export function Footer() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (sectionId: string) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  // Helper untuk membuat URL dari nama item
  const createLinkHref = (item: string) => `/${item.toLowerCase().replace(/\s+/g, "-")}`

  return (
    <footer className="py-8 px-4 sm:px-6 border-t border-border/50 relative overflow-hidden">
      {/* Code background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <pre className="text-xs text-primary/30 font-mono leading-relaxed transform rotate-6 scale-150 absolute -top-20 -left-20">
          {`function innovate() {
  const solutions = [];
  
  // Web Development
  solutions.push({
    framework: 'Next.js',
    backend: 'Node.js',
    database: 'PostgreSQL',
    deployment: 'Vercel'
  });
  
  // Mechanical Engineering
  solutions.push({
    design: 'SolidWorks',
    simulation: 'ANSYS',
    manufacturing: 'CNC',
    materials: 'Advanced Composites'
  });
}`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Desktop Footer */}
        <div className="hidden md:flex flex-col sm:flex-row justify-between items-center gap-8">
          <div className="flex items-center space-x-4">
            <Image src="/images/weltivation-logo.png" alt="Weltivation" width={180} height={56} />
            <FooterPopup />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Weltivation. All rights reserved.
            </div>

            <div className="flex items-center gap-4">
              <Button
                onClick={() => (window.location.href = "/support")}
                className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Start Chat
              </Button>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Subscribe to our newsletter</span>
                <NewsletterForm />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Footer - Stacked with collapsible sections */}
        <div className="md:hidden space-y-6">
          <div className="text-center space-y-4">
            <Image
              src="/images/weltivation-logo.png"
              alt="Weltivation"
              width={160}
              height={48}
              className="mx-auto"
            />
            <div className="text-muted-foreground text-xs">
              &copy; {new Date().getFullYear()} Weltivation. All rights reserved.
            </div>
          </div>

          <div className="space-y-2">
            {footerSections.map((section) => (
              <div key={section.id} className="border border-border/30 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 bg-background/50 hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium text-sm">{section.title}</span>
                  {expandedSection === section.id ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2 border-t border-border/30">
                        {section.items.map((item, index) => (
                          <Link href={createLinkHref(item)} key={index} passHref>
                            <motion.div
                              className="text-sm text-muted-foreground hover:text-primary transition-colors py-1 cursor-pointer"
                              initial={{ x: -10, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: index * 0.05 }}
                            >
                              {item}
                            </motion.div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center space-y-4 pt-4 border-t border-border/30">
            <span className="text-sm text-muted-foreground">Stay updated</span>
            <div className="px-4">
              <NewsletterForm />
            </div>
            <Button
              onClick={() => (window.location.href = "/support")}
              className="w-full bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-4 py-2 text-sm"
            >
              <MessageSquare className="w-4 h-4 mr-2" />
              Start Chat
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}