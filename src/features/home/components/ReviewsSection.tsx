'use client'

import Image from 'next/image'

const reviews = [
  {
    id: 1,
    name: 'Alex Martinez',
    image: '/assets/review-1.png',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 2,
    name: 'Emma Thompson',
    image: '/assets/review-2.png',
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
  {
    id: 3,
    name: 'Alisa Petrov',
    image: '/assets/review-3-alt.jpg', // Using image4.jpg as alternative
    rating: 5,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
]

export function ReviewsSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Reviews From Our Google Page
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear directly from our satisfied customers about the transformative impact of our services on their business success.
          </p>
        </div>

        {/* Reviews Grid - 3 Cards Horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 lg:gap-32 max-w-5xl mx-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto w-full max-w-[361.66px]"
              style={{
                minHeight: '327.26px'
              }}
            >
              {/* Profile Picture and Name */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 relative bg-gray-200">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover rounded-full"
                    sizes="48px"
                    onError={(e) => {
                      console.error('Image load error:', review.image)
                    }}
                  />
                </div>
                <div className="flex-1">
                  <div className="font-semibold text-gray-800 mb-2">
                    {review.name}
                  </div>
                  {/* Rating - Just below the name */}
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-600 text-sm leading-relaxed text-left">
                {review.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
