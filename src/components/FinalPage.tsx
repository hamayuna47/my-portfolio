'use client'

import { useInView } from 'react-intersection-observer'
import Threads from './Threads'
import Image from 'next/image'
import Link from 'next/link'
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function FinalPage() {
  const { ref, inView } = useInView({ threshold: 0.3 })

  return (
    <div className="w-full text-white bg-black font-poppins">
      {/* Top Threads Section */}
      <section ref={ref} className="w-full h-screen relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          {inView && (
            <Threads
              amplitude={1}
              distance={0}
              enableMouseInteraction={true}
            />
          )}
        </div>
        <div className="relative z-10 h-full flex items-center justify-center" />
      </section>

      {/* Footer Section */}
      <footer className="relative z-10 bg-black w-full px-6 py-12 text-sm text-white backdrop-blur-md bg-opacity-90">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col items-start">
            <Image src="/images/logo.png" alt="Dominic Studios Logo" width={160} height={60} className="mb-4" />
            <p className="text-gray-300 max-w-sm">
              Empowering your company with tailored digital experiences and transformative AI-driven software.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Social</h3>
              <div className="flex flex-col space-y-2 text-gray-300">
  
                <Link href="https://facebook.com/hamayun.abdullah.92" target="_blank" className="flex items-center gap-2 hover:text-white">
                  <FaFacebook /> Facebook
                </Link>
                <Link href="https://www.instagram.com/hamayun_abdullah/" target="_blank" className="flex items-center gap-2 hover:text-white">
                  <FaInstagram /> Instagram
                </Link>
              </div>
            </div>


            <div>
              <h3 className="font-semibold text-lg mb-2">Address</h3>
              <p className="text-gray-300">
                
                House #9, Al haram Executive Villas, Street 1,<br />
                Bahawalpur, Pakistan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
