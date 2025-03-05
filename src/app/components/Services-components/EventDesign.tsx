import React from 'react';

const EventDesign = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/eventdesign.jpeg"
                        alt="Event Design & Décor"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">Event Design & Décor</h3>
                <p className="text-gray-600 leading-relaxed">
                    A well-designed event captivates guests from the moment they arrive. Our creative team specializes in crafting breathtaking event aesthetics, from floral arrangements and lighting design to stage setup and immersive themes. We source unique rentals, custom-made elements, and personalized details that make your event uniquely memorable.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default EventDesign;