'use client';

import React, { useState } from 'react';
import ShareModal from './ShareModal';
import GalleryRow from './GalleryRow';
import { galleryData } from './GalleryConfig';

interface GalleryImagesProps {
    activeCategory: string;
}

const GalleryImages: React.FC<GalleryImagesProps> = ({ activeCategory }) => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [modalPosition, setModalPosition] = useState<{
        x: number,
        y: number,
        width: number,
        height: number
    } | null>(null);

    return (
        <div className="w-full max-w-[1240px] mx-auto px-4 py-8">
            {/* Share Modal with image center position */}
            <ShareModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setTimeout(() => {
                        setModalPosition(null);
                        setSelectedImage(null);
                    }, 200);
                }}
                image={selectedImage}
                position={modalPosition}
            />

            {/* Gallery Rows */}
            {(galleryData[activeCategory] || galleryData['Weddings']).map((row, index) => (
                <GalleryRow
                    key={`${activeCategory}-row-${index}`}
                    layout={row.layout}
                    images={row.images}
                    onShareImage={(src, position) => {
                        setSelectedImage(src);
                        setModalPosition(position);
                        setIsModalOpen(true);
                    }}
                    isLastRow={index === (galleryData[activeCategory] || galleryData['Weddings']).length - 1}
                />
            ))}
        </div>
    );
};

export default GalleryImages;