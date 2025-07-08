'use client'

import { useState } from 'react'
import { FaChevronUp, FaComments, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)

  // Scroll smoothly to section
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault()
    const section = document.querySelector(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false) // close the menu after navigation
    }
  }

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          className="bg-white text-black p-4 rounded-full shadow-lg hover:scale-105 transition"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaChevronUp />}
        </button>

        {/* Menu Panel */}
        {isOpen && (
          <div className="mt-4 w-48 bg-white text-black rounded-lg shadow-xl p-4 space-y-3 text-sm animate-fadeIn">
            <a href="#home" onClick={(e) => handleSmoothScroll(e, '#home')} className="block hover:font-semibold">Home</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, '#about')} className="block hover:font-semibold">About</a>
            <a href="#services" onClick={(e) => handleSmoothScroll(e, '#services')} className="block hover:font-semibold">Services</a>
            <a href="#technologies" onClick={(e) => handleSmoothScroll(e, '#technologies')} className="block hover:font-semibold">Technologies</a>
            <a href="#comments" onClick={(e) => handleSmoothScroll(e, '#comments')} className="block hover:font-semibold">Comments</a>
            <a href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')} className="block hover:font-semibold">Contact</a>

            {/* WhatsApp Chat Button */}
            <a
              href="https://wa.me/923030608736"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center gap-2 p-2 mt-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            >
              <FaComments /> Chat with us
            </a>
          </div>
        )}
      </div>
    </>
  )
}
