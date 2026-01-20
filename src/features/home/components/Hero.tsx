'use client'

import { useState } from 'react'
import { Button } from '@/components/Button'

export function Hero() {
    const [searchQuery, setSearchQuery] = useState('')

    return (
        <section
            className="relative min-h-[600px] flex items-center overflow-hidden"
            style={{
                backgroundImage: 'url(/cover.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center -200px',
                backgroundRepeat: 'no-repeat'
            }}
        >
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 py-20">
                <div className="max-w-2xl">
                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        <span className="block">No Experience? No Problem</span>
                        <span className="block">We'll Get You Job-Ready in 6 months or less</span>

                    </h1>

                    {/* Search Bar */}
                    <div className="relative mb-6">
                        <input
                            type="text"
                            placeholder="What do you want to learn?"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-6 py-4 pr-12 bg-black/80 border border-white/30 rounded-lg text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                        />
                        <button
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-blue-400 transition-colors"
                            aria-label="Search"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Browse Courses Button */}
                    <Button
                        variant="primary"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold mb-8"
                    >
                        Browse Courses
                    </Button>

                    {/* Description Text */}
                    <p className="text-white/90 text-lg max-w-xl">
                        Take your IT career to the next level—gain the knowledge and hands-on training you need to succeed.
                    </p>
                </div>
            </div>
        </section>
    )
}
