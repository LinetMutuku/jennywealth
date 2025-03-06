'use client';
import React, { useState } from 'react';
import  GalleryImages  from './GalleryImages';

const CATEGORIES = [
    'Weddings',
    'Corporate Events',
    'Birthday Celebrations',
    'Luxury Dining',
    'Social Events'
];

const GalleryLayout = () => {
    const [activeCategory, setActiveCategory] = useState('Weddings');

    // Handle category change
    const handleCategoryChange = (category: string) => {
        setActiveCategory(category);
    };

    return (
        <div className="w-full bg-white">
            {/* Category tabs */}
            <div className="w-full max-w-[1240px] mx-auto border-b mb-8">
                <div className="flex overflow-x-auto">
                    {CATEGORIES.map((category) => (
                        <button
                            key={category}
                            className={`px-6 py-4 text-base font-medium whitespace-nowrap transition-all duration-200 ${
                                activeCategory === category
                                    ? 'text-[#E0B14B] border-b-2 border-[#E0B14B]'
                                    : 'text-gray-600 hover:text-[#E0B14B]'
                            }`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery Images - Shows the exact layout from Figma */}
            <GalleryImages />
        </div>
    );
};

export default GalleryLayout;