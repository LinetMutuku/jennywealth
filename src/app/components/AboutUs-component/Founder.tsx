import React from 'react';

const Founder = () => {
    return (
        <div className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-4xl font-bold mb-6 text-black">Meet the Founder</h2>
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Jennifer Ayoola Peters, CEO & Lead Planner</h3>
                        <p className="mb-6 text-gray-700 text-lg">
                            With over a decade of experience in event planning and management, Jennifer Ayoola Peters has built Jennywealth into a respected name in the industry. Her keen eye for detail, creativity, and passion for delivering extraordinary experiences has enabled her to create memorable events for clients across various sectors.
                        </p>
                        <p className="text-gray-700 text-lg">
                            Jennifer's commitment to excellence and client satisfaction remains at the heart of Jennywealth's mission.
                        </p>
                    </div>

                    <div className="w-full md:w-1/2">
                        {/* Founder image */}
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="/assets/founder.jpeg"
                                alt="Jennifer Ayoola Peters - Founder and CEO"
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Founder;