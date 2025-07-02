'use client'

import { useState } from 'react'
import GlassIcons from './GlassIcons'
import { FiCode, FiLayers, FiCloud, FiCpu } from 'react-icons/fi'
import { FaReact, FaNodeJs, FaAws, FaPython, FaJava, FaMicrosoft, FaGoogle, FaBrain } from 'react-icons/fa'
import { SiNextdotjs, SiFirebase, SiSpring, SiOpenai, SiScikitlearn, SiTensorflow } from 'react-icons/si'

type TechItem = {
  label: string
  icon: JSX.Element
}

const boxStyle = "bg-white/10 backdrop-blur-md rounded-xl p-4 flex flex-col items-center justify-center text-white shadow hover:scale-105 transition w-28 h-28"

export default function TechnologiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const handleClick = (label: string) => {
    setSelectedCategory(prev => (prev === label ? null : label))
  }

  const items = [
    { icon: <FiCode />, color: 'blue', label: 'Programming Languages' },
    { icon: <FiLayers />, color: 'purple', label: 'Frameworks' },
    { icon: <FiCloud />, color: 'cyan', label: 'Cloud Platforms' },
    { icon: <FiCpu />, color: 'green', label: 'AI & ML' },
  ]

  const contentMap: Record<string, TechItem[]> = {
    'Programming Languages': [
      { label: 'JavaScript', icon: <FiCode /> },
      { label: 'TypeScript', icon: <FiCode /> },
      { label: 'Python', icon: <FaPython /> },
      { label: 'C#', icon: <FaMicrosoft /> },
      { label: 'Java', icon: <FaJava /> },
      { label: 'C++', icon: <FiCode /> },
    ],
    'Frameworks': [
      { label: 'React', icon: <FaReact /> },
      { label: 'Next.js', icon: <SiNextdotjs /> },
      { label: 'Node.js', icon: <FaNodeJs /> },
      { label: 'Express', icon: <FaNodeJs /> },
      { label: '.NET', icon: <FaMicrosoft /> },
      { label: 'Spring Boot', icon: <SiSpring /> },
    ],
    'Cloud Platforms': [
      { label: 'AWS', icon: <FaAws /> },
      { label: 'Google Cloud', icon: <FaGoogle /> },
      { label: 'Azure', icon: <FaMicrosoft /> },
      { label: 'Vercel', icon: <SiNextdotjs /> },
      { label: 'Firebase', icon: <SiFirebase /> },
    ],
    'AI & ML': [
      { label: 'PyTorch', icon: <FaBrain /> },
      { label: 'TensorFlow', icon: <SiTensorflow /> },
      { label: 'Keras', icon: <FaBrain /> },
      { label: 'OpenAI', icon: <SiOpenai /> },
      { label: 'Scikit-learn', icon: <SiScikitlearn /> },
    ],
  }

  return (
    <section className="min-h-screen bg-black text-white px-10 py-16 flex flex-col justify-between font-poppins">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row w-full items-start justify-between mb-12">
        {/* Left Content */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0 pl-4 flex flex-col justify-start">
          <h1 className="text-4xl font-bold mb-2">Technologies I Use</h1>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
Blending modern tools, full-stack expertise, and a passion for innovation, I craft digital solutions that are technically sound, personally meaningful, and ready to scale.
          </p>
        </div>

        {/* Right Glass Buttons */}
        <div className="md:w-1/2 w-full flex flex-col items-center justify-start">
          <div className="flex gap-4 flex-wrap justify-center">
            <GlassIcons
              items={items.map(item => ({
                ...item,
                onClick: () => handleClick(item.label),
                isActive: selectedCategory === item.label,
              }))}
            />
          </div>
        </div>
      </div>

      {/* Bottom Section: Revealed Tech Grid in One Row */}
      {selectedCategory && (
        <div className="w-full mt-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">{selectedCategory}</h2>
          <div className="flex flex-wrap justify-center gap-4 px-4">
            {contentMap[selectedCategory].map((tech, i) => (
              <div key={i} className={boxStyle}>
                <div className="text-2xl mb-1">{tech.icon}</div>
                <div className="text-xs text-center">{tech.label}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
