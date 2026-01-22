'use client'

import { useState } from 'react'

const faqs = [
  {
    id: 1,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 2,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 3,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 4,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 5,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 6,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
  {
    id: 7,
    question: 'How much do your courses cost?',
    answer: 'Our course prices vary depending on the program. Please visit our courses page for detailed pricing information.',
  },
]

export function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id]
    )
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12 relative">
          {/* Background Text "FAQS" */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 font-bold text-gray-200 -z-10 text-6xl sm:text-8xl md:text-[150px] lg:text-[200px]">
            FAQS
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative z-10">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full flex items-center justify-between py-4 text-left hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-gray-900">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 ml-4">
                  {openItems.includes(faq.id) ? (
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
                        d="M6 18L18 6M6 6l12 12"
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
              </button>
              
              {/* Answer */}
              {openItems.includes(faq.id) && (
                <div className="pb-4 text-gray-600">
                  {faq.answer}
                </div>
              )}
              
              {/* Separator Line */}
              {index < faqs.length - 1 && (
                <div className="border-t border-gray-200"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
