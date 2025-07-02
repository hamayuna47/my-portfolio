'use client'

import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function ServiceCard({ title, description }: { title: string; description: string }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  return (
    <motion.div
      ref={ref}
      className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 shadow-md w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 text-base">{description}</p>
    </motion.div>
  )
}
