'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Course } from '@/types/course'

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const formatPrice = (price?: number) => {
    if (!price) return '$199.00'
    return `$${price.toFixed(2)}`
  }

  const originalPrice = course.price ? course.price * 1.25 : 249

  return (
    <Link href={`/courses/${course.id}`} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full flex flex-col">
        {/* Course Image */}
        <div className="relative bg-white overflow-hidden border-0">
          <div className="relative h-48">
            <Image
              src={course.thumbnail || '/assets/react-course.jpg'}
              alt={course.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />

            {/* Best Seller Badge */}
            {course.bestSeller && (
              <div className="absolute top-4 left-4 z-10">
                <div className="bg-orange-500 text-white px-3 py-1 rounded text-xs font-semibold">
                  Best Seller
                </div>
              </div>
            )}

            {/* Favorite Icon */}
            <button
              onClick={toggleFavorite}
              className="absolute top-3 right-3 z-10"
              aria-label="Add to favorites"
            >
              <svg
                className={`w-6 h-6 ${isFavorite
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
        <div className="p-6 flex-1 flex flex-col">
          {/* Provider and Rating */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.jpg"
                alt="Provider"
                width={32}
                height={32}
                className="object-cover"
              />
            </div>
            <div className="text-sm text-gray-600 flex items-center gap-2">
              <span className="font-medium">Pani Tech Academy</span>
              {course.rating && (
                <>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">★</span>
                    <span>{course.rating}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Course Title */}
          <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight flex-1">
            {course.title}
          </h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {course.description}
          </p>

          {/* Pricing and Join Button */}
          <div className="flex items-center justify-between mt-auto">
            <div>
              <span className="text-2xl font-bold text-red-600">
                {formatPrice(course.price)}
              </span>
              {course.price && (
                <span className="text-gray-400 line-through ml-2">
                  {formatPrice(originalPrice)}
                </span>
              )}
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
              onClick={(e) => {
                e.preventDefault()
                window.location.href = `/courses/${course.id}`
              }}
            >
              Join
              <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5" style={{ color: '#0075FF' }} />
            </Button>
          </div>
        </div>
      </div>
    </Link>
  )
}
