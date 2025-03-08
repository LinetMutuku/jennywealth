'use client';

import React, { useEffect, useState } from 'react';

const EventConceptualization = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Add a small delay before starting animations
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Section with fade-in and slide-up animation */}
            <div
                className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                }`}
            >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/eventconceptualization.png"
                        alt="Event Conceptualization & Planning"
                        className="w-full h-full object-cover rounded-lg transition-transform duration-700 hover:scale-105"
                    />
                </div>
            </div>

            {/* Content Section with staggered fade-in animation */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3
                    className={`text-2xl md:text-3xl font-serif font-medium text-gray-900 transform transition-all duration-700 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Event Conceptualization & Planning
                </h3>
                <p
                    className={`text-gray-600 leading-relaxed transform transition-all duration-700 delay-300 ease-out ${
                        isVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Every great event starts with a vision. Our team works closely with you to understand your ideas, preferences, and expectations. We develop a comprehensive event strategy covering theme selection, program flow, guest experiences, and logistics to ensure a seamless and breathtaking occasion. From intimate gatherings to large-scale productions, we bring structure and creativity to every detail.
                </p>
                <button
                    onClick={() => window.location.href = '/contact'}
                    className={`mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-300 ease-out transform hover:scale-105 ${
                        isVisible
                            ? "opacity-100 translate-y-0 delay-500"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default EventConceptualization;