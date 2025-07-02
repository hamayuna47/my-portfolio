'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function IntroScreen() {
  const [clicked, setClicked] = useState(false)
  const router = useRouter()

  const handleClick = () => {
    setClicked(true)
    // Delay the route change to let the animation play
    setTimeout(() => {
      router.push('/home')
    }, 1200) // matches animation duration
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col font-poppins overflow-hidden" onClick={handleClick}>
      {/* Top Half */}
      <motion.div
        className="flex-1 bg-black text-white flex items-center justify-center text-[12vw] md:text-7xl font-extrabold cursor-pointer select-none"
        animate={clicked ? { y: '-100%' } : { y: 0 }}
        initial={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        DOMINIC
      </motion.div>

      {/* Bottom Half */}
      <motion.div
        className="flex-1 bg-white text-black flex items-center justify-center text-[12vw] md:text-7xl font-extrabold cursor-pointer select-none"
        animate={clicked ? { y: '100%' } : { y: 0 }}
        initial={{ y: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
      >
        STUDIOS
      </motion.div>
    </div>
  )
}
