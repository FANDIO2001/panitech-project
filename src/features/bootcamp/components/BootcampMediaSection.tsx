'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Bootcamp } from '@/types/bootcamp'

interface BootcampMediaSectionProps {
  bootcamp: Bootcamp
}

export function BootcampMediaSection({ bootcamp }: BootcampMediaSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Ici, on pourrait intégrer un lecteur vidéo réel
  }

  return (
    <div className="relative w-full h-full">
      {/* Zone média principale */}
      <div className="relative w-full h-full bg-white rounded-lg overflow-hidden border border-gray-200">
        {bootcamp.image ? (
          <Image
            src={bootcamp.image}
            alt={bootcamp.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
            <div className="text-white text-center">
              <div className="text-4xl mb-2">📹</div>
              <div className="text-lg">Vidéo du bootcamp</div>
            </div>
          </div>
        )}

        {/* Badge "New in" */}
        {bootcamp.isNew && (
          <div className="absolute top-4 left-4 z-10">
            <div className="bg-white px-3 py-1 rounded-full text-sm font-semibold text-gray-900 shadow-md">
              New in
            </div>
          </div>
        )}

        {/* Icône panier */}
        <button
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-md transition-colors"
          aria-label="Ajouter au panier"
        >
          <svg
            className="w-6 h-6 text-gray-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </button>

        {/* Bouton Play centré */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center z-10 group"
            aria-label="Lire la vidéo"
          >
            <div className="bg-white rounded-full p-6 shadow-xl group-hover:scale-110 transition-transform">
              <svg
                className="w-16 h-16 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
        )}

        {/* Overlay sombre pour le bouton play */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-black/20" />
        )}
      </div>
    </div>
  )
}
