'use client'

import Image from 'next/image'
import Link from 'next/link'

const partners = [
    {
        id: 1,
        name: 'Microsoft',
        logo: '/assets/partner-1.png', // Group 12.png
        text: 'Microsoft',
        subText: null,
        url: 'https://www.microsoft.com',
    },
    {
        id: 2,
        name: 'Adobe',
        logo: '/assets/partner-2.png', // Group 15.png
        text: 'Adobe',
        subText: 'SOLUTION PARTNER',
        url: 'https://www.adobe.com',
    },
    {
        id: 3,
        name: 'Certified Agency',
        logo: '/assets/partner-3.png', // image 109.png
        text: 'Certified Agency',
        subText: null,
        url: '#',
    },
    {
        id: 4,
        name: 'AWS',
        logo: '/assets/partner-4.png', // Frame 107.png
        text: 'partner network',
        subText: null,
        url: 'https://aws.amazon.com',
    },
]

export function PartnersSection() {
    return (
        <section
            className="py-16 relative overflow-hidden"
            style={{
                background: 'linear-gradient(to bottom, #57C5F7, #005C86)',
            }}
        >
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Section - Text */}
                    <div className="relative -mt-8">
                        {/* Overlay Text "Strategy" */}
                        <div
                            className="absolute -top-8 -left-4 text-[120px] font-bold opacity-20 z-10"
                            style={{ color: '#60a5fa' }} // Light blue
                        >
                            Strategy
                        </div>

                        {/* Main Text */}
                        <div className="relative text-white font-bold text-4xl md:text-5xl leading-tight z-0 pt-16">
                            <div>Our Student Work at</div>
                            <div>these companies</div>
                        </div>
                    </div>

                    {/* Right Section - Partner Logos Grid */}
                    <div className="grid grid-cols-2 gap-6">
                        {partners.map((partner) => (
                            <Link
                                key={partner.id}
                                href={partner.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-white rounded-lg p-6 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="mb-4 flex items-center justify-center h-16">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={120}
                                        height={60}
                                        className="object-contain"
                                        style={{ width: 'auto', height: 'auto', maxHeight: '60px' }}
                                    />
                                </div>
                                <div className="text-center">
                                    <div
                                        className={`font-semibold text-sm ${partner.id === 2 ? 'text-red-600' : 'text-gray-900'
                                            }`}
                                    >
                                        {partner.text}
                                    </div>
                                    {partner.subText && (
                                        <div className="text-red-600 text-xs mt-1">
                                            {partner.subText}
                                        </div>
                                    )}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
