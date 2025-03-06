'use client';

import Footer from './components/Footer';
import Hero from '@/app/components/Home-components/hero';
import About from '@/app/components/Home-components/About';
import Services from '@/app/components/Home-components/Services';
import Gallery from '@/app/components/Home-components/Gallery';
import Testimonials from '@/app/components/Home-components/Testimonials';
import CTA from '@/app/components/Home-components/CTA';

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