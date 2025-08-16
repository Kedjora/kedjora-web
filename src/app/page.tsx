"use client"

import { useRef, useEffect, useState } from "react"
import Link from "next/link"
import { CodeRain } from "@/components/code-rain"
import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { PoweredByBadge } from "@/components/powered-by-badge"
import { ExpertiseSection } from "@/components/expertise-section"
import { SpinningEarth } from "@/components/spinning-earth"
import { TypingHero } from "@/components/typing-hero"
import { motion } from "framer-motion"
import { Zap } from "lucide-react"
import { ProfileDropdown } from "@/components/profile-dropdown"
import { ServicesViewportSection } from "@/components/services-viewport-section"

// Enhanced Video Loop Component
const SmoothVideoBackground = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Enhanced smooth looping handler
    const handleTimeUpdate = () => {
      // Restart video slightly before it ends to eliminate gap
      if (video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0.05 // Start slightly after beginning to avoid black frame
      }
    }

    // Handle video loaded and ready to play
    const handleLoadedData = () => {
      setIsLoaded(true)
      video.currentTime = 0.05 // Start slightly after beginning
      
      // Ensure video plays smoothly
      const playPromise = video.play()
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true)
          })
          .catch((error) => {
            console.warn("Video autoplay failed:", error)
          })
      }
    }

    // Handle ended event as fallback
    const handleEnded = () => {
      video.currentTime = 0.05
      video.play().catch(() => {
        // Handle play failure silently
      })
    }

    // Handle play event
    const handlePlay = () => {
      setIsPlaying(true)
    }

    // Handle pause event
    const handlePause = () => {
      setIsPlaying(false)
    }

    // Optimize video playback
    const optimizeVideo = () => {
      video.playbackRate = 1
      video.defaultPlaybackRate = 1
      
      // Force hardware acceleration
      video.style.transform = 'translateZ(0)'
      video.style.backfaceVisibility = 'hidden'
      video.style.setProperty('-webkit-backface-visibility', 'hidden')
    }

    // Add event listeners
    video.addEventListener('timeupdate', handleTimeUpdate)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('ended', handleEnded)
    video.addEventListener('play', handlePlay)
    video.addEventListener('pause', handlePause)
    video.addEventListener('loadstart', optimizeVideo)

    // Handle if video is already loaded
    if (video.readyState >= 3) {
      handleLoadedData()
    }

    // Cleanup
    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('play', handlePlay)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('loadstart', optimizeVideo)
    }
  }, [])

  // Handle visibility change to pause/resume video
  useEffect(() => {
    const handleVisibilityChange = () => {
      const video = videoRef.current
      if (!video) return

      if (document.hidden) {
        video.pause()
      } else if (isLoaded) {
        video.play().catch(() => {
          // Handle play failure silently
        })
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [isLoaded])

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-out ${
          isLoaded && isPlaying ? 'opacity-25' : 'opacity-0'
        }`}
        style={{
          filter: "contrast(1.2) brightness(0.7) grayscale(100%)",
          // Enhanced performance optimizations
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
          perspective: '1000px',
          WebkitPerspective: '1000px',
          willChange: 'transform',
          // Prevent flickering
          WebkitTransform: 'translateZ(0)',
          WebkitTransformStyle: 'preserve-3d',
        } as React.CSSProperties}
        // Additional video optimization attributes
        webkit-playsinline="true"
        x5-video-player-type="h5"
        x5-video-player-fullscreen="true"
        x5-video-orientation="portraint"
      >
        <source src="https://nkrj90wrdnyn9pae.public.blob.vercel-storage.com/Kedjora.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Loading indicator */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-black flex items-center justify-center">
          <div className="relative">
            {/* Spinning loader */}
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white/30"></div>
            {/* Pulse effect */}
            <div className="absolute inset-0 animate-ping rounded-full h-12 w-12 border border-white/10"></div>
          </div>
        </div>
      )}

      {/* Fade overlay for smooth loading transition */}
      <div 
        className={`absolute inset-0 bg-black transition-opacity duration-2000 ease-out pointer-events-none ${
          isLoaded && isPlaying ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Background layers */}
      <div className="fixed inset-0 z-0">
        {/* Spinning Earth */}
        <div className="opacity-10">
          <SpinningEarth />
        </div>
        {/* Code rain */}
        <div className="opacity-10 dark:opacity-10 light:opacity-3">
          <CodeRain />
        </div>
      </div>

      {/* Enhanced Hero Video with Smooth Loop */}
      <SmoothVideoBackground />

      {/* Content container */}
      <div className="relative z-10">
        <NavBar />
        <ProfileDropdown />

        {/* Hero section with better contrast */}
        <section className="flex flex-col items-center justify-center min-h-[90vh] px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="mb-8">
              <PoweredByBadge />
            </div>

            {/* Enhanced hero with better contrast */}
            <div className="relative">
              {/* Background for better contrast in light mode */}
              <div className="absolute inset-0 bg-background/80 dark:bg-transparent rounded-2xl blur-3xl"></div>
              <div className="relative z-10">
                <TypingHero />
              </div>
            </div>

            <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto my-8"></div>

            {/* Enhanced description with better contrast */}
            <div className="relative">
              <div className="absolute inset-0 bg-background/60 dark:bg-transparent rounded-xl blur-2xl"></div>
              <p className="relative z-10 text-muted-foreground max-w-xl mx-auto font-medium">
                Transforming ideas into powerful digital solutions that drive growth and innovation for forward-thinking
                businesses.
              </p>
            </div>

            {/* Button section - Left to Right order */}
            <div className="pt-8">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  href="/services"
                  className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                >
                  <span className="flex items-center space-x-2">
                    <span>Services</span>
                  </span>
                </Link>

                <Link
                  href="/support"
                  className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-5 h-5" />
                    <span>Support</span>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Expertise section */}
        <ExpertiseSection />

        {/* Services viewport section */}
        <ServicesViewportSection />

        {/* Enhanced Contact section */}
        <section id="contact" className="py-20 px-4 sm:px-6 relative bg-black">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <motion.h2
                className="text-4xl sm:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-foreground">Ready to </span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-green-600">
                  innovate?
                </span>
              </motion.h2>
              <motion.div
                className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Let&apos;s discuss how we can transform your vision into reality with cutting-edge technology and strategic
                innovation.
              </motion.p>
            </div>

            <motion.div
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col items-center space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/services"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <span>Services</span>
                    </span>
                  </Link>

                  <Link
                    href="/consultation"
                    className="group relative px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white rounded-lg font-medium text-base hover:from-emerald-400 hover:to-green-500 transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_20px_rgba(52,211,153,0.3)]"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Free Consultation</span>
                    </span>
                  </Link>

                  <Link
                    href="/support"
                    className="group relative px-6 py-3 bg-gray-800 text-white rounded-lg font-medium text-base hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700"
                  >
                    <span className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Support</span>
                    </span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center max-w-2xl">
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">1</span>
                    </div>
                    <p className="text-sm text-muted-foreground">No commitment required</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">2</span>
                    </div>
                    <p className="text-sm text-muted-foreground">30-minute strategy session</p>
                  </div>
                  <div className="flex flex-col items-center space-y-2">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-sm">3</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Expert guidance</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}