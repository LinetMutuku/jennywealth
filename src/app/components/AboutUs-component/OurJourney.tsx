'use client';

import React, { useState } from 'react';

const OurJourney = () => {
    const [activeTab, setActiveTab] = useState('mission');
    const [animating, setAnimating] = useState(false);

    const handleTabChange = (tab) => {
        if (tab !== activeTab) {
            setAnimating(true);
            setTimeout(() => {
                setActiveTab(tab);
                setTimeout(() => {
                    setAnimating(false);
                }, 100);
            }, 300);
        }
    };

    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        {/* Event team image */}
                        <div className="rounded-lg overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
                            <img
                                src="/assets/our-journey.jpeg"
                                alt="Jennywealth Event Management Team"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-8 text-black">Our Journey</h2>
                        <p className="mb-6 text-gray-700 text-lg">
                            Founded in 2016, Jennywealth Event Management has evolved into a premier event planning company renowned for executing bespoke, high-end, and seamless events. Over the years, we have built a reputation for meticulous planning, unmatched creativity, and exceptional client satisfaction.
                        </p>
                        <p className="mb-8 text-gray-700 text-lg">
                            From intimate gatherings to grand-scale events, our expertise continues to set new industry standards.
                        </p>

                        <div className="flex gap-4 mb-6">
                            <button
                                className={`px-6 py-3 border-2 border-yellow-500 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                                    activeTab === 'mission'
                                        ? 'bg-yellow-500 text-white shadow-md'
                                        : 'text-black hover:bg-yellow-500 hover:text-white'
                                }`}
                                onClick={() => handleTabChange('mission')}
                            >
                                Mission
                            </button>
                            <button
                                className={`px-6 py-3 border-2 border-yellow-500 font-medium rounded-full transition-all duration-300 transform hover:scale-105 ${
                                    activeTab === 'vision'
                                        ? 'bg-yellow-500 text-white shadow-md'
                                        : 'text-black hover:bg-yellow-500 hover:text-white'
                                }`}
                                onClick={() => handleTabChange('vision')}
                            >
                                Vision
                            </button>
                        </div>

                        <div className="relative mt-4 overflow-hidden">
                            <div className={`
                                p-6 border-t-4 border-yellow-500 bg-gray-50 rounded-lg shadow-md
                                transition-all duration-500 ease-in-out
                                ${animating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
                            `}>
                                {activeTab === 'mission' ? (
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-black">Our Mission</h3>
                                        <p className="text-gray-800 text-lg leading-relaxed">
                                            To deliver extraordinary events that create lasting impressions and unforgettable experiences through innovation, passion, and seamless execution.
                                        </p>
                                    </div>
                                ) : (
                                    <div>
                                        <h3 className="text-2xl font-semibold mb-4 text-black">Our Vision</h3>
                                        <p className="text-gray-800 text-lg leading-relaxed">
                                            To be the leading event management company recognized for its creativity, excellence, and ability to turn ideas into breathtaking realities.
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;