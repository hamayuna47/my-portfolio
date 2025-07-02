'use client'

import InfiniteScroll from '@/components/InfiniteScroll'

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
      <h1 className="text-5xl font-extrabold text-right mb-10">Success Stories</h1>

  
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
