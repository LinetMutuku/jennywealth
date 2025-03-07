import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

export default function About() {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-white overflow-hidden"
        >
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Image with animations */}
                    <div className={`relative transform transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                    }`}>
                        <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse-slow"></div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400/30 rounded-full animate-pulse-medium"></div>

                        <img
                            src="/assets/Abouthome.jpeg"
                            alt="Event planners discussing details"
                            className="w-full h-auto object-cover rounded shadow-lg relative z-10 transform transition-transform duration-700 hover:scale-105"
                        />

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-yellow-400/20 to-transparent rounded opacity-0 hover:opacity-100 transition-opacity duration-500 z-20"></div>
                    </div>

                    {/* Content with staggered animations */}
                    <div className="flex flex-col justify-center text-dark">
                        <h2 className={`text-3xl md:text-4xl font-serif mb-6 text-black relative transform transition-all duration-700 delay-300 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            About Jennywealth: Excellence in Every Event
                            <span className="absolute -bottom-2 left-0 w-16 h-1 bg-yellow-400 rounded transform transition-all delay-700 duration-1000 ease-out origin-left scale-x-0 group-hover:scale-x-100"></span>
                        </h2>

                        <p className={`text-gray-700 mb-6 transform transition-all duration-700 delay-500 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            With over 10 years of experience, we specialize in curating unique event experiences that leave lasting memories.
                            From corporate gatherings to extravagant weddings, we ensure precision in every detail.
                        </p>

                        <div className="space-y-4 mb-8">
                            {[
                                'Over 200+ successful events hosted',
                                'Certified event planners with top industry expertise',
                                'Award-winning customer service'
                            ].map((text, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start transform transition-all duration-500 ${
                                        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                                    }`}
                                    style={{ transitionDelay: `${700 + (index * 200)}ms` }}
                                >
                                    <div className="flex-shrink-0 text-yellow-400 mr-3 animate-bounce-subtle">
                                        <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">{text}</p>
                                </div>
                            ))}
                        </div>

                        <div className={`transform transition-all duration-700 delay-1200 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <Link
                                href="/about-us"
                                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium transition-all duration-300 inline-block hover:bg-yellow-500 hover:shadow-lg hover:shadow-yellow-400/30 hover:-translate-y-1 transform"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom animations */}
            <style jsx global>{`
                @keyframes bounceTiny {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-3px);
                    }
                }
                
                .animate-bounce-subtle {
                    animation: bounceTiny 2s infinite ease-in-out;
                }
                
                @keyframes pulseSlow {
                    0%, 100% {
                        opacity: 0.2;
                        transform: scale(1);
                    }
                    50% {
                        opacity: 0.3;
                        transform: scale(1.05);
                    }
                }
                
                .animate-pulse-slow {
                    animation: pulseSlow 6s infinite ease-in-out;
                }
                
                .animate-pulse-medium {
                    animation: pulseSlow 4s infinite ease-in-out;
                }
                
                /* Avoid animation for users who prefer reduced motion */
                @media (prefers-reduced-motion: reduce) {
                    .animate-bounce-subtle,
                    .animate-pulse-slow,
                    .animate-pulse-medium {
                        animation: none;
                    }
                }
            `}</style>
        </section>
    );
}