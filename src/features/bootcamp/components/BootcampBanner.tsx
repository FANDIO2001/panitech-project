'use client'

import Image from 'next/image'
import { Button } from '@/components/Button'
import Link from 'next/link'

export function BootcampBanner() {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transformez votre carrière avec nos Bootcamps
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Formations intensives et pratiques pour maîtriser les technologies les plus demandées du marché
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/bootcamp">
              <Button
                variant="primary"
                className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold"
              >
                Découvrir nos Bootcamps
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold"
            >
              En savoir plus
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
