'use client';

import React, { useState } from 'react';

// Define a type for the tab options
type TabType = 'mission' | 'vision';

const OurJourney = () => {
    const [activeTab, setActiveTab] = useState<TabType>('mission');
    const [animating, setAnimating] = useState(false);

    // Function to handle tab changes with proper typing
    const handleTabChange = (tab: TabType) => {
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
        <div className="py-20 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-50 rounded-full opacity-50 transform translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-50 rounded-full opacity-40 transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 relative">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image side with enhanced animations */}
                    <div className="w-full md:w-1/2 transition-all duration-1000 transform animate-fade-in-left">
                        <div className="rounded-lg overflow-hidden shadow-xl relative group">
                            {/* Animated borders */}
                            <div className="absolute inset-0 z-10">
                                <div className="absolute top-0 left-0 w-0 h-1 bg-yellow-500 transition-all duration-700 animate-border-width"
                                     style={{ animationDelay: '300ms' }}></div>
                                <div className="absolute top-0 right-0 w-1 h-0 bg-yellow-500 transition-all duration-700 animate-border-height"
                                     style={{ animationDelay: '1000ms' }}></div>
                                <div className="absolute bottom-0 right-0 w-0 h-1 bg-yellow-500 transition-all duration-700 animate-border-width"
                                     style={{ animationDelay: '1700ms' }}></div>
                                <div className="absolute bottom-0 left-0 w-1 h-0 bg-yellow-500 transition-all duration-700 animate-border-height"
                                     style={{ animationDelay: '2400ms' }}></div>
                            </div>

                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                            <img
                                src="/assets/our-journey.jpeg"
                                alt="Jennywealth Event Management Team"
                                className="w-full h-full object-cover rounded-lg transition-all duration-700 group-hover:scale-105 transform"
                            />
                        </div>
                    </div>

                    {/* Content side with enhanced animations */}
                    <div className="w-full md:w-1/2 transition-all duration-1000 transform animate-fade-in-right">
                        <h2 className="text-4xl font-bold mb-8 text-black relative inline-block">
                            Our Journey
                            <span className="absolute -bottom-2 left-0 h-1 bg-yellow-500 transition-all duration-1000 ease-out animate-border-width"
                                  style={{ animationDelay: '300ms' }}></span>
                        </h2>

                        <p className="mb-6 text-gray-700 text-lg transition-all duration-700 animate-fade-in-up"
                           style={{ animationDelay: '500ms' }}>
                            Founded in 2016, Jennywealth Event Management has evolved into a premier event planning company renowned for executing bespoke, high-end, and seamless events. Over the years, we have built a reputation for meticulous planning, unmatched creativity, and exceptional client satisfaction.
                        </p>

                        <p className="mb-8 text-gray-700 text-lg transition-all duration-700 animate-fade-in-up"
                           style={{ animationDelay: '700ms' }}>
                            From intimate gatherings to grand-scale events, our expertise continues to set new industry standards.
                        </p>

                        {/* Animated tab buttons */}
                        <div className="flex gap-4 mb-6 transition-all duration-700 animate-fade-in-up"
                             style={{ animationDelay: '900ms' }}>
                            <button
                                className={`px-6 py-3 border-2 border-yellow-500 font-medium rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                                    activeTab === 'mission'
                                        ? 'bg-yellow-500 text-white shadow-lg'
                                        : 'text-black hover:bg-yellow-500 hover:text-white'
                                }`}
                                onClick={() => handleTabChange('mission')}
                            >
                                <span className="relative z-10">Mission</span>
                                {activeTab !== 'mission' && (
                                    <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                )}
                            </button>

                            <button
                                className={`px-6 py-3 border-2 border-yellow-500 font-medium rounded-full transition-all duration-300 transform hover:scale-105 relative overflow-hidden ${
                                    activeTab === 'vision'
                                        ? 'bg-yellow-500 text-white shadow-lg'
                                        : 'text-black hover:bg-yellow-500 hover:text-white'
                                }`}
                                onClick={() => handleTabChange('vision')}
                            >
                                <span className="relative z-10">Vision</span>
                                {activeTab !== 'vision' && (
                                    <span className="absolute inset-0 bg-yellow-500 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                                )}
                            </button>
                        </div>

                        {/* Enhanced tab content with animation */}
                        <div className="relative mt-4 overflow-hidden transition-all duration-700 animate-fade-in-up"
                             style={{ animationDelay: '1100ms' }}>
                            <div className={`
                                p-6 border-t-4 border-yellow-500 bg-gray-50 rounded-lg shadow-lg
                                transition-all duration-500 ease-in-out relative
                                ${animating ? 'opacity-0 transform translate-y-8' : 'opacity-100 transform translate-y-0'}
                            `}>
                                {/* Tab content with animated corner accents */}
                                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                                    <div className={`absolute top-0 right-0 w-16 h-16 bg-yellow-500 transform rotate-45 translate-x-8 -translate-y-8 transition-transform duration-500 ${
                                        activeTab === 'mission' ? 'translate-x-6 -translate-y-6' : 'translate-x-8 -translate-y-8'
                                    }`}></div>
                                </div>

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

            {/* Custom animations */}
            <style jsx>{`
                @keyframes fadeInLeft {
                    from {
                        opacity: 0;
                        transform: translateX(-4rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInRight {
                    from {
                        opacity: 0;
                        transform: translateX(4rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(2rem);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                @keyframes expandWidth {
                    from {
                        width: 0;
                    }
                    to {
                        width: 100%;
                    }
                }
                
                @keyframes expandHeight {
                    from {
                        height: 0;
                    }
                    to {
                        height: 100%;
                    }
                }
                
                .animate-fade-in-left {
                    opacity: 0;
                    animation: fadeInLeft 1s forwards;
                }
                
                .animate-fade-in-right {
                    opacity: 0;
                    animation: fadeInRight 1s forwards;
                }
                
                .animate-fade-in-up {
                    opacity: 0;
                    animation: fadeInUp 0.8s forwards;
                }
                
                .animate-border-width {
                    animation: expandWidth 0.8s forwards;
                }
                
                .animate-border-height {
                    animation: expandHeight 0.8s forwards;
                }
            `}</style>
        </div>
    );
};

export default OurJourney;