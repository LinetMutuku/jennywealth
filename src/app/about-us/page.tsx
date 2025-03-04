import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutUs-component/AboutHero';
import OurJourney from '../components/AboutUs-component/OurJourney';
import StandOut from '../components/AboutUs-component/StandOut';
import Founder from '../components/AboutUs-component/Founder';
import Services from '../components/home-components/Services';

export default function AboutUsPage() {
    return (
        <main>
            <Navbar />
            <AboutHero />
            <OurJourney />
            <StandOut />
            <Founder />
            <Services />
            <Footer />
        </main>
    );
}