'use client'

interface Module {
  id: number
  title: string
  lessons: number
  duration: string
  items?: Array<{
    title: string
    duration?: string
    type?: 'lesson' | 'ebook'
  }>
}

const modules: Module[] = [
  {
    id: 1,
    title: 'INTRODUCTION & REVIEW',
    lessons: 8,
    duration: '00:11:33',
    items: [
      { title: 'Basic computer skills', duration: '00:04:00', type: 'lesson' },
      { title: 'Basic computer skills', duration: '00:04:00', type: 'lesson' },
      { title: 'EBOOK', type: 'ebook' },
    ],
  },
  {
    id: 2,
    title: 'THE FUNDAMENTALS OF SECURITY',
    lessons: 6,
    duration: '00:28:46',
  },
  {
    id: 3,
    title: 'NETWORKING TOOLS',
    lessons: 5,
    duration: '00:11:33',
  },
  {
    id: 4,
    title: 'NETWORK & APPLICATION SECURITY',
    lessons: 5,
    duration: '00:11:33',
  },
  {
    id: 5,
    title: 'SYSTEM HARDENING',
    lessons: 5,
    duration: '00:11:33',
  },
  {
    id: 6,
    title: 'COMMON THREATS',
    lessons: 5,
    duration: '00:11:33',
  },
  {
    id: 7,
    title: 'ADVANCED ATTACKS PROTECTION',
    lessons: 5,
    duration: '00:11:33',
  },
  {
    id: 8,
    title: 'RISK MANAGEMENT FRAMEWORK',
    lessons: 4,
    duration: '00:11:33',
  },
]

export function CourseCurriculumSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre principal */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-12"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600,
            }}
          >
            CompTIA Security+ 701 Training | CompTIA Security+ Certification Course Curriculum
          </h2>

          {/* Curriculum Modules */}
          <div className="space-y-6 mb-16">
            {modules.map((module, index) => (
              <div key={module.id}>
                {/* Module Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">
                    {module.title}
                  </h3>
                  <div className="text-gray-600 text-sm md:text-base">
                    {module.lessons} Lessons, {module.duration} Hours
                  </div>
                </div>

                {/* Module Items (if available) */}
                {module.items && (
                  <div className="ml-4 space-y-3 mb-4">
                    {module.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-3">
                        {item.type === 'lesson' && (
                          <svg
                            className="w-5 h-5 text-gray-600 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                          </svg>
                        )}
                        {item.type === 'ebook' && (
                          <svg
                            className="w-5 h-5 text-gray-600 flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                            />
                          </svg>
                        )}
                        <span className="text-gray-700 text-base">
                          {item.title}
                        </span>
                        {item.duration && (
                          <span className="text-gray-500 text-sm ml-auto">
                            {item.duration}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* Separator line (not for last item) */}
                {index < modules.length - 1 && (
                  <div className="border-t border-gray-200 mt-6"></div>
                )}
              </div>
            ))}
          </div>

          {/* PaniTech Academy Profile Section */}
          <div className="border-t-2 border-gray-200 pt-12">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              {/* Profile Image */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden bg-gray-200">
                  <img
                    src="/cours/image3.png"
                    alt="PaniTech Academy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Academy Info */}
              <div className="flex-1">
                {/* Academy Name and Statistics on same line */}
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <h3
                    className="text-2xl md:text-3xl font-bold text-gray-900"
                    style={{
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                    }}
                  >
                    PaniTech Academy
                  </h3>

                  {/* Statistics */}
                  <div className="flex items-center gap-2 text-gray-600 ml-auto">
                    <div className="flex items-center gap-1">
                      <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="font-semibold">4.5</span>
                    </div>
                    <span>|</span>
                    <span>23 Student</span>
                    <span>|</span>
                    <span>32 Courses</span>
                  </div>
                </div>

                {/* Description */}
                <div className="space-y-3 mb-6 text-gray-700 text-base leading-relaxed">
                  <p>
                    We Have a Passion For Sharing Knowledge. Our number priority
                    is to make you fall in love with Information Technology
                    (IT). We are eager to teach you with the highest quality
                    possible. Our curriculum is drawn up in accordance with the
                    hottest job descriptions and certification programs.
                    Therefore, you will learn everything required to land a high
                    paying job and pass the related certification exam.
                  </p>
                  <p>
                    Experience In IT Our staff of instructors boasts a wealth of
                    first-hand knowledge and are all college graduates. Combining
                    decades of experience in IT, they'll provide you with...
                  </p>
                </div>

                {/* Follow Button */}
                <button
                  className="px-6 py-2 text-white font-semibold transition-colors"
                  style={{
                    fontFamily: 'Poppins',
                    backgroundColor: '#57C5F7',
                    borderRadius: '100px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#4ab0e0'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#57C5F7'
                  }}
                >
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
