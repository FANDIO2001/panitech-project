'use client'

import { useState, useTransition } from 'react'
import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { registerBootcamp } from '../actions/registerBootcamp'

export function BootcampBanner() {
  const [isPending, startTransition] = useTransition()
  const [message, setMessage] = useState<string | null>(null)

  const handleRegister = () => {
    setMessage(null)
    startTransition(async () => {
      const result = await registerBootcamp({
        email: 'user@example.com', // Dans un vrai projet, récupérer depuis un formulaire
        name: 'John Doe',
      })
      setMessage(result.message)
    })
  }

  return (
    <Card className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Bootcamp Intensif</h1>
      <p className="text-gray-600 mb-6">
        Rejoignez notre bootcamp intensif de 12 semaines et transformez votre
        carrière. Formation complète en développement web avec accompagnement
        personnalisé.
      </p>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold mb-2">Ce que vous apprendrez :</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            <li>Développement Frontend (React, Next.js)</li>
            <li>Développement Backend (Node.js, APIs)</li>
            <li>Base de données et architecture</li>
            <li>Déploiement et DevOps</li>
          </ul>
        </div>
        <Button
          variant="primary"
          onClick={handleRegister}
          disabled={isPending}
          className="w-full"
        >
          {isPending ? 'Inscription en cours...' : "S'inscrire au Bootcamp"}
        </Button>
        {message && (
          <p className={`text-sm ${message.includes('succès') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </div>
    </Card>
  )
}
