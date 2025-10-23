import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
    const faqs = [
        {
            question: "How to book a premium slot?",
            answer: "Go to 'Premium Slots,' choose a plan, and confirm payment."
        },
        {
            question: "How to resell a slot?",
            answer: "Visit 'My Slots' and tap 'Resell Slot.'"
        },
        {
            question: "What if payment fails?",
            answer: "Refunds are processed within 24 hours."
        },
        {
            question: "How long does my wish stay visible?",
            answer: "Each wish is displayed for 15 minutes to maintain exclusivity and engagement."
        },
        {
            question: "Can I customize my wallpaper?",
            answer: "Yes, you can upload custom images and add personalized messages to your wallpapers."
        }
    ];

    const [openIndex, setOpenIndex] = React.useState(0);

    return (
        <section id="faq" className="py-16 bg-white">
            <div className="container mx-auto px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Frequently Asked Questions
                    </h2>
                    <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
                    <p className="text-gray-600">
                        Everything you need to know about LoWall
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors duration-200"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex items-center justify-between"
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                            >
                                <h3 className="text-base font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                {openIndex === index ? (
                                    <ChevronUp className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="px-6 pb-4">
                                    <div className="w-8 h-0.5 bg-blue-500 mb-3"></div>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom Section */}
                <div className="text-center mt-8">
                    <p className="text-gray-500 text-sm mb-4">
                        Still have questions? We're here to help.
                    </p>
                    <button className="px-6 py-2.5 bg-blue-500 text-white text-sm font-medium rounded hover:bg-blue-600 transition-colors duration-300">
                        Contact Support
                    </button>
                </div>
            </div>
        </section>
    );
};

export default FAQ;