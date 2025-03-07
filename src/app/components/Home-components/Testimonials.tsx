'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

// Define type for testimonial ID
type TestimonialId = number | null;

// Define testimonial interface
interface Testimonial {
    id: number;
    image: string;
    text: string;
    name: string;
}

const Testimonials = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTestimonial, setActiveTestimonial] = useState<TestimonialId>(null);
    const sectionRef = useRef<HTMLElement | null>(null);

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

    const testimonials: Testimonial[] = [
        {
            id: 1,
            image: "/assets/testimonial-1.jpeg",
            text: "Jennywealth made our wedding truly magical! Every detail was flawless, and the experience was beyond our expectations.",
            name: "Sophia & Daniel, Newlyweds"
        },
        {
            id: 2,
            image: "/assets/testimonial-2.jpeg",
            text: "I wanted an intimate and elegant dinner party for my closest friends, and Jennywealth delivered perfection. They are simply the best in the game.",
            name: "James K., Private Client"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden"
        >
            {/* Decorative elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/5 rounded-full transform -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-400/5 rounded-full transform translate-y-1/2 -translate-x-1/2"></div>

                {/* Animated quote symbols */}
                <div className={`absolute top-20 left-1/4 text-yellow-300/20 text-9xl transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-20'
                }`} style={{ fontFamily: 'serif' }}>
                    "
                </div>
                <div className={`absolute bottom-20 right-1/4 text-yellow-300/20 text-9xl transition-all duration-1000 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`} style={{ fontFamily: 'serif' }}>
                    "
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className={`text-center mb-12 transition-all duration-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
                }`}>
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black relative inline-block">
                        What Our Clients Say
                        <span className={`absolute bottom-0 left-0 h-1 bg-yellow-400 transition-all duration-1000 ease-out delay-300 ${
                            isVisible ? 'w-full' : 'w-0'
                        }`}></span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`bg-white p-6 rounded-lg shadow-lg flex relative group overflow-hidden transition-all duration-500 transform ${
                                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
                            }`}
                            style={{ transitionDelay: `${300 + index * 200}ms` }}
                            onMouseEnter={() => setActiveTestimonial(testimonial.id)}
                            onMouseLeave={() => setActiveTestimonial(null)}
                        >
                            {/* Background animation effect */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-yellow-50 to-transparent transition-opacity duration-500 ${
                                activeTestimonial === testimonial.id ? 'opacity-100' : 'opacity-0'
                            }`}></div>

                            {/* Corner accents */}
                            <div className={`absolute top-0 left-0 w-10 h-10 border-t-2 border-l-2 border-yellow-400 transition-all duration-500 transform ${
                                activeTestimonial === testimonial.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}></div>
                            <div className={`absolute bottom-0 right-0 w-10 h-10 border-b-2 border-r-2 border-yellow-400 transition-all duration-500 transform ${
                                activeTestimonial === testimonial.id ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                            }`}></div>

                            <div className="flex-shrink-0 mr-6 relative">
                                <div className={`absolute inset-0 rounded-full bg-yellow-400 transform scale-0 transition-transform duration-500 ${
                                    activeTestimonial === testimonial.id ? 'scale-110' : ''
                                }`}></div>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name.split(',')[0]}
                                    className={`w-24 h-24 rounded-full object-cover relative z-10 transition-transform duration-500 ${
                                        activeTestimonial === testimonial.id ? 'scale-95' : ''
                                    }`}
                                />
                            </div>
                            <div className="relative z-10">
                                <p className="text-gray-700 mb-4 relative">
                                    {testimonial.text}
                                    <span className={`absolute bottom-0 left-0 h-0.5 bg-gray-200 transition-all duration-1000 ease-out ${
                                        activeTestimonial === testimonial.id ? 'w-full' : 'w-0'
                                    }`}></span>
                                </p>
                                <p className={`font-medium transition-all duration-500 ${
                                    activeTestimonial === testimonial.id ? 'text-yellow-500' : 'text-yellow-400'
                                }`}>{testimonial.name}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={`text-center mt-10 transition-all duration-700 delay-700 transform ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}>
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center text-yellow-500 font-medium group"
                    >
                        <span className="relative">
                            Read More Reviews
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300"></span>
                        </span>
                        <svg
                            className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-2"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Animated particles */}
            <div className={`absolute w-2 h-2 rounded-full bg-yellow-300/40 top-1/3 left-1/4 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ animation: 'float 8s ease-in-out infinite' }}></div>
            <div className={`absolute w-3 h-3 rounded-full bg-yellow-300/30 top-2/3 right-1/3 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ animation: 'float 12s ease-in-out infinite', animationDelay: '1s' }}></div>
            <div className={`absolute w-4 h-4 rounded-full bg-yellow-300/20 bottom-1/4 right-1/4 transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`} style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '2s' }}></div>

            {/* Custom animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% {
                        transform: translateY(0) translateX(0);
                    }
                    50% {
                        transform: translateY(-20px) translateX(10px);
                    }
                }
            `}</style>
        </section>
    );
};

export default Testimonials;