'use client';

import React, { useState } from 'react';
import GalleryImages from './GalleryImages';
import { galleryData } from './GalleryConfig';

// Get all categories from galleryData - ensure they exist
const CATEGORIES = Object.keys(galleryData || {});

const GalleryLayout = () => {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState('right');

    // Current active category with fallback to prevent "undefined"
    const activeCategory = CATEGORIES[currentCategoryIndex] || CATEGORIES[0] || 'Weddings';

    // Navigation functions with enhanced animation sequence
    const goToPrevious = () => {
        if (isAnimating) return;

        setAnimationDirection('left');
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentCategoryIndex((prev) =>
                prev === 0 ? CATEGORIES.length - 1 : prev - 1
            );

            setTimeout(() => {
                setIsAnimating(false);
            }, 400);
        }, 300);
    };

    const goToNext = () => {
        if (isAnimating) return;

        setAnimationDirection('right');
        setIsAnimating(true);

        setTimeout(() => {
            setCurrentCategoryIndex((prev) =>
                prev === CATEGORIES.length - 1 ? 0 : prev + 1
            );

            setTimeout(() => {
                setIsAnimating(false);
            }, 400);
        }, 300);
    };

    return (
        <div className="w-full bg-white">
            <div className="w-full max-w-[1240px] mx-auto px-4 relative">
                {/* Clean, simple header with enhanced styling and animation */}
                <div className="mt-6 mb-8 flex justify-between items-center">
                    <div className="animate-fadeIn">
                        <h2 className="text-3xl font-bold text-gray-900 bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent transition-all duration-500 hover:scale-105 transform">Our Gallery</h2>
                        <p className="text-gray-600 mt-1 hover:text-amber-600 transition-colors duration-300">Explore our stunning collection</p>
                    </div>

                    {/* High-visibility navigation controls with enhanced animation and color */}
                    <div className="flex space-x-2">
                        <button
                            onClick={goToPrevious}
                            disabled={isAnimating}
                            className="w-9 h-9 bg-gradient-to-r from-sky-100 to-blue-200 hover:from-sky-200 hover:to-blue-300 rounded-full
                                       flex items-center justify-center shadow-lg hover:shadow-blue-100/50
                                       transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            aria-label="Previous images"
                        >
                            <span className="text-blue-500 text-base font-medium transform transition-transform hover:-translate-x-[1px]">&lt;</span>
                        </button>

                        <button
                            onClick={goToNext}
                            disabled={isAnimating}
                            className="w-9 h-9 bg-gradient-to-r from-sky-100 to-blue-200 hover:from-sky-200 hover:to-blue-300 rounded-full
                                       flex items-center justify-center shadow-lg hover:shadow-blue-100/50
                                       transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                            aria-label="Next images"
                        >
                            <span className="text-blue-500 text-base font-medium transform transition-transform hover:translate-x-[1px]">&gt;</span>
                        </button>
                    </div>
                </div>

                {/* Gallery container with enhanced animations */}
                <div className="relative overflow-hidden">
                    <div
                        className={`
                            transition-all duration-700 ease-in-out
                            ${isAnimating
                            ? animationDirection === 'right'
                                ? 'opacity-0 transform translate-x-16 rotate-2'
                                : 'opacity-0 transform -translate-x-16 -rotate-2'
                            : 'opacity-100 transform translate-x-0 rotate-0'
                        }
                        `}
                    >
                        {/* Pass the activeCategory prop to GalleryImages */}
                        <GalleryImages activeCategory={activeCategory} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryLayout;