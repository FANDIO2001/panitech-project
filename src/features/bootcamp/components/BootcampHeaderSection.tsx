'use client'

import Image from 'next/image'
import { Bootcamp } from '@/types/bootcamp'

interface BootcampHeaderSectionProps {
  bootcamp: Bootcamp
}

export function BootcampHeaderSection({ bootcamp }: BootcampHeaderSectionProps) {
  const formatStudents = (students?: number | string) => {
    if (!students) return '0'
    if (typeof students === 'string') return students
    return students >= 1000 ? `${(students / 1000).toFixed(1)}k+` : `${students}+`
  }

  return (
    <div className="space-y-6">
      {/* Titre */}
      <h1 
        className="font-semibold" 
        style={{ 
          fontFamily: 'Poppins',
          color: '#111827',
          fontSize: '31.67px',
          fontWeight: 600
        }}
      >
        {bootcamp.title}
      </h1>

      {/* Description */}
      <p className="text-gray-600 text-lg leading-relaxed">
        {bootcamp.description}
      </p>

      {/* Métriques du cours */}
      <div className="space-y-4">
        {/* Première rangée */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Provider */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpg"
                alt={bootcamp.provider || 'Provider'}
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <span className="text-gray-700 font-medium">{bootcamp.provider || 'Pani Tech Academy'}</span>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">{bootcamp.rating || 4.8}</span>
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
          </div>

          {/* Language */}
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
              />
            </svg>
            <span className="text-gray-700 font-medium">{bootcamp.language || 'Eng'}</span>
          </div>
        </div>

        {/* Deuxième rangée */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Course Type */}
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
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
            <span className="text-gray-700 font-medium">{bootcamp.courseType || 'Certificate Course'}</span>
          </div>

          {/* Students */}
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
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
            <span className="text-gray-700 font-medium">
              {formatStudents(bootcamp.students || bootcamp.currentParticipants)} Students
            </span>
          </div>

          {/* Duration */}
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-gray-600"
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
            <span className="text-gray-700 font-medium">{bootcamp.duration || '10h++'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
