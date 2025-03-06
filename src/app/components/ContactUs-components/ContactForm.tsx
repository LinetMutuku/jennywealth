'use client';

import React, { useState } from 'react';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        eventType: '',
        eventDate: '',
        eventLocation: '',
        moreDetails: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission - replace with your API call
        console.log('Form submitted:', formData);
        // Reset form or show success message
        alert('Inquiry sent successfully!');
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            eventType: '',
            eventDate: '',
            eventLocation: '',
            moreDetails: ''
        });
    };

    return (
        <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="bg-white p-8 rounded-xl border border-amber-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-serif text-center mb-8 text-amber-700">Get in Touch</h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                                required
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                                required
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
                                Event Type
                            </label>
                            <input
                                type="text"
                                id="eventType"
                                name="eventType"
                                value={formData.eventType}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                                Event Date
                            </label>
                            <input
                                type="date"
                                id="eventDate"
                                name="eventDate"
                                value={formData.eventDate}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="eventLocation" className="block text-sm font-medium text-gray-700">
                                Event Location
                            </label>
                            <input
                                type="text"
                                id="eventLocation"
                                name="eventLocation"
                                value={formData.eventLocation}
                                onChange={handleChange}
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="moreDetails" className="block text-sm font-medium text-gray-700">
                            More Details
                        </label>
                        <textarea
                            id="moreDetails"
                            name="moreDetails"
                            rows={5}
                            value={formData.moreDetails}
                            onChange={handleChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-300 focus:border-amber-300 transition-all"
                            placeholder="Tell us more about your event vision..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-amber-400 hover:bg-amber-500 text-gray-800 font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:scale-102 shadow-md hover:shadow-lg text-lg"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;