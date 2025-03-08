'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';
import GalleryRow from './GalleryRow';
import { galleryData } from './galleryConfig'; // Import from your config file

interface GalleryImagesProps {
    activeCategory: string;
}

const GalleryImages: React.FC<GalleryImagesProps> = ({ activeCategory }) => {
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

    // Get gallery rows for active category (fallback to Weddings if category doesn't exist)
    const galleryRows = galleryData[activeCategory] || galleryData['Weddings'];

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
                    key={`${activeCategory}-row-${index}`}
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