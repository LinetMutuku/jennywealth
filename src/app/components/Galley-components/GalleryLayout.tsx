'use client';
import React, { useState, useEffect } from 'react';
import GalleryImages from './GalleryImages';
import { categoryDescriptions } from './galleryConfig';

const CATEGORIES = [
    'Weddings',
    'Corporate Events',
    'Birthday Celebrations',
    'Luxury Dining',
    'Social Events'
];

const GalleryLayout = () => {
    const [activeCategory, setActiveCategory] = useState('Weddings');
    const [isAnimating, setIsAnimating] = useState(false);
    const [animationDirection, setAnimationDirection] = useState('right');

    // Function to determine animation direction
    const determineDirection = (newCategory: string) => {
        const currentIndex = CATEGORIES.indexOf(activeCategory);
        const newIndex = CATEGORIES.indexOf(newCategory);
        return newIndex > currentIndex ? 'right' : 'left';
    };

    // Handle category change with animation
    const handleCategoryChange = (category: string) => {
        if (category === activeCategory || isAnimating) return;

        // Set animation direction
        setAnimationDirection(determineDirection(category));

        // Start animation sequence
        setIsAnimating(true);

        // Change category after initial animation
        setTimeout(() => {
            setActiveCategory(category);

            // End animation sequence
            setTimeout(() => {
                setIsAnimating(false);
            }, 300);
        }, 300);
    };

    // Get current category description
    const currentDescription = categoryDescriptions[activeCategory] || categoryDescriptions['Weddings'];

    return (
        <div className="w-full bg-white">
            {/* Category tabs with animated indicator */}
            <div className="w-full max-w-[1240px] mx-auto border-b mb-8 relative">
                <div className="flex overflow-x-auto">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-4 text-base font-medium whitespace-nowrap transition-all duration-300 relative ${
                                activeCategory === category
                                    ? 'text-[#E0B14B]'
                                    : 'text-gray-600 hover:text-[#E0B14B]'
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                            {activeCategory === category && (
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E0B14B] transform scale-x-100 transition-transform duration-300"></span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Animated gold underline indicator */}
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200"></div>
            </div>

            {/* Gallery container with animations */}
            <div className="relative overflow-hidden">
                <div
                    className={`
                        transition-all duration-500 ease-in-out
                        ${isAnimating
                        ? animationDirection === 'right'
                            ? 'opacity-0 transform translate-x-16'
                            : 'opacity-0 transform -translate-x-16'
                        : 'opacity-100 transform translate-x-0'
                    }
                    `}
                >
                    <div className="w-full max-w-[1240px] mx-auto px-4">
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeCategory}</h2>
                            <p className="text-gray-600">Explore our stunning {activeCategory.toLowerCase()} gallery</p>
                        </div>

                        {/* Pass the activeCategory prop to GalleryImages */}
                        <GalleryImages activeCategory={activeCategory} />

                        {/* Category description */}
                        <div className={`
                            mt-12 p-6 bg-gray-50 rounded-lg border-l-4 border-[#E0B14B] shadow-md
                            transition-all duration-500 ease-in-out
                            ${isAnimating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
                        `}>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">About our {activeCategory}</h3>
                            <p className="text-gray-700">
                                {currentDescription}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryLayout;