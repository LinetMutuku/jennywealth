'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';
import GalleryRow from './GalleryRow';

// Define the type for row layouts
type RowLayoutType = 'two-small-one-big' | 'one-big-two-small';

// Define an interface for image objects
interface ImageObject {
    src: string;
    alt: string;
}

// Define an interface for gallery row
interface GalleryRowConfig {
    layout: RowLayoutType;
    images: {
        small1?: ImageObject;
        small2?: ImageObject;
        big?: ImageObject;
    };
}

const GalleryImages = () => {
    // State for the modal
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    // Function to handle opening the modal
    const handleShareImage = (imageSrc: string) => {
        setSelectedImage(imageSrc);
        setIsModalOpen(true);
    };

    // Function to handle closing the modal
    const closeShareModal = () => {
        setIsModalOpen(false);
        setSelectedImage(null);
    };

    const galleryRows: GalleryRowConfig[] = [
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/wedding-reception.png',
                    alt: 'Elegant wedding reception setup'
                },
                small2: {
                    src: '/assets/couple-portrait.png',
                    alt: 'Wedding couple portrait'
                },
                big: {
                    src: '/assets/wedding-couple.png',
                    alt: 'Beautiful couple portrait at wedding ceremony'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/garden-setup.png',
                    alt: 'Garden wedding setup with floral arrangements'
                },
                small1: {
                    src: '/assets/traditional-wedding.png',
                    alt: 'Traditional wedding ceremony with couple'
                },
                small2: {
                    src: '/assets/wedding-stage.png',
                    alt: 'Decorated wedding stage with lighting'
                }
            }
        },
        // Row 3 - adjusted for better visibility of faces
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/men-in-suits.png',
                    alt: 'Men in suits at wedding ceremony'
                },
                small2: {
                    src: '/assets/man-in-tux.png',
                    alt: 'Groom in tuxedo posing'
                },
                big: {
                    src: '/assets/bride-in-dress.png',
                    alt: 'Beautiful bride in wedding dress'
                }
            }
        },
        {
            layout: 'one-big-two-small',
            images: {
                big: {
                    src: '/assets/reception-tables-1.png',
                    alt: 'Elegant reception table setting with centerpieces'
                },
                small1: {
                    src: '/assets/reception-tables-2.png',
                    alt: 'Banquet hall setup for wedding reception'
                },
                small2: {
                    src: '/assets/table-centerpiece.png',
                    alt: 'Floral table centerpiece design with candles'
                }
            }
        },
        // Row 5 - adjusted for better visibility of faces
        {
            layout: 'two-small-one-big',
            images: {
                small1: {
                    src: '/assets/wedding-seating.png',
                    alt: 'Wedding ceremony seating arrangement'
                },
                small2: {
                    src: '/assets/traditional-couple-1.png',
                    alt: 'Traditional couple in ceremonial attire'
                },
                big: {
                    src: '/assets/traditional-couple-2.png',
                    alt: 'Traditional couple in purple ceremonial attire'
                }
            }
        }
    ];

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 py-8">
            {/* Share Modal */}
            <ShareModal
                isOpen={isModalOpen}
                onClose={closeShareModal}
                image={selectedImage}
            />

            {/* Gallery Rows */}
            {galleryRows.map((row, index) => (
                <GalleryRow
                    key={index}
                    layout={row.layout}
                    images={row.images}
                    onShareImage={handleShareImage}
                    isLastRow={index === galleryRows.length - 1}
                />
            ))}
        </div>
    );
};

export default GalleryImages;