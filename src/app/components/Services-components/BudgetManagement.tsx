'use client';

import React, { useEffect, useState, useRef } from 'react';

const BudgetManagement = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animateNumbers, setAnimateNumbers] = useState(false);
    const componentRef = useRef(null);

    useEffect(() => {
        // Initial animation on load
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);

        // Set up intersection observer for scroll-based animations
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setAnimateNumbers(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.3 }
        );

        if (componentRef.current) {
            observer.observe(componentRef.current);
        }

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, []);

    return (
        <div ref={componentRef} className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            {/* Image Section with reveal animation */}
            <div
                className={`w-full md:w-1/2 overflow-hidden rounded-lg transform transition-all duration-1000 ease-out ${
                    isVisible
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 translate-x-12"
                }`}
            >
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/budgetmanagement.png"
                        alt="Budget Management"
                        className="w-full h-full object-cover rounded-lg transition-all duration-700 filter hover:brightness-110"
                    />
                    {/* Overlay with animated numbers */}
                    <div className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-500`}>
                        <div className="grid grid-cols-2 gap-4 text-white text-center">
                            <div className={`transition-all duration-1000 ${animateNumbers ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>
                            </div>
                            <div className={`transition-all duration-1000 delay-200 ${animateNumbers ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>

                            </div>
                            <div className={`transition-all duration-1000 delay-400 ${animateNumbers ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>

                            </div>
                            <div className={`transition-all duration-1000 delay-600 ${animateNumbers ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`}>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content Section with staggered animation */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3
                    className={`text-2xl md:text-3xl font-serif font-medium text-gray-900 transition-all duration-700 ease-out ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                    }`}
                >
                    Budget Management
                </h3>
                <p
                    className={`text-gray-600 leading-relaxed transition-all duration-700 delay-300 ease-out ${
                        isVisible
                            ? "opacity-100 translate-x-0"
                            : "opacity-0 -translate-x-8"
                    }`}
                >
                    We believe extraordinary events don't have to break the bank. Our expert budget planners ensure you get the best value without compromising quality. We help allocate funds efficiently, negotiate with vendors, and track expenses to keep your event within budget while delivering an unforgettable experience. Whether you're planning a luxury wedding, corporate event, or milestone celebration, we ensure financial transparency and smart spending.
                </p>
                <button
                    onClick={() => window.location.href = '/contact'}
                    className={`relative mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 text-sm font-medium overflow-hidden transition-all duration-300 ease-out transform hover:scale-105 hover:shadow-lg ${
                        isVisible
                            ? "opacity-100 translate-y-0 delay-500"
                            : "opacity-0 translate-y-8"
                    }`}
                >
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-amber-400 transform -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0"></span>
                </button>
            </div>
        </div>
    );
};

export default BudgetManagement;