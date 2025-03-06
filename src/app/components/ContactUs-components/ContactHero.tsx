import React from 'react';

const ContactHero = () => {
    return (
        <div>
            <div className="relative w-full h-[55vh] md:h-[65vh]">
                <div className="absolute inset-0">
                    <img
                        src="/assets/about-us-heroimg.jpeg"
                        alt="Jennywealth Events Contact"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4">
                    <h1 className="text-6xl md:text-7xl font-serif">Contact Us</h1>
                </div>
            </div>

            <div className="bg-white py-14 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-serif mb-6 text-gray-800">
                        Let's Make Your Dream Event a Reality
                    </h2>
                    <p className="text-base md:text-lg max-w-3xl mx-auto text-gray-700">
                        We're excited to hear about your event! Reach out to us,
                        <br />and let's start planning.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactHero;