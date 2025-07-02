'use client'

import Spline from '@splinetool/react-spline'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

export default function MainContent() {
  return (
    <div className="h-screen w-full bg-black text-white flex flex-col md:flex-row items-center justify-center px-4 md:px-16 font-poppins relative overflow-hidden">
      
      {/* Left: Spline 3D */}
      <div className="w-full md:w-1/2 flex items-center justify-center scale-[0.85] md:scale-90">
        <div className="w-[450px] md:w-[550px] h-[450px] md:h-[600px]">
          <Spline scene="https://prod.spline.design/3DA3ZJ-IW36dgBkr/scene.splinecode" />
        </div>
      </div>

      {/* Right: Text + Icons */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center text-center md:text-left space-y-6 mt-6 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold font-poppins leading-tight">
          Humayun Abdullah
        </h1>
        <p className="text-lg md:text-xl font-poppins text-gray-300 max-w-md">
          Turning complex ideas into clean code and creative experiences.
        </p>
        {/* Social Icons */}
        <div className="flex space-x-6 mt-4 text-2xl">
          <a href="https://github.com/hamayuna47" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-400 transition" />
          </a>
          <a href="https://www.linkedin.com/in/humayun-abdullah-b0b5a1316/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-gray-400 transition" />
          </a>
          <a href="https://leetcode.com/hamayuna47" target="_blank" rel="noopener noreferrer">
            <FaCode className="hover:text-gray-400 transition" />
          </a>
        </div>
      </div>
    </div>
  )
}
