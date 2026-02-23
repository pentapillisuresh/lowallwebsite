// components/Hero.js
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [animationDirection, setAnimationDirection] = useState('next');
  const sectionRef = useRef(null);
  const slideTimerRef = useRef(null);

 const bannerItems = [
  {
    id: 1,
    title: "Constructing the Future",
    subtitle: "Innovative Civil Engineering Solutions for Modern Infrastructure",
    image: "/images/banner1.jpg"
  },
  {
    id: 2,
    title: "Engineering Excellence",
    subtitle: "Precision. Quality. Trust. Built to Last.",
    image: "/images/banner2.jpg"
  },
  {
    id: 3,
    title: "Built on Strength & Integrity",
    subtitle: "Crafting Infrastructure that Shapes Tomorrow",
    image: "/images/banner3.jpg"
  }
];

  // Orange primary color
  const primaryColor = '#F97316'; // Orange-500
  const primaryColorLight = '#FB923C'; // Orange-400
  const primaryColorDark = '#EA580C'; // Orange-600

  // Handle parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        const sectionTop = rect.top;
        let progress = 0;
        if (sectionTop < 0) {
          progress = Math.min(1, Math.abs(sectionTop) / windowHeight);
        }
        
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto slide interval
  useEffect(() => {
    startAutoSlide();
    return () => clearAutoSlide();
  }, [currentSlide]);

  const clearAutoSlide = () => {
    if (slideTimerRef.current) {
      clearInterval(slideTimerRef.current);
    }
  };

  const startAutoSlide = () => {
    clearAutoSlide();
    slideTimerRef.current = setInterval(() => {
      if (!isTransitioning) {
        setAnimationDirection('next');
        nextSlide();
      }
    }, 6000);
  };

  // Smooth slide transition
  const changeSlide = (newIndex, direction = 'next') => {
    if (isTransitioning) return;
    
    setAnimationDirection(direction);
    setIsTransitioning(true);
    setCurrentSlide(newIndex);
    
    // Reset auto slide timer
    startAutoSlide();
    
    // Release transition lock after animation completes
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1000);
  };

  const nextSlide = () => {
    const newIndex = (currentSlide + 1) % bannerItems.length;
    changeSlide(newIndex, 'next');
  };

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + bannerItems.length) % bannerItems.length;
    changeSlide(newIndex, 'prev');
  };

  // Calculate parallax values
  const imageScale = 1 + (scrollProgress * 0.3);
  const imageTranslateY = scrollProgress * 30;
  const contentTranslateY = scrollProgress * 50;
  const contentOpacity = Math.max(0, 1 - (scrollProgress * 1.5));

  // Get animation classes based on direction
  const getTitleAnimation = (index) => {
    if (index !== currentSlide) return 'opacity-0';
    
    if (animationDirection === 'next') {
      return 'animate-fadeInUp';
    } else {
      return 'animate-fadeInDown';
    }
  };

  const getSubtitleAnimation = (index) => {
    if (index !== currentSlide) return 'opacity-0';
    
    if (animationDirection === 'next') {
      return 'animate-fadeInUp delay-200';
    } else {
      return 'animate-fadeInDown delay-200';
    }
  };

  return (
    <section 
      id="home" 
      ref={sectionRef}
      className="relative h-screen text-white overflow-hidden"
    >
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0 z-0">
        {bannerItems.map((item, index) => (
          <div
            key={item.id}
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{ 
              opacity: index === currentSlide ? 1 : 0,
              transform: `scale(${imageScale}) translateY(${imageTranslateY}px)`,
              transformOrigin: 'center center',
              transition: 'opacity 1s cubic-bezier(0.65, 0, 0.35, 1), transform 0.1s linear'
            }}
          >
            {/* Image with Ken Burns effect */}
            <div 
              className="w-full h-full transition-transform duration-10000 ease-out"
              style={{
                transform: index === currentSlide ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Overlay gradient */}
            <div 
              className="absolute inset-0 transition-opacity duration-1000"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(0,0,0,0.6) 0%, 
                  rgba(0,0,0,0.3) 50%, 
                  rgba(0,0,0,0.2) 100%)`,
                opacity: index === currentSlide ? 1 : 0
              }}
            />
          </div>
        ))}
      </div>

      {/* Orange Gradient Overlay */}
      <div 
        className="absolute inset-0 z-10 mix-blend-overlay"
        style={{
          background: `linear-gradient(135deg, 
            ${primaryColor}15 0%, 
            ${primaryColorLight}10 50%, 
            ${primaryColorDark}05 100%)`,
        }}
      />

      {/* Centered Content with AOS-style Animations */}
      <div 
        className="relative z-20 h-full flex items-center justify-center"
        style={{
          transform: `translateY(${contentTranslateY}px)`,
          opacity: contentOpacity,
          transition: 'transform 0.1s linear, opacity 0.3s ease-out'
        }}
      >
        <div className="text-center px-4 max-w-7xl mx-auto">
          {bannerItems.map((item, index) => (
            <div
              key={item.id}
              className="transition-all duration-500"
              style={{
                display: index === currentSlide ? 'block' : 'none'
              }}
            >
              <div className="space-y-6">
                {/* Construction/Civil Engineering Title with Serif Font - White Color - Reduced Size */}
                <h1 className="font-bold tracking-normal">
                  <span 
                    className={`text-5xl md:text-6xl lg:text-7xl inline-block ${getTitleAnimation(index)}`}
                    style={{
                      fontFamily: "'Playfair Display', 'Times New Roman', Georgia, serif",
                      fontWeight: 700,
                      color: '#FFFFFF',
                      textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                      lineHeight: '1.2',
                      letterSpacing: 'normal'
                    }}
                  >
                    {item.title}
                  </span>
                </h1>
                
                {/* Subtitle with AOS-style Animation */}
                <h2 
                  className={`text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed ${getSubtitleAnimation(index)}`}
                  style={{
                    fontFamily: "'Montserrat', 'Helvetica', 'Arial', sans-serif",
                    fontWeight: 300,
                    letterSpacing: '1px',
                    color: 'rgba(255, 255, 255, 0.95)',
                    textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                    lineHeight: '1.6'
                  }}
                >
                  {item.subtitle}
                </h2>

                {/* Decorative Orange Line with Animation */}
                <div 
                 
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Navigation Arrows with Orange Theme */}
      <button
        onClick={prevSlide}
        disabled={isTransitioning}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-30 group"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 3),
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
          
          <div 
            className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 transition-all duration-500"
            style={{
              borderColor: `rgba(249, 115, 22, ${isTransitioning ? 0.3 : 0.6})`,
              background: 'rgba(0, 0, 0, 0.3)',
              boxShadow: `0 4px 20px ${primaryColor}20`
            }}
          >
            <ChevronLeft 
              className="w-5 h-5 md:w-7 md:h-7 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-[-2px]"
              style={{
                color: primaryColor,
                filter: `drop-shadow(0 2px 4px ${primaryColor}40)`
              }}
            />
          </div>
          
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
            }}
          />
        </div>
      </button>

      <button
        onClick={nextSlide}
        disabled={isTransitioning}
        className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 z-30 group"
        style={{
          opacity: Math.max(0, 1 - scrollProgress * 3),
          transition: 'opacity 0.3s ease-out'
        }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
          
          <div 
            className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border-2 transition-all duration-500"
            style={{
              borderColor: `rgba(249, 115, 22, ${isTransitioning ? 0.3 : 0.6})`,
              background: 'rgba(0, 0, 0, 0.3)',
              boxShadow: `0 4px 20px ${primaryColor}20`
            }}
          >
            <ChevronRight 
              className="w-5 h-5 md:w-7 md:h-7 transition-all duration-500 group-hover:scale-110 group-hover:translate-x-[2px]"
              style={{
                color: primaryColor,
                filter: `drop-shadow(0 2px 4px ${primaryColor}40)`
              }}
            />
          </div>
          
          <div 
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
            style={{
              background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
            }}
          />
        </div>
      </button>

      {/* Premium Scroll Indicator with Orange Theme */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="flex flex-col items-center gap-3"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 3),
            transform: `translateY(${scrollProgress * 20}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.1s linear'
          }}
        >
          <span 
            className="text-white/70 text-xs uppercase tracking-[0.3em] font-light"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              letterSpacing: '0.3em'
            }}
          >
            Scroll
          </span>
          <div className="relative">
            <div className="w-6 h-10 rounded-full border border-white/30 flex items-start justify-center p-2">
              <div 
                className="w-1 h-1.5 rounded-full animate-bounce"
                style={{
                  background: `linear-gradient(to bottom, ${primaryColorLight}, ${primaryColor})`
                }}
              />
            </div>
            <div 
              className="absolute inset-0 rounded-full animate-pulse"
              style={{
                boxShadow: `0 0 20px ${primaryColor}`,
                opacity: 0.3
              }}
            />
          </div>
        </div>
      </div>

      {/* Premium Carousel Indicators with Orange Theme */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div 
          className="flex space-x-4"
          style={{
            opacity: Math.max(0, 1 - scrollProgress * 3),
            transition: 'opacity 0.3s ease-out'
          }}
        >
          {bannerItems.map((_, index) => (
            <button
              key={index}
              onClick={() => !isTransitioning && changeSlide(index, index > currentSlide ? 'next' : 'prev')}
              className="group relative"
              disabled={isTransitioning}
            >
              <div 
                className={`transition-all duration-500 ${
                  index === currentSlide 
                    ? 'w-8' 
                    : 'w-2 group-hover:w-4'
                }`}
              >
                <div 
                  className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentSlide 
                      ? `bg-gradient-to-r from-orange-400 to-orange-600` 
                      : 'bg-white/50 group-hover:bg-white/80'
                  }`}
                  style={{
                    boxShadow: index === currentSlide ? `0 0 15px ${primaryColor}` : 'none'
                  }}
                />
              </div>
              
              {index === currentSlide && (
                <div 
                  className="absolute inset-0 rounded-full blur-md -z-10"
                  style={{
                    background: `radial-gradient(circle, ${primaryColor} 0%, transparent 70%)`
                  }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Global Styles for Premium Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        .animate-fadeInDown {
          animation: fadeInDown 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-400 {
          animation-delay: 0.4s;
        }
      `}</style>

      {/* Font imports */}
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet" />
    </section>
  );
};

export default Hero;