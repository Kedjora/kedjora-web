"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Monitor, Handshake, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { t } = useLanguage()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Services", href: "/services" },
    { name: t("nav.projects"), href: "/projects" },
    { name: t("nav.process"), href: "/process" },
    { name: t("nav.support"), href: "/support" },
    { name: "Partnership", href: "/partnership", icon: <Handshake className="w-4 h-4" /> },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!mounted) return null

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <motion.nav
        className={`
          relative w-full max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ease-out
          ${scrolled
            ? "bg-background/80 dark:bg-black/80 backdrop-blur-xl border-border/50 shadow-2xl shadow-black/10 dark:shadow-black/30"
            : "bg-background/60 dark:bg-black/60 backdrop-blur-lg border-border/30 shadow-lg shadow-black/5 dark:shadow-black/20"
          }
        `}
        initial={{ y: -100, opacity: 0, scale: 0.95 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          delay: 0.1
        }}
        whileHover={{
          scale: scrolled ? 1.005 : 1.01,
          transition: { duration: 0.2 }
        }}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 group"
              onClick={scrollToTop}
            >
              <Image
                src="/images/weltivation-logo.png"
                alt="Weltivation"
                width={200}
                height={50}
                className="h-10 lg:h-12 w-auto transition-all duration-300 group-hover:brightness-110"
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  onClick={scrollToTop}
                  className={`
                    relative flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium
                    transition-all duration-300 group hover:scale-105
                    ${pathname === item.href
                      ? "text-emerald-400 bg-emerald-400/10 shadow-lg shadow-emerald-400/20"
                      : "text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10"
                    }
                  `}
                >
                  {item.icon && (
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                  )}
                  <span className="relative">
                    {item.name}
                    {pathname === item.href && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                        layoutId="activeTab"
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right side items - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <LanguageSelector />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href="/corporate-login"
                onClick={scrollToTop}
                className="
                  p-2 rounded-xl text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white
                  hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300
                  hover:shadow-lg hover:shadow-white/10
                "
              >
                <Monitor className="w-5 h-5" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/consultation" onClick={scrollToTop}>
                <Button className="
                  bg-gradient-to-r from-emerald-500 to-green-500
                  hover:from-emerald-600 hover:to-green-600
                  text-white font-medium shadow-lg shadow-emerald-500/25
                  hover:shadow-xl hover:shadow-emerald-500/30
                  transition-all duration-300 rounded-xl
                ">
                  <Zap className="w-4 h-4 mr-2" />
                  Free Consultation
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Mobile menu button and Free Consultation */}
          <div className="lg:hidden flex items-center space-x-3">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/consultation" onClick={scrollToTop}>
                <Button
                  size="sm"
                  className="
                    bg-gradient-to-r from-emerald-500 to-green-500
                    hover:from-emerald-600 hover:to-green-600
                    text-white font-medium text-xs px-3 py-2 rounded-xl
                    shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30
                    transition-all duration-300
                  "
                >
                  <Zap className="w-3 h-3 mr-1" />
                  Free
                </Button>
              </Link>
            </motion.div>

            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="
                p-2 rounded-xl text-gray-300 dark:text-gray-300 hover:text-white dark:hover:text-white
                hover:bg-white/10 dark:hover:bg-white/10 transition-all duration-300
                hover:shadow-lg hover:shadow-white/10
              "
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="
                lg:hidden absolute top-full left-4 right-4 mt-2
                bg-background/95 dark:bg-black/95 backdrop-blur-xl
                border border-border/50 rounded-2xl shadow-2xl shadow-black/20
                overflow-hidden
              "
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{
                duration: 0.3,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <div className="p-6 space-y-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => {
                        setIsOpen(false)
                        scrollToTop()
                      }}
                      className={`
                        flex items-center space-x-3 p-3 rounded-xl text-base font-medium
                        transition-all duration-300 group hover:scale-105
                        ${pathname === item.href
                          ? "text-emerald-400 bg-emerald-400/10 shadow-lg shadow-emerald-400/20"
                          : "text-gray-200 dark:text-gray-200 hover:text-white dark:hover:text-white hover:bg-white/10 dark:hover:bg-white/10"
                        }
                      `}
                    >
                      {item.icon && (
                        <span className="transition-transform duration-300 group-hover:scale-110">
                          {item.icon}
                        </span>
                      )}
                      <span>{item.name}</span>
                    </Link>
                  </motion.div>
                ))}

                <motion.div
                  className="pt-4 border-t border-border/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <Link
                    href="/consultation"
                    onClick={() => {
                      setIsOpen(false)
                      scrollToTop()
                    }}
                  >
                    <Button className="
                      w-full bg-gradient-to-r from-emerald-500 to-green-500
                      hover:from-emerald-600 hover:to-green-600
                      text-white font-medium rounded-xl
                      shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30
                      transition-all duration-300 hover:scale-105
                    ">
                      <Zap className="w-4 h-4 mr-2" />
                      Free Consultation
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </motion.nav>
    </div>
  )
}
