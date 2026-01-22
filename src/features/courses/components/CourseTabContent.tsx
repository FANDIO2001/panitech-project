'use client'

import { Course } from '@/types/course'

type TabType = 'overview' | 'curriculum' | 'instructors' | 'reviews' | 'faq'

interface CourseTabContentProps {
  course: Course
  activeTab: TabType
}

export function CourseTabContent({ course, activeTab }: CourseTabContentProps) {
  const defaultOverviewText = course.description || 'A comprehensive course designed to help you master the skills needed for success. This course covers all the essential topics with hands-on exercises and real-world examples.'

  const defaultFaqs = [
    { question: 'What does this course cover?' },
    { question: 'Do I need prior experience to take this course?' },
    { question: 'How long does it take to complete the course?' },
    { question: 'Is a certificate included with this course?' },
    { question: 'Can I access the course materials after completion?' },
  ]

  if (activeTab === 'overview') {
    return (
      <div className="space-y-12 mt-8">
        {/* Course Overview */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {defaultOverviewText}
          </p>
        </div>

        {/* What You'll Learn */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">What You'll Learn</h2>
          <ul className="space-y-3">
            <li className="text-gray-600 text-lg flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Master the fundamentals and advanced concepts</span>
            </li>
            <li className="text-gray-600 text-lg flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Build real-world projects and applications</span>
            </li>
            <li className="text-gray-600 text-lg flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Learn best practices and industry standards</span>
            </li>
            <li className="text-gray-600 text-lg flex items-start gap-3">
              <span className="text-blue-600 mt-1">✓</span>
              <span>Get hands-on experience with practical exercises</span>
            </li>
          </ul>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">FAQ</h2>
          <ul className="space-y-4">
            {defaultFaqs.map((faq, index) => (
              <li key={index} className="text-gray-600 text-lg">
                {faq.question}
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  if (activeTab === 'curriculum') {
    const curriculum = [
      'Introduction to the Course',
      'Setting Up Your Development Environment',
      'Core Concepts and Fundamentals',
      'Advanced Topics and Techniques',
      'Building Real-World Projects',
      'Best Practices and Optimization',
      'Final Project and Certification',
    ]

    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
        <ul className="space-y-4">
          {curriculum.map((item, index) => (
            <li key={index} className="text-gray-600 text-lg flex items-start gap-3">
              <span className="text-gray-400 font-bold">{index + 1}.</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  if (activeTab === 'instructors') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Instructors</h2>
        {course.instructor ? (
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">
                  {course.instructor.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{course.instructor}</h3>
                <p className="text-gray-600">Expert Instructor</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg">
              {course.instructor} is an experienced professional with years of expertise in the field.
              They are dedicated to helping students succeed and providing the best learning experience.
            </p>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">Les informations sur les instructeurs seront bientôt disponibles.</p>
        )}
      </div>
    )
  }

  if (activeTab === 'reviews') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reviews</h2>
        {course.reviews && course.rating ? (
          <div className="space-y-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="text-5xl font-bold text-gray-900">{course.rating}</div>
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(course.rating || 0) ? 'text-yellow-400' : 'text-gray-300'}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600">Based on {course.reviews} reviews</p>
              </div>
            </div>
            <p className="text-gray-600 text-lg">Les avis détaillés des étudiants seront bientôt disponibles.</p>
          </div>
        ) : (
          <p className="text-gray-600 text-lg">Les avis des étudiants seront bientôt disponibles.</p>
        )}
      </div>
    )
  }

  if (activeTab === 'faq') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
        <ul className="space-y-4">
          {defaultFaqs.map((faq, index) => (
            <li key={index} className="text-gray-600 text-lg">
              {faq.question}
            </li>
          ))}
        </ul>
      </div>
    )
  }

  return null
}
