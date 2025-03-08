'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TestimonialHero = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        threshold: 0.2
    });

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    // Text reveal animation with reduced delay
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.08,
                delayChildren: 0.2
            }
        }
    };

    const letterVariants = {
        hidden: { y: 100, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10
            }
        }
    };

    // Floating particles effect
    const particles = Array.from({ length: 20 }, (_, i) => i);

    return (
        <div>
            <motion.div
                ref={ref}
                className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <motion.div
                    className="absolute inset-0"
                    animate={{
                        scale: [1, 1.05, 1],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <img
                        src="/assets/about-us-heroimg.jpeg"
                        alt="Jennywealth Events Testimonials"
                        className="w-full h-full object-cover"
                    />
                    <motion.div
                        className="absolute inset-0 bg-black"
                        initial={{ opacity: 0.3 }}
                        animate={{ opacity: 0.5 }}
                        transition={{ duration: 1.2 }}
                    ></motion.div>
                </motion.div>

                {/* Particle effects */}
                {particles.map((i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-white opacity-50"
                        style={{
                            width: Math.random() * 8 + 2 + 'px',
                            height: Math.random() * 8 + 2 + 'px',
                            left: Math.random() * 100 + '%',
                            top: Math.random() * 100 + '%'
                        }}
                        animate={{
                            y: [0, -Math.random() * 100 - 50],
                            x: [0, (Math.random() - 0.5) * 50],
                            opacity: [0.7, 0]
                        }}
                        transition={{
                            duration: Math.random() * 4 + 3,
                            repeat: Infinity,
                            ease: "easeOut"
                        }}
                    />
                ))}

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white p-4 z-10">
                    <motion.h1
                        className="text-6xl md:text-7xl font-serif"
                        variants={textVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        {"Testimonials".split('').map((char, index) => (
                            <motion.span
                                key={index}
                                className="inline-block relative"
                                variants={letterVariants}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Animated underline */}
                    <motion.div
                        className="h-1 bg-white rounded-full mx-auto mt-4"
                        initial={{ width: 0 }}
                        animate={{ width: "180px" }}
                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                            ease: "easeOut"
                        }}
                    />
                </div>

                {/* Bottom reveal gradient */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                />
            </motion.div>

            <motion.div
                className="bg-white py-14 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                <div className="max-w-4xl mx-auto px-4">
                    <motion.h2
                        className="text-3xl md:text-4xl font-serif mb-6 text-gray-800"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        Stories of Unforgettable Experiences
                    </motion.h2>
                    <motion.p
                        className="text-base md:text-lg max-w-3xl mx-auto text-gray-700"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        Hear from our happy clients who trusted us to bring
                        <br />their events to life with elegance and precision.
                    </motion.p>
                </div>
            </motion.div>
        </div>
    );
};

export default TestimonialHero;