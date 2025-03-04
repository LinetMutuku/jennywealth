import Link from 'next/link';

const Services = () => {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif mb-6 text-black">
                            Our Expert Event Management Services
                        </h2>
                        <p className="text-gray-700 mb-8">
                            We handle every detail, from event conceptualization and budget planning to venue coordination, décor, and on-site management, ensuring a seamless and unforgettable experience.
                        </p>

                        <Link
                            href="/services"
                            className="bg-yellow-400 text-black px-6 py-3 rounded-full font-medium hover:bg-yellow-500 transition-colors inline-block"
                        >
                            View Our Services
                        </Link>
                    </div>

                    <div className="relative overflow-hidden rounded">
                        <img
                            src="/assets/servicehome.jpeg"
                            alt="Elegant event setting with chandeliers"
                            className="w-full h-80 object-cover object-center rounded"
                            style={{ objectPosition: "center top" }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;