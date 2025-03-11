'use client';

import Link from 'next/link';
import { useState } from 'react';

const Services = () => {
    // We'll use this approach to detect client-side rendering without useEffect
    // This works because the initial state is false, then the component re-renders once on client
    const [hasMounted, setHasMounted] = useState(false);

    // This will trigger once after initial render (only on client-side)
    if (!hasMounted && typeof window !== 'undefined') {
        // Schedule the state update for the next microtask to avoid React warnings
        // This is more performant than useEffect for this specific use case
        Promise.resolve().then(() => setHasMounted(true));
    }

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/5 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text content with enhanced sequential animations */}
                    <div className="transform transition-all duration-1000 ease-out"
                         style={{
                             opacity: hasMounted ? 1 : 0,
                             transform: hasMounted ? 'translateX(0)' : 'translateX(-2rem)',
                             transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
                         }}>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black relative inline-block">
                            <span className="relative z-10 reveal-text"
                                  style={{
                                      clipPath: hasMounted ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
                                      transition: 'clip-path 1s cubic-bezier(0.77, 0, 0.175, 1) 0.2s'
                                  }}>
                                Our Expert Event Management Services
                            </span>
                            <span className="absolute bottom-0 left-0 h-1 bg-yellow-400"
                                  style={{
                                      width: hasMounted ? '100%' : '0%',
                                      transition: 'width 1s ease-out 1s'
                                  }}></span>
                        </h2>

                        <p className="text-gray-700 mb-8 reveal-text"
                           style={{
                               opacity: hasMounted ? 1 : 0,
                               transform: hasMounted ? 'translateY(0)' : 'translateY(1rem)',
                               transition: 'opacity 0.8s ease-out 0.4s, transform 0.8s ease-out 0.4s'
                           }}>
                            We handle every detail, from event conceptualization and budget planning to venue coordination, décor, and on-site management, ensuring a seamless and unforgettable experience.
                        </p>

                        <div style={{
                            opacity: hasMounted ? 1 : 0,
                            transform: hasMounted ? 'translateY(0)' : 'translateY(1rem)',
                            transition: 'opacity 0.8s ease-out 0.6s, transform 0.8s ease-out 0.6s'
                        }}>
                            <Link
                                href="/services"
                                className="relative inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium overflow-hidden group"
                            >
                                <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                                    View Our Services
                                </span>
                                <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Image with interactive 3D effects */}
                    <div
                        className="relative overflow-hidden rounded shadow-2xl transform transition-all duration-1000 group"
                        style={{
                            opacity: hasMounted ? 1 : 0,
                            transform: hasMounted ? 'translateX(0) rotate(0)' : 'translateX(2rem) rotate(3deg)',
                            transition: 'opacity 1s ease-out 0.3s, transform 1s ease-out 0.3s'
                        }}
                        onMouseMove={(e) => {
                            if (!hasMounted) return;
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width;
                            const y = (e.clientY - rect.top) / rect.height;

                            // Apply the transform to the image directly
                            const img = e.currentTarget.querySelector('img');
                            if (img) {
                                img.style.transform = `perspective(1000px) rotateX(${(y - 0.5) * -5}deg) rotateY(${(x - 0.5) * 5}deg)`;
                            }
                        }}
                        onMouseLeave={(e) => {
                            // Reset transform on mouse leave
                            const img = e.currentTarget.querySelector('img');
                            if (img) {
                                img.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
                            }
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full z-20 pointer-events-none shimmer-effect"
                             style={{
                                 animation: hasMounted ? 'shimmer 3s infinite' : 'none',
                                 animationDelay: '1s'
                             }}></div>

                        <img
                            src="/assets/servicehome.jpeg"
                            alt="Elegant event setting with chandeliers"
                            className="w-full h-80 object-cover object-center rounded transition-transform duration-700 group-hover:scale-110"
                            style={{ objectPosition: "center top" }}
                            width={600}
                            height={320}
                        />

                        {/* Decorative corner elements with sequential appearance */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                             style={{
                                 transitionDelay: hasMounted ? '0ms' : '800ms'
                             }}></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500"
                             style={{
                                 transitionDelay: hasMounted ? '0ms' : '1000ms'
                             }}></div>
                    </div>
                </div>
            </div>

            {/* Enhanced animation styles */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                /* Accessibility - disable animations for users who prefer reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .shimmer-effect {
                        animation: none !important;
                    }
                    
                    * {
                        transition-duration: 0.001s !important;
                        animation-duration: 0.001s !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;