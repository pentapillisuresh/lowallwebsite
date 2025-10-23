// components/Features.js
import React from 'react';

const Features = () => {
  const features = [
    {
      title: "Upload Your Wish",
      description: "Express your feelings through wallpapers and short messages that spread positivity."
    },
    {
      title: "Limited-Time Display",
      description: "Each wallpaper is live for 15 minutes, creating exclusivity and excitement."
    },
    {
      title: "Premium Slots",
      description: "Book special hours during festivals or birthdays to feature your wish at the top."
    },
    {
      title: "Slot Resale Marketplace",
      description: "Resell your reserved slot to others — set price, chat, and earn instantly."
    },
    {
      title: "Community Engagement",
      description: "Connect globally through likes, comments, and shares — make friends through wishes."
    },
    {
      title: "Admin Moderation",
      description: "Every submission is reviewed for safety and positivity before going live."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white relative">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/1939485/pexels-photo-1939485.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")'
        }}
      ></div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Features That Make Every Celebration Special
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From limited-time wallpapers to community engagement and marketplace features
          </p>
        </div>
        
        {/* Features Grid - 3 columns layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-yellow-400 group"
            >
              {/* Number Indicator */}
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="w-6 h-1 bg-yellow-500 group-hover:w-12 transition-all duration-300"></div>
              </div>
              
              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-yellow-500 rounded-xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">15 min</div>
              <div className="text-lg font-medium opacity-90">Per Wish Display</div>
            </div>
            
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <div className="text-lg font-medium opacity-90">Weekly Users</div>
            </div>
            
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-lg font-medium opacity-90">Positive Reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;