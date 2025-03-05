import React from 'react';

const ServiceHero = () => {
    return (
        <div
            className="relative w-full text-white py-36 flex flex-col items-center justify-center"
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(/assets/about-us-heroimg.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
            <div className="container mx-auto px-4 text-center flex flex-col items-center">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Services
                </h1>
                <div className="w-24 h-1 bg-amber-500 mb-8"></div>
                <p className="max-w-2xl text-lg md:text-xl text-gray-100">
                    From concept to execution, our comprehensive event planning services ensure your special occasion is
                    memorable and flawlessly executed.
                </p>
            </div>
        </div>
    );
};

export default ServiceHero;