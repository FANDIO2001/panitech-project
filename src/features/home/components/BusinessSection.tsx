'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'

export function BusinessSection() {
  return (
    <section className="bg-white py-8 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          {/* Right Section - Office Scene Image - Responsive */}
          <div className="relative h-48 sm:h-64 md:h-72 lg:h-[450px] rounded-lg overflow-hidden ml-auto -mt-4 md:-mt-8 lg:-mt-12 w-full sm:w-[80%] md:w-[70%] lg:w-[50%]">
            <Image
              src="/assets/business-image-1.png"
              alt="Business training scene"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
            />
          </div>
          
          {/* Left Section - White Panel - Responsive Overlapping */}
          <div className="bg-white p-6 md:p-8 lg:p-12 rounded-lg shadow-lg absolute top-2 left-4 md:left-8 lg:left-32 md:top-4 lg:top-8 z-20 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-w-full md:max-w-[700px]">
            {/* Logo */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-center gap-3">
                <div className="relative w-24 h-12 md:w-32 md:h-16">
                  <Image
                    src="/assets/business-image-2.png"
                    alt="PaniTech Logo"
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 96px, 128px"
                  />
                </div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Panitech for Business
            </h2>

            {/* Sub-headline */}
            <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8">
              Get a training for your team
            </p>

            {/* Call-to-Action Button */}
            <Button
              variant="primary"
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold w-full sm:w-auto"
            >
              Click here
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
