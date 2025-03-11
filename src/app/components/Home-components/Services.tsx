'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Services = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
            {/* Simplified background elements - removed animations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/5 rounded-full mix-blend-multiply filter blur-xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text content with simplified animations */}
                    <div className={mounted ? "opacity-100" : "opacity-0"}>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black relative inline-block">
                            <span className="relative z-10">Our Expert Event Management Services</span>
                            <span className={mounted ? "absolute bottom-0 left-0 h-1 bg-yellow-400 w-full" : "absolute bottom-0 left-0 h-1 bg-yellow-400 w-0"}></span>
                        </h2>

                        <p className={mounted ? "text-gray-700 mb-8" : "text-gray-700 mb-8 opacity-0"}>
                            We handle every detail, from event conceptualization and budget planning to venue coordination, décor, and on-site management, ensuring a seamless and unforgettable experience.
                        </p>

                        <div className={mounted ? "" : "opacity-0"}>
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

                    {/* Image with restored interactive effects */}
                    <div
                        className={`relative overflow-hidden rounded shadow-2xl transform transition-all duration-1000 group ${
                            mounted ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-16 rotate-3'
                        }`}
                        onMouseMove={(e) => {
                            if (!mounted) return;
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

                        {/* Animated overlay with shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full z-20 pointer-events-none"
                             style={{ animation: mounted ? 'shimmer 3s infinite' : 'none' }}></div>

                        {/* Use Next.js Image for optimization */}
                        <img
                            src="/assets/servicehome.jpeg"
                            alt="Elegant event setting with chandeliers"
                            className="w-full h-80 object-cover object-center rounded transition-transform duration-700 group-hover:scale-110"
                            style={{ objectPosition: "center top" }}
                            width={600}
                            height={320}
                        />

                        {/* Decorative corner elements */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Add back selected animation styles */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                /* Disable animations for users who prefer reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .animate-shimmer-slow,
                    .animate-float-slow,
                    .animate-float-medium,
                    .animate-float-fast {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
};

export default Services;