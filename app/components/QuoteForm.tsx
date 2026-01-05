"use client";

import { useState } from 'react';

const QuoteForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        serviceType: '',
        source: '',
        details: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
        alert('Thank you! We will contact you shortly.');
    };

    return (
        <section className="py-20 bg-background-alt">
            <div className="max-w-4xl mx-auto px-4">
                <div className="bg-background p-8 md:p-12 rounded-xl shadow-lg border border-white/5">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">Project Details</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="firstName" className="font-semibold text-gray-200">First Name *</label>
                            <input
                                type="text"
                                id="firstName"
                                name="firstName"
                                required
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="lastName" className="font-semibold text-gray-200">Last Name *</label>
                            <input
                                type="text"
                                id="lastName"
                                name="lastName"
                                required
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="font-semibold text-gray-200">Email Address *</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone" className="font-semibold text-gray-200">Phone Number *</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="address" className="font-semibold text-gray-200">Property Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="city" className="font-semibold text-gray-200">City</label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.city}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="serviceType" className="font-semibold text-gray-200">Type of Service *</label>
                            <select
                                id="serviceType"
                                name="serviceType"
                                required
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.serviceType}
                                onChange={handleChange}
                            >
                                <option value="">Select a service...</option>
                                <option value="brick">Brick Work</option>
                                <option value="asphalt">Asphalt Paving</option>
                                <option value="concrete">Concrete</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="source" className="font-semibold text-gray-200">How did you hear about us?</label>
                            <select
                                id="source"
                                name="source"
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors bg-background-alt text-white"
                                value={formData.source}
                                onChange={handleChange}
                            >
                                <option value="">Select an option...</option>
                                <option value="google">Google Search</option>
                                <option value="social">Social Media</option>
                                <option value="referral">Friend/Family Referral</option>
                                <option value="advertisement">Advertisement</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="details" className="font-semibold text-gray-200">Project Details</label>
                            <textarea
                                id="details"
                                name="details"
                                rows={5}
                                className="p-3 border border-gray-700 rounded focus:outline-none focus:border-primary transition-colors resize-y bg-background-alt text-white"
                                placeholder="Please describe your project requirements..."
                                value={formData.details}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 mt-4">
                            <button
                                type="submit"
                                className="w-full py-4 bg-primary hover:bg-primary-dark text-white font-bold text-lg rounded transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-primary/20"
                            >
                                Submit Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default QuoteForm;
