'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [splitProgress, setSplitProgress] = useState(0) // 0 = closed, 1 = fully open
  const scrollAccumulatorRef = useRef(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const maxScroll = 99 // Total scroll needed for full split
    let isScrolling = false
    let lastTouchY = 0
    let touchStartY = 0

    const handleWheel = (e: WheelEvent) => {
        console.log(scrollAccumulatorRef.current, maxScroll)
        if (scrollAccumulatorRef.current < maxScroll && e.deltaY > 0) {
        e.preventDefault()
        }      
      if (isScrolling) return
      isScrolling = true

      const scrollDelta = e.deltaY * 0.8 // Smooth scroll sensitivity
      
      // Update scroll accumulator with bounds
      scrollAccumulatorRef.current = Math.max(0, Math.min(maxScroll, scrollAccumulatorRef.current + scrollDelta))
      
      // Calculate split progress (0 to 1)
      const newProgress = scrollAccumulatorRef.current / maxScroll
      setSplitProgress(newProgress)

      // Handle navigation away from section
      if (scrollAccumulatorRef.current <= 0 && e.deltaY < 0) {
        const main = document.querySelector('#main-content')
        if (main) {
          main.scrollIntoView({ behavior: 'smooth' })
        }
      }

      // Reset scrolling flag
      setTimeout(() => {
        isScrolling = false
      }, 16) // ~60fps
    }

    const handleTouchStart = (e: TouchEvent) => {
      e.preventDefault()
      touchStartY = e.touches[0].clientY
      lastTouchY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
    const deltaY = e.touches[0].clientY - lastTouchY;
if (scrollAccumulatorRef.current < maxScroll && deltaY > 0  ) {
  e.preventDefault()
}      
      if (isScrolling) return
      
      const currentTouchY = e.touches[0].clientY
      const touchDelta = (lastTouchY - currentTouchY) * 1.5 // Invert and adjust sensitivity for touch
      lastTouchY = currentTouchY
      
      if (Math.abs(touchDelta) < 1) return // Ignore tiny movements
      
      isScrolling = true

      // Update scroll accumulator with bounds
      scrollAccumulatorRef.current = Math.max(0, Math.min(maxScroll, scrollAccumulatorRef.current + touchDelta))
      
      // Calculate split progress (0 to 1)
      const newProgress = scrollAccumulatorRef.current / maxScroll
      setSplitProgress(newProgress)

      // Reset scrolling flag
      setTimeout(() => {
        isScrolling = false
      }, 16)
    }

    const handleTouchEnd = (e: TouchEvent) => {
      e.preventDefault()
      
      const touchEndY = e.changedTouches[0].clientY
      const totalDelta = touchStartY - touchEndY
      
      // Handle navigation away from section on upward swipe when at top
      if (scrollAccumulatorRef.current <= 0 && totalDelta < -50) {
        const main = document.querySelector('#main-content')
        if (main) {
          main.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }

    // Add both wheel and touch event listeners
    section.addEventListener('wheel', handleWheel, { passive: false })
    section.addEventListener('touchstart', handleTouchStart, { passive: false })
    section.addEventListener('touchmove', handleTouchMove, { passive: false })
    section.addEventListener('touchend', handleTouchEnd, { passive: false })

    return () => {
      section.removeEventListener('wheel', handleWheel)
      section.removeEventListener('touchstart', handleTouchStart)
      section.removeEventListener('touchmove', handleTouchMove)
      section.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  // Calculate animation values - make responsive
  const getScreenWidth = () => {
    if (typeof window !== 'undefined') {
      return window.innerWidth
    }
    return 768 // fallback
  }

  const splitOffset = splitProgress * (getScreenWidth() < 640 ? 60 : getScreenWidth() < 768 ? 80 : 100)
  const contentOpacity = Math.max(0, Math.min(1, (splitProgress - 0.2) * 2))
  const contentScale = 0.9 + (splitProgress * 0.1)

  return (
    <section
      ref={sectionRef}
      className="h-screen bg-black text-white font-poppins relative overflow-hidden flex flex-col items-center justify-center snap-start touch-none"
    >
      {/* Single ABOUT text that splits */}
      <div className="relative z-20 flex items-center justify-center h-full">
        
        {/* Complete ABOUT text - always visible */}
        <motion.h1
          className="text-[20vw] sm:text-[16vw] md:text-[12vw] font-extrabold leading-none select-none absolute"
          style={{
            opacity: splitProgress === 0 ? 1 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 40
          }}
        >
          ABOUT
        </motion.h1>

        {/* Split ABOUT - only visible when splitting */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          {/* Top half of ABOUT */}
          <div className="h-1/2 flex items-end justify-center overflow-hidden">
            <motion.h1
              className="text-[20vw] sm:text-[16vw] md:text-[12vw] font-extrabold leading-none select-none"
              style={{
                transform: `translateY(-${splitOffset}px)`,
                clipPath: 'inset(0 0 50% 0)',
                opacity: splitProgress > 0 ? 1 : 0
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
                mass: 0.8
              }}
            >
              ABOUT
            </motion.h1>
          </div>

          {/* Bottom half of ABOUT */}
          <div className="h-1/2 flex items-start justify-center overflow-hidden">
            <motion.h1
              className="text-[20vw] sm:text-[16vw] md:text-[12vw] font-extrabold leading-none select-none"
              style={{
                transform: `translateY(${splitOffset}px)`,
                clipPath: 'inset(50% 0 0 0)',
                opacity: splitProgress > 0 ? 1 : 0
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
                mass: 0.8
              }}
            >
              ABOUT
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Content that appears in the gap - completely separate */}
      <motion.div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          opacity: contentOpacity,
          scale: contentScale,
          pointerEvents: splitProgress > 0.3 ? 'auto' : 'none'
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30
        }}
      >
        <div className="max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-3xl text-center px-4 sm:px-6">
<p className="text-sm sm:text-base leading-relaxed text-gray-300">
  <strong>Humayun Abdullah</strong> is where ideas meet execution. From sleek websites and mobile apps to powerful AI-driven tools, I craft digital solutions that are clean, scalable, and built to last. Whether you're a startup founder, a business owner, or just exploring a new idea — I help bring your vision to life with thoughtful design and intelligent systems.
</p>
<p className="text-sm sm:text-base leading-relaxed text-gray-300 mt-4">
  With a strong foundation in full-stack development, game design, and AI, I deliver smart, future-ready technology that grows with your goals. I don’t just build software — I build digital experiences designed for real-world impact.
</p>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 z-30">
        <div className="w-1 h-12 sm:h-16 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="w-full bg-white rounded-full"
            style={{
              height: `${splitProgress * 100}%`,
              transformOrigin: 'bottom'
            }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30
            }}
          />
        </div>
      </div>

      {/* Scroll hint - updated for mobile */}
      {splitProgress < 0.1 && (
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30"
          initial={{ opacity: 0.6 }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 text-xs sm:text-sm text-center">
            <div className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-gray-400 rounded-full mx-auto mb-2 flex justify-center">
              <motion.div
                className="w-1 h-2 sm:h-3 bg-gray-400 rounded-full mt-1 sm:mt-2"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <span className="hidden sm:inline">Scroll to explore</span>
            <span className="sm:hidden">Swipe to explore</span>
          </div>
        </motion.div>
      )}

      {/* Subtle background effect */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `radial-gradient(ellipse at center, rgba(59, 130, 246, ${splitProgress * 0.08}) 0%, transparent 70%)`
        }}
      />
    </section>
  )
}