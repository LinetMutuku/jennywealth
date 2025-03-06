import React from 'react';
import ContactForm from '../components/ContactUs-components/ContactForm';
import FAQAccordion from '../components/ContactUs-components/FAQAccordion';
import ContactHero from '../components/ContactUs-components/ContactHero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
    return (
        <main className="bg-white min-h-screen">
            <Navbar />
            <ContactHero />

            <div className="container mx-auto bg-white py-10">
                <ContactForm />

                <div className="max-w-4xl mx-auto my-16">
                    <div className="border-t border-gray-200"></div>
                </div>

                <FAQAccordion />
            </div>

            <Footer />
        </main>
    );
}