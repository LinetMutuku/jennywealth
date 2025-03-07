'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
    const sectionRef = useRef<HTMLElement | null>(null);
    const imageRef = useRef<HTMLDivElement | null>(null);

    // Track scroll position for animations
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Track mouse position for image tilt effect
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width;
            const y = (e.clientY - rect.top) / rect.height;

            setMousePosition({ x, y });
        }
    };

    // Reset image position when mouse leaves
    const handleMouseLeave = () => {
        setMousePosition({ x: 0.5, y: 0.5 });
    };

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-400/10 rounded-full mix-blend-multiply filter blur-xl animate-float-slow"></div>
                <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-400/5 rounded-full mix-blend-multiply filter blur-xl animate-float-medium"></div>
                <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-gray-200/20 rounded-full mix-blend-multiply filter blur-lg animate-float-fast"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Text content with animations */}
                    <div className={`transform transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
                    }`}>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black relative inline-block">
                            <span className="relative z-10">Our Expert Event Management Services</span>
                            <span className={`absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-1000 ease-out delay-700 ${
                                isVisible ? 'w-full' : 'w-0'
                            }`}></span>
                        </h2>

                        <p className={`text-gray-700 mb-8 transition-all duration-700 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            We handle every detail, from event conceptualization and budget planning to venue coordination, décor, and on-site management, ensuring a seamless and unforgettable experience.
                        </p>

                        <div className={`relative transition-all duration-700 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            <Link
                                href="/services"
                                className="relative inline-block bg-yellow-400 text-black px-8 py-3 rounded-full font-medium overflow-hidden group"
                            >
                                <span className="relative z-10 transition-all duration-300 group-hover:text-black">
                                    View Our Services
                                </span>
                                <span className="absolute top-0 left-0 w-full h-full bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                <span className="absolute -top-1 -right-1 w-8 h-8 bg-yellow-300 rounded-full scale-0 transition-transform duration-500 group-hover:scale-100 delay-100"></span>
                                <span className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full scale-0 transition-transform duration-500 group-hover:scale-100 delay-200"></span>
                            </Link>
                        </div>
                    </div>

                    {/* Image with interactive effects */}
                    <div
                        ref={imageRef}
                        className={`relative overflow-hidden rounded shadow-2xl transform transition-all duration-1000 group ${
                            isVisible ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-16 rotate-3'
                        }`}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                        {/* Animated overlay with shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer-slow z-20 pointer-events-none"></div>

                        <img
                            src="/assets/servicehome.jpeg"
                            alt="Elegant event setting with chandeliers"
                            className="w-full h-80 object-cover object-center rounded transition-transform duration-700 group-hover:scale-110"
                            style={{
                                objectPosition: "center top",
                                transform: `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -5}deg) rotateY(${(mousePosition.x - 0.5) * 5}deg)`
                            }}
                        />

                        {/* Decorative corner elements */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-yellow-400 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-yellow-400 rounded-br-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Custom animation styles */}
            <style jsx global>{`
                @keyframes shimmer {
                    0% {
                        transform: translateX(-100%);
                    }
                    100% {
                        transform: translateX(100%);
                    }
                }
                
                .animate-shimmer-slow {
                    animation: shimmer 3s infinite;
                }
                
                @keyframes floatSlow {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }
                
                .animate-float-slow {
                    animation: floatSlow 20s infinite ease-in-out;
                }
                
                @keyframes floatMedium {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-15px) translateX(-15px);
                    }
                }
                
                .animate-float-medium {
                    animation: floatMedium 15s infinite ease-in-out;
                }
                
                @keyframes floatFast {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-25px) translateX(15px);
                    }
                }
                
                .animate-float-fast {
                    animation: floatFast 12s infinite ease-in-out;
                }
                
                /* Accessibility considerations */
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