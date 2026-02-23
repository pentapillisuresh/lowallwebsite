// components/GetConsultation.js
import React, { useEffect } from "react";
import { Phone, Mail, ChevronRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetConsultation = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const primaryColor = "#F97316";
  const secondaryColor = "#0B1E33";

  return (
    <section id="contact" className="relative w-full min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/image2.jpg"
          alt="Construction background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33] via-[#0B1E33]/95 to-[#0B1E33]/90"></div>
      </div>

      {/* Worker Image (Behind Content) */}
      <div className="absolute bottom-0 left-0 z-0 opacity-40 pointer-events-none hidden lg:block">
        <img
          src="/images/image.png"
          alt="Engineer"
          className="w-72 object-contain"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-white" data-aos="fade-right">

            {/* Label */}
            <p
              className="text-sm tracking-[4px] mb-4 font-semibold"
              style={{ color: primaryColor }}
            >
              GET CONSULTATION
            </p>

            {/* Heading */}
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
              Build Your Dream
              <br />
              <span style={{ color: primaryColor }}>
                With Confidence
              </span>
            </h1>

            {/* Description */}
            <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
              We deliver reliable construction services with expert planning,
              quality materials, and professional execution tailored to your needs.
            </p>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${primaryColor}20`, color: primaryColor }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Call Us</p>
                  <p className="text-sm font-semibold">+91 9133 171710</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ background: `${primaryColor}20`, color: primaryColor }}
                >
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-gray-400">Email Us</p>
                  <p className="text-sm font-semibold">y2k.sunil@gmail.com</p>
                </div>
              </div>

            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <div className="text-3xl font-bold" style={{ color: primaryColor }}>50+</div>
                <p className="text-xs text-gray-400">PROJECTS</p>
              </div>

              <div>
                <div className="text-3xl font-bold" style={{ color: primaryColor }}>20+</div>
                <p className="text-xs text-gray-400">YEARS EXPERIENCE</p>
              </div>

              <div>
                <div className="text-3xl font-bold" style={{ color: primaryColor }}>50+</div>
                <p className="text-xs text-gray-400">EXPERTS</p>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="bg-white rounded-3xl p-8 shadow-2xl"
            data-aos="fade-left"
          >

            <h3 className="text-2xl font-bold mb-2" style={{ color: secondaryColor }}>
              Free Consultation
            </h3>

            <p className="text-sm text-gray-500 mb-6">
              Fill in your details and our team will contact you shortly.
            </p>

            <form className="space-y-5">

              <input
                type="text"
                placeholder="Your Full Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
                style={{ focusRingColor: primaryColor }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 text-sm"
              />

              <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-sm text-gray-500">
                <option>Select Project Type</option>
                <option>Residential</option>
                <option>Commercial</option>
                <option>Industrial</option>
                <option>Renovation</option>
              </select>

              <textarea
                rows="3"
                placeholder="Brief description of your project"
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none text-sm resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full py-4 rounded-lg font-semibold text-white flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`
                }}
              >
                Request Consultation
                <ChevronRight size={18} />
              </button>

            </form>

            <p className="text-xs text-gray-400 text-center mt-4">
              ✓ 100% Free | ✓ No Obligation | ✓ Quick Response
            </p>

          </div>

        </div>
      </div>

    </section>
  );
};

export default GetConsultation;