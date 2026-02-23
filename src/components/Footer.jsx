// components/Footer.js
import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  Send,
} from "lucide-react";

const Footer = () => {
  const primaryColor = "#F97316";
  const secondaryColor = "#0B1E33";

  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: secondaryColor }}>
      
      {/* Background Construction Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.freepik.com/free-photo/copyspace-architecture-engineer-desktop_1421-30.jpg?t=st=1771880140~exp=1771883740~hmac=23479f24673ae0c58f3f350844f9fbd32b89807e545b828201c737f3a3db62fc&w=1060"
          alt="Construction site background"
          className="w-full h-full object-cover opacity-40"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E33] via-[#0B1E33]/80 to-[#0B1E33]/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1E33]/90 via-transparent to-[#0B1E33]/90"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-6 py-16">

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* Column 1 - Logo & About */}
          <div className="space-y-6">

            {/* Logo Only */}
            <div className="flex items-center">
              <img
                src="/images/logo1.png"
                alt="RSK Logo"
                className="h-12 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>

            <p className="text-sm text-gray-200 leading-relaxed max-w-sm">
              Delivering high-quality construction and civil engineering
              solutions with precision, integrity, and excellence since 2004.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {[Facebook, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    backgroundColor: `${primaryColor}30`,
                    color: primaryColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryColor;
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = `${primaryColor}30`;
                    e.currentTarget.style.color = primaryColor;
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-base mb-6 relative inline-block">
              Quick Links
              <span
                className="absolute -bottom-2 left-0 w-10 h-0.5 rounded-full"
                style={{ background: primaryColor }}
              ></span>
            </h4>

            <ul className="space-y-3">
              {[
                "Home",
                "About",
                "Services",
                "Projects",
                "Why-Choose Us",
                "Contact",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="flex items-center gap-2 text-sm text-gray-200 hover:text-white transition-all duration-300 group"
                  >
                    <ChevronRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                      style={{ color: primaryColor }}
                    />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Contact Info */}
          <div>
            <h4 className="text-white font-semibold text-base mb-6 relative inline-block">
              Contact
              <span
                className="absolute -bottom-2 left-0 w-10 h-0.5 rounded-full"
                style={{ background: primaryColor }}
              ></span>
            </h4>

            <div className="space-y-4 text-sm text-gray-200">

              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 flex-shrink-0" style={{ color: primaryColor }} />
                <p>
                  G-2, Varaha Towers, B Zone, Saptagiri Nagar,<br />
                  Sujatha Nagar, Pendurthi, Visakhapatnam - 531173
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} style={{ color: primaryColor }} />
                <a href="tel:+919133171710" className="hover:text-white transition-colors">
                  +91 9133 171710
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={16} style={{ color: primaryColor }} />
                <a href="mailto:y2k.sunil@gmail.com" className="hover:text-white transition-colors">
                  y2k.sunil@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={16} style={{ color: primaryColor }} />
                <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="text-xs text-gray-300 mb-2">Subscribe for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 text-xs rounded-l-lg bg-[#1E293B] text-white focus:outline-none focus:ring-1"
                  style={{ focus: { ringColor: primaryColor } }}
                />
                <button
                  className="px-4 py-2 rounded-r-lg transition-all duration-300 hover:opacity-90"
                  style={{ background: primaryColor }}
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-600 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-xs text-gray-300">
            © 2025 RSK Construction. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;