'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import MainContent from '@/components/MainContent'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServiceSection'
import IndustrySection from '@/components/IndustryPage'
import SuccessStoriesSection from '@/components/SuccessStoriesPage'
import TechnologiesPage from '@/components/TechnologiesUsedPage'
import CommentsPage from '@/components/CommentsPage'
import ContactPage from '@/components/ContactPage'
import FinalPage from '@/components/FinalPage'
import FloatingActionMenu from '@/components/FloatingActionMenu'

export default function IntroPage() {
  const [clicked, setClicked] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  const handleClick = () => {
    if (!clicked) {
      setClicked(true)
      setTimeout(() => {
        setShowIntro(false)
      }, 1200)
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleClick()
    }, 1000) // auto-dismiss after 1 second

    return () => clearTimeout(timeout)
  }, [])

  return (
    <main className="relative h-screen overflow-hidden font-poppins">
      {showIntro ? (
        // --- Intro Split Animation ---
        <div className="absolute inset-0 z-50 flex flex-col" onClick={handleClick}>
          <motion.div
            className="flex-1 bg-black text-white flex justify-center items-center text-[12vw] md:text-7xl font-extrabold select-none"
            animate={clicked ? { y: '-100%' } : { y: 0 }}
            initial={{ y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Welcome 
          </motion.div>
          <motion.div
            className="flex-1 bg-white text-black flex justify-center items-center text-[12vw] md:text-7xl font-extrabold select-none"
            animate={clicked ? { y: '100%' } : { y: 0 }}
            initial={{ y: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            Viewer
          </motion.div>
        </div>
      ) : (
        // --- Scrollable Sections after intro ---
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
          <motion.section 
            id="home"
            className="h-screen snap-start"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: clicked ? 1 : 0, scale: clicked ? 1 : 0.98 }}
            transition={{ duration: 1.2, ease: 'easeInOut', delay: 0.5 }}
          >
            <MainContent />
          </motion.section>

          <section id="about" className="h-screen snap-start">
            <AboutSection />
          </section>

          <section id="services" className="min-h-screen snap-start">
            <ServicesSection />
          </section>

          <section id="industries" className="min-h-industry snap-start">
            <IndustrySection />
          </section>

          <section id="success" className="min-h-success snap-start">
            <SuccessStoriesSection />
          </section>

          <section id="technologies" className="min-h-tech snap-start">
            <TechnologiesPage />
          </section>

          <section id="comments" className="min-h-comments snap-start">
            <CommentsPage />
          </section>

          <section id="contact" className="min-h-contact snap-start">
            <ContactPage />
          </section>

          <section id="final" className="min-h-final snap-start snap-proximity scroll-smooth">
            <FinalPage />
          </section>

          <FloatingActionMenu />
        </div>
      )}
    </main>
  )
}
