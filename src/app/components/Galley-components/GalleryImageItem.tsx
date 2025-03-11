'use client';
import React, { useState, useRef } from 'react';

type GalleryImageItemProps = {
    src: string;
    alt: string;
    height: string;
    onShare: (src: string, position: { x: number, y: number, width: number, height: number }) => void;
};

const GalleryImageItem: React.FC<GalleryImageItemProps> = ({ src, alt, height, onShare }) => {
    const imageContainerRef = useRef<HTMLDivElement>(null);
    const [imageLoaded, setImageLoaded] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            ref={imageContainerRef}
            className={`rounded-lg overflow-hidden ${height} shadow-md group relative transform transition duration-300 hover:scale-[1.01]`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image with optimized object-position */}
            {/* Special handling for birthday-setup.png */}
            {src.includes('birthday-setup.png') ? (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setImageLoaded(true)}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{
                        objectPosition: "center 30%",
                        opacity: imageLoaded ? 1 : 0
                    }}
                />
            ) : (
                <img
                    src={src}
                    alt={alt}
                    onLoad={() => setImageLoaded(true)}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{
                        objectPosition: (() => {
                            const altText = alt.toLowerCase();
                            const srcPath = src.toLowerCase();

                            // Special cases for problematic images that need specific positioning
                            if (srcPath.includes('birthday-setup.png')) {
                                return 'center center';
                            }

                            if (srcPath.includes('social-charity.png')) {
                                return 'center 10%';
                            }

                            if (srcPath.includes('birthday-entertainment.png')) {
                                return 'center 5%';
                            }

                            if (srcPath.includes('luxury-seating.png')) {
                                return 'center 15%';
                            }

                            if (srcPath.includes('couplephoto.png')) {
                                return 'center center';
                            }

                            if (srcPath.includes('weddingcouple.png')) {
                                return 'center center';
                            }

                            if (srcPath.includes('wedding-couple.png')) {
                                return 'center center';
                            }

                            // Handle birthday images
                            if (altText.includes('birthday')) {
                                return 'center center';
                            }

                            if (altText.includes('couple')) {
                                return 'center center';
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

                            if (altText.includes('corporate')) {
                                return 'center 25%';
                            }

                            if (altText.includes('setup') || altText.includes('table') || altText.includes('reception')) {
                                return 'center 40%';
                            }

                            // Default position for other images
                            return 'center 30%';
                        })(),
                        opacity: imageLoaded ? 1 : 0
                    }}
                />
            )}

            {/* Darker overlay on hover - with gradient */}
            <div
                className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                }`}
            ></div>

            {/* Share button - tracks entire image position */}
            <button
                onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();

                    // Get the entire image container position to center the modal on the image
                    if (imageContainerRef.current) {
                        const imageRect = imageContainerRef.current.getBoundingClientRect();
                        const imagePosition = {
                            x: imageRect.left,
                            y: imageRect.top,
                            width: imageRect.width,
                            height: imageRect.height
                        };

                        onShare(src, imagePosition);
                    }
                }}
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
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </button>
        </div>
    );
};

export default GalleryImageItem;