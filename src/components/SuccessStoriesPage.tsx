'use client'

import InfiniteScroll from '@/components/InfiniteScroll'
import { AiFillFilePdf } from 'react-icons/ai'

export default function SuccessStoriesPage() {
  const projectItems = [
    {
      content: (
        <>
          <strong>Bot-Nist</strong>
          <p className="text-sm mt-2">
            A chatbot generation platform for websites using a multi-tenant RAG + LLM architecture.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Glaucoma Detector</strong>
          <p className="text-sm mt-2">
            Medical image analysis with U-Net to detect glaucoma from retinal scans.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>WorkWise</strong>
          <p className="text-sm mt-2">
            A freelancing mobile app connecting clients and talent, built with Kotlin.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>MentorMe</strong>
          <p className="text-sm mt-2">
            Hire or become a mentor with this on-the-go Kotlin-powered mobile app.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>Student Portal</strong>
          <p className="text-sm mt-2">
            Built with C# and Windows Forms, this portal streamlines student data and academic management.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>FastNuces Degree System</strong>
          <p className="text-sm mt-2">
            A complete solution for managing degree issuance processes at universities.
          </p>
        </>
      )
    },
    {
      content: (
        <>
          <strong>EventEase</strong>
          <p className="text-sm mt-2">
            A full-stack platform to manage weddings and events, from planning to execution.
          </p>
        </>
      )
    }
  ]

  return (
    <section className="w-full min-h-screen bg-black text-white font-poppins flex items-center justify-center overflow-visible px-4 py-20">
      {/* Two-column layout */}
      <div className="flex flex-col items-start mr-10">
      <h1 className="text-5xl font-extrabold text-center mb-12">Success Stories</h1>
<div className="flex items-center gap-2 text-center mb-12 text-white transition-colors">
  <span>
    For more details, check out the case studies (PDF)
  </span>
  <a href="/portfolio.pdf" download title="Download PDF">
    <AiFillFilePdf className="text-red-500 w-8 h-8 hover:text-red-400 transition-colors" />
  </a>
</div>


      </div>

      <InfiniteScroll
        items={projectItems}
        isTilted={true}
        tiltDirection="left"
        autoplay={true}
        autoplaySpeed={0.6}
        autoplayDirection="down"
        pauseOnHover={true}
      />
    </section>
  )
}
