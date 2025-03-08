'use client';

import React, { useState, useEffect } from 'react';

const TestimonialImpact = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [counters, setCounters] = useState([0, 0, 0, 0]);

    const stats = [
        {
            id: 1,
            number: "10+",
            label: "Years of Experience",
        },
        {
            id: 2,
            number: "200+",
            label: "Successful Events",
        },
        {
            id: 3,
            number: "300+",
            label: "Vendors & Partners",
        },
        {
            id: 4,
            number: "98%",
            label: "Customer Satisfaction",
        },
    ];

    // Observer for scroll animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        const section = document.getElementById('impact-section');
        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);



    return (
        <section id="impact-section" className="py-16 bg-white relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-blue-50 opacity-70"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-50 opacity-60"></div>

            <div className="container mx-auto px-4 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-900 relative">
                    Impact in Numbers
                    <span className={`block w-24 h-1 bg-amber-400 mx-auto mt-4 transform transition-all duration-1000 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className={`flex flex-col items-center transform transition-all duration-700 ${
                                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                            }`}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-100 to-blue-100 flex items-center justify-center mb-4 shadow-lg">
                                <p className="text-3xl md:text-5xl font-bold text-gray-900">{isVisible ? stat.number : '0'}</p>
                            </div>
                            <p className="text-gray-700 text-sm md:text-base font-medium bg-gradient-to-r from-amber-500 to-blue-500 bg-clip-text text-transparent">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialImpact;