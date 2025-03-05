import React from 'react';

const Entertainment = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/entertainment.jpeg"
                        alt="Entertainment & Catering"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">Entertainment & Catering</h3>
                <p className="text-gray-600 leading-relaxed">
                    Great entertainment and food leave a lasting impression. We provide top-tier live performances, DJs, speakers, and customized music selection to suit your event ambiance. Additionally, we partner with renowned caterers and chefs to create exceptional menu tailored to your event style—whether it's a fine-dining experience, buffet, cocktail party, or gourmet fusion cuisine.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default Entertainment;