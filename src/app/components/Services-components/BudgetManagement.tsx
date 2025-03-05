import React from 'react';

const BudgetManagement = () => {
    return (
        <div className="flex flex-col md:flex-row-reverse gap-8 md:gap-12 items-center">
            {/* Image Section */}
            <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
                    <img
                        src="/assets/budgetmanagement.png"
                        alt="Budget Management"
                        className="w-full h-full object-cover rounded-lg"
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-medium text-gray-900">Budget Management</h3>
                <p className="text-gray-600 leading-relaxed">
                    We believe extraordinary events don't have to break the bank. Our expert budget planners ensure you get the best value without compromising quality. We help allocate funds efficiently, negotiate with vendors, and track expenses to keep your event within budget while delivering an unforgettable experience. Whether you're planning a luxury wedding, corporate event, or milestone celebration, we ensure financial transparency and smart spending.
                </p>
                <button className="mt-4 px-6 py-2 bg-amber-500 text-white rounded-full hover:bg-amber-600 transition-colors text-sm font-medium">
                    Book Now
                </button>
            </div>
        </div>
    );
};

export default BudgetManagement;