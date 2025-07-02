'use client'

import { useState } from 'react'
import { FaChevronUp, FaComments, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function FloatingActionMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [isChatOpen, setIsChatOpen] = useState(false)

  const toggleMenu = () => setIsOpen(prev => !prev)
  const toggleChat = () => setIsChatOpen(prev => !prev)

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
            <Link href="#home" className="block hover:font-semibold">Home</Link>
            <Link href="#about" className="block hover:font-semibold">About</Link>
            <Link href="#services" className="block hover:font-semibold">Services</Link>
            <Link href="#technologies" className="block hover:font-semibold">Technologies</Link>
            <Link href="#comments" className="block hover:font-semibold">Comments</Link>
            <Link href="#contact" className="block hover:font-semibold">Contact</Link>
          
          </div>
        )}
      </div>

      {/* Chat Window */}
      {isChatOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 bg-white rounded-xl shadow-lg p-4 text-black animate-slideUp">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-bold">Virtual Assistant</h4>
            <button onClick={toggleChat} className="text-gray-500 hover:text-black">
              <FaTimes />
            </button>
          </div>
          <div className="h-60 overflow-y-auto border p-2 rounded bg-gray-100 text-sm">
            <p className="text-gray-600 italic">Ask me anything about Dominic Studios!</p>
            {/* Integrate your bot chat component here if needed */}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            className="mt-2 w-full px-3 py-2 border rounded text-sm"
          />
        </div>
      )}
    </>
  )
}
