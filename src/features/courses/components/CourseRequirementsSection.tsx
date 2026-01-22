'use client'

export function CourseRequirementsSection() {
  const requirements = [
    'Basic Computer Knowledge',
    'Basic Understanding of Computer Networking',
    'CompTIA A+ and Network+ certifications, and relevant knowledge / experience recommended',
    'Eagerness to learn and problem-solve',
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Titre */}
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl mb-8"
            style={{ 
              fontFamily: 'Arial',
              fontWeight: 400,
              color: '#0F172B'
            }}
          >
            Requirements
          </h2>

          {/* Liste des prérequis */}
          <ul className="space-y-4">
            {requirements.map((requirement, index) => (
              <li 
                key={index}
                className="bg-gray-100 rounded-lg px-6 py-4 flex items-start gap-4 shadow-sm"
              >
                {/* Cercle avec checkmark */}
                <div 
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-0.5"
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid #57C5F7'
                  }}
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    style={{ color: '#57C5F7' }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="flex-1 text-gray-900 text-lg">{requirement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
