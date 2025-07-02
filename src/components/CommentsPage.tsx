'use client'

import { useState } from 'react'
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi'

const comments = [
  {
    name: 'Sarah Malik',
    text: 'He delivered exactly what we envisioned. He truly understand client needs and execute flawlessly.',
  },
  {
    name: 'John Rivera',
    text: 'His AI expertise transformed our product. Communication and professionalism were top-notch.',
  },
  {
    name: 'Ayesha Khan',
    text: 'We’ve worked with many agencies, but he stands out in reliability and innovation.',
  },
  {
    name: 'Daniel Cheung',
    text: 'From concept to launch, everything was smooth. Highly recommend for serious digital products.',
  },
]

export default function CommentsPage() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % comments.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + comments.length) % comments.length)
  }

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 flex flex-col md:flex-row items-center justify-between font-poppins">
      {/* Left Section */}
      <div className="md:w-1/2 w-full flex justify-center mb-12 md:mb-0">
        <div className="border border-white/30 rounded-xl p-6 max-w-md text-center md:text-left">
          <h1 className="text-3xl font-bold mb-4">Here's what they have to say</h1>
          <p className="text-gray-300 text-lg">
            I believe my clients' voices speak louder than any pitch. Their feedback reflects the trust I've built and the impactful results I've delivered.
          </p>
        </div>
      </div>

      {/* Right Section: Comments */}
      <div className="md:w-1/2 w-full flex flex-col items-center justify-center text-center">
        <div className="bg-white/10 border border-white/20 rounded-xl p-6 max-w-md w-full backdrop-blur-md mb-6">
          <p className="text-lg text-white italic mb-3">&ldquo;{comments[current].text}&rdquo;</p>
          <p className="text-sm text-gray-300">— {comments[current].name}</p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4">
          <button
            onClick={prev}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
            aria-label="Previous comment"
          >
            <FiArrowLeft />
          </button>
          <button
            onClick={next}
            className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition"
            aria-label="Next comment"
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}
