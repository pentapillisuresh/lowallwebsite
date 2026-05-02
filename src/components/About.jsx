// components/About.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <section id="about" className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Section Header - Left Aligned */}
       <div className="mb-12" data-aos="fade-up">
  <p className="text-sm tracking-[4px] text-orange-500 font-semibold mb-3 text-center">
    ABOUT RSK
  </p>

  {/* Centered Line */}
  <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mx-auto"></div>
</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* ================= LEFT SIDE - IMAGE COLLAGE ================= */}
          <div className="relative w-full">

            {/* Main Image Grid with AOS animations */}
            <div className="grid grid-cols-2 gap-3">
              
              {/* Image 1 - Top Left */}
              <div 
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-56"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <img
                  src="./images/about1.jpeg"
                  alt="Construction discussion"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Image 2 - Top Right */}
              <div 
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-56 "
                data-aos="fade-left"
                data-aos-delay="200"
              >
                <img
                  src="./images/about2.jpeg"
                  alt="Planning meeting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Image 3 - Bottom Left */}
              <div 
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-56 -mt-2"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <img
                  src="./images/about3.jpg"
                  alt="Blueprint tools"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Image 4 - Bottom Right */}
              <div 
                className="overflow-hidden shadow-md hover:shadow-lg transition-all duration-500 h-56 -mt-2"
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <img
                  src="./images/about4.jpeg"
                  alt="Construction site"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

            </div>

            {/* Center Circle with Logo - Smaller */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              data-aos="zoom-in"
              data-aos-delay="500"
            >
              <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-orange-200">
                <img 
                  src="./images/rsk1.png" 
                  alt="RSK Logo" 
                  className="w-8 h-8 object-contain" 
                />
              </div>
            </div>

          </div>

          {/* ================= RIGHT SIDE - PROFESSIONAL CONTENT ================= */}
          <div className="space-y-5" data-aos="fade-left" data-aos-delay="200">

            {/* Company Introduction */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
             Building Excellence Since 2004
          </h2>
              <div className="w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
            </div>

            {/* Professional Description - Clean, No Cards */}
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>
                <span className="text-orange-500 font-medium text-lg">"</span>
                RSK stands as a beacon of excellence in Vizag's construction landscape, 
                delivering unparalleled civil engineering solutions.
                <span className="text-orange-500 font-medium text-lg">"</span>
              </p>
              
              <p>
                With two decades of industry leadership, we've mastered the art of transforming 
                blueprints into architectural marvels. Our portfolio spans residential complexes, 
                commercial spaces, and industrial infrastructure.
              </p>
              
              <p>
                We integrate cutting-edge technology with sustainable practices, ensuring every 
                structure meets today's standards and anticipates tomorrow's needs.
              </p>
            </div>

            {/* Key Metrics - Clean Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-left" data-aos="fade-up" data-aos-delay="300">
                <div className="text-2xl font-bold text-orange-500">20+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-left" data-aos="fade-up" data-aos-delay="400">
                <div className="text-2xl font-bold text-orange-500">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-left" data-aos="fade-up" data-aos-delay="500">
                <div className="text-2xl font-bold text-orange-500">50+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider">Team</div>
              </div>
            </div>

            {/* Contact Information - Clean Format */}
           

            {/* Simple CTA */}
               <div className="text-center mt-16">
  <button className="relative group inline-flex items-center justify-center overflow-hidden border-2 border-gray-900 text-gray-900 px-10 py-4 font-medium tracking-wider transition-all duration-500">

    {/* Text + Arrow */}
    <span className="relative z-10 flex items-center space-x-3 group-hover:text-white transition-colors duration-500">
      <span>VIEW PROJECTS</span>
      <svg
        className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </span>

    {/* 4 Animated Strips */}

    {/* Top Left */}
    <span className="absolute top-0 left-0 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"></span>

    {/* Top Right */}
    <span className="absolute top-0 left-1/2 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"></span>

    {/* Bottom Left */}
    <span className="absolute bottom-0 left-1/4 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"></span>

    {/* Bottom Right */}
    <span className="absolute bottom-0 left-3/4 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"></span>

  </button>
</div>

          </div>

        </div>
      </div>

      {/* Font imports */}
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      
      <style jsx>{`
        * {
          font-family: 'Roboto', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default About;