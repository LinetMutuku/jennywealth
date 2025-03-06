'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect for navbar background
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full px-6 py-4 fixed top-0 z-40 transition-all duration-300 ${
            isScrolled ? 'bg-gray-900 bg-opacity-90' : 'bg-transparent'
        }`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo and Brand Name */}
                <Link href="/" className="z-50 flex items-center space-x-3">
                    {/* Logo */}
                    <div className="h-12 w-12 flex items-center justify-center">
                        <img
                            src="/assets/wealthlogo.png"
                            alt="Jennywealth Honeybees Logo"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    <div className="text-white font-serif">
                        <div className="text-xl font-bold italic">Jennywealth Honeybees</div>
                        <div className="text-sm md:text-base italic">Events Management</div>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-10">
                    <Link href="/about-us" className="text-white hover:text-yellow-400 transition-colors text-lg">
                        About Us
                    </Link>
                    <Link href="/services" className="text-white hover:text-yellow-400 transition-colors text-lg">
                        Services
                    </Link>
                    <Link href="/gallery" className="text-white hover:text-yellow-400 transition-colors text-lg">
                        Gallery
                    </Link>
                    <Link href="/testimonials" className="text-white hover:text-yellow-400 transition-colors text-lg">
                        Testimonials
                    </Link>
                    <Link href="/contact" className="text-white hover:text-yellow-400 transition-colors text-lg">
                        Contact
                    </Link>
                </div>

                {/* Book an Event Button */}
                <Link
                    href="/book-event"
                    className="hidden md:block bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors"
                >
                    Book an Event
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white z-50"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMenuOpen ? (
                        // Close icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        // Menu icon
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black bg-opacity-90 z-30 transform transition-transform duration-300 md:hidden ${
                isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8 text-white text-xl">
                    <Link
                        href="/about-us"
                        className="hover:text-yellow-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/services"
                        className="hover:text-yellow-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Services
                    </Link>
                    <Link
                        href="/gallery"
                        className="hover:text-yellow-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/testimonials"
                        className="hover:text-yellow-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Testimonials
                    </Link>
                    <Link
                        href="/contact"
                        className="hover:text-yellow-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Contact
                    </Link>
                    <Link
                        href="/book-event"
                        className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors mt-4"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Book an Event
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;