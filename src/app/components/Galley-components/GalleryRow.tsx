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
    onShareImage: (src: string, position: { x: number, y: number, width: number, height: number }) => void;
    isLastRow?: boolean;
};

const GalleryRow: React.FC<GalleryRowProps> = ({
                                                   layout,
                                                   images,
                                                   onShareImage,
                                                   isLastRow = false
                                               }) => {
    return (
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 ${isLastRow ? '' : 'mb-10'}`}>
            {layout === 'two-small-one-big' ? (
                <>
                    <div className="md:col-span-6 grid grid-rows-2 gap-6">
                        <GalleryImageItem
                            src={images.small1.src}
                            alt={images.small1.alt}
                            height={(() => {
                                const altText = images.small1.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                        <GalleryImageItem
                            src={images.small2.src}
                            alt={images.small2.alt}
                            height={(() => {
                                const altText = images.small2.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                    </div>
                    <div className="md:col-span-6">
                        <GalleryImageItem
                            src={images.big.src}
                            alt={images.big.alt}
                            height={(() => {
                                const altText = images.big.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                    </div>
                </>
            ) : (
                <>
                    <div className="md:col-span-6">
                        <GalleryImageItem
                            src={images.big.src}
                            alt={images.big.alt}
                            height={(() => {
                                const altText = images.big.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                    </div>
                    <div className="md:col-span-6 grid grid-rows-2 gap-6">
                        <GalleryImageItem
                            src={images.small1.src}
                            alt={images.small1.alt}
                            height={(() => {
                                const altText = images.small1.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                        <GalleryImageItem
                            src={images.small2.src}
                            alt={images.small2.alt}
                            height={(() => {
                                const altText = images.small2.alt.toLowerCase();

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
                            })()}
                            onShare={(src, position) => onShareImage(src, position)}
                        />
                    </div>
                </>
            )}
        </div>
    );
};

export default GalleryRow;