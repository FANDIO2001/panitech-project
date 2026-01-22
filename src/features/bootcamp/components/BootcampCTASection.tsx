'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/Button'

export function BootcampCTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/images/bootcamp.png"
          alt="Bootcamp background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Contenu */}
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Titre */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to Build Your Future in Tech?
          </h2>

          {/* Description */}
          <p className="text-white text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
            Join a community of disciplined, goal-oriented learners transforming their careers with the most in-demand IT skills. Your next chapter starts here.
          </p>

          {/* Bouton CTA */}
          <Link href="/courses">
            <Button
              variant="primary"
              className="px-8 py-4 text-lg font-semibold text-white hover:opacity-90 transition-opacity bg-transparent"
              style={{ backgroundColor: '#57C5F7' }}
            >
              View All Courses & Start learning
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
