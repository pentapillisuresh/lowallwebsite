// components/Header.js
import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white shadow-lg text-blue-900'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="container mx-auto px-3 py-2">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="w-14 h-14 flex items-center justify-center overflow-hidden rounded-full bg-yellow-400">
              <img
                src="/images/logo.png"
                alt="WishWall Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
            <h1
              className={`text-2xl font-bold transition-colors duration-500 ${
                isScrolled ? 'text-blue-900' : 'text-white'
              }`}
            >
              LoWall
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 font-medium">
            {['Home', 'About', 'Features', 'How It Works', 'Pricing'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                  className={`transition-colors duration-300 ${
                    isScrolled
                      ? 'text-blue-900 hover:text-yellow-500'
                      : 'text-white hover:text-yellow-300'
                  }`}
                >
                  {item}
                </a>
              )
            )}
          </nav>

          {/* Desktop Button */}
          <div className="hidden md:flex">
            <button
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2 border-2 ${
                isScrolled
                  ? 'bg-yellow-400 text-blue-900 border-yellow-300 hover:bg-yellow-300'
                  : 'bg-yellow-400 text-blue-900 border-yellow-300 hover:bg-yellow-300'
              }`}
            >
              <span>Download App</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled ? 'text-blue-900 hover:bg-blue-100' : 'text-white hover:bg-blue-500'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div
            className={`md:hidden mt-3 py-4 rounded-lg border ${
              isScrolled ? 'bg-white border-blue-200' : 'bg-blue-900/80 border-blue-700'
            }`}
          >
            <div className="flex flex-col space-y-4 px-4">
              {['Home', 'About', 'Features', 'How It Works', 'Pricing'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s/g, '-')}`}
                    className={`py-2 border-b transition-colors duration-300 ${
                      isScrolled
                        ? 'border-blue-100 text-blue-900 hover:text-yellow-500'
                        : 'border-blue-700 text-white hover:text-yellow-300'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <div className="pt-2">
                <button
                  className="w-full px-4 py-3 rounded-full bg-yellow-400 text-blue-900 font-semibold hover:bg-yellow-300 transition-all duration-300 flex items-center justify-center space-x-2 border-2 border-yellow-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span>Download App</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
