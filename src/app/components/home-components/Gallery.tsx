'use client';

import Link from 'next/link';
import { useState } from 'react';
import gallery1 from '@/../public/assets/gallery-1.jpeg'
import gallery2 from '@/../public/assets/gallery-2.jpeg'
import gallery3 from '@/../public/assets/gallery-3.jpeg'
import gallery4 from '@/../public/assets/gallery-4.jpeg'
import gallery5 from '@/../public/assets/gallery-5.jpeg'
import gallery6 from '@/../public/assets/gallery-6.jpeg'
import { StaticImageData } from 'next/image';

// Define TypeScript interfaces for our components
interface GalleryItemProps {
    pictures: string | StaticImageData;
    title: string;
    description: string;
}

interface GalleryItem {
    id: number;
    image: string | StaticImageData;
    title: string;
    description: string;
}

export default function Gallery() {
    const galleryItems: GalleryItem[] = [
        {
            id: 1,
            image: '/assets/gallery-1.jpeg',
            title: 'Luxury Wedding Reception',
            description: 'An elegant wedding with stunning décor and a romantic ambiance.',
        },
        {
            id: 2,
            image: '/assets/gallery-2.jpeg',
            title: 'Corporate Gala Night',
            description: 'A prestigious evening of networking, fine dining, and entertainment.',
        },
        {
            id: 3,
            image: '/assets/gallery-3.jpeg',
            title: 'Birthday Celebration',
            description: 'A stylish birthday event with luxury décor and personalized touches.',
        },
        {
            id: 4,
            image: '/assets/gallery-4.jpeg',
            title: 'Engagement Party',
            description: 'A beautifully themed engagement celebration full of charm and love.',
        },
        {
            id: 5,
            image: '/assets/gallery-5.jpeg',
            title: 'Award Ceremony',
            description: 'A grand event honoring excellence with a red carpet experience.',
        },
        {
            id: 6,
            image: '/assets/gallery-6.jpeg',
            title: 'Exclusive Dinner Party',
            description: 'An intimate evening with fine dining and elegant ambiance.',
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">A Glimpse of Our Events</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryItems.map((item) => (
                        <GalleryItem
                            key={item.id}
                            pictures={item.image}
                            title={item.title}
                            description={item.description}
                        />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Link
                        href="/gallery"
                        className="bg-yellow-400 text-black px-10 py-4 rounded-full font-medium hover:bg-yellow-500 transition-colors text-lg inline-block"
                    >
                        Explore Full Gallery
                    </Link>
                </div>
            </div>
        </section>
    );
}

// Gallery Item Component with Hover Effect
function GalleryItem({ pictures, title, description }: GalleryItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="overflow-hidden rounded-lg relative cursor-pointer h-80 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => setIsHovered(!isHovered)}
        >
            {/* Image */}
            <img
                src={pictures.toString()}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
            />

            {/* Overlay - completely hidden until hover */}
            <div
                className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 ease-in-out"
            ></div>

            {/* Content container */}
            <div
                className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-500"
            >
                {/* Title with slide-up animation */}
                <h3
                    className="text-yellow-400 text-2xl font-serif mb-2 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out"
                >
                    {title}
                </h3>

                {/* Description with fade-in animation */}
                <p
                    className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out"
                >
                    {description}
                </p>
            </div>
        </div>
    );
}