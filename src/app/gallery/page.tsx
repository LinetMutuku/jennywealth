import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import GalleryHero from '../components/Galley-components/GalleryHero';
import GalleryLayout from '../components/Galley-components/GalleryLayout';
import Services from '@/app/components/Home-components/Services';

export default function GalleryPage() {
    return (
        <main className="bg-white">
            <Navbar />
            <GalleryHero />
            <GalleryLayout />
            <Services />
            <Footer />
        </main>
    );
}