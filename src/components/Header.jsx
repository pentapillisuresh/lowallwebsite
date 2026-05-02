// components/Header.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { name: "Home", path: "/", section: "home" },
  { name: "About", path: "/", section: "about" },
  { name: "Services", path: "/", section: "services" },
  { name: "Projects", path: "/", section: "projects" },
  { name: "Our Products", path: "/hawkeye", section: "products" },
  { name: "Why Choose Us", path: "/", section: "why-choose-us" },
  { name: "Blog", path: "/", section: "blog" }, 
  { name: "Contact", path: "/", section: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only track sections on home page
      if (location.pathname === "/") {
        const sections = navItems.map((item) =>
          document.getElementById(item.section)
        );

        sections.forEach((section) => {
          if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 120 && rect.bottom >= 120) {
              setActiveSection(section.id);
            }
          }
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const handleNavigation = (e, item) => {
    e.preventDefault();
    
    // If it's the Products link, navigate to hawkeye page
    if (item.path === "/hawkeye") {
      window.location.href = "/hawkeye";
      setIsMenuOpen(false);
      return;
    }
    
    // For all other links, handle scroll to section
    if (location.pathname !== "/") {
      // If not on home page, navigate to home then scroll
      window.location.href = `/#${item.section}`;
    } else {
      // If on home page, scroll smoothly
      const element = document.getElementById(item.section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

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
          <Link to="/" className="flex items-center">
            <img
              src="/images/logo1.png"
              alt="WishWall Logo"
              className="h-12 lg:h-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => {
              const isActive = 
                (location.pathname === "/" && activeSection === item.section) ||
                (location.pathname === "/hawkeye" && item.name === "Our Products");

              return (
                <a
                  key={item.name}
                  href={item.path === "/hawkeye" ? "/hawkeye" : `/#${item.section}`}
                  onClick={(e) => handleNavigation(e, item)}
                  className={`relative px-4 py-2 text-sm lg:text-base font-semibold transition-all duration-300 group
                    ${
                      isActive
                        ? "text-orange-500"
                        : isScrolled
                        ? "text-[#0f172a]/70"
                        : "text-white"
                    }
                    hover:text-orange-500
                  `}
                >
                  {item.name}

                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-orange-500 transition-all duration-300
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
                ? "text-[#0f172a] hover:bg-[#0f172a]/10"
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
                ? "bg-white border border-[#0f172a]/10"
                : "bg-[#0f172a]/95 backdrop-blur-md border border-white/10"
            }`}
          >
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path === "/hawkeye" ? "/hawkeye" : `/#${item.section}`}
                  onClick={(e) => {
                    handleNavigation(e, item);
                    setIsMenuOpen(false);
                  }}
                  className={`px-6 py-4 font-medium transition-all duration-300
                    ${
                      (activeSection === item.section && location.pathname === "/") ||
                      (location.pathname === "/hawkeye" && item.name === "Our Products")
                        ? "text-orange-500 bg-orange-50"
                        : isScrolled
                        ? "text-[#0f172a]"
                        : "text-white"
                    }
                    hover:text-orange-500 hover:bg-orange-50
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;