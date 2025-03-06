'use client';
import React from 'react';
import GalleryImageItem from './GalleryImageItem';

type RowLayoutType = 'two-small-one-big' | 'one-big-two-small';

type GalleryRowProps = {
    layout: RowLayoutType;
    images: {
        small1: { src: string; alt: string };
        small2: { src: string; alt: string };
        big: { src: string; alt: string };
    };
    onShareImage: (src: string) => void;
    isLastRow?: boolean;
};

const GalleryRow: React.FC<GalleryRowProps> = ({layout, images, onShareImage, isLastRow = false
                                               }) => {
    // Function to determine optimal height for different image types and content
    const getOptimalHeight = (imageType: 'small' | 'big', alt: string) => {
        const altText = alt.toLowerCase();

        // More specific height adjustments based on content
        if (imageType === 'small') {
            // For traditional wedding images (often full-body shots)
            if (altText.includes('traditional')) {
                return "h-[250px]";
            }

            // For bride images with dress
            if (altText.includes('bride')) {
                return "h-[260px]";
            }

            // For standard couple shots
            if (altText.includes('couple')) {
                return "h-[240px]";
            }

            // For men/groom
            if (altText.includes('men') || altText.includes('man') || altText.includes('groom')) {
                return "h-[250px]";
            }

            // Default for other small images
            return "h-[220px]";
        } else {
            // For big images
            // For bride images with full dress
            if (altText.includes('bride')) {
                return "h-[520px]";
            }

            // For traditional couple images
            if (altText.includes('traditional')) {
                return "h-[510px]";
            }

            // For standard couple shots
            if (altText.includes('couple')) {
                return "h-[500px]";
            }

            // For men/groom
            if (altText.includes('men') || altText.includes('man') || altText.includes('groom')) {
                return "h-[500px]";
            }

            // Default for other big images
            return "h-[456px]";
        }
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${isLastRow ? '' : 'mb-10'}`}>
            {layout === 'two-small-one-big' ? (
                // Two small images on the left, one big on the right
                <>
                    <div className="md:col-span-6 grid grid-rows-2 gap-6">
                        <GalleryImageItem
                            src={images.small1.src}
                            alt={images.small1.alt}
                            height={getOptimalHeight('small', images.small1.alt)}
                            onShare={onShareImage}
                        />
                        <GalleryImageItem
                            src={images.small2.src}
                            alt={images.small2.alt}
                            height={getOptimalHeight('small', images.small2.alt)}
                            onShare={onShareImage}
                        />
                    </div>
                    <div className="md:col-span-6">
                        <GalleryImageItem
                            src={images.big.src}
                            alt={images.big.alt}
                            height={getOptimalHeight('big', images.big.alt)}
                            onShare={onShareImage}
                        />
                    </div>
                </>
            ) : (
                // One big image on the left, two small on the right
                <>
                    <div className="md:col-span-6">
                        <GalleryImageItem
                            src={images.big.src}
                            alt={images.big.alt}
                            height={getOptimalHeight('big', images.big.alt)}
                            onShare={onShareImage}
                        />
                    </div>
                    <div className="md:col-span-6 grid grid-rows-2 gap-6">
                        <GalleryImageItem
                            src={images.small1.src}
                            alt={images.small1.alt}
                            height={getOptimalHeight('small', images.small1.alt)}
                            onShare={onShareImage}
                        />
                        <GalleryImageItem
                            src={images.small2.src}
                            alt={images.small2.alt}
                            height={getOptimalHeight('small', images.small2.alt)}
                            onShare={onShareImage}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default GalleryRow;