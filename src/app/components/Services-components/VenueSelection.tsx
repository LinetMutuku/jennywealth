import React from 'react';

const VenueSelection = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/venueselection.jpeg"
                        alt="Venue Selection & Coordination"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">Venue Selection & Coordination</h3>
                <p className="text-gray-600 leading-relaxed">
                    The right venue sets the foundation for a successful event. We scout, shortlist, and book the most suitable locations based on your event type, guest count, ambiance, and budget. Our team handles venue negotiations, logistics, and vendor coordination, ensuring a hassle-free process. Whether it's a beachfront wedding, a grand ballroom reception, or a private outdoor gathering, we find the perfect setting that matches your vision.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default VenueSelection;