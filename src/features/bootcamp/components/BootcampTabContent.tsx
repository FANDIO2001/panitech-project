'use client'

import { Bootcamp } from '@/types/bootcamp'

type TabType = 'overview' | 'curriculum' | 'instructors' | 'reviews' | 'faq'

interface BootcampTabContentProps {
  bootcamp: Bootcamp
  activeTab: TabType
}

export function BootcampTabContent({ bootcamp, activeTab }: BootcampTabContentProps) {
  const defaultOverviewText = 'A complete, hands-on CEH training and exam-prep course that teaches commercial-grade hacking tools, methodologies, and countermeasures. Covers reconnaissance, scanning, system & web app hacking, wireless, IoT, cloud and cryptography, plus lab exercises and practice exams to prepare you for the CEH certification (v12/v13) and CEH Practical.'

  const defaultFaqs = [
    { question: 'What does this CEH courses cover?' },
    { question: 'Which CEH version does this course map to?' },
    { question: 'Do I need prior experience to take this course?' },
    { question: 'How long is CEH certification valid and how do I maintain it?' },
    { question: 'Is hands-on practice Include / Is there a practical exam?' },
  ]

  const faqs = bootcamp.faqs || defaultFaqs

  if (activeTab === 'overview') {
    return (
      <div className="space-y-12 mt-8">
        {/* Course Overview */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            {bootcamp.overviewText || defaultOverviewText}
          </p>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-700 mb-6">FAQ</h2>
          <ul className="space-y-4">
            {faqs.map((faq, index) => (
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
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Curriculum</h2>
        {bootcamp.curriculum && bootcamp.curriculum.length > 0 ? (
          <ul className="space-y-4">
            {bootcamp.curriculum.map((item, index) => (
              <li key={index} className="text-gray-600 text-lg flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-600">Le curriculum sera bientôt disponible.</p>
        )}
      </div>
    )
  }

  if (activeTab === 'instructors') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Instructors</h2>
        <p className="text-gray-600 text-lg">Les informations sur les instructeurs seront bientôt disponibles.</p>
      </div>
    )
  }

  if (activeTab === 'reviews') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Reviews</h2>
        <p className="text-gray-600 text-lg">Les avis des étudiants seront bientôt disponibles.</p>
      </div>
    )
  }

  if (activeTab === 'faq') {
    return (
      <div className="mt-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">FAQ</h2>
        <ul className="space-y-4">
          {faqs.map((faq, index) => (
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
