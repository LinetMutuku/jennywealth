import React from 'react';

const AboutHero = () => {
    return (
        <div
            className="relative w-full text-white py-36 flex items-center justify-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(/assets/about-us-heroimg.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">
                    About Us
                </h1>
            </div>
        </div>
    );
};

export default AboutHero;