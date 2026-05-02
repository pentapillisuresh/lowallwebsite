// components/Hawkeye.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hawkeye = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  const features = [
    {
      icon: "🔐",
      title: "Device Fingerprinting",
      description: "Uniquely identifies each machine using MAC address, hardware ID, IP, and OS metadata"
    },
    {
      icon: "📱",
      title: "QR Watermark Overlay",
      description: "Renders a transparent, click-through QR code overlay that moves across the screen at configurable intervals"
    },
    {
      icon: "📲",
      title: "OTP Registration",
      description: "Verifies device ownership via mobile number OTP before activation"
    },
    {
      icon: "🔑",
      title: "Serial Key Licensing",
      description: "Issues tamper-resistant serial keys tied to hardware for license enforcement"
    },
    {
      icon: "📍",
      title: "Geolocation Tagging",
      description: "Optionally captures device location at registration for enhanced tracking"
    },
    {
      icon: "💻",
      title: "System Tray Integration",
      description: "Runs quietly in the background with minimal system footprint"
    },
    {
      icon: "🛡️",
      title: "Privacy-First Design",
      description: "No keylogging, no screen capture, no personal data collection beyond registration use"
    }
  ];

  const steps = [
    {
      number: "01",
      title: "Installation & Fingerprinting",
      description: "When installed on a Windows device, HAWKEYE generates a unique device fingerprint derived from the machine's MAC address, hardware ID, and IP address.",
      details: ["Automatic hardware detection", "Unique fingerprint generation", "Zero user intervention required"]
    },
    {
      number: "02",
      title: "QR Watermark Generation",
      description: "The fingerprint is encoded as a QR code and displayed as a faint, animated watermark that floats over all applications — visible in screenshots and recordings, yet non-intrusive in day-to-day use.",
      details: ["Transparent overlay technology", "Configurable movement intervals", "Click-through design"]
    },
    {
      number: "03",
      title: "Registration & Verification",
      description: "Device ownership verification via OTP and serial key licensing ensures only authorized devices can activate the watermarking system.",
      details: ["OTP mobile verification", "Hardware-tied serial keys", "Geolocation tagging (optional)"]
    },
    {
      number: "04",
      title: "Continuous Protection",
      description: "Runs silently in the system tray with minimal footprint, providing persistent device traceability without disrupting daily operations.",
      details: ["Background operation", "Minimal resource usage", "Automatic updates"]
    }
  ];

  return (
    <>
      {/* Hero Banner Section - Increased Height with Logo */}
      <section className="relative h-[600px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("./images/banner5.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-dark-blue/90"></div>
        </div>
        
        {/* Content - Logo, Title and Subtitle */}
        <div className="relative h-full flex items-center justify-center text-center">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto" data-aos="fade-up">
              {/* Logo at the top of banner */}
              <div className="mb-8 flex justify-center" data-aos="fade-down">
                <img
                  src="/images/hawkeye.jpeg"
                  alt="HAWKEYE Logo"
                  className="h-20 lg:h-24 lg:w-24 object-contain"
                />
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                HAWKEYE
                <span className="block text-orange-500 mt-2">RSK Identity Watermark</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed">
                HAWKEYE is a device identity watermarking system that silently embeds a unique, device-specific QR code 
                as a transparent overlay on every Windows screen. Designed for organizations that need passive device 
                traceability, it links each machine to a registered user without disrupting workflow.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - 4 top, 3 bottom */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
              Key Features
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Enterprise-Grade Security Features
            </h2>
            <p className="text-gray-600 text-lg">
              Advanced device watermarking technology designed for organizations needing passive device traceability
            </p>
          </div>

          {/* First Row - 4 Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {features.slice(0, 4).map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-3 w-10 h-0.5 bg-orange-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* Second Row - 3 Features (centered) */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.slice(4, 7).map((feature, index) => (
              <div
                key={index + 4}
                className="group bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={(index + 4) * 100}
              >
                <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-3 w-10 h-0.5 bg-orange-500 rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
            <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-700 font-semibold text-sm mb-4">
              How It Works
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              Simple Setup, Powerful Protection
            </h2>
            <p className="text-gray-600 text-lg">
              Get started in minutes with our streamlined installation process
            </p>
          </div>

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200"
                data-aos="fade-up"
                data-aos-delay={index * 150}
              >
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-64 bg-orange-500 p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-white opacity-90">
                        {step.number}
                      </div>
                      <div className="w-16 h-0.5 bg-white/50 mx-auto my-4"></div>
                      <div className="text-white font-semibold text-lg">
                        Step {index + 1}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-1 p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="grid sm:grid-cols-3 gap-4">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 bg-orange-50 rounded-lg p-3">
                          <svg className="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                          </svg>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-blue">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto" data-aos="zoom-in">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Secure Your Devices?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Deploy HAWKEYE today and get complete device traceability with zero workflow disruption
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all duration-300 shadow-lg">
                Deploy HAWKEYE Today
              </button>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
            <p className="text-gray-300 text-sm mt-6">
              Free 30-day trial · No credit card required · Enterprise-grade security
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hawkeye;