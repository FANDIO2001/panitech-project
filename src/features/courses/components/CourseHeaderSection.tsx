'use client'

import Image from 'next/image'
import { Course } from '@/types/course'
import { ContainerBackground } from './ContainerBackground'

interface CourseHeaderSectionProps {
  course: Course
}

export function CourseHeaderSection({ course }: CourseHeaderSectionProps) {
  const formatStudents = (students?: number) => {
    if (!students) return '0'
    return students >= 1000 ? `${(students / 1000).toFixed(1)}k+` : `${students}+`
  }

  return (
    <ContainerBackground className="h-[400px] md:h-[500px] flex items-center justify-center w-full">
      {/* Overlay sombre pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
      
      {/* Contenu */}
      <div className="relative z-10 container mx-auto px-4 py-8 text-white w-full">
        <div className="max-w-4xl">
          {/* Titre */}
          <h1 
            className="font-semibold mb-4 text-3xl md:text-4xl lg:text-5xl" 
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            {course.title}
          </h1>

          {/* Badges juste après le titre */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            {/* Badge Best Seller */}
            {course.bestSeller && (
              <div className="bg-orange-500 text-white px-4 py-2 rounded text-sm font-semibold">
                Best Seller
              </div>
            )}

            {/* Badge Category */}
            {course.category && (
              <div 
                className="text-white px-4 py-2 rounded text-sm font-semibold"
                style={{ backgroundColor: '#57C5F7' }}
              >
                {course.category}
              </div>
            )}

            {/* Badge Level */}
            {course.level && (
              <div className="bg-transparent border-2 border-white text-white px-4 py-2 rounded text-sm font-semibold">
                {course.level}
              </div>
            )}

            {/* Badge Status */}
            {course.status && (
              <div className="bg-transparent border-2 border-white text-white px-4 py-2 rounded text-sm font-semibold">
                {course.status}
              </div>
            )}
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl mb-6 text-gray-200 leading-relaxed max-w-3xl">
            {course.description}
          </p>

          {/* Métriques */}
          <div className="flex flex-wrap items-center gap-6">
            {/* Provider */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-white bg-opacity-20 backdrop-blur-sm flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.jpg"
                  alt="Provider"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="font-medium">Pani Tech Academy</span>
            </div>

            {/* Rating */}
            {course.rating && (
              <div className="flex items-center gap-2">
                <span className="font-medium">{course.rating}</span>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {course.reviews && (
                  <span className="text-sm text-gray-300">({course.reviews} reviews)</span>
                )}
              </div>
            )}

            {/* Students */}
            {course.students && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <span className="font-medium">{formatStudents(course.students)} Students</span>
              </div>
            )}

            {/* Duration */}
            {course.duration && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="font-medium">{course.duration}</span>
              </div>
            )}

            {/* Level */}
            {course.level && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <span className="font-medium capitalize">{course.level}</span>
              </div>
            )}

            {/* Certificate */}
            {course.certificateIncluded && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
                <span className="font-medium">Certificate Included</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </ContainerBackground>
  )
}
