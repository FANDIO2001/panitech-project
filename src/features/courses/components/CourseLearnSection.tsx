'use client'

export function CourseLearnSection() {
  const learningObjectives = [
    'Basic Principles of Computer Security',
    'Understanding of Cryptography',
    'Implement authentication and security best practices',
    'Understanding of Incident Response',
    'Understanding of Threat Actors and Attacks types',
    'Debug and test code effectively',
  ]

  return (
    <section
      className="py-12 md:py-16 text-white"
      style={{
        background: 'linear-gradient(to bottom, #155DFC, #57C5F7)',
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Titre */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8"
            style={{
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            What you'll learn in this CompTIA Security+ 701 Training | CompTIA Security+ Certification course ?
          </h2>

          {/* Liste des objectifs d'apprentissage */}
          <ul className="space-y-4">
            {learningObjectives.map((objective, index) => (
              <li
                key={index}
                className="text-lg md:text-xl flex items-start gap-4"
              >
                {/* Cercle avec checkmark */}
                <div
                  className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-1"
                  style={{ backgroundColor: '#60a5fa' }}
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="flex-1">{objective}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
