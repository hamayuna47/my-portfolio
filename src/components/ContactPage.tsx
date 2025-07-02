'use client'

import { useState } from 'react'
import { FiInfo } from 'react-icons/fi'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    jobTitle: '',
    industry: ''
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        jobTitle: '',
        industry: ''
      })
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section className="min-h-screen bg-black text-white font-poppins px-6 py-16 flex flex-col items-center justify-start">
      {/* Title and Description */}
      <div className="max-w-4xl text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Ready to Innovate with ME?</h1>
        <p className="text-lg text-gray-300">
          Complete the form, and our team will reach out to discuss how we can create custom software solutions to meet your business needs.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
        <input
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Company Name"
          required
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Business Email"
          required
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone Number"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
        <input
          name="jobTitle"
          value={formData.jobTitle}
          onChange={handleChange}
          placeholder="Job Title"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
        <input
          name="industry"
          value={formData.industry}
          onChange={handleChange}
          placeholder="Industry"
          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 placeholder-gray-400"
        />
      </form>

      {/* Privacy Policy Note */}
      <div className="flex items-start text-xs text-gray-500 gap-2 max-w-2xl mb-6">
        <FiInfo className="mt-1" />
        <span>
          Your privacy is important to us. All information submitted through this form will be kept confidential and secure. We will not share your details with third parties without your consent.
        </span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={status === 'loading'}
        className="bg-white text-black font-semibold px-6 py-3 rounded-xl shadow hover:bg-gray-200 transition disabled:opacity-50"
      >
        {status === 'loading' ? 'Submitting...' : 'Submit'}
      </button>

      {/* Status Message */}
      {status === 'success' && <p className="text-green-400 mt-4">Submitted successfully!</p>}
      {status === 'error' && <p className="text-red-400 mt-4">Submission failed. Try again later.</p>}
    </section>
  )
}
