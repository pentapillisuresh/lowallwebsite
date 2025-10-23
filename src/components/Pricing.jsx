// components/Pricing.js
import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  
  const plans = [
    {
      name: "Starter",
      description: "Perfect for occasional use",
      monthlyPrice: "$9",
      yearlyPrice: "$90",
      features: [
        "Up to 10 wishes per month",
        "Basic templates",
        "Standard support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Great for regular users",
      monthlyPrice: "$19",
      yearlyPrice: "$190",
      features: [
        "Up to 50 wishes per month",
        "All templates",
        "Premium effects",
        "Advanced analytics",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For businesses & heavy users",
      monthlyPrice: "$49",
      yearlyPrice: "$490",
      features: [
        "Unlimited wishes",
        "All templates & effects",
        "Custom branding",
        "Advanced analytics",
        "Dedicated support",
        "API access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Premium Stats & Pricing
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs and experience the full power of our platform
          </p>
          
          {/* Billing Toggle */}
          <div className="mt-8 inline-flex bg-white border border-gray-300 rounded-lg p-1">
            <button 
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                billingCycle === 'monthly' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setBillingCycle('monthly')}
            >
              Monthly
            </button>
            <button 
              className={`px-6 py-2 rounded-md font-medium transition-colors duration-300 ${
                billingCycle === 'yearly' 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              onClick={() => setBillingCycle('yearly')}
            >
              Yearly (Save 15%)
            </button>
          </div>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`bg-white rounded-lg border ${
                plan.popular 
                  ? 'border-blue-500 shadow-lg relative' 
                  : 'border-gray-200 shadow-sm'
              } hover:shadow-md transition-shadow duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-6">
                {/* Plan Header */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 text-sm">{plan.description}</p>
                  <div className="mt-4">
                    <span className="text-3xl font-bold text-gray-900">
                      {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                    </span>
                    <span className="text-gray-600">
                      {billingCycle === 'monthly' ? '/month' : '/year'}
                    </span>
                  </div>
                </div>
                
                {/* Features List */}
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <button 
                  className={`w-full py-3 rounded-md font-medium transition-colors duration-300 ${
                    plan.popular 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;