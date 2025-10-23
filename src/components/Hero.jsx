// components/Hero.js
import React, { useState, useEffect } from 'react';
import { Download, Play, ArrowLeft, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const bannerItems = [
    {
      id: 1,
      title: "Share Your Wishes",
      subtitle: "Create Beautiful Digital Moments",
      description: "Transform your heartfelt messages into stunning live wallpapers that appear on screens worldwide",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Start Sharing"
    },
    {
      id: 2,
      title: "Global Celebrations", 
      subtitle: "Connect Across Borders",
      description: "Join a worldwide community sharing wishes, celebrations, and special moments in real-time",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Join Community"
    },
    {
      id: 3,
      title: "Premium Experience",
      subtitle: "Exclusive Features",
      description: "Access premium slots, advanced customization, and enhanced visibility for your special moments",
      image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      buttonText: "Explore Premium"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
   <section id="home" className="relative min-h-screen text-white overflow-hidden pt-24">

      {/* Banner Carousel */}
      {bannerItems.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-800/70 to-blue-700/60"></div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
            <div className="max-w-4xl mx-auto w-full">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      {item.title}
                    </h1>
                    <h2 className="text-xl md:text-2xl text-blue-200 font-semibold">
                      {item.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-100 leading-relaxed max-w-2xl">
                      {item.description}
                    </p>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-yellow-500 text-blue-900 font-semibold rounded-lg hover:bg-yellow-400 transition-all duration-300 shadow-lg text-base">
                      <Download className="w-5 h-5" />
                      <span>Download App</span>
                    </button>
                    <button className="flex items-center justify-center space-x-3 px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 border border-white text-base">
                      <Play className="w-5 h-5" />
                      <span>Watch Demo</span>
                    </button>
                  </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-3 gap-4 max-w-md">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">15 min</div>
                    <div className="text-blue-200 text-sm">Display Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">1000+</div>
                    <div className="text-blue-200 text-sm">Active Users</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">24/7</div>
                    <div className="text-blue-200 text-sm">Live Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-3">
          {bannerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-yellow-400 scale-125' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => setCurrentSlide((prev) => (prev - 1 + bannerItems.length) % bannerItems.length)}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 border border-white/30"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % bannerItems.length)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg p-3 transition-all duration-300 border border-white/30"
      >
        <ArrowRight className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
