'use client'

import Image from 'next/image'

export function CourseDescriptionSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Colonne gauche - Contenu textuel */}
          <div className="space-y-6">
            {/* Badges en haut */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Badge Best Seller */}
              <div className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Best Seller</span>
              </div>

              {/* Badge Popular */}
              <div 
                className="flex items-center gap-2 text-white px-4 py-2 rounded-lg text-sm font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)'
                }}
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>Popular</span>
              </div>

              {/* Badge Trending */}
              <div className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span>Trending</span>
              </div>
            </div>

            {/* Titre */}
            <h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
              style={{ 
                fontFamily: 'Poppins',
                fontWeight: 600
              }}
            >
              CompTIA Security+ 701 Training | CompTIA Security+ Certification course description
            </h2>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Are you ready to advance your cybersecurity skills and earn the globally recognized CompTIA Security+ 701 certification? Our CompTIA Security+ 701 Training Course is the ultimate program to help you master the latest cybersecurity concepts, gain practical, hands-on experience, and confidently pass the Security+ 701 exam.
            </p>
          </div>

          {/* Colonne droite - Image */}
          <div className="relative h-[400px] md:h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/cours-image2.png"
              alt="Woman coding at desk"
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
