import React from 'react';

const EventConceptualization = () => {
    return (
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/eventconceptualization.png"
                        alt="Event Conceptualization & Planning"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">Event Conceptualization & Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                    Every great event starts with a vision. Our team works closely with you to understand your ideas, preferences, and expectations. We develop a comprehensive event strategy covering theme selection, program flow, guest experiences, and logistics to ensure a seamless and breathtaking occasion. From intimate gatherings to large-scale productions, we bring structure and creativity to every detail.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default EventConceptualization;