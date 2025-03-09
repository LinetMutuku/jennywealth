'use client';

import React, { useState, useEffect } from 'react';

const Entertainment = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    // Animation on component mount
    useEffect(() => {
        setIsVisible(true);
    }, []);

    return (
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center overflow-hidden">
            {/* Image Section with fade-in and subtle zoom on hover */}
            <div
                className={`w-full md:w-1/2 transform transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                }`}
            >
                <div
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-lg transition-transform duration-700 ease-in-out"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img
                        src="/assets/entertainment.jpeg"
                        alt="Entertainment & Catering"
                        className={`w-full h-full object-cover rounded-lg transition-all duration-700 ease-in-out ${
                            isHovered ? 'scale-110 brightness-110' : 'scale-100'
                        }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-transparent to-black/30 opacity-0 transition-opacity duration-700 ${
                        isHovered ? 'opacity-100' : ''
                    }`}></div>
                </div>
            </div>

            {/* Content Section with staggered animation */}
            <div
                className={`w-full md:w-1/2 space-y-4 transform transition-all duration-1000 delay-300 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                }`}
            >
                <h3 className={`text-2xl md:text-3xl font-serif font-medium text-gray-900 transform transition-all duration-700 delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    Entertainment & Catering
                </h3>
                <p className={`text-gray-600 leading-relaxed transform transition-all duration-700 delay-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                    Great entertainment and food leave a lasting impression. We provide top-tier live performances, DJs, speakers, and customized music selection to suit your event ambiance. Additionally, we partner with renowned caterers and chefs to create exceptional menu tailored to your event style—whether it's a fine-dining experience, buffet, cocktail party, or gourmet fusion cuisine.
                </p>
                <a
                    href="/contact"
                    className={`relative mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-all duration-300 overflow-hidden text-sm font-medium group transform delay-900 inline-block ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                >
                    <span className="relative z-10">Book Now</span>
                    <span className="absolute inset-0 bg-amber-600 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                </a>
            </div>
        </div>
    );
};

export default Entertainment;