'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { registerBootcamp } from '../actions/registerBootcamp'
import { Bootcamp } from '@/types/bootcamp'

interface BootcampRegistrationFormProps {
  bootcamp: Bootcamp
}

export function BootcampRegistrationForm({ bootcamp }: BootcampRegistrationFormProps) {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const availableSpots = bootcamp.maxParticipants - bootcamp.currentParticipants
  const isFull = availableSpots === 0
  const canRegister = bootcamp.status === 'upcoming' && !isFull

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setMessage(null)

    if (!formData.name.trim() || !formData.email.trim()) {
      setMessage({
        type: 'error',
        text: 'Veuillez remplir tous les champs obligatoires',
      })
      return
    }

    // Validation email basique
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setMessage({
        type: 'error',
        text: 'Veuillez entrer une adresse email valide',
      })
      return
    }

    startTransition(async () => {
      try {
        const result = await registerBootcamp({
          email: formData.email,
          name: formData.name,
        })

        if (result.success) {
          setMessage({
            type: 'success',
            text: result.message,
          })
          // Réinitialiser le formulaire
          setFormData({
            name: '',
            email: '',
            phone: '',
          })
        } else {
          setMessage({
            type: 'error',
            text: result.message,
          })
        }
      } catch (error) {
        setMessage({
          type: 'error',
          text: 'Une erreur est survenue lors de l\'inscription. Veuillez réessayer.',
        })
      }
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  if (!canRegister) {
    return (
      <Card>
        <div className="text-center py-8">
          <div className="text-6xl mb-4">🔒</div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {isFull ? 'Bootcamp Complet' : 'Inscriptions Fermées'}
          </h3>
          <p className="text-gray-600">
            {isFull
              ? 'Toutes les places pour ce bootcamp sont actuellement occupées.'
              : 'Les inscriptions pour ce bootcamp ne sont pas encore ouvertes ou sont fermées.'}
          </p>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <h2 className="text-2xl font-bold mb-6">S'inscrire au bootcamp</h2>
      <p className="text-gray-600 mb-6">
        Il reste <span className="font-semibold text-blue-600">{availableSpots} places</span> disponibles pour ce bootcamp.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Nom complet <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="Votre nom complet"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Adresse email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="votre.email@exemple.com"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone (optionnel)
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            placeholder="+33 6 12 34 56 78"
          />
        </div>

        {message && (
          <div
            className={`p-4 rounded-lg ${
              message.type === 'success'
                ? 'bg-green-50 text-green-800 border border-green-200'
                : 'bg-red-50 text-red-800 border border-red-200'
            }`}
          >
            {message.text}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          disabled={isPending}
          className="w-full py-3 text-lg"
        >
          {isPending ? 'Inscription en cours...' : "S'inscrire maintenant"}
        </Button>

        <p className="text-xs text-gray-500 text-center">
          En vous inscrivant, vous acceptez nos conditions d'utilisation et notre politique de confidentialité.
        </p>
      </form>
    </Card>
  )
}
