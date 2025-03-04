'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Navbar from '../Navbar';

export default function Hero() {
    const [currentImage, setCurrentImage] = useState('/assets/heroimg.jpeg');
    const [nextImage, setNextImage] = useState('');
    const [transitioning, setTransitioning] = useState(false);

    const images = [
        '/assets/heroimg.jpeg',
        '/assets/hero2.jpeg',
        '/assets/hero3.jpeg'
    ];

    useEffect(() => {
        let imageIndex = 0;

        const rotateImages = () => {
            setTransitioning(true);

            // Get next image index
            imageIndex = (imageIndex + 1) % images.length;
            setNextImage(images[imageIndex]);

            // After a short delay, complete the transition
            setTimeout(() => {
                setCurrentImage(images[imageIndex]);
                setTransitioning(false);
            }, 1000); // This should match the CSS transition duration
        };

        // Set up the interval for changing images
        const interval = setInterval(rotateImages, 5000);

        // Cleanup on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen">
            {/* Current Background Image */}
            <div
                className="absolute inset-0 z-0 transition-opacity duration-1000"
                style={{
                    backgroundImage: `url(${currentImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    opacity: transitioning ? 0 : 1
                }}
            />

            {/* Next Background Image (shown during transition) */}
            {nextImage && (
                <div
                    className="absolute inset-0 z-0 transition-opacity duration-1000"
                    style={{
                        backgroundImage: `url(${nextImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: transitioning ? 1 : 0
                    }}
                />
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-35 z-0"></div>

            {/* Navbar */}
            <Navbar />

            {/* Hero Content */}
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
                <h1 className="text-2xl md:text-6xl lg:text-5xl font-serif mb-5 max-w-2xl leading-tight">
                    Creating Unforgettable Moments with Perfection
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mb-16">
                    We craft exceptional events tailored to your dreams. From concept to execution, we make your event truly special.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                    <Link
                        href="/plan-event"
                        className="bg-yellow-400 text-black px-10 py-4 rounded-full font-medium hover:bg-yellow-500 transition-colors text-lg"
                    >
                        Plan Your Event
                    </Link>
                    <Link
                        href="/our-work"
                        className="border-2 border-white text-white px-10 py-4 rounded-full font-medium hover:bg-white hover:text-black transition-colors text-lg"
                    >
                        View Our Work
                    </Link>
                </div>
            </div>
        </div>
    );
}