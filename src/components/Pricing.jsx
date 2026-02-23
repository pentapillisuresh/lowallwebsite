// components/PortfolioShowcase.js
import React, { useState, useEffect } from 'react';
import { ChevronRight, Building2, Award, Users, Home, Calendar, Ruler } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const PortfolioShowcase = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
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

  const projects = [
    {
      id: 1,
      title: "Vizag Heights",
      subtitle: "Luxury Apartments",
      category: "apartment",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "2450 sq.ft",
      completion: "2024",
      bedrooms: "4 BHK"
    },
    {
      id: 2,
      title: "Beachfront Villa",
      subtitle: "Premium Residence",
      category: "villa",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "3800 sq.ft",
      completion: "2023",
      bedrooms: "5 BHK"
    },
    {
      id: 3,
      title: "Green Valley",
      subtitle: "Gated Community",
      category: "apartment",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "1850 sq.ft",
      completion: "2024",
      bedrooms: "3 BHK"
    },
    {
      id: 4,
      title: "Sea View Towers",
      subtitle: "Luxury Apartments",
      category: "apartment",
      image: "https://images.unsplash.com/photo-1580041065738-e72023775cdc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "2100 sq.ft",
      completion: "2023",
      bedrooms: "3 BHK"
    },
    {
      id: 5,
      title: "Hilltop Residences",
      subtitle: "Premium Apartments",
      category: "apartment",
      image: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "1650 sq.ft",
      completion: "2024",
      bedrooms: "3 BHK"
    },
    {
      id: 6,
      title: "Lakeview Homes",
      subtitle: "Modern Villas",
      category: "villa",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      area: "2950 sq.ft",
      completion: "2023",
      bedrooms: "4 BHK"
    },
   
  ];

  const filters = [
    { id: 'all', label: 'ALL' },
    { id: 'apartment', label: 'APARTMENTS' },
    { id: 'villa', label: 'VILLAS' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Header with Premium Typography */}
        <div className="text-center mb-16" data-aos="fade-down">
          <p 
            className="text-sm tracking-[4px] font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            VIZAG PREMIUM HOMES
          </p>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: secondaryColor }}
          >
            Modern <span style={{ color: primaryColor }}>Living Spaces</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Discover our finest collection of luxury apartments and villas in Vizag
          </p>
          
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}80, transparent)` 
            }}
          ></div>
        </div>

        {/* Premium Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16" data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className="relative group overflow-hidden px-8 py-3"
            >
              <span className={`relative z-10 text-sm font-medium tracking-wider transition-all duration-500 ${
                activeFilter === filter.id ? 'text-white' : 'text-gray-600'
              }`}>
                {filter.label}
              </span>
              
              {/* Animated Background */}
              <div 
                className={`absolute inset-0 transition-all duration-500 ${
                  activeFilter === filter.id
                    ? 'opacity-100'
                    : 'opacity-0 group-hover:opacity-10'
                }`}
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)` 
                }}
              ></div>
              
              {/* Bottom Border */}
              <div 
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                  activeFilter === filter.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
                style={{ background: primaryColor }}
              ></div>
            </button>
          ))}
        </div>

        {/* Projects Grid - Premium Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group relative bg-white shadow-lg hover:shadow-2xl transition-all duration-700"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden" style={{ height: '280px' }}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Bedrooms Badge */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-sm font-medium"
                  style={{ color: secondaryColor }}
                >
                  {project.bedrooms}
                </div>
                
                {/* Hover View Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button 
                    className="bg-white px-6 py-3 font-medium text-sm tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:shadow-xl flex items-center gap-2"
                    style={{ color: secondaryColor }}
                  >
                    <span>VIEW DETAILS</span>
                    <ChevronRight size={16} style={{ color: primaryColor }} />
                  </button>
                </div>
              </div>

              {/* Project Info - Premium Card Style */}
              <div className="p-6 bg-white relative">
                {/* Category Tag */}
                <div 
                  className="absolute -top-3 left-6 px-4 py-1 text-xs font-medium tracking-wider text-white"
                  style={{ 
                    background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`,
                    boxShadow: `0 4px 12px ${primaryColor}40`
                  }}
                >
                  {project.category === 'apartment' ? 'APARTMENT' : 'LUXURY VILLA'}
                </div>

                {/* Title & Subtitle */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm">
                    {project.subtitle}
                  </p>
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Ruler size={14} style={{ color: primaryColor }} />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} style={{ color: primaryColor }} />
                    <span>{project.completion}</span>
                  </div>
                </div>

                {/* Decorative Line */}
                <div 
                  className="w-12 h-0.5 transition-all duration-500 group-hover:w-full"
                  style={{ background: primaryColor }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button - Premium Style */}
        <div className="text-center mt-16" data-aos="fade-up" data-aos-delay="400">
          <button className="relative group inline-flex items-center justify-center overflow-hidden px-10 py-4 transition-all duration-500">
            
            {/* Background Layers */}
            <span 
              className="absolute inset-0 border-2 transition-all duration-500"
              style={{ borderColor: secondaryColor }}
            ></span>
            
            <span 
              className="absolute inset-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500"
              style={{ background: secondaryColor }}
            ></span>
            
            {/* Text + Arrow */}
            <span className="relative z-10 flex items-center space-x-3 text-gray-900 group-hover:text-white transition-colors duration-500">
              <span className="font-medium tracking-wider">VIEW ALL PROPERTIES</span>
              <ChevronRight 
                size={20} 
                className="group-hover:translate-x-2 transition-transform duration-300"
                style={{ color: primaryColor }}
              />
            </span>
          </button>
        </div>

    

      

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob -z-10"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 -z-10"></div>
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

export default PortfolioShowcase;