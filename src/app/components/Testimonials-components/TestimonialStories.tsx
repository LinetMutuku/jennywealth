// 'use client';
//
// import React, { useState } from 'react';
// import { StaticImageData } from 'next/image';
//
// // Define TypeScript interfaces for our components
// interface TestimonialItemProps {
//     pictures: string | StaticImageData;
//     title: string;
//     quote: string;
// }
//
// interface TestimonialItem {
//     id: number;
//     image: string | StaticImageData;
//     title: string;
//     quote: string;
// }
//
// const TestimonialStories = () => {
//     const testimonials: TestimonialItem[] = [
//         {
//             id: 1,
//             image: '/assets/wedding-testimonials.png',
//             title: "Chloë & Daniel - Wedding Celebration",
//             quote: "Jennywealth made our wedding a dream from the breathtaking decor to the perfect timeline, every moment felt magical. The attention to detail was incredible—our guests are still raving about it!",
//         },
//         {
//             id: 2,
//             image: '/assets/anniversary-testimonials.png',
//             title: "The McIntyres - 50th Anniversary Gala",
//             quote: "Planning a milestone event felt overwhelming, but Jennywealth handled everything with precision. The team transformed our vision into a beautiful celebration that reflected our journey perfectly.",
//         },
//         {
//             id: 3,
//             image: '/assets/corporate-testimonials.png',
//             title: "Youth Bank - Corporate Awards Night",
//             quote: "Exceptional management, professionalism, organization, and creativity accurately describe Jennywealth, from stage design to logistics, every element was flawlessly executed.",
//         },
//         {
//             id: 4,
//             image: '/assets/grandma-testimonials.jpeg',
//             title: "Jake, Aiko & Josh - Grandma's Party",
//             quote: "Jennywealth Honeybees made my grandma's party unforgettable! Stunning decor, top-tier service & budget-friendly. They don't just plan events—they create memories!",
//         },
//         {
//             id: 5,
//             image: '/assets/destination-testimonials.png',
//             title: "Nia & Ernst - Destination Wedding",
//             quote: "We were nervous about planning a wedding abroad, but Jennywealth managed everything seamlessly. The coordination between vendors, the stunning venue and the stress-free experience were amazing.",
//         },
//         {
//             id: 6,
//             image: '/assets/networking-testimonials.png',
//             title: "EcoHolds Lagos - Networking Event",
//             quote: "Our networking event was smooth, professional, and engaging. Jennywealth took care of the setting, stage setup, and even the refreshments—our guests loved the atmosphere!",
//         },
//         {
//             id: 7,
//             image: '/assets/charity-testimonials.png',
//             title: "The Johnson Family - Charity Gala",
//             quote: "Our annual charity gala was a massive success thanks to Jennywealth. They balanced elegance with a warm, festive touch, making it our best event yet.",
//         },
//         {
//             id: 8,
//             image: '/assets/baby-testimonials.png',
//             title: "Sandra's Luxury Baby Shower",
//             quote: "The decor was out of a dream! Jennywealth understood my vision and brought it to life beautifully. It was elegant, intimate, and exactly what I hoped for.",
//         }
//     ];
//
//     return (
//         <section className="py-16 bg-white">
//             <div className="container mx-auto px-4">
//                 <div className="text-center mb-12">
//                     <h2 className="text-3xl md:text-4xl font-serif mb-4">
//                         Stories of Unforgettable Experiences
//                     </h2>
//                     <p className="text-gray-700 max-w-2xl mx-auto">
//                         Hear from our happy clients who trusted us to bring their events to life with elegance and precision
//                     </p>
//                 </div>
//
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {testimonials.map((item) => (
//                         <TestimonialItem
//                             key={item.id}
//                             pictures={item.image}
//                             title={item.title}
//                             quote={item.quote}
//                         />
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };
//
// // Testimonial Item Component
// function TestimonialItem({ pictures, title, quote }: TestimonialItemProps) {
//     const [isHovered, setIsHovered] = useState(false);
//
//     return (
//         <div className="flex flex-col h-full">
//             <div className="mb-4 overflow-hidden rounded">
//                 <img
//                     src={pictures.toString()}
//                     alt={title}
//                     className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105"
//                     onError={(e) => {
//                         console.error(`Failed to load image: ${pictures}`);
//                         e.currentTarget.src = "https://placehold.co/600x400/gold/white?text=Testimonial";
//                     }}
//                 />
//             </div>
//             <div className="flex flex-col flex-grow">
//                 <p className="text-gray-700 mb-4 flex-grow">{quote}</p>
//                 <h3 className="text-gold-500 font-medium text-sm">{title}</h3>
//             </div>
//         </div>
//     );
// }
//
// export default TestimonialStories;