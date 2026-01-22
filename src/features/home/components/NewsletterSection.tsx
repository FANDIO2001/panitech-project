'use client'

import { useState } from 'react'

export function NewsletterSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section 
      className="py-16"
      style={{
        backgroundColor: '#CFDEFF'
      }}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Introductory Text */}
          <p className="text-gray-700 text-base md:text-lg mb-4">
            Join our newsletter today and be the first to know about our new courses, offers, tutorials and snippets
          </p>

          {/* Main Heading */}
          <h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-8"
            style={{
              fontFamily: 'Poppins'
            }}
          >
            Subscribe to our Newsletter
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Input Fields - Horizontal Layout */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none text-gray-700 placeholder-gray-400 bg-transparent"
              />
            </div>

            {/* Subscribe Button */}
            <button
              type="submit"
              className="text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 w-full md:w-auto"
              style={{
                backgroundColor: '#57C5F7'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#4ab0e0'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#57C5F7'
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
