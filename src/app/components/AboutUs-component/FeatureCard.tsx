import React from 'react';

interface FeatureCardProps {
    title: string;
    features: string[];
}

const FeatureCard = ({ title, features }: FeatureCardProps) => {
    return (
        <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold mb-6 text-black">{title}</h3>
            <ul className="space-y-4">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-yellow-500 mr-3 text-2xl">•</span>
                        <span className="text-gray-800 text-lg">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeatureCard;