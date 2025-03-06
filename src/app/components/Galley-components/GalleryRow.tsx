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

    const getOptimalHeight = (imageType: 'small' | 'big', alt: string) => {
        const altText = alt.toLowerCase();

        if (imageType === 'small') {
            if (altText.includes('traditional')) {
                return "h-[250px]";
            }

            if (altText.includes('bride')) {
                return "h-[260px]";
            }

            if (altText.includes('couple')) {
                return "h-[240px]";
            }

            if (altText.includes('men') || altText.includes('man') || altText.includes('groom')) {
                return "h-[250px]";
            }


            return "h-[220px]";
        } else {
            if (altText.includes('bride')) {
                return "h-[520px]";
            }

            if (altText.includes('traditional')) {
                return "h-[510px]";
            }

            if (altText.includes('couple')) {
                return "h-[500px]";
            }
            if (altText.includes('men') || altText.includes('man') || altText.includes('groom')) {
                return "h-[500px]";
            }

            return "h-[456px]";
        }
    };

    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${isLastRow ? '' : 'mb-10'}`}>
            {layout === 'two-small-one-big' ? (
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