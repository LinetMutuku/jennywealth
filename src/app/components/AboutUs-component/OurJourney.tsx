import React from 'react';

const OurJourney = () => {
    return (
        <div className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        {/* Event team image */}
                        <div className="rounded-lg overflow-hidden">
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

                        <div className="flex gap-4">
                            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-all">
                                Mission
                            </button>
                            <button className="px-6 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition-all">
                                Vision
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;