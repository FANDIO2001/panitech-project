'use client'

import { useState } from 'react'
import { Bootcamp } from '@/types/bootcamp'
import { BootcampTabContent } from './BootcampTabContent'

type TabType = 'overview' | 'curriculum' | 'instructors' | 'reviews' | 'faq'

interface BootcampTabsProps {
  bootcamp: Bootcamp
  defaultTab?: TabType
}

export function BootcampTabs({ bootcamp, defaultTab = 'overview' }: BootcampTabsProps) {
  const [activeTab, setActiveTab] = useState<TabType>(defaultTab)

  const tabs: { id: TabType; label: string }[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'instructors', label: 'Instructors' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
  ]

  return (
    <div>
      {/* Onglets de navigation */}
      <div className="border-b border-gray-200">
        <div className="flex gap-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 text-lg font-medium transition-colors whitespace-nowrap relative ${
                activeTab === tab.id
                  ? ''
                  : 'text-gray-600 hover:text-gray-900'
              }`}
              style={activeTab === tab.id ? { color: '#1e3a8a' } : {}}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span
                  className="absolute bottom-0 left-0 right-0 h-0.5"
                  style={{ backgroundColor: '#57C5F7' }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Contenu des onglets */}
      <BootcampTabContent bootcamp={bootcamp} activeTab={activeTab} />
    </div>
  )
}
