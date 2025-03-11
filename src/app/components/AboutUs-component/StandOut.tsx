'use client';

import React from 'react';
import { motion } from 'framer-motion';
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

    const headingVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const paragraphVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6, delay: 0.2, ease: "easeOut" }
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <motion.div
            className="py-24 bg-white border-t border-b border-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
        >
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-4xl font-bold text-center mb-6 text-black"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    Why we Stand Out
                </motion.h2>

                <motion.p
                    className="text-center max-w-3xl mx-auto mb-16 text-gray-700 text-xl"
                    variants={paragraphVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    We go beyond just event planning—we create flawless experiences that are meticulously tailored to meet your vision. Here's why our clients trust us:
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.2 }}
                >
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            features={feature.features}
                            index={index} // Pass index for staggered animations
                        />
                    ))}
                </motion.div>
            </div>
        </motion.div>
    );
};

export default StandOut;