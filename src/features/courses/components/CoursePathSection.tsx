'use client'

interface Step {
  id: number
  number: string
  title: string
  iconColor: string
  icon: React.ReactNode
}

const steps: Step[] = [
  {
    id: 1,
    number: 'Step 1',
    title: 'Security+ Training',
    iconColor: '#3b82f6', // Blue
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    number: 'Step 2',
    title: 'Get certified',
    iconColor: '#8b5cf6', // Purple
    icon: (
      <svg
        className="w-12 h-12"
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
    ),
  },
  {
    id: 3,
    number: 'Step 3',
    title: 'Resume Creation',
    iconColor: '#ec4899', // Pink
    icon: (
      <svg
        className="w-12 h-12"
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
    ),
  },
  {
    id: 4,
    number: 'Step 4',
    title: 'Interview Prep',
    iconColor: '#f97316', // Orange
    icon: (
      <svg
        className="w-12 h-12"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
        />
      </svg>
    ),
  },
]

export function CoursePathSection() {
  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            The most comprehensive path to a career in tech
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mb-12">
            CompTIA Security+ 701 Training | CompTIA Security+ Certification bootcamp path brings together everything PaniTech Academy has to offer in the knowledge space.
          </p>

          {/* Steps */}
          <div className="relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-2 lg:gap-4">
              {steps.map((step, index) => (
                <div key={step.id} className="relative flex items-center w-full md:w-auto">
                  {/* Step Card */}
                  <div className="flex flex-col items-center text-center flex-1 md:flex-none z-10">
                    {/* Icon */}
                    <div
                      className="w-24 h-24 rounded-xl flex items-center justify-center mb-4 shadow-sm"
                      style={{ backgroundColor: step.iconColor }}
                    >
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>

                    {/* Step Number */}
                    <div className="font-bold text-gray-900 mb-1 text-base">
                      {step.number}
                    </div>

                    {/* Step Title */}
                    <div className="text-gray-700 text-sm font-medium">
                      {step.title}
                    </div>
                  </div>

                  {/* Curved Dotted Arrow (not for last item) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute left-full top-1/2 transform -translate-y-1/2 z-0" style={{ marginLeft: '1rem', marginRight: '1rem', width: '60px' }}>
                      <svg
                        width="60"
                        height="40"
                        viewBox="0 0 60 40"
                        fill="none"
                        className="text-gray-400"
                      >
                        <path
                          d="M 5 20 Q 30 5, 55 20"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeDasharray="4 4"
                          fill="none"
                          strokeLinecap="round"
                        />
                        <path
                          d="M 50 15 L 55 20 L 50 25"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
