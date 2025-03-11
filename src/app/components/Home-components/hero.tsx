'use client';

import Link from 'next/link';
import { useEffect, useState, useCallback } from 'react';
import Navbar from '../Navbar';
import Image from 'next/image';

// Define a type for the button state
type ButtonType = 'event' | 'gallery' | null;

export default function Hero() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [transitioning, setTransitioning] = useState(false);
    const [activeButton, setActiveButton] = useState<ButtonType>(null);
    const [mounted, setMounted] = useState(false);

    // Images array - define outside to prevent recreating each render
    const images = [
        '/assets/heroimg.jpeg',
        '/assets/hero2.jpeg',
        '/assets/hero3.jpeg'
    ];

    // Use useCallback to memoize the rotation function
    const rotateImages = useCallback(() => {
        setTransitioning(true);

        setTimeout(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setTransitioning(false);
        }, 1000);
    }, [images.length]);

    useEffect(() => {
        // Set mounted state
        setMounted(true);

        // Setup image rotation interval
        const interval = setInterval(rotateImages, 5000);

        // Cleanup interval on unmount
        return () => clearInterval(interval);
    }, [rotateImages]);

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Current and next background images with simplified transitions */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${images[currentImageIndex]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: transitioning ? 0 : 1
                }}
            />
            <div
                className="absolute inset-0 z-0 transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${images[(currentImageIndex + 1) % images.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: transitioning ? 1 : 0
                }}
            />

            {/* Overlay with simplified gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content with simplified animations */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                {mounted && (
                    <>
                        <h1 className="text-2xl md:text-6xl lg:text-5xl font-serif mb-5 max-w-2xl leading-tight">
                            {/* Restored word-by-word animation */}
                            <span className="inline-block animate-fadeInDown" style={{animationDelay: '300ms', animationFillMode: 'forwards', opacity: '0'}}>Creating</span>{' '}
                            <span className="inline-block animate-fadeInDown" style={{animationDelay: '500ms', animationFillMode: 'forwards', opacity: '0'}}>Unforgettable</span>{' '}
                            <span className="inline-block animate-fadeInDown" style={{animationDelay: '700ms', animationFillMode: 'forwards', opacity: '0'}}>Moments</span>{' '}
                            <span className="inline-block animate-fadeInDown" style={{animationDelay: '900ms', animationFillMode: 'forwards', opacity: '0'}}>with</span>{' '}
                            <span className="inline-block animate-fadeInDown" style={{animationDelay: '1000ms', animationFillMode: 'forwards', opacity: '0'}}>Perfection</span>
                        </h1>

                        <p className="text-lg md:text-xl max-w-2xl mb-16 drop-shadow-md animate-fadeInUp"
                           style={{animationDelay: '1200ms', animationFillMode: 'forwards', opacity: '0'}}>
                            We craft exceptional events tailored to your dreams. From concept to execution, we make your event truly special.
                        </p>

                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 animate-fadeIn"
                             style={{animationDelay: '1500ms', animationFillMode: 'forwards', opacity: '0'}}>
                            <Link
                                href="/contact"
                                className={`px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                                    activeButton === 'event'
                                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                                        : 'bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400'
                                }`}
                                onClick={() => setActiveButton('event')}
                            >
                                Plan Your Event
                            </Link>
                            <Link
                                href="/gallery"
                                className={`px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 ${
                                    activeButton === 'gallery'
                                        ? 'bg-yellow-400 text-black shadow-lg shadow-yellow-400/50'
                                        : 'bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400'
                                }`}
                                onClick={() => setActiveButton('gallery')}
                            >
                                View Our Work
                            </Link>
                        </div>
                    </>
                )}
            </div>

            {/* Simplified gradient at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent z-5"></div>

            {/* Add back a limited number of floating particles */}
            {mounted && (
                <>
                    <div className="absolute w-3 h-3 rounded-full bg-yellow-400/30 top-1/4 left-1/4 z-1"
                         style={{animation: 'floatSlow 8s ease-in-out infinite'}}></div>
                    <div className="absolute w-2 h-2 rounded-full bg-yellow-400/30 top-1/3 left-2/3 z-1"
                         style={{animation: 'floatMedium 6s ease-in-out infinite'}}></div>
                </>
            )}

            {/* Add back essential animations */}
            <style jsx>{`
                @keyframes fadeInDown {
                    from {
                        opacity: 0;
                        transform: translateY(-20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                @keyframes floatSlow {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }
                
                @keyframes floatMedium {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-15px) translateX(-10px);
                    }
                }
                
                .animate-fadeInDown {
                    animation: fadeInDown 0.8s ease-out;
                }
                
                .animate-fadeInUp {
                    animation: fadeInUp 0.8s ease-out;
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.8s ease-out;
                }
            `}</style>
        </div>
    );
}