'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');


    return (
        <nav
            className={`w-full px-6 py-4 fixed top-0 z-40 transition-all duration-500 ${
                typeof window !== 'undefined' && window.scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
            }`}
            onScroll={() => {}}
            style={{
                backgroundColor: typeof window !== 'undefined' && window.scrollY > 50 ? 'rgba(17, 24, 39, 0.95)' : 'transparent',
                backdropFilter: typeof window !== 'undefined' && window.scrollY > 50 ? 'blur(4px)' : 'none',
                boxShadow: typeof window !== 'undefined' && window.scrollY > 50 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' : 'none'
            }}
        >
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Brand Name with animation */}
                <Link href="/" className="z-50 flex items-center space-x-3 group">
                    {/* Logo with hover animation */}
                    <div className="h-12 w-12 flex items-center justify-center relative overflow-hidden transition-transform duration-300 group-hover:scale-110">
                        <img
                            src="/assets/wealthlogo.png"
                            alt="Jennywealth Honeybees Logo"
                            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:rotate-6"
                        />
                    </div>
                    <div className="text-white font-serif transition-all duration-300 group-hover:translate-x-1">
                        <div className="text-xl font-bold italic relative">
                            Jennywealth Honeybees
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </div>
                        <div className="text-sm md:text-base italic opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            Events Management
                        </div>
                    </div>
                </Link>

                {/* Desktop Navigation with staggered hover effects */}
                <div className="hidden md:flex items-center space-x-10">
                    {[
                        { name: 'About Us', href: '/about-us' },
                        { name: 'Services', href: '/services' },
                        { name: 'Gallery', href: '/gallery' },
                        { name: 'Testimonials', href: '/testimonials' },
                        { name: 'Contact', href: '/contact' }
                    ].map((link, index) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-white hover:text-yellow-400 transition-all duration-300 text-lg relative group ${
                                activeLink === link.name ? 'text-yellow-400' : ''
                            }`}
                            onClick={() => setActiveLink(link.name)}
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                    ))}
                </div>

                {/* Book an Event Button with animation */}
                <Link
                    href="/contact"
                    className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
                >
                    Book an Event
                </Link>

                {/* Mobile Menu Button with animation */}
                <button
                    className="md:hidden text-white z-50 relative w-6 h-6"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'
                    }`}></span>

                    <span className={`absolute h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
                    }`}></span>

                    <span className={`absolute h-0.5 w-6 bg-white transform transition-all duration-300 ease-in-out ${
                        isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'
                    }`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay with animations */}
            <div className={`fixed inset-0 bg-gradient-to-b from-gray-900 to-black z-30 transition-all duration-500 md:hidden ${
                isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-6 text-white text-xl">
                    {[
                        { name: 'About Us', href: '/about-us', delay: 'delay-100' },
                        { name: 'Services', href: '/services', delay: 'delay-200' },
                        { name: 'Gallery', href: '/gallery', delay: 'delay-300' },
                        { name: 'Testimonials', href: '/testimonials', delay: 'delay-400' },
                        { name: 'Contact', href: '/contact', delay: 'delay-500' }
                    ].map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`hover:text-yellow-400 transition-all duration-300 ${
                                isMenuOpen ? 'animate-slide-in ' + link.delay : ''
                            } opacity-0`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/contact"
                        className={`bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg hover:scale-105 mt-4 ${
                            isMenuOpen ? 'animate-slide-in delay-600' : ''
                        } opacity-0`}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book an Event
                    </Link>
                </div>
            </div>

            {/* Tailwind custom animations */}
            <style jsx global>{`
                @keyframes slideIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .animate-slide-in {
                    animation: slideIn 0.5s ease forwards;
                }
                
                /* Animation delays for staggered effect */
                .delay-100 {
                    animation-delay: 100ms;
                }
                
                .delay-200 {
                    animation-delay: 200ms;
                }
                
                .delay-300 {
                    animation-delay: 300ms;
                }
                
                .delay-400 {
                    animation-delay: 400ms;
                }
                
                .delay-500 {
                    animation-delay: 500ms;
                }
                
                .delay-600 {
                    animation-delay: 600ms;
                }
            `}</style>

            {/* Script to handle scroll without useEffect */}
            <script dangerouslySetInnerHTML={{
                __html: `
                    document.addEventListener('scroll', function() {
                        const nav = document.querySelector('nav');
                        if (window.scrollY > 50) {
                            nav.classList.add('bg-gray-900/95', 'backdrop-blur-sm', 'shadow-lg');
                            nav.classList.remove('bg-transparent');
                        } else {
                            nav.classList.remove('bg-gray-900/95', 'backdrop-blur-sm', 'shadow-lg');
                            nav.classList.add('bg-transparent');
                        }
                    });
                `
            }} />
        </nav>
    );
};

export default Navbar;