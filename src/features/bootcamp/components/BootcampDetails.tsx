'use client'

import { Bootcamp } from '@/types/bootcamp'
import { Card } from '@/components/Card'

interface BootcampDetailsProps {
  bootcamp: Bootcamp
}

export function BootcampDetails({ bootcamp }: BootcampDetailsProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'EUR',
    }).format(price)
  }

  const getStatusBadge = (status: Bootcamp['status']) => {
    const statusConfig = {
      upcoming: { text: 'À venir', color: 'bg-blue-100 text-blue-800' },
      ongoing: { text: 'En cours', color: 'bg-green-100 text-green-800' },
      completed: { text: 'Terminé', color: 'bg-gray-100 text-gray-800' },
    }
    const config = statusConfig[status]
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${config.color}`}>
        {config.text}
      </span>
    )
  }

  const availableSpots = bootcamp.maxParticipants - bootcamp.currentParticipants
  const isFull = availableSpots === 0

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{bootcamp.title}</h1>
          {getStatusBadge(bootcamp.status)}
        </div>
        <p className="text-lg text-gray-600">{bootcamp.description}</p>
      </div>

      {/* Key Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{bootcamp.duration}</div>
          <div className="text-sm text-gray-600">Durée</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{formatPrice(bootcamp.price)}</div>
          <div className="text-sm text-gray-600">Prix</div>
        </Card>
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">
            {bootcamp.currentParticipants}/{bootcamp.maxParticipants}
          </div>
          <div className="text-sm text-gray-600">Participants</div>
        </Card>
        <Card className="text-center">
          <div className={`text-2xl font-bold mb-1 ${isFull ? 'text-red-600' : 'text-green-600'}`}>
            {isFull ? 'Complet' : `${availableSpots} places`}
          </div>
          <div className="text-sm text-gray-600">Disponibilité</div>
        </Card>
      </div>

      {/* Dates */}
      <Card>
        <h2 className="text-2xl font-bold mb-4">Dates importantes</h2>
        <div className="space-y-3">
          <div className="flex items-center gap-4">
            <div className="w-32 text-gray-600 font-medium">Date de début :</div>
            <div className="text-gray-900 font-semibold">{formatDate(bootcamp.startDate)}</div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-32 text-gray-600 font-medium">Date de fin :</div>
            <div className="text-gray-900 font-semibold">{formatDate(bootcamp.endDate)}</div>
          </div>
        </div>
      </Card>

      {/* Curriculum */}
      {bootcamp.curriculum && bootcamp.curriculum.length > 0 && (
        <Card>
          <h2 className="text-2xl font-bold mb-4">Programme du bootcamp</h2>
          <ul className="space-y-3">
            {bootcamp.curriculum.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-semibold mt-0.5">
                  {index + 1}
                </div>
                <div className="text-gray-700">{item}</div>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {/* What You'll Learn */}
      <Card>
        <h2 className="text-2xl font-bold mb-4">Ce que vous apprendrez</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <div className="font-semibold text-gray-900">Développement Frontend</div>
              <div className="text-sm text-gray-600">React, Next.js, TypeScript, Tailwind CSS</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <div className="font-semibold text-gray-900">Développement Backend</div>
              <div className="text-sm text-gray-600">Node.js, Express, APIs REST, GraphQL</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <div className="font-semibold text-gray-900">Bases de données</div>
              <div className="text-sm text-gray-600">PostgreSQL, MongoDB, Prisma ORM</div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <div>
              <div className="font-semibold text-gray-900">Déploiement & DevOps</div>
              <div className="text-sm text-gray-600">Vercel, Docker, CI/CD, GitHub Actions</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
