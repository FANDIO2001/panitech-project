'use client'

import { useState } from 'react'

interface FAQItem {
  id: number
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    id: 1,
    question: 'What is the CompTIA Security+ 701 Certification?',
    answer: 'CompTIA Security+ 701 Training | CompTIA Security+ Certification bootcamp path brings together everything PaniTech Academy has to offer in the knowledge space.',
  },
  {
    id: 2,
    question: 'How Do I Get My CompTIA Security+ Certification (SYO-701) ?',
    answer: 'To earn your CompTIA Security+ 701 certification, you need to pass the SYO-701 exam. Our comprehensive training program prepares you with all the knowledge and hands-on practice needed to succeed.',
  },
  {
    id: 3,
    question: 'What topics are covered in the CompTIA Security+ 701 Training?',
    answer: 'The training covers all domains of the Security+ 701 exam, including general security concepts, threats, vulnerabilities, mitigations, security architecture, security operations, and security program management.',
  },
  {
    id: 4,
    question: 'What learning resources are provided?',
    answer: 'You will have access to video lectures, hands-on labs, practice exams, study guides, and expert instructor support throughout your learning journey.',
  },
  {
    id: 5,
    question: 'How long does it take to learn Security+?',
    answer: 'The duration varies based on your schedule and prior experience. Our flexible batches allow you to learn at your own pace, typically ranging from 2 to 4 months.',
  },
  {
    id: 6,
    question: 'Is there hands-on practice in this course?',
    answer: 'Yes, our course includes extensive hands-on labs and practical exercises that simulate real-world security scenarios to reinforce your learning.',
  },
  {
    id: 7,
    question: 'What is the format of the CompTIA Security+ 701 exam?',
    answer: 'The Security+ 701 exam consists of multiple-choice and performance-based questions. You will have 90 minutes to complete the exam, which contains up to 90 questions.',
  },
  {
    id: 8,
    question: 'What makes this course different from other Security+ training programs?',
    answer: 'Our comprehensive bootcamp path combines Security+ training, certification preparation, resume creation, and interview prep, providing a complete career pathway in cybersecurity.',
  },
]

export function CourseFAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([1]))

  const toggleItem = (id: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Titre */}
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            FAQ about our CompTIA Security+ 701 Training | CompTIA Security+ Certification course
          </h2>

          {/* FAQ Items */}
          <div className="space-y-0">
            {faqItems.map((item, index) => {
              const isOpen = openItems.has(item.id)
              return (
                <div key={item.id}>
                  <div
                    className="py-6 cursor-pointer border-b border-gray-200"
                    onClick={() => toggleItem(item.id)}
                  >
                    <div className="flex items-start justify-between gap-4">
                      {/* Question */}
                      <h3 className="text-lg font-semibold text-gray-900 flex-1 pr-4">
                        {item.question}
                      </h3>

                      {/* Icon */}
                      <div className="flex-shrink-0 mt-1">
                        {isOpen ? (
                          <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M20 12H4"
                            />
                          </svg>
                        ) : (
                          <svg
                            className="w-6 h-6 text-gray-600"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 4v16m8-8H4"
                            />
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Answer */}
                    {isOpen && (
                      <div className="mt-4 pr-10">
                        <p className="text-gray-600 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
