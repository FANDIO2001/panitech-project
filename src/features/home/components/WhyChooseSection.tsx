'use client'

const features = [
  {
    id: 1,
    title: 'Remote and In-Person Learning',
    description: 'Access our courses online or in person for convenience wherever you are.',
    iconColor: 'bg-blue-300', // Light blue
    icon: '💻', // Person with laptop icon
  },
  {
    id: 2,
    title: 'Hands-On Intensive Training',
    description: 'Gain practical skills aligned with real job requirements for a competitive edge in the market.',
    iconColor: 'bg-purple-500', // Vibrant purple
    icon: '🎧', // Person with headset icon
  },
  {
    id: 3,
    title: 'Join Our IT Community',
    description: 'Enroll in our courses to connect with like-minded IT enthusiasts who inspire and mentor.',
    iconColor: 'bg-pink-500', // Bright pink
    icon: '💬', // Speech bubble icon
  },
  {
    id: 4,
    title: 'Expert Support Throughout',
    description: 'Receive dedicated support during and after training—our commitment extends to your successful hiring.',
    iconColor: 'bg-orange-500', // Bright orange
    icon: '🎯', // Support/headset icon
  },
]

const statistics = [
  {
    id: 1,
    number: '67.1k+',
    label: 'Students Enrolled',
    color: 'text-blue-400', // Light blue
  },
  {
    id: 2,
    number: '26k+',
    label: 'Certified Instructors',
    color: 'text-pink-500', // Vibrant pink
  },
  {
    id: 3,
    number: '500+',
    label: 'Courses Available',
    color: 'text-red-500', // Vibrant red/orange
  },
]

export function WhyChooseSection() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Why Choose PaniTech Academy?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide the best learning experience with proven results
          </p>
        </div>

        {/* Feature Sections - 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center"
            >
              {/* Icon Square */}
              <div
                className={`${feature.iconColor} rounded-lg p-4 mb-4`}
                style={{ width: '80px', height: '80px' }}
              >
                <div className="text-white text-4xl flex items-center justify-center h-full">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
          {statistics.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className={`text-5xl md:text-6xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-700 font-medium text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
