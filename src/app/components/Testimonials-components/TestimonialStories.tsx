'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TestimonialStories = () => {
    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.7,
                ease: "easeOut"
            }
        }
    };

    // Staggered appearance for text
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

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    // Image hover effect variants
    const imageVariants = {
        rest: {
            scale: 1,
            filter: "brightness(1)",
            transition: { duration: 0.5, ease: "easeInOut" }
        },
        hover: {
            scale: 1.08,
            filter: "brightness(1.1)",
            transition: { duration: 0.5, ease: "easeInOut" }
        }
    };

    // Star rating animation with proper TypeScript type
    const starVariants = {
        hidden: { scale: 0, rotate: -30 },
        visible: (i: number) => ({
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.9 + (i * 0.1)
            }
        })
    };

    // Define testimonial content props interface
    interface TestimonialProps {
        imgSrc: string;
        imgAlt: string;
        content: React.ReactNode;
        isFirst: boolean;
    }

    // Testimonial component with enhanced animations
    const Testimonial: React.FC<TestimonialProps> = ({ imgSrc, imgAlt, content, isFirst }) => (
        <motion.div
            className={`rounded-xl overflow-hidden shadow-xl bg-white transition-all duration-300 hover:shadow-2xl border border-gray-100 ${isFirst ? 'md:mr-4' : 'md:ml-4'}`}
            initial="hidden"
            whileInView="visible"
            variants={cardVariants}
            viewport={{ once: true, amount: 0.1 }}
        >
            <div className="relative overflow-hidden rounded-t-xl">
                <motion.img
                    src={imgSrc}
                    alt={imgAlt}
                    className="w-full h-96 object-cover object-center"
                    initial="rest"
                    whileHover="hover"
                    variants={imageVariants}
                />
                <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-30"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    whileHover={{ opacity: 0.4 }}
                    transition={{ duration: 0.3 }}
                ></motion.div>
            </div>
            <div className="p-8 md:p-10">
                {content}
            </div>
        </motion.div>
    );

    // Content for first testimonial with animations
    const embaContent = (
        <>
            <motion.h3
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                EMBA27 Graduation Success
            </motion.h3>
            <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    Hello everyone, my name is Ola Peters Awomolo, CEO of Discoe Properties Limited and privileged to be the President of EMBA27 class of Lagos Business School.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    I am delighted to provide this glowing review for Jennywealth Honeybees Events, who expertly planned our EMBA27 class graduation party in December 2024.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    As the President of our class, I had the pleasure of working closely with their team, and I must say, they exceeded our expectations in every way.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    From the initial planning stages to the execution of the event, Jennywealth Events demonstrated professionalism, creativity, and attention to detail. They took charge of every aspect, ensuring that our special day was truly unforgettable. The music, food, and overall ambiance were all top-notch, and our guests and families were thoroughly entertained.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    What impressed me most was their ability to work within our budget while delivering an event that far surpassed our expectations. Their expertise and efficiency allowed us to relax and enjoy the celebration, knowing that every detail was being taken care of.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    I highly recommend Jennywealth Events to anyone seeking exceptional event planning services. Their dedication, passion, and commitment to excellence make them the perfect choice for any occasion.
                </motion.p>
            </motion.div>
            <motion.div
                className="mt-6 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col">
                    <p className="font-semibold text-gray-900">Ola Peters Awomolo</p>
                    <p className="text-sm text-gray-600">CEO, Discoe Properties Limited</p>
                </div>
                <div className="ml-auto">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <motion.svg
                                key={i}
                                className="w-5 h-5 text-amber-500 fill-current"
                                viewBox="0 0 24 24"
                                custom={i}
                                variants={starVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </motion.svg>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );

    // Content for second testimonial with animations
    const grandmaContent = (
        <>
            <motion.h3
                className="text-2xl font-bold text-gray-800 mb-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
            >
                A Celebration to Remember
            </motion.h3>
            <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    Hey y'all, it's Jide, an Agile Coach from Houston, TX. I'm here to give a shoutout to Jennywealth Honeybees Event Management - the real MVPs of party planning!
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    I hired them for my grandma's shindig in Nigeria, and let me tell you, they brought the heat! The decorations were on point, the ushers were so sharp they looked like they just stepped off an Emirates flight, and the venue was so nice I almost didn't want to leave (almost).
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    But here's the thing: Jennywealth Honeybees Event Management isn't just about throwing a fancy party - they're about throwing a party that'll make your guests talk for years to come (in a good way, of course). And the best part? They'll work with your budget, so you won't have to take out a second mortgage to impress your aunties.
                </motion.p>
                <motion.p className="text-gray-700 leading-relaxed" variants={itemVariants}>
                    I've attended three events planned by Jennywealth, and I can confidently say they're the real deal. So, if you need someone to plan an unforgettable party, look no further than Jennywealth Honeybees Event Management. Trust me, your guests (and your wallet) will thank you.
                </motion.p>
            </motion.div>
            <motion.div
                className="mt-6 flex items-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                viewport={{ once: true }}
            >
                <div className="flex flex-col">
                    <p className="font-semibold text-gray-900">Jide</p>
                    <p className="text-sm text-gray-600">Agile Coach, Houston TX</p>
                </div>
                <div className="ml-auto">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <motion.svg
                                key={i}
                                className="w-5 h-5 text-amber-500 fill-current"
                                viewBox="0 0 24 24"
                                custom={i}
                                variants={starVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                            </motion.svg>
                        ))}
                    </div>
                </div>
            </motion.div>
        </>
    );

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
                    <Testimonial
                        imgSrc="/assets/corporate-speaker.png"
                        imgAlt="EMBA27 Graduation"
                        content={embaContent}
                        isFirst={true}
                    />

                    <Testimonial
                        imgSrc="/assets/grandma-party-testimonial.jpeg"
                        imgAlt="Grandma's Party"
                        content={grandmaContent}
                        isFirst={false}
                    />
                </div>
            </div>
        </section>
    );
};

export default TestimonialStories;