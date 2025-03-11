import Link from 'next/link';

const CTA = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative overflow-hidden rounded">
                        <img
                            src="/assets/team-event.jpeg"
                            alt="Jennywealth event planning team"
                            className="w-full h-auto object-cover rounded"
                        />
                    </div>

                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
                            Let's Plan Your Perfect Event
                        </h2>
                        <p className="text-gray-700 mb-8">
                            With over 10 years of industry experience, we specialize in curating unique event experiences that leave lasting memories. From corporate gatherings to opulent weddings of luxurious taste, we ensure precision in every detail.
                        </p>

                        <Link
                            href="/contact"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors inline-block"
                        >
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;