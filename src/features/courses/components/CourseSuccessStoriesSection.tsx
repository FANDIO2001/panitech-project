'use client'

interface VideoItem {
  id: number
  thumbnail: string
  caption: string
  videoUrl?: string
}

const videos: VideoItem[] = [
  {
    id: 1,
    thumbnail: '/assets/testimonial-1.png',
    caption: 'From Beginner to Developer - Success Story',
  },
  {
    id: 2,
    thumbnail: '/assets/testimonial-2.png',
    caption: 'From Beginner to Developer - Success Story',
  },
  {
    id: 3,
    thumbnail: '/assets/testimonial-3.png',
    caption: 'From Beginner to Developer - Success Story',
  },
  {
    id: 4,
    thumbnail: '/assets/testimonial-1.png',
    caption: 'From Beginner to Developer - Success Story',
  },
]

export function CourseSuccessStoriesSection() {
  const handleVideoClick = (video: VideoItem) => {
    // Handle video play logic here
    console.log('Playing video:', video.id)
  }

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2
            className="font-bold text-gray-900 mb-8 md:mb-12"
            style={{
              fontFamily: 'Arial',
              fontSize: '36.29px',
              letterSpacing: '0px',
            }}
          >
            CompTIA Security+ 701 Training | CompTIA Security+ Certification
            Reviews
          </h2>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer"
                onClick={() => handleVideoClick(video)}
              >
                {/* Video Thumbnail */}
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-200 mb-3">
                  <img
                    src={video.thumbnail}
                    alt={video.caption}
                    className="w-full h-full object-cover"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-40 transition-all">
                    <div className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <svg
                        className="w-8 h-8 md:w-10 md:h-10 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Caption */}
                <p className="text-sm md:text-base text-gray-700 text-center">
                  {video.caption}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
