'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

// Define a type for the button state
type ButtonType = 'event' | 'gallery' | null;

export default function Hero() {
    const [currentImage, setCurrentImage] = useState('/assets/heroimg.jpeg');
    const [nextImage, setNextImage] = useState('');
    const [transitioning, setTransitioning] = useState(false);
    const [activeButton, setActiveButton] = useState<ButtonType>(null);
    const [animationComplete, setAnimationComplete] = useState(false);

    const images = [
        '/assets/heroimg.jpeg',
        '/assets/hero2.jpeg',
        '/assets/hero3.jpeg'
    ];

    useEffect(() => {
        // Start content animations after a short delay
        const timer = setTimeout(() => {
            setAnimationComplete(true);
        }, 500);

        // Image rotation logic
        let imageIndex = 0;
        const rotateImages = () => {
            setTransitioning(true);
            imageIndex = (imageIndex + 1) % images.length;
            setNextImage(images[imageIndex]);

            setTimeout(() => {
                setCurrentImage(images[imageIndex]);
                setTransitioning(false);
            }, 1000);
        };

        const interval = setInterval(rotateImages, 5000);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, []);

    // Animation classes for title words with staggered timing
    const wordAnimations = [
        'animate-fade-in-down delay-300',
        'animate-fade-in-down delay-500',
        'animate-fade-in-down delay-700',
        'animate-fade-in-down delay-900',
        'animate-fade-in-down delay-1000'
    ];

    return (
        <div className="relative h-screen overflow-hidden">
            {/* Background Images with improved transition */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-1000 transform scale-105"
                style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: transitioning ? 0 : 1
                }}
            />
            {nextImage && (
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-1000 transform scale-105"
                    style={{
                        backgroundImage: `url(${nextImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: transitioning ? 1 : 0
                    }}
                />
            )}

            {/* Overlay with subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-0"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content with enhanced animations */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-2xl md:text-6xl lg:text-5xl font-serif mb-5 max-w-2xl leading-tight">
                    <span className={`inline-block ${wordAnimations[0]} opacity-0`}>Creating</span>{' '}
                    <span className={`inline-block ${wordAnimations[1]} opacity-0`}>Unforgettable</span>{' '}
                    <span className={`inline-block ${wordAnimations[2]} opacity-0`}>Moments</span>{' '}
                    <span className={`inline-block ${wordAnimations[3]} opacity-0`}>with</span>{' '}
                    <span className={`inline-block ${wordAnimations[4]} opacity-0`}>Perfection</span>
                </h1>

                <p className="text-lg md:text-xl max-w-2xl mb-16 opacity-0 animate-fade-in-up delay-1200 drop-shadow-md">
                    We craft exceptional events tailored to your dreams. From concept to execution, we make your event truly special.
                </p>

                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 opacity-0 animate-fade-in delay-1500">
                    <Link
                        href="/contact"
                        className={`px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                            activeButton === 'event'
                                ? 'bg-yellow-400 text-black animate-pulse shadow-lg shadow-yellow-400/50'
                                : 'bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400'
                        }`}
                        onClick={() => setActiveButton('event')}
                    >
                        Plan Your Event
                    </Link>
                    <Link
                        href="/gallery"
                        className={`px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 ${
                            activeButton === 'gallery'
                                ? 'bg-yellow-400 text-black animate-pulse shadow-lg shadow-yellow-400/50'
                                : 'bg-transparent border-2 border-white text-white hover:bg-yellow-400 hover:text-black hover:border-yellow-400'
                        }`}
                        onClick={() => setActiveButton('gallery')}
                    >
                        View Our Work
                    </Link>
                </div>
            </div>

            {/* Animated decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/20 to-transparent z-5"></div>

            {/* Floating particles effect */}
            <div className="particle absolute w-3 h-3 rounded-full bg-yellow-400/30 animate-float-slow top-1/4 left-1/4 z-1"></div>
            <div className="particle absolute w-2 h-2 rounded-full bg-yellow-400/30 animate-float-medium top-1/3 left-2/3 z-1"></div>
            <div className="particle absolute w-4 h-4 rounded-full bg-yellow-400/30 animate-float-fast top-2/3 left-1/5 z-1"></div>

            {/* Tailwind animations */}
            <style jsx global>{`
                /* Fade in down animation */
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
                
                /* Fade in up animation */
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
                
                /* Simple fade in animation */
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }
                
                /* Floating animations for particles */
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
                
                @keyframes floatFast {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-25px) translateX(15px);
                    }
                }
                
                /* Apply the animations */
                .animate-fade-in-down {
                    animation: fadeInDown 0.8s ease-out forwards;
                }
                
                .animate-fade-in-up {
                    animation: fadeInUp 0.8s ease-out forwards;
                }
                
                .animate-fade-in {
                    animation: fadeIn 0.8s ease-out forwards;
                }
                
                .animate-float-slow {
                    animation: floatSlow 8s ease-in-out infinite;
                }
                
                .animate-float-medium {
                    animation: floatMedium 6s ease-in-out infinite;
                }
                
                .animate-float-fast {
                    animation: floatFast 4s ease-in-out infinite;
                }
                
                /* Delays */
                .delay-300 {
                    animation-delay: 300ms;
                }
                
                .delay-500 {
                    animation-delay: 500ms;
                }
                
                .delay-700 {
                    animation-delay: 700ms;
                }
                
                .delay-900 {
                    animation-delay: 900ms;
                }
                
                .delay-1000 {
                    animation-delay: 1000ms;
                }
                
                .delay-1200 {
                    animation-delay: 1200ms;
                }
                
                .delay-1500 {
                    animation-delay: 1500ms;
                }
            `}</style>
        </div>
    );
}