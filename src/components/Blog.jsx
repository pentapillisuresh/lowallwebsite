// components/Contact.js
import React, { useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  // Primary and Secondary Colors
  const primaryColor = '#F97316'; // Orange-500
  const secondaryColor = '#1E293B'; // Slate-800
  const backgroundColor = '#0A0F1C'; // Dark background

  return (
    <section id='blog' className="relative py-16 overflow-hidden" style={{ backgroundColor }}>
      
      {/* Premium Dotted Background */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(${primaryColor}40 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}
      ></div>
      
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"
        style={{ background: primaryColor }}
      ></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"
        style={{ background: secondaryColor }}
      ></div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">

          {/* ================= LEFT CARD - Premium Design ================= */}
          <div 
            className="rounded-3xl p-8 relative flex flex-col justify-between overflow-hidden"
            style={{ 
              background: `linear-gradient(135deg, ${secondaryColor}, #0F172A)`,
              boxShadow: `0 25px 50px -12px #00000080`
            }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full blur-3xl"
                style={{ background: primaryColor }}
              ></div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm tracking-[3px] font-medium mb-6"
                style={{ color: primaryColor }}
              >
                GET IN TOUCH
              </p>
              
              <h3 className="text-2xl font-bold text-white mb-8">
                We're Here to Help
              </h3>

              {/* Contact Items */}
              <div className="space-y-6 mb-10">
                {/* Phone */}
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${primaryColor}20`,
                      color: primaryColor
                    }}
                  >
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Call Support 24/7</p>
                    <h4 className="text-base font-semibold text-white">
                      +91 98765 43210
                    </h4>
                  </div>
                </div>

                {/* Email */}
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${primaryColor}20`,
                      color: primaryColor
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Email Us</p>
                    <h4 className="text-base font-semibold text-white">
                      info@rsk.in
                    </h4>
                  </div>
                </div>

                {/* Location */}
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${primaryColor}20`,
                      color: primaryColor
                    }}
                  >
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Visit Us</p>
                    <h4 className="text-base font-semibold text-white">
                      Vizag, India
                    </h4>
                  </div>
                </div>

                {/* Working Hours */}
                <div 
                  className="flex items-center gap-4 group cursor-pointer"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <div className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ 
                      background: `${primaryColor}20`,
                      color: primaryColor
                    }}
                  >
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 mb-1">Working Hours</p>
                    <h4 className="text-base font-semibold text-white">
                      Mon - Sat: 9AM - 6PM
                    </h4>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Image - Smaller and Premium */}
            <div className="relative mt-4 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 rounded-full blur-xl opacity-50"
                  style={{ background: primaryColor }}
                ></div>
                <img
                  src="/images/support.png"
                  alt="Support"
                  className="relative w-32 h-32 object-contain"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT FORM - Premium Design ================= */}
          <div 
            className="bg-white rounded-3xl p-8 shadow-xl relative overflow-hidden"
            style={{ boxShadow: `0 20px 40px -15px #00000080` }}
            data-aos="fade-left"
            data-aos-delay="300"
          >
            
            {/* Form Header */}
            <div className="mb-8">
              <p className="text-xs tracking-[3px] font-medium mb-2"
                style={{ color: primaryColor }}
              >
                CONTACT US
              </p>
              <h2 className="text-2xl font-bold"
                style={{ color: secondaryColor }}
              >
                Send a Message
              </h2>
              <div className="w-12 h-0.5 mt-3 rounded-full"
                style={{ background: primaryColor }}
              ></div>
            </div>

            <form className="space-y-6">

              {/* Row 1 - Name & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative group" data-aos="fade-up" data-aos-delay="400">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-0 py-2 text-sm bg-transparent border-b-2 outline-none transition-colors duration-300"
                    style={{ 
                      borderColor: '#E2E8F0',
                      color: secondaryColor
                    }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
                <div className="relative group" data-aos="fade-up" data-aos-delay="500">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-0 py-2 text-sm bg-transparent border-b-2 outline-none transition-colors duration-300"
                    style={{ 
                      borderColor: '#E2E8F0',
                      color: secondaryColor
                    }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
              </div>

              {/* Row 2 - Phone & Subject */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative group" data-aos="fade-up" data-aos-delay="600">
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-0 py-2 text-sm bg-transparent border-b-2 outline-none transition-colors duration-300"
                    style={{ 
                      borderColor: '#E2E8F0',
                      color: secondaryColor
                    }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
                <div className="relative group" data-aos="fade-up" data-aos-delay="700">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-0 py-2 text-sm bg-transparent border-b-2 outline-none transition-colors duration-300"
                    style={{ 
                      borderColor: '#E2E8F0',
                      color: secondaryColor
                    }}
                    onFocus={(e) => e.target.style.borderColor = primaryColor}
                    onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="relative" data-aos="fade-up" data-aos-delay="800">
                <textarea
                  rows="3"
                  placeholder="Your Message"
                  className="w-full px-0 py-2 text-sm bg-transparent border-b-2 outline-none transition-colors duration-300 resize-none"
                  style={{ 
                    borderColor: '#E2E8F0',
                    color: secondaryColor
                  }}
                  onFocus={(e) => e.target.style.borderColor = primaryColor}
                  onBlur={(e) => e.target.style.borderColor = '#E2E8F0'}
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center" data-aos="fade-up" data-aos-delay="900">
                <button className="relative group inline-flex items-center justify-center overflow-hidden border-2 px-10 py-4 font-medium tracking-wider transition-all duration-500"
                  style={{ borderColor: secondaryColor }}
                >
                  {/* Text + Arrow */}
                  <span className="relative z-10 flex items-center space-x-3 group-hover:text-white transition-colors duration-500"
                    style={{ color: secondaryColor }}
                  >
                    <span>Send Message</span>
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
                  <span className="absolute top-0 left-0 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"
                    style={{ background: secondaryColor }}
                  ></span>
                  <span className="absolute top-0 left-1/2 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"
                    style={{ background: secondaryColor }}
                  ></span>
                  <span className="absolute bottom-0 left-1/4 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"
                    style={{ background: secondaryColor }}
                  ></span>
                  <span className="absolute bottom-0 left-3/4 w-1/4 h-0 bg-gray-900 transition-all duration-500 group-hover:h-full"
                    style={{ background: secondaryColor }}
                  ></span>
                </button>
              </div>
            </form>

            {/* Quick Response Text */}
            <p className="text-xs text-gray-400 mt-6 text-center">
              We'll get back to you within 24 hours
            </p>
          </div>

        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>

      {/* Font imports */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default Contact;