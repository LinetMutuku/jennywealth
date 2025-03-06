import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Service from '../components/Home-components/Services';
import TestimonialHero from '../components/Testimonials-components/TestimonialHero';
import TestimonialStories from '../components/Testimonials-components/TestimonialStories';
import TestimonialImpact from '../components/Testimonials-components/TestimonialImpact';


export default function TestimonialsPage() {
    return (
        <main className="bg-white text-gray-900">
            <Navbar />
            <TestimonialHero />
            <TestimonialStories />
            <TestimonialImpact />
            <Service />
            <Footer />
        </main>
    );
}