'use client';

import Footer from './components/Footer';
import Hero from '../app/components/home-components/hero';
import About from '../app/components/home-components/About';
import Services from '../app/components/home-components/Services';
import Gallery from '../app/components/home-components/Gallery';
import Testimonials from '../app/components/home-components/Testimonials';
import CTA from '../app/components/home-components/CTA';

export default function Home() {
    return (
        <main className="min-h-screen">
            <Hero />
            <About />
            <Services />
            <Gallery />
            <Testimonials />
            <CTA />
            <Footer />
        </main>
    );
}