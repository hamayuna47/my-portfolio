'use client'

import TiltedCard from './TiltedCard'
import ai from '@/components/images/ai.jpeg'
import ml from '@/components/images/ml.jpeg'
import ani from '@/components/images/2d.jpeg'
import cloud from '@/components/images/cloud.jpeg'
import software from '@/components/images/software.jpeg'
import ui from '@/components/images/ui.jpg'



export default function ServicesSection() {
  const services = [
    {
      title: 'Software Development',
      img: "/images/software.jpeg",
      description: 'Software Development.',
    },
    {
      title: 'AI Services',
      img: "/images/ai.jpeg",
      description: 'We build smart tools with NLP, CV, and ML models.',
    },
    {
      title: '2D Animation',
      img: "/images/2d.jpeg",
      description: 'Stunning 2D animated content to engage and impress.',
    },
    {
      title: 'Machine Learning',
      img: "/images/ml.jpeg",
      description: 'Data-driven predictive models for smarter decisions.',
    },
    {
      title: 'Cloud Integration',
      img: "/images/cloud.jpeg",
      description: 'Deploy, scale, and optimize with AWS, Azure, and GCP.',
    },
    {
      title: 'UI/UX Design',
      img: "/images/ui.webp",
      description: 'Clean, intuitive, and user-centered design experiences.',
    },
  ]

  return (
    <section className="min-h-screen bg-black text-white font-poppins flex flex-col items-center justify-start py-20 px-4">
      <h2 className="text-5xl font-bold mb-16 text-center">My Services</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-10 relative w-full max-w-6xl">
        {services.map((service, idx) => (
          <div key={idx} className="relative flex justify-center items-center">
            <TiltedCard
              imageSrc={service.img}
              altText={service.title}
              captionText={service.title}
              containerHeight="300px"
              containerWidth="300%"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white bg-black/70 px-4 py-2 rounded-md text-center">
                  {service.title}
                </p>
              }
            />
            {/* Vertical Divider */}
            {idx % 2 === 0 && (
              <div className="hidden md:block absolute right-[-20px] top-0 bottom-0 w-[2px] bg-white opacity-20"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
