'use client'

import { ReactNode } from 'react'

interface ContainerBackgroundProps {
  children: ReactNode
  className?: string
}

export function ContainerBackground({ children, className = '' }: ContainerBackgroundProps) {
  return (
    <div 
      className={`relative w-full overflow-hidden min-h-[400px] block ${className}`}
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 25%, #60a5fa 50%, #93c5fd 75%, #dbeafe 100%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '400px',
      }}
    >
      {/* Pattern overlay pour plus de texture */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.2) 0%, transparent 50%),
            radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)
          `,
        }}
      />
      
      {/* Lignes diagonales subtiles */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(255, 255, 255, 0.1) 10px,
              rgba(255, 255, 255, 0.1) 20px
            )
          `,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
