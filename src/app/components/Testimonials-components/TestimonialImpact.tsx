import React from 'react';

const TestimonialImpact = () => {
    const stats = [
        {
            id: 1,
            number: "10+",
            label: "Years of Experience",
        },
        {
            id: 2,
            number: "500+",
            label: "Successful Events",
        },
        {
            id: 3,
            number: "300+",
            label: "Vendors & Partners",
        },
        {
            id: 4,
            number: "98%",
            label: "Customer Satisfaction",
        },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-serif text-center mb-12 text-gray-900">
                    Impact in Numbers
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {stats.map((stat) => (
                        <div key={stat.id} className="flex flex-col items-center">
                            <p className="text-3xl md:text-5xl font-bold mb-2 text-gray-900">{stat.number}</p>
                            <p className="text-gray-700 text-sm md:text-base font-medium">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialImpact;