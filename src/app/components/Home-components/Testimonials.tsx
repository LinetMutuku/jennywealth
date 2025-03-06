import Link from 'next/link';

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif mb-4 text-black">What Our Clients Say</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex">
                        <div className="flex-shrink-0 mr-6">
                            <img
                                src="/assets/testimonial-1.jpeg"
                                alt="Sophia & Daniel"
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-4">Jennywealth made our wedding truly magical! Every detail was flawless, and the experience was beyond our expectations.</p>
                            <p className="font-medium text-yellow-500">Sophia & Daniel, Newlyweds</p>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-md flex">
                        <div className="flex-shrink-0 mr-6">
                            <img
                                src="/assets/testimonial-2.jpeg"
                                alt="James K."
                                className="w-24 h-24 rounded-full object-cover"
                            />
                        </div>
                        <div>
                            <p className="text-gray-700 mb-4">I wanted an intimate and elegant dinner party for my closest friends, and Jennywealth delivered perfection. They are simply the best in the game.</p>
                            <p className="font-medium text-yellow-500">James K., Private Client</p>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        href="/testimonials"
                        className="inline-flex items-center text-yellow-500 font-medium hover:underline"
                    >
                        Read More Reviews
                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;