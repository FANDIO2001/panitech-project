'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface CourseBundle {
  id: number
  title: string
  description: string
  image: string
  provider: string
  date: string
  currentPrice: string
  originalPrice: string
  isFavorite: boolean
}

const courseBundles: CourseBundle[] = [
  {
    id: 1,
    title: 'THE DATA SCIENCE COURSE: COMPLETE DATA SCIENCE BOOTCAMP',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/1.png',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'SQL - MYSQL FOR DATA ANALYTICS AND BUSINESS INTELLIGENCE',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/2.png',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'BEGINNING C++ BEGINNER TO ADVANCED',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/3.png',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
  {
    id: 4,
    title: 'PYTHON FOR DATA SCIENCE AND MACHINE LEARNING',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/python-course.jpg',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
]

export function CourseBundles() {
  const [favorites, setFavorites] = useState<number[]>([])

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id]
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-[43.94px]"
            style={{
              fontFamily: 'Arial',
              color: '#101828',
              fontWeight: 'normal',
              lineHeight: '1.1'
            }}
          >
            Master In-Demand Skills with Our Career Pathway Course Bundles
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to start or advance your career? Our pathway bundles offer a structured learning
            experience, combining essential courses to help you achieve your specific career goals.
            Discover the right for you.
          </p>
        </div>

        {/* Course Cards */}
        <div className="flex overflow-x-auto gap-4 md:gap-8 pb-4 scrollbar-hide">
          {courseBundles.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-[90%] sm:w-[412.25px] min-w-[280px]">
              {/* Course Image */}
              <div className="relative bg-white overflow-hidden border-0">
                <div className="relative h-48">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* Favorite Icon */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-3 right-3 z-10"
                    aria-label="Add to favorites"
                  >
                    <svg
                      className={`w-6 h-6 ${favorites.includes(course.id)
                        ? 'fill-orange-500 text-orange-500'
                        : 'fill-white text-white'
                        }`}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                  </button>
                </div>
                {/* Orange Band */}
                <div className="h-2 bg-orange-500"></div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                {/* Provider and Date */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                  <div className="text-sm text-gray-600">
                    <span className="font-medium">{course.provider}</span>
                    <span className="mx-2">•</span>
                    <span>{course.date}</span>
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">{course.description}</p>

                {/* Pricing and Join Button */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-red-600">{course.currentPrice}</span>
                    <span className="text-gray-400 line-through ml-2">{course.originalPrice}</span>
                  </div>
                  <Button
                    variant="primary"
                    className="bg-transparent hover:bg-transparent px-6 py-2 flex items-center gap-2"
                    style={{
                      color: '#0075FF',
                      fontFamily: 'Poppins',
                      fontSize: '23.8px',
                      lineHeight: '23.8px',
                      letterSpacing: '0%'
                    }}
                  >
                    Join
                    <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" style={{ color: '#0075FF' }} />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
