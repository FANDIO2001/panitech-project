'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export function Header() {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState('FR')

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-6">
                {/* Top Section - Logo and Navigation */}
                <div className="flex items-center justify-center gap-20 py-4">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3 mr-32">
                        <Link href="/" className="flex items-center gap-3">
                            <Image
                                src="/logo.jpg"
                                alt="PaniTech Academy Logo"
                                width={200}
                                height={200}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <div className="hidden md:flex items-center gap-[28.4px]">
                        <Link
                            href="/"
                            className="text-black hover:text-blue-600 transition-colors text-2xl font-normal"
                        >
                            Home
                        </Link>
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCoursesOpen(true)}
                            onMouseLeave={() => setIsCoursesOpen(false)}
                        >
                            <Link
                                href="/courses"
                                className="text-black hover:text-blue-600 transition-colors flex items-center gap-1 text-2xl font-normal"
                            >
                                Courses

                            </Link>
                        </div>
                        <Link
                            href="/bootcamp"
                            className="text-black hover:text-blue-600 transition-colors text-2xl font-normal"
                        >
                            Bootcamp
                        </Link>

                        <Link
                            href="#"
                            className="text-black hover:text-blue-600 transition-colors text-2xl font-normal"
                        >
                            Community
                        </Link>
                        <Link
                            href="#"
                            className="text-black hover:text-blue-600 transition-colors text-2xl font-normal"
                        >
                            Subscription
                        </Link>
                    </div>
                </div>

                {/* Bottom Section - Search Bar with Icon and Cart */}
                <div className="flex items-center gap-10 pb-4 border-t border-gray-200 pt-4">
                    {/* Search Bar with Icon Inside - Aligned with Logo */}
                    <div className="flex-1 max-w-4xl relative ml-32" >
                        <input
                            type="text"
                            placeholder="what are you locking for ?"
                            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm ml-3"
                        />
                        <button
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
                            aria-label="Search"
                        >
                            <svg
                                className="w-5 h-5"
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

                    {/* Heart Icon for Likes */}
                    <button
                        className="text-gray-900 hover:text-red-600 transition-colors"
                        aria-label="Favorites"
                    >
                        <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                            />
                        </svg>
                    </button>

                    {/* Cart Icon */}
                    <button
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                        aria-label="Shopping Cart"
                    >
                        <svg
                            className="w-5 h-5"
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

                    {/* Language Dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                            className="flex items-center gap-2 text-gray-900 hover:text-blue-600 transition-colors"
                            aria-label="Select Language"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                                />
                            </svg>
                            <span className="text-sm font-medium">{selectedLanguage}</span>
                            <svg
                                className={`w-6 h-6 transition-transform ${isLanguageOpen ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </button>

                        {isLanguageOpen && (
                            <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                                <button
                                    onClick={() => {
                                        setSelectedLanguage('FR')
                                        setIsLanguageOpen(false)
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedLanguage === 'FR' ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                >
                                    Français (FR)
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedLanguage('EN')
                                        setIsLanguageOpen(false)
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedLanguage === 'EN' ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                >
                                    English (EN)
                                </button>
                                <button
                                    onClick={() => {
                                        setSelectedLanguage('ES')
                                        setIsLanguageOpen(false)
                                    }}
                                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${selectedLanguage === 'ES' ? 'bg-blue-50 text-blue-600' : 'text-gray-900'
                                        }`}
                                >
                                    Español (ES)
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    )
}
