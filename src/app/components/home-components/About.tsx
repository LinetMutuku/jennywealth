import Link from 'next/link';

export default function About() {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="relative">
                        <img
                            src="/assets/Abouthome.jpeg"
                            alt="Event planners discussing details"
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>

                    <div className="flex flex-col justify-center text-dark">
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
                            About Jennywealth: Excellence in Every Event
                        </h2>
                        <p className="text-gray-700 mb-6">
                            With over 10 years of experience, we specialize in curating unique event experiences that leave lasting memories.
                            From corporate gatherings to extravagant weddings, we ensure precision in every detail.
                        </p>

                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-yellow-400 mr-3">
                                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Over 500 successful events hosted</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-yellow-400 mr-3">
                                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Certified event planners with top industry expertise</p>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-yellow-400 mr-3">
                                    <svg className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-gray-700">Award-winning customer service</p>
                            </div>
                        </div>

                        <div>
                            <Link
                                href="/about-us"
                                className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors inline-block"
                            >
                                Learn More About Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}