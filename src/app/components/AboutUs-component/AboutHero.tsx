'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AboutHero = () => {
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

    // Text reveal animation
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.1,
                delayChildren: 0.3
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
        <motion.div
            ref={ref}
            className="relative w-full text-white py-36 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(/assets/about-us-heroimg.jpeg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        >
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

            {/* Background overlay with parallax effect */}
            <motion.div
                className="absolute inset-0 z-0"
                animate={{
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    repeatType: "reverse"
                }}
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4))',
                }}
            />

            <div className="container mx-auto px-4 text-center z-10 relative">
                {/* Animated text heading with letter animation */}
                <motion.h1
                    className="text-3xl md:text-5xl font-bold relative"
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                >
                    {"About Us".split('').map((char, index) => (
                        <motion.span
                            key={index}
                            className="inline-block relative"
                            variants={letterVariants}
                        >
                            {char === ' ' ? '\u00A0' : char}
                        </motion.span>
                    ))}
                </motion.h1>

                {/* Animated underline */}
                <motion.div
                    className="h-1 bg-white rounded-full mx-auto mt-4"
                    initial={{ width: 0 }}
                    animate={{ width: "100px" }}
                    transition={{
                        delay: 1.2,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                />
            </div>

            {/* Bottom reveal gradient */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 1.6, duration: 1 }}
            />
        </motion.div>
    );
};

export default AboutHero;