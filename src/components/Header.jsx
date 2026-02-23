// components/Header.js
import React, { useState, useEffect } from "react";

const navItems = [
  "Home",
  "About",
  "Services",
  "Projects",
  "Why Choose Us",
  "Contact",
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Detect scroll position + active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = navItems.map((item) =>
        document.getElementById(item.toLowerCase().replace(/\s/g, "-"))
      );

      sections.forEach((section) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center">
            <img
              src="/images/logo1.png"
              alt="WishWall Logo"
              className="h-12 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const id = item.toLowerCase().replace(/\s/g, "-");
              const isActive = activeSection === id;

              return (
                <a
                  key={item}
                  href={`#${id}`}
                  className={`relative px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-300 group
                    ${
                      isActive
                        ? "text-secondary"
                        : isScrolled
                        ? "text-secondary/70"
                        : "text-white"
                    }
                    hover:text-primary
                  `}
                >
                  {item}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-primary transition-all duration-300
                      ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover:w-full"
                      }
                    `}
                  ></span>
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-secondary hover:bg-secondary/10"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-4 rounded-2xl overflow-hidden shadow-xl animate-slideDown ${
              isScrolled
                ? "bg-white border border-secondary/10"
                : "bg-secondary/95 backdrop-blur-md border border-white/10"
            }`}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => {
                const id = item.toLowerCase().replace(/\s/g, "-");
                const isActive = activeSection === id;

                return (
                  <a
                    key={item}
                    href={`#${id}`}
                    className={`px-6 py-4 font-medium transition-all duration-300
                      ${
                        isActive
                          ? "text-secondary bg-primary/10"
                          : isScrolled
                          ? "text-secondary"
                          : "text-white"
                      }
                      hover:text-primary hover:bg-primary/10
                    `}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;