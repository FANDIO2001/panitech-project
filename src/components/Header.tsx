'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'

export function Header() {
    const [isCoursesOpen, setIsCoursesOpen] = useState(false)
    const [isLanguageOpen, setIsLanguageOpen] = useState(false)
    const [selectedLanguage, setSelectedLanguage] = useState('FR')
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false)
    const pathname = usePathname()

    return (
        <header className="bg-white shadow-sm">
            <nav className="container mx-auto px-4 md:px-6">
                {/* Mobile Header */}
                <div className="flex md:hidden items-center justify-between py-3">
                    {/* Menu Button - Left */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
                        aria-label="Toggle menu"
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
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>

                    {/* Search Icon */}
                    <button
                        onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
                        className="text-gray-900 hover:text-blue-600 transition-colors"
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

                    {/* Logo - Center */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.jpg"
                                alt="PaniTech Academy Logo"
                                width={120}
                                height={120}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Cart Icon - Right */}
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
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4">
                        <div className="flex flex-col space-y-2">
                            <Link
                                href="/"
                                className={`px-4 py-2 text-lg transition-colors ${pathname === '/' ? 'text-[#57c5f7]' : 'text-black hover:text-[#57c5f7]'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/courses"
                                className={`px-4 py-2 text-lg transition-colors ${pathname === '/courses' ? 'text-[#57c5f7]' : 'text-black hover:text-[#57c5f7]'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Courses
                            </Link>
                            <Link
                                href="/bootcamp"
                                className={`px-4 py-2 text-lg transition-colors ${pathname === '/bootcamp' ? 'text-[#57c5f7]' : 'text-black hover:text-[#57c5f7]'}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Bootcamp
                            </Link>
                            <Link
                                href="#"
                                className="px-4 py-2 text-lg text-black hover:text-[#57c5f7] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Community
                            </Link>
                            <Link
                                href="#"
                                className="px-4 py-2 text-lg text-black hover:text-[#57c5f7] transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Subscription
                            </Link>
                        </div>
                    </div>
                )}

                {/* Mobile Search Bar */}
                {isMobileSearchOpen && (
                    <div className="md:hidden border-t border-gray-200 py-4">
                        <div className="relative px-4">
                            <input
                                type="text"
                                placeholder="what are you looking for ?"
                                className="w-full px-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none text-sm text-black"
                                style={{ backgroundColor: '#F5F5F5', height: '35.45px' }}
                            />
                            <button
                                className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-blue-600 transition-colors"
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
                    </div>
                )}

                {/* Desktop Header */}
                {/* Top Section - Logo and Navigation */}
                <div className="hidden md:flex items-center justify-center gap-20 py-4">
                    {/* Logo Section */}
                    <div className="flex items-center mr-32 text-4xl">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo.jpg"
                                alt="PaniTech Academy Logo"
                                width={250}
                                height={250}
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links - Desktop Only */}
                    <div className="hidden md:flex items-center gap-[28.4px]">
                        <Link
                            href="/"
                            className={`text-2xl font-normal transition-colors relative ${pathname === '/'
                                ? ''
                                : 'text-black hover:[color:#57c5f7]'
                                }`}
                            style={pathname === '/' ? { color: '#57c5f7' } : {}}
                        >
                            Home
                            {pathname === '/' && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#57c5f7' }}></span>
                            )}
                        </Link>
                        <div
                            className="relative"
                            onMouseEnter={() => setIsCoursesOpen(true)}
                            onMouseLeave={() => setIsCoursesOpen(false)}
                        >
                            <Link
                                href="/courses"
                                className={`text-2xl font-normal transition-colors flex items-center gap-1 relative ${pathname === '/courses'
                                    ? ''
                                    : 'text-black hover:[color:#57c5f7]'
                                    }`}
                                style={pathname === '/courses' ? { color: '#57c5f7' } : {}}
                            >
                                Courses
                                {pathname === '/courses' && (
                                    <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#57c5f7' }}></span>
                                )}
                            </Link>
                        </div>
                        <Link
                            href="/bootcamp"
                            className={`text-2xl font-normal transition-colors relative ${pathname === '/bootcamp'
                                ? ''
                                : 'text-black hover:[color:#57c5f7]'
                                }`}
                            style={pathname === '/bootcamp' ? { color: '#57c5f7' } : {}}
                        >
                            Bootcamp
                            {pathname === '/bootcamp' && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#57c5f7' }}></span>
                            )}
                        </Link>

                        <Link
                            href="#"
                            className={`text-2xl font-normal transition-colors relative ${pathname === '/community'
                                ? ''
                                : 'text-black hover:[color:#57c5f7]'
                                }`}
                            style={pathname === '/community' ? { color: '#57c5f7' } : {}}
                        >
                            Community
                            {pathname === '/community' && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#57c5f7' }}></span>
                            )}
                        </Link>
                        <Link
                            href="#"
                            className={`text-2xl font-normal transition-colors relative ${pathname === '/subscription'
                                ? ''
                                : 'text-black hover:[color:#57c5f7]'
                                }`}
                            style={pathname === '/subscription' ? { color: '#57c5f7' } : {}}
                        >
                            Subscription
                            {pathname === '/subscription' && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5" style={{ backgroundColor: '#57c5f7' }}></span>
                            )}
                        </Link>
                    </div>
                </div>

                {/* Bottom Section - Search Bar with Icon and Cart - Desktop Only */}
                <div className="hidden md:flex items-center gap-10 pb-4 pt-4 ml-32">
                    {/* Search Bar with Icon Inside - Aligned with Logo */}
                    <div className="flex-1 max-w-4xl relative ml-12" >
                        <input
                            type="text"
                            placeholder="what are you locking for ?"
                            className="w-full px-4 pr-10 border border-gray-300 rounded-md focus:outline-none text-sm ml-3 text-black"
                            style={{ backgroundColor: '#F5F5F5', height: '35.45px' }}
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
                            <div className="flex items-center">
                                {/* Dashed line */}
                                {/* Globe icon */}
                                <FontAwesomeIcon icon={faGlobe} className="w-5 h-5 text-black" />
                            </div>
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
