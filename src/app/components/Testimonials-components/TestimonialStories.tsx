import React from 'react';

const TestimonialStories = () => {
    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 py-10">

                {/* First row of testimonials - with offset middle */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Wedding Testimonial - left */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/wedding-testimonial.png"
                                alt="Wedding"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Jennywealth made our wedding a dream! From the breathtaking décor to the perfect timeline, every moment felt magical. The attention to detail was incredible—our guests are still raving about it!
                            </p>
                            <p className="text-amber-500 font-medium">Chioma & Daniel - Wedding Celebration</p>
                        </div>
                    </div>

                    {/* Anniversary Testimonial - middle, offset down */}
                    <div className="md:col-span-1 md:pt-24">
                        <div className="mb-4">
                            <img
                                src="/assets/anniversary-testimonial.png"
                                alt="Anniversary"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Planning a milestone event felt overwhelming, but Jennywealth handled everything with precision. The team transformed our vision into a beautiful celebration that reflected our journey perfectly.
                            </p>
                            <p className="text-amber-500 font-medium">The Adebayos - 50th Anniversary Gala</p>
                        </div>
                    </div>

                    {/* Corporate Awards Testimonial - right */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/corporate-testimonial.png"
                                alt="Corporate Awards"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Exceptional event management! The professionalism, organization, and creativity exceeded our expectations. From stage design to logistics, every element was flawlessly executed.
                            </p>
                            <p className="text-amber-500 font-medium">Zenith Bank - Corporate Awards Night</p>
                        </div>
                    </div>
                </div>

                {/* Second row of testimonials - with offset middle */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {/* Grandma's Party - left */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/grandma-party-testimonial.jpeg"
                                alt="Grandma's Party"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Jennywealth Honeybees made my grandma's party unforgettable! Stunning décor, top-tier service & budget-friendly. They don't just plan events—they create memories!
                            </p>
                            <p className="text-amber-500 font-medium">Jide, Ajile Coah, Texas - Grandma's Party</p>
                        </div>
                    </div>

                    {/* Destination Wedding - middle, offset down */}
                    <div className="md:col-span-1 md:pt-24">
                        <div className="mb-4">
                            <img
                                src="/assets/destination-wedding-testimonial.png"
                                alt="Destination Wedding"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                We were nervous about planning a wedding abroad, but Jennywealth managed everything seamlessly. The coordination between vendors, the stunning venue, and the stress-free experience were amazing.
                            </p>
                            <p className="text-amber-500 font-medium">Tolu & Femi - Destination Wedding</p>
                        </div>
                    </div>

                    {/* Networking Event - right */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/networking-testimonial.png"
                                alt="Networking Event"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Our networking event was smooth, professional, and engaging. Jennywealth took care of the seating, stage setup, and even the refreshments—our guests loved the atmosphere!
                            </p>
                            <p className="text-amber-500 font-medium">TechHub Lagos - Networking Event</p>
                        </div>
                    </div>
                </div>

                {/* Third row of testimonials - only left and right with empty middle */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Charity Gala - left */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/charity-gala-testimonial.png"
                                alt="Charity Gala"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                Our annual charity gala was a massive success thanks to Jennywealth. They balanced elegance with a warm, festive touch, making it our best event yet.
                            </p>
                            <p className="text-amber-500 font-medium">The Johnson Family - Charity Gala</p>
                        </div>
                    </div>

                    {/* Empty middle column */}
                    <div className="md:col-span-1 hidden md:block">
                        {/* Intentionally left empty */}
                    </div>

                    {/* Baby Shower - right */}
                    <div className="md:col-span-1">
                        <div className="mb-4">
                            <img
                                src="/assets/baby-shower-testimonial.png"
                                alt="Luxury Baby Shower"
                                className="w-full h-64 object-cover"
                            />
                        </div>
                        <div>
                            <p className="mb-4 text-gray-700">
                                The décor was out of a dream! Jennywealth understood my vision and brought it to life beautifully. It was elegant, intimate, and exactly what I hoped for.
                            </p>
                            <p className="text-amber-500 font-medium">Sandra's Luxury Baby Shower</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialStories;