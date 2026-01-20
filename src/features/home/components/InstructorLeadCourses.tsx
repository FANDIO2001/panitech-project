'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/Button'

interface InstructorCourse {
  id: number
  title: string
  description: string
  image: string
  provider: string
  date: string
  currentPrice: string
  originalPrice: string
  isFavorite: boolean
  hasBranding?: boolean
  brandingText?: string
  classNumber?: string
  brandInitials?: string
  brandColor?: string
}

const instructorCourses: InstructorCourse[] = [
  {
    id: 1,
    title: 'REACT & TYPESCRIPT - THE COMPLETE GUIDE',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/react-course.jpg',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
  {
    id: 2,
    title: 'PYTHON FOR DATA SCIENCE AND MACHINE LEARNING BOOTCAMP',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/python-course.jpg',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
  {
    id: 3,
    title: 'PHOTOGRAPHY ON CAMERAS AND PI FOR BEGINNERS',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/instructor-premiere-course.jpg',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
    hasBranding: true,
    brandingText: 'MUST WATCH BEFORE YOU START',
    classNumber: 'CLASS 01',
    brandInitials: 'Pr',
    brandColor: 'purple',
  },
  {
    id: 4,
    title: 'ADVANCED WEB DEVELOPMENT WITH NEXT.JS AND REACT',
    description: 'Lorem ipsum dolor sit amet consectetur. Enim et ullamcorper aliquam cras viverra urna massa lorem.',
    image: '/assets/instructor-course-4.png',
    provider: 'Grave academy',
    date: 'July 29, 2032',
    currentPrice: '$199.00',
    originalPrice: '$249.00',
    isFavorite: false,
  },
]

export function InstructorLeadCourses() {
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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Upcoming Instructor-Lead Courses: Attend In-Person or Via Live Remote Connection
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience engaging, live instructor-Lead training with the option to join us in person
            or participate remotely. Our interactive format ensures a cohesive learning experience
            for all attendees, regardless of location.
          </p>
        </div>

        {/* Course Cards */}
        <div className="flex gap-8 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          <style jsx global>{`
            .overflow-x-auto::-webkit-scrollbar {
              display: none;
            }
          `}</style>
          {instructorCourses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex-shrink-0 w-full md:w-96">
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
                  
                  {/* Branding Overlay */}
                  {course.hasBranding && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex gap-2 items-start">
                        {/* Brand Initials Square */}
                        <div
                          className="border-2 border-white p-2"
                          style={{
                            backgroundColor:
                              course.brandColor === 'orange'
                                ? '#ea580c'
                                : course.brandColor === 'purple'
                                ? '#9333ea'
                                : '#3b82f6',
                          }}
                        >
                          <span className="text-white font-bold text-2xl">{course.brandInitials}</span>
                        </div>
                        {/* Class Number (if exists) */}
                        {course.classNumber && (
                          <div
                            className="border-2 border-white px-2 py-1"
                            style={{
                              backgroundColor:
                                course.brandColor === 'orange'
                                  ? '#ea580c'
                                  : course.brandColor === 'purple'
                                  ? '#9333ea'
                                  : '#3b82f6',
                            }}
                          >
                            <div className="text-white text-xs font-semibold leading-tight">
                              {course.classNumber === 'CLASS NUMBER ZERO' ? (
                                <>
                                  <div>CLASS</div>
                                  <div>NUMBER</div>
                                  <div>ZERO</div>
                                </>
                              ) : (
                                <div>{course.classNumber}</div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      {/* Branding Text */}
                      <div className="text-white font-bold text-lg leading-tight mt-2">
                        {course.brandingText?.split(' & ').map((part, idx) => (
                          <div key={idx}>{part}</div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Favorite Icon */}
                  <button
                    onClick={() => toggleFavorite(course.id)}
                    className="absolute top-3 right-3 z-10"
                    aria-label="Add to favorites"
                  >
                    <svg
                      className={`w-6 h-6 ${
                        favorites.includes(course.id)
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
                    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md flex items-center gap-2"
                  >
                    JOIN
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
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
