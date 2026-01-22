'use client'

export function CourseJobsSection() {
  const jobs = [
    'Helpdesk Manager / Analyst',
    'Security Administrator',
    'IT Auditors',
    'Systems Administrator',
    'Security Administrator',
    'Network/Cloud Engineer',
    'Security Analyst',
  ]

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl">
          {/* Titre */}
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            Jobs that you can apply for after taking the CompTIA Security+ 701 Training | CompTIA Security+ Certification program
          </h2>

          {/* Liste des emplois */}
          <ul className="space-y-4">
            {jobs.map((job, index) => (
              <li 
                key={index}
                className="text-lg md:text-xl text-gray-700 flex items-start gap-3"
              >
                <span className="text-gray-400 mt-1">•</span>
                <span>{job}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
