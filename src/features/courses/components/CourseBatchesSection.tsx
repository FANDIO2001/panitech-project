'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

interface Batch {
  id: number
  status: string
  statusColor: string
  schedule: string
  scheduleColor: string
  startDate: string
  endDate: string
  duration: string
  timings: string
  location: string
  countdown: {
    days: number
    hours: number
    minutes: number
    seconds: number
  }
  currentPrice: number
  originalPrice: number
}

const batches: Batch[] = [
  {
    id: 1,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
  {
    id: 2,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
  {
    id: 3,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
  {
    id: 4,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
  {
    id: 5,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
  {
    id: 6,
    status: 'In Progress & Remote',
    statusColor: 'bg-red-500',
    schedule: 'Evening Classes',
    scheduleColor: 'bg-yellow-400',
    startDate: '09 Dec, 2025',
    endDate: '10 Feb, 2026',
    duration: '2 months',
    timings: '08:00 PM - 10:00 PM (UTC)',
    location: '5000 Sunnyside Ave, Beltsville, MD 20705',
    countdown: { days: 5, hours: 10, minutes: 31, seconds: 11 },
    currentPrice: 199,
    originalPrice: 249,
  },
]

type BatchType = 'instructor-led' | 'self-paced' | 'corporate'

export function CourseBatchesSection() {
  const [activeTab, setActiveTab] = useState<BatchType>('instructor-led')
  const [countdowns, setCountdowns] = useState<Record<number, Batch['countdown']>>(
    batches.reduce((acc, batch) => {
      acc[batch.id] = batch.countdown
      return acc
    }, {} as Record<number, Batch['countdown']>)
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdowns((prev) => {
        const updated = { ...prev }
        Object.keys(updated).forEach((id) => {
          const batchId = Number(id)
          const countdown = updated[batchId]
          if (countdown.seconds > 0) {
            updated[batchId] = {
              ...countdown,
              seconds: countdown.seconds - 1,
            }
          } else if (countdown.minutes > 0) {
            updated[batchId] = {
              ...countdown,
              minutes: countdown.minutes - 1,
              seconds: 59,
            }
          } else if (countdown.hours > 0) {
            updated[batchId] = {
              ...countdown,
              hours: countdown.hours - 1,
              minutes: 59,
              seconds: 59,
            }
          } else if (countdown.days > 0) {
            updated[batchId] = {
              ...countdown,
              days: countdown.days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59,
            }
          }
        })
        return updated
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const tabs = [
    { id: 'instructor-led' as BatchType, label: 'Instructor-Led' },
    { id: 'self-paced' as BatchType, label: 'Self Paced Training' },
    { id: 'corporate' as BatchType, label: 'Corporate Training' },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
    }).format(price)
  }

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Titre */}
          <h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-8"
            style={{ 
              fontFamily: 'Poppins',
              fontWeight: 600
            }}
          >
            Flexible batches for you
          </h2>

          {/* Onglets */}
          <div className="border-b border-gray-200 mb-8">
            <div className="flex gap-8 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-4 px-6 py-2 text-lg font-medium transition-colors whitespace-nowrap relative ${
                    activeTab === tab.id
                      ? ''
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  style={
                    activeTab === tab.id && tab.id === 'instructor-led'
                      ? {
                          color: '#ffffff',
                          backgroundColor: '#57C5F7',
                          borderRadius: '10px',
                        }
                      : activeTab === tab.id && (tab.id === 'self-paced' || tab.id === 'corporate')
                      ? {
                          color: '#57C5F7',
                          backgroundColor: '#ffffff',
                          borderRadius: '10px',
                          border: '1px solid #57C5F7',
                        }
                      : activeTab === tab.id
                      ? { color: '#3b82f6' }
                      : {}
                  }
                >
                  {tab.label}
                  {activeTab === tab.id && tab.id !== 'instructor-led' && tab.id !== 'self-paced' && tab.id !== 'corporate' && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5"
                      style={{ backgroundColor: '#60a5fa' }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Cartes de batch */}
          {activeTab === 'instructor-led' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batches.map((batch) => {
                const countdown = countdowns[batch.id] || batch.countdown
                return (
                  <div
                    key={batch.id}
                    className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                  >
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <div className={`${batch.statusColor} text-white px-4 py-1.5 rounded text-sm font-semibold`}>
                        {batch.status}
                      </div>
                      <div className={`${batch.scheduleColor} text-black px-4 py-1.5 rounded text-sm font-semibold`}>
                        {batch.schedule}
                      </div>
                    </div>

                    {/* Détails du batch */}
                    <div className="space-y-3 mb-6">
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <span className="text-gray-600 text-sm">Start Date: </span>
                          <span className="text-gray-900 font-medium text-sm">{batch.startDate}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">End Date: </span>
                          <span className="text-gray-900 font-medium text-sm">{batch.endDate}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-4">
                        <div>
                          <span className="text-gray-600 text-sm">Duration: </span>
                          <span className="text-gray-900 font-medium text-sm">{batch.duration}</span>
                        </div>
                        <div>
                          <span className="text-gray-600 text-sm">Timings: </span>
                          <span className="text-gray-900 font-medium text-sm">{batch.timings}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-600 text-sm">Location: </span>
                        <span className="text-gray-900 font-medium text-sm">{batch.location}</span>
                      </div>
                    </div>

                    {/* Countdown */}
                    <div className="mb-6">
                      <span className="text-gray-600 text-sm">Begins in: </span>
                      <span className="text-gray-900 font-semibold text-base">
                        {countdown.days}d: {countdown.hours}h: {countdown.minutes}m: {countdown.seconds}s
                      </span>
                    </div>

                    {/* Prix et bouton */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <span className="text-4xl font-bold text-red-600">
                          {formatPrice(batch.currentPrice)}
                        </span>
                        <span className="text-gray-400 line-through ml-3 text-lg">
                          {formatPrice(batch.originalPrice)}
                        </span>
                      </div>
                      <Button
                        variant="primary"
                        className="bg-transparent hover:bg-transparent px-6 py-2 flex items-center gap-2"
                        style={{
                          color: '#3b82f6',
                          fontFamily: 'Poppins',
                          fontSize: '18.05px',
                          fontWeight: 500,
                        }}
                      >
                        BUY NOW
                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" style={{ color: '#3b82f6' }} />
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Contenu pour les autres onglets */}
          {activeTab !== 'instructor-led' && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {activeTab === 'self-paced' 
                  ? 'Self-paced training options will be available soon.'
                  : 'Corporate training options will be available soon.'}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
