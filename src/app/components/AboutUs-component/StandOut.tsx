import React from 'react';
import FeatureCard from './FeatureCard';

const StandOut = () => {
    const features = [
        {
            title: "Proven Expertise",
            features: [
                "Over 200+ successful events delivered.",
                "A decade of industry experience delivering high-end events."
            ]
        },
        {
            title: "Attention to Detail",
            features: [
                "We ensure every detail is flawless so you enjoy your event stress free.",
                "A decade of industry experience delivering high-end events."
            ]
        },
        {
            title: "Exclusive Experiences",
            features: [
                "We work with the best vendors to ensure premium experiences.",
                "Curated VIP experiences for high profile clients and luxury brands."
            ]
        },
        {
            title: "Budget Friendly",
            features: [
                "We maximize your budget for the best possible outcome.",
                "Custom budget planning to ensure transparency and no hidden cost."
            ]
        },
        {
            title: "Seamless Execution",
            features: [
                "We handle all venue selection, catering, decor and other activities.",
                "A decade of industry experience delivering high-end events."
            ]
        },
        {
            title: "Trusted Network",
            features: [
                "Strong relationship with top vendors to ensure the best service.",
                "Years of experience has built a seamless network of reliable hands."
            ]
        }
    ];

    return (
        <div className="py-24 bg-white border-t border-b border-gray-200">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-6 text-black">Why we Stand Out</h2>
                <p className="text-center max-w-3xl mx-auto mb-16 text-gray-700 text-xl">
                    We go beyond just event planning—we create flawless experiences that are meticulously tailored to meet your vision. Here's why our clients trust us:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            features={feature.features}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StandOut;