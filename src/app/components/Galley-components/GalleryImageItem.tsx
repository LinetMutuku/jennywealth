'use client';
import React, { useState } from 'react';

type GalleryImageItemProps = {
    src: string;
    alt: string;
    height: string;
    onShare: (src: string) => void;
};

const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ src, alt, height, onShare }) => {
    // State to track if image is loaded
    const [imageLoaded, setImageLoaded] = useState(true);

    // State to track hover effect
    const [isHovered, setIsHovered] = useState(false);

    // Get optimal object position based on image content
    const getObjectPosition = () => {
        const altText = alt.toLowerCase();

        if (altText.includes('couple')) {
            return 'center 25%';
        }

        if (altText.includes('bride')) {
            return 'center 15%';
        }

        if (altText.includes('traditional')) {
            return 'center 20%';
        }

        if (altText.includes('men') || altText.includes('man') || altText.includes('groom')) {
            return 'center 20%';
        }

        if (altText.includes('setup') || altText.includes('table') || altText.includes('reception')) {
            return 'center center';
        }

        return 'center';
    };

    return (
        <div
            className={`rounded-lg overflow-hidden ${height} shadow-md group relative transform transition duration-300 hover:scale-[1.01]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image with optimized object-position */}
            <img
                src={src}
                alt={alt}
                onLoad={() => setImageLoaded(true)}
                className="w-full h-full object-cover transition-opacity duration-300"
                style={{
                    objectPosition: getObjectPosition(),
                    opacity: imageLoaded ? 1 : 0
                }}
            />

            {/* Darker overlay on hover - with gradient */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            ></div>

            {/* Arrow share button - using arrow icon */}
            <button
                onClick={() => onShare(src)}
                aria-label="Share this image"
                className={`absolute bottom-4 right-4 bg-white/90 p-2.5 rounded-full shadow-lg transition-all duration-300 transform ${
                    isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#E0B14B"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M7 17l9.2-9.2M17 17V7H7"></path>
                </svg>
            </button>
        </div>
    );
};

export default GalleryImageItem;