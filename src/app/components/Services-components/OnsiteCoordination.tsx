// components/service-components/OnsiteCoordination/index.tsx
import React from 'react';

const OnsiteCoordination = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/onsite.jpeg"
                        alt="On-Site Coordination"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">On-Site Coordination</h3>
                <p className="text-gray-600 leading-relaxed">
                    Enjoy your event stress-free while we handle the logistics. Our experienced coordinators oversee every aspect of the event in real-time, ensuring smooth execution. We manage vendor arrivals, guest experiences, timelines, and last-minute adjustments, making sure everything runs effortlessly from start to finish.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default OnsiteCoordination;