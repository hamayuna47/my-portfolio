'use client'

import { useState } from 'react'
import Waves from '@/components/waves'
import { motion, AnimatePresence } from 'framer-motion'

export default function IndustryPage() {
  const [showIndustries, setShowIndustries] = useState(false)

  const industries = [
    { name: 'Retail', position: 'top-48 left-48' },
    { name: 'Finance', position: 'top-48 right-48' },
    { name: 'Healthcare', position: 'bottom-48 left-48' },
    { name: 'Education', position: 'bottom-48 right-48' },
  ]

  return (
    <div className="relative min-h-screen bg-black text-white font-poppins overflow-hidden">
      {/* Interactive Waves */}
      <Waves
        lineColor="#fff"
        backgroundColor="rgba(255, 255, 255, 0.05)"
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />

      {/* Central Button */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowIndustries((prev) => !prev)}
          className="text-2xl md:text-4xl font-bold border border-white text-white bg-transparent px-10 py-5 rounded-full backdrop-blur-md hover:shadow-white/20 transition-all duration-300"
        >
          Industries I've Served
        </motion.button>
      </div>

      {/* Industry Boxes - closer to center */}
      <AnimatePresence>
        {showIndustries &&
          industries.map(({ name, position }, index) => (
            <motion.div
              key={name}
              className={`absolute ${position} z-20`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
            >
              <div className="bg-white text-black px-6 py-4 rounded-xl font-semibold text-lg shadow-lg w-48 text-center">
                {name}
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  )
}
