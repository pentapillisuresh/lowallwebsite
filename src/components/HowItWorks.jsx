import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Upload",
      description: "Upload your wallpaper and message",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      )
    },
    {
      number: "2",
      title: "Approve",
      description: "Admin approves and schedules your wish",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    {
      number: "3",
      title: "Display",
      description: "Your wallpaper appears for 15 minutes",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      number: "4",
      title: "Boost",
      description: "Boost visibility with premium slots",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      )
    },
    {
      number: "5",
      title: "Earn",
      description: "Resell slots or connect with buyers",
      icon: (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 3h12"/><path d="M6 8h12"/><path d="m6 13 8.5 8"/><path d="M6 13h3"/><path d="M9 13c6.667 0 6.667-10 0-10"/>
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How It Works
          </h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-600">
            Simple steps to share your wishes with the world
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-5xl mx-auto">
            {/* Connector Line */}
            <div className="absolute left-20 right-20 top-8 h-0.5 bg-gray-300"></div>
            
            <div className="grid grid-cols-5 gap-4">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Step Circle */}
                  <div className="relative mb-4 z-10">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-blue-600 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <span className="text-gray-900 font-bold text-xs">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-2">
                    <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-4 border-white group-hover:bg-blue-600 transition-colors duration-300">
                      {step.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 bg-white rounded-full flex items-center justify-center shadow-md border border-gray-200">
                      <span className="text-gray-900 font-bold text-xs">{step.number}</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;