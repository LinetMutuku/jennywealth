'use client';

import React, { useState } from 'react';

type FAQItem = {
    question: string;
    answer: string;
};

const FAQAccordion = () => {
    // FAQ data
    const faqItems: FAQItem[] = [
        {
            question: 'How far in advance should I book my event?',
            answer: 'We recommend booking at least 3-6 months in advance for weddings and large events. However, we accommodate shorter timelines based on availability.'
        },
        {
            question: 'What types of events do you specialize in?',
            answer: 'Jennywealth specializes in weddings, corporate events, birthday parties, product launches, anniversaries, and luxury celebrations.'
        },
        {
            question: 'Can you work with my budget?',
            answer: 'Yes! We offer customized event planning that aligns with your budget while ensuring top-notch execution.'
        },
        {
            question: 'Do you offer event decor services separately?',
            answer: 'Absolutely! You can hire us solely for event design and decor without full event planning services.'
        },
        {
            question: 'Can I make changes to my event after booking?',
            answer: 'Yes, you can request modifications up to 2 weeks before the event date. Major changes may affect pricing and availability.'
        },
        {
            question: 'Do you provide vendor recommendations?',
            answer: 'Yes, we have a trusted network of vendors across various categories that we can recommend based on your specific event needs and preferences.'
        },
        {
            question: 'Do you offer on-the-day event coordination?',
            answer: 'Yes, we offer day-of coordination services to ensure your event runs smoothly, allowing you to enjoy your special occasion without worrying about logistics.'
        },
        {
            question: 'How do I get started with Jennywealth?',
            answer: 'Simply fill out our contact form, and one of our event specialists will reach out to schedule a consultation to discuss your vision and requirements.'
        }
    ];

    // State to track which item is open
    const [openItemIndex, setOpenItemIndex] = useState<number>(0);

    // Toggle function
    const toggleItem = (index: number) => {
        setOpenItemIndex(openItemIndex === index ? -1 : index);
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-16 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif mb-4 text-black">Frequently Asked Questions</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Quick answers to your event planning questions. If you need more details, feel free to reach out!
                </p>
            </div>

            <div className="space-y-5">
                {faqItems.map((item, index) => (
                    <div
                        key={index}
                        className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                            openItemIndex === index
                                ? 'border-amber-300 shadow-md bg-amber-50'
                                : 'border-gray-200 hover:border-amber-200'
                        }`}
                    >
                        <button
                            onClick={() => toggleItem(index)}
                            className="w-full px-8 py-5 text-left flex justify-between items-center"
                        >
                            <span className={`font-medium text-lg ${
                                openItemIndex === index ? 'text-amber-700' : 'text-gray-800'
                            }`}>
                                {item.question}
                            </span>
                            <span className={`text-2xl font-light transition-transform duration-300 ${
                                openItemIndex === index ? 'text-amber-500 transform rotate-0' : 'text-gray-400'
                            }`}>
                                {openItemIndex === index ? "−" : "+"}
                            </span>
                        </button>

                        <div
                            className={`transition-all duration-300 overflow-hidden ${
                                openItemIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            }`}
                        >
                            <div className="px-8 pb-6">
                                <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;