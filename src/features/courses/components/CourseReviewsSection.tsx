'use client'

import { useState } from 'react'

interface Review {
  id: number
  username: string
  avatar: string
  country: string
  countryFlag: string
  rating: number
  date: string
  text: string
}

interface RatingBreakdown {
  stars: number
  count: number
  label?: string
  rating?: number
}

const ratingBreakdown: RatingBreakdown[] = [
  { stars: 5, count: 852 },
  { stars: 4, count: 37, label: 'Course sale', rating: 4.9 },
  { stars: 3, count: 9, label: 'Recommend to a friend', rating: 4.9 },
  { stars: 2, count: 2, label: 'Service as described', rating: 4.9 },
  { stars: 1, count: 2 },
]

const reviews: Review[] = [
  {
    id: 1,
    username: 'marvinachi',
    avatar: '/cours/image3.png',
    country: 'United States',
    countryFlag: '🇺🇸',
    rating: 5,
    date: '2 months ago',
    text: "I recently completed the CompTIA Security+ bootcamp at PaniTech Academy, and I can confidently say that it was an outstanding experience! The course was well-structured, the instructors were knowledgeable, and the hands-on labs were incredibly valuable. The personalized attention and support throughout the program helped me not only pass the exam but also gain practical skills that I'm already applying in my current role. Highly recommend!",
  },
  {
    id: 2,
    username: 'jcpconsulting',
    avatar: '/cours/image3.png',
    country: 'United States',
    countryFlag: '🇺🇸',
    rating: 5,
    date: '1 month ago',
    text: "I can confidently say that PaniTech Academy's CompTIA Security+ program is worth every penny. The curriculum progresses logically from basics to advanced topics, and the instructors are always available to answer questions. The program also helped me with job hunting strategies and resume building. Overall, a well-structured program that delivers on its promises.",
  },
]

const totalReviews = 902
const averageRating = 4.9

export function CourseReviewsSection() {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('')

  const getRatingPercentage = (count: number) => {
    return (count / totalReviews) * 100
  }

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
              style={{
                fontFamily: 'Poppins',
                fontWeight: 600,
              }}
            >
              Reviews
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <p className="text-gray-600 text-base">
                {totalReviews} reviews for this Course
              </p>
              <div className="flex items-center gap-2">
                {renderStars(5)}
                <span className="text-gray-900 font-semibold text-lg">
                  {averageRating}
                </span>
              </div>
            </div>
          </div>

          {/* Rating Breakdown */}
          <div className="mb-8">
            <div className="space-y-3">
              {ratingBreakdown.map((item, index) => {
                const percentage = getRatingPercentage(item.count)
                return (
                  <div key={item.stars} className="flex items-center gap-4">
                    <div className="w-24 text-sm text-gray-700">
                      {item.stars} Stars
                    </div>
                    <div className="w-64">
                      <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-orange-500 transition-all"
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="w-16 text-sm text-gray-600 text-right">
                      ({item.count})
                    </div>
                    {index === 0 && (
                      <h3 className="text-lg font-bold text-gray-900">
                        Rating Breakdown
                      </h3>
                    )}
                    {item.label && (
                      <>
                        <span className="text-sm whitespace-nowrap leading-none text-gray-700 ml-4">
                          {item.label}
                        </span>
                        {item.rating && (
                          <div className="flex items-center gap-1 leading-none text-gray-700 ml-auto">
                            <svg
                              className="w-4 h-4 text-yellow-400 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            <span className="text-sm font-semibold whitespace-nowrap leading-none">
                              {item.rating}
                            </span>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Search and Sort */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search reviews"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pr-14 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 text-gray-900"
              />
              <button 
                className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 text-white transition-colors flex items-center justify-center h-full"
                style={{
                  backgroundColor: '#57C5F7',
                  borderTopRightRadius: '6.4px',
                  borderBottomRightRadius: '6.4px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#4ab0e0'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#57C5F7'
                }}
              >
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            {/* Sort By */}
            <div className="flex items-center gap-2">
              <span className="text-gray-900 font-medium text-base">Sort By</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-300 bg-white appearance-none cursor-pointer text-gray-700"
                >
                  <option value="" disabled className="text-gray-400">
                    Select an option
                  </option>
                  <option>Most relevant</option>
                  <option>Newest first</option>
                  <option>Oldest first</option>
                  <option>Highest rated</option>
                  <option>Lowest rated</option>
                </select>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="border-b border-gray-200 pb-6">
                <div className="flex gap-4">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                      <img
                        src={review.avatar}
                        alt={review.username}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Review Content */}
                  <div className="flex-1">
                    {/* Username and Location */}
                    <div className="mb-2">
                      <div className="font-semibold text-gray-900 mb-1">
                        {review.username}
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>{review.countryFlag}</span>
                        <span>{review.country}</span>
                      </div>
                    </div>

                    {/* Rating and Date */}
                    <div className="flex items-center gap-2 mb-3">
                      {renderStars(review.rating)}
                      <span className="text-gray-700 font-semibold">
                        {review.rating}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {review.date}
                      </span>
                    </div>

                    {/* Review Text */}
                    <p className="text-gray-700 leading-relaxed">
                      {review.text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
