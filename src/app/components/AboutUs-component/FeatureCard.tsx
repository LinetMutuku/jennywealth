import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
    title: string;
    features: string[];
    index: number; // Added index prop for staggered animations
}

const FeatureCard = ({ title, features, index }: FeatureCardProps) => {
    return (
        <motion.div
            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.2,
                delay: index * 0.1,
                ease: "easeOut"
            }}
            whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
        >
            <motion.h3
                className="text-2xl font-semibold mb-6 text-black"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.1 + index * 0.1 }}
            >
                {title}
            </motion.h3>
            <ul className="space-y-4">
                {features.map((feature, featureIndex) => (
                    <motion.li
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.4,
                            delay: 0.3 + index * 0.1 + featureIndex * 0.1
                        }}
                    >
                        <motion.span
                            className="text-yellow-500 mr-3 text-2xl"
                            animate={{
                                scale: [1, 1.2, 1],
                            }}
                            transition={{
                                duration: 1,
                                repeat: Infinity,
                                repeatDelay: 2,
                            }}
                        >
                            •
                        </motion.span>
                        <span className="text-gray-800 text-lg">{feature}</span>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default FeatureCard;