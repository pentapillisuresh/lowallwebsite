import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Get In Touch
                    </h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                        Reach us anytime — we love hearing from you!
                    </p>
                </div>

                {/* Contact Options */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Email Support */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Mail className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Email Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            support@LoWall.in
                        </p>
                    </div>

                    {/* Phone Support */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Phone className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Phone Support
                        </h3>
                        <p className="text-gray-600 text-sm">
                            +91 98765 43210
                        </p>
                    </div>

                    {/* Live Chat */}
                    <div className="bg-white p-6 rounded-lg border border-gray-200 text-center hover:shadow-md transition-shadow duration-300">
                        <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MessageCircle className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">
                            Live Chat
                        </h3>
                        <p className="text-gray-600 text-sm">
                            Mon-Fri, 10AM-6PM IST
                        </p>
                    </div>
                </div>

                {/* Additional Info */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        We typically respond within 2 hours during business days
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;