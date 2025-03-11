'use client';

import React from 'react';

const Founder = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-full md:w-3/5 founder-text pr-4 animate-fade-in">
                        <h2 className="text-4xl font-bold mb-6 text-black transform transition-transform duration-700 hover:translate-x-2">
                            Meet the Founder
                        </h2>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800 transform transition-transform duration-700 hover:translate-x-2">
                            Jennifer Awomolo, CEO & Lead Planner
                        </h3>
                        <p className="mb-6 text-gray-700 text-lg transform transition-all duration-700 hover:text-gray-900">
                            With over a decade of experience in event management, Jennifer Awomolo has built Jennywealth into a trusted name in the industry. Her keen eye for detail, creative vision, and commitment to excellence ensure every event is nothing short of spectacular. She believes that every event tells a story, and she strives to bring each client's unique vision to life with elegance and precision.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center">
                        <div
                            className="founder-image-wrapper rounded-lg overflow-hidden shadow-xl transform transition-all duration-700 hover:scale-105 hover:shadow-2xl animate-slide-in"
                            style={{
                                width: "100%",
                                maxWidth: "430px",
                                height: "530px",
                                marginLeft: "20px"
                            }}
                        >
                            <img
                                src="/assets/founder.jpg"
                                alt="Jennifer Ayaola Peters - Founder and CEO"
                                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                                style={{
                                    objectPosition: "center"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                @keyframes slideIn {
                    from { 
                        opacity: 0;
                        transform: translateX(4rem);
                    }
                    to { 
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                
                .animate-fade-in {
                    animation: fadeIn 1.2s forwards;
                }
                
                .animate-slide-in {
                    animation: slideIn 1.2s forwards 0.3s;
                }
            `}</style>
        </div>
    );
};

export default Founder;