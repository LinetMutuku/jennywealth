import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceHero from '../components/Services-components/ServiceHero';
import EventConceptualization from '../components/Services-components/EventConceptualization';
import BudgetManagement from '../components/Services-components/BudgetManagement';
import VenueSelection from '../components/Services-components/VenueSelection'
import EventDesign from '../components/Services-components/EventDesign';
import OnsiteCoordination from '../components/Services-components/OnsiteCoordination';
import Entertainment from '../components/Services-components/Entertainment';
import Services from '../components/home-components/Services';

export default function ServicePage() {
    return (
        <main className="min-h-screen bg-white">
            <Navbar />
            <ServiceHero />
            <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
                <div className="space-y-16">
                    <EventConceptualization />
                    <BudgetManagement />
                    <VenueSelection />
                    <EventDesign />
                    <OnsiteCoordination />
                    <Entertainment />
                </div>
            </section>
            <Services />
            <Footer />
        </main>
    );
}