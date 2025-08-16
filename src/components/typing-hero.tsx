"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const phrases = [
  { text: "technology", color: "text-emerald-400", cursorColor: "bg-emerald-400", shadow: "drop-shadow-[0_0_15px_rgba(52,211,153,0.6)]" },
  { text: "digital solutions", color: "text-blue-400", cursorColor: "bg-blue-400", shadow: "drop-shadow-[0_0_15px_rgba(96,165,250,0.6)]" },
  { text: "free consultation", color: "text-orange-400", cursorColor: "bg-orange-400", shadow: "drop-shadow-[0_0_15px_rgba(251,146,60,0.6)]" },
]

const baseText = "Let's create tomorrow's "
const typingSpeed = 100
const deletingSpeed = 50
const pauseTime = 2000

export function TypingHero() {
  const [displayText, setDisplayText] = useState("")
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    // Fungsi ini akan menangani logika pengetikan dan penghapusan
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex].text

      if (!isDeleting && currentCharIndex < currentPhrase.length) {
        // Proses MENGETIK
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentCharIndex + 1))
          setCurrentCharIndex(currentCharIndex + 1)
        }, typingSpeed)
        return () => clearTimeout(timeout)

      } else if (!isDeleting && currentCharIndex === currentPhrase.length) {
        // JEDA setelah selesai mengetik, sebelum menghapus
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, pauseTime)
        return () => clearTimeout(timeout)

      } else if (isDeleting && currentCharIndex > 0) {
        // Proses MENGHAPUS
        const timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, currentCharIndex - 1))
          setCurrentCharIndex(currentCharIndex - 1)
        }, deletingSpeed)
        return () => clearTimeout(timeout)

      } else if (isDeleting && currentCharIndex === 0) {
        // PINDAH ke frasa berikutnya setelah selesai menghapus
        setIsDeleting(false)
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
      }
    }

    handleTyping()
  }, [currentCharIndex, isDeleting, currentPhraseIndex])

  return (
    <h1 className="text-4xl text-center sm:text-7xl font-bold tracking-tighter font-mono">
      {/* Menggunakan min-h-[value] untuk mencegah layout shift saat teks berganti baris */}
      <div className="flex flex-wrap justify-center items-center min-h-[144px] sm:min-h-[192px]">
        <span className="text-white mr-2">{">"}</span>
        <div className="relative">
          <span className="text-white">{baseText}</span>
          <span className={`${phrases[currentPhraseIndex].color} ${phrases[currentPhraseIndex].shadow}`}>
            {displayText}
          </span>
          
          {/* Kursor ini berkedip menggunakan framer-motion, tanpa perlu state tambahan */}
          <motion.span
            className={`inline-block w-1 sm:w-2 h-10 sm:h-14 ${phrases[currentPhraseIndex].cursorColor} ml-1 align-middle`}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </h1>
  )
}