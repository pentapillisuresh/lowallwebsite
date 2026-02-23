// components/ConstructionSpecifications.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp, Check, FileText, Award, Shield, HardHat, Ruler, Paintbrush, Wrench } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ConstructionSpecifications = () => {
  const [active, setActive] = useState("structure");

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  const data = [
    {
      id: "structure",
      number: "01",
      title: "STRUCTURE",
      icon: <HardHat className="w-5 h-5" />,
      items: [
        "R.C.C. framed structure (including Beams, Columns & Slab)",
        "Vizag Steel reinforcement",
        "Ramco PPC / Ultratech or equivalent PPC cement",
        "OPC 53 grade cement",
      ],
    },
    {
      id: "walls",
      number: "02",
      title: "WALLS",
      icon: <Ruler className="w-5 h-5" />,
      items: [
        "Internal 6 inch brick walls",
        "External 9 inch brick walls",
        "Kiln burnt red clay bricks",
        "6mm MS rods at intervals",
      ],
    },
    {
      id: "plastering",
      number: "03",
      title: "PLASTERING",
      icon: <Paintbrush className="w-5 h-5" />,
      items: [
        "Ceiling plastering 1:4 ratio",
        "Internal walls 1:5 ratio",
        "External walls 1:5 ratio",
      ],
    },
    {
      id: "flooring",
      number: "04",
      title: "FLOORING",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "2x2 vitrified tiles",
        "Living & bedroom vitrified tiles",
        "Kitchen anti-skid tiles",
        "Parking cement flooring",
      ],
    },
    {
      id: "doors",
      number: "05",
      title: "DOORS & WINDOWS",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "Teakwood main door",
        "Teakwood internal frames",
        "WPC toilet doors",
        "UPVC windows",
        "MS grills for windows",
      ],
    },
    {
      id: "doorpainting",
      number: "06",
      title: "DOOR PAINTING",
      icon: <Paintbrush className="w-5 h-5" />,
      items: [
        "One coat wood primer",
        "Two coats enamel paint",
        "Spray polishing for teak doors",
      ],
    },
    {
      id: "wardrobes",
      number: "07",
      title: "WARDROBES",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "Cement cupboards",
        "Bedroom wardrobe provision",
        "Kitchen cupboards",
        "Hall cupboards",
      ],
    },
    {
      id: "washbasins",
      number: "08",
      title: "WASH BASINS",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "Wash basin in dining",
        "Wash basins in toilets",
        "Premium branded fittings",
      ],
    },
    {
      id: "kitchen",
      number: "09",
      title: "KITCHEN",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "Granite cooking platform",
        "Stainless steel sink",
        "Ceramic tile dado 3 feet",
        "Exhaust fan provision",
      ],
    },
    {
      id: "staircase",
      number: "10",
      title: "STAIRCASE",
      icon: <Ruler className="w-5 h-5" />,
      items: [
        "SS railing",
        "Tile finished steps",
      ],
    },
    {
      id: "bathroom",
      number: "11",
      title: "BATHROOM",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "European water closet",
        "Wall mixer set",
        "6 feet ceramic tiles dado",
        "Anti-skid floor tiles",
        "PVC cistern branded",
        "PARRYWARE / HINDWARE equivalent",
      ],
    },
    {
      id: "wallpainting",
      number: "12",
      title: "WALL PAINTING",
      icon: <Paintbrush className="w-5 h-5" />,
      items: [
        "External weatherproof emulsion",
        "Internal emulsion paint",
        "Front elevation with putty finish",
        "ASIAN Paints premium quality",
      ],
    },
    {
      id: "electrical",
      number: "13",
      title: "ELECTRICAL",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "Concealed copper wiring",
        "ISI modular switches",
        "FINOLEX / POLYCAB wires",
        "Proper earthing",
        "AP Transco compliance",
      ],
    },
    {
      id: "plumbing",
      number: "14",
      title: "PLUMBING",
      icon: <Wrench className="w-5 h-5" />,
      items: [
        "SINTEX water tank",
        "CPVC / UPVC pipeline",
        "ISI marked brand fittings",
      ],
    },
    {
      id: "termite",
      number: "15",
      title: "ANTI-TERMITE",
      icon: <Shield className="w-5 h-5" />,
      items: [
        "Complete pre-construction treatment",
        "Ground level chemical treatment",
      ],
    },
    {
      id: "waterproofing",
      number: "16",
      title: "WATERPROOFING",
      icon: <Shield className="w-5 h-5" />,
      items: [
        "Terrace waterproofing",
        "Toilet waterproofing",
        "Parapet wall construction",
      ],
    },
    {
      id: "owner",
      number: "17",
      title: "OWNER SCOPE",
      icon: <FileText className="w-5 h-5" />,
      items: [
        "Borewell / Water source",
        "Lift installation",
        "Government fees",
        "Architect drawings",
        "Soil filling",
      ],
    },
  ];

  // Primary and Secondary Colors
  const primaryColor = '#F97316'; // Orange-500
  const secondaryColor = '#1E293B'; // Slate-800

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Title and Subtitle - Centered */}
        <div className="text-center mb-16" data-aos="fade-down">
          <p 
            className="text-sm tracking-[4px] font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            CONSTRUCTION SPECIFICATIONS
          </p>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: secondaryColor }}
          >
            Premium Quality <span style={{ color: primaryColor }}>Standards</span>
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Our commitment to excellence is reflected in every detail. Here's a comprehensive 
            breakdown of the materials, specifications, and standards we follow.
          </p>
          
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}80, transparent)` 
            }}
          ></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* LEFT SIDE - Specifications Accordion */}
          <div className="lg:w-2/3 space-y-4" data-aos="fade-right" data-aos-delay="200">
            {data.map((item, index) => {
              const isActive = active === item.id;

              return (
                <div
                  key={item.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                  className={`bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 ${
                    isActive
                      ? "ring-2 ring-orange-500 ring-opacity-50"
                      : "border border-gray-100"
                  }`}
                >
                  <div
                    onClick={() => setActive(isActive ? null : item.id)}
                    className="flex items-center justify-between px-6 py-5 cursor-pointer group"
                  >
                    <div className="flex items-center gap-4">
                      {/* Number with gradient background */}
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm"
                        style={{ 
                          background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)` 
                        }}
                      >
                        {item.number}
                      </div>
                      
                      {/* Icon and Title */}
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-8 h-8 rounded-full flex items-center justify-center"
                          style={{ 
                            color: isActive ? primaryColor : '#94A3B8',
                            backgroundColor: isActive ? `${primaryColor}15` : '#F1F5F9'
                          }}
                        >
                          {item.icon}
                        </div>
                        <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition-colors">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: isActive ? `${primaryColor}15` : '#F1F5F9',
                        color: isActive ? primaryColor : '#94A3B8'
                      }}
                    >
                      {isActive ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </div>
                  </div>

                  {isActive && (
                    <div className="px-20 pb-6 space-y-3 animate-fadeIn">
                      {item.items.map((point, i) => (
                        <div key={i} className="flex items-start gap-3 group/item">
                          <div 
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover/item:scale-110"
                            style={{ 
                              background: `linear-gradient(135deg, ${primaryColor}, ${primaryColor}dd)`,
                              boxShadow: `0 2px 8px ${primaryColor}40`
                            }}
                          >
                            <Check size={12} className="text-white" />
                          </div>
                          <p className="text-gray-600 text-sm leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE - Premium Info Card */}
          <div className="lg:w-1/3 lg:self-start h-fit" data-aos="fade-left" data-aos-delay="300">
            <div 
              className="sticky top-20 rounded-2xl shadow-xl"
              style={{ 
                background: `linear-gradient(135deg, ${secondaryColor}, #0F172A)` 
              }}
            >
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-orange-500 rounded-full blur-3xl"></div>
              </div>

              <div className="relative p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center">
                    <Award className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Quality Assurance</h3>
                </div>

                {/* Construction Cost - NEW ADDITION */}
                <div className="mb-8 p-4 bg-gradient-to-r from-orange-500/20 to-orange-600/10 rounded-xl border border-orange-500/30">
                  <p className="text-sm text-orange-400 font-semibold mb-1">Construction Cost</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">₹ 2500/-</span>
                    <span className="text-sm text-gray-300">per SFT</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2">
                    *After finishing & completion as per above specifications
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-500 mb-1">17</div>
                    <div className="text-sm text-gray-300">Specification Points</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 backdrop-blur-sm">
                    <div className="text-3xl font-bold text-orange-500 mb-1">50+</div>
                    <div className="text-sm text-gray-300">Premium Materials</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Premium Materials</h4>
                      <p className="text-sm text-gray-300">Vizag Steel, Ramco, Ultratech, Asian Paints</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Transparent Process</h4>
                      <p className="text-sm text-gray-300">17-Point detailed specification for clarity</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Certified Brands</h4>
                      <p className="text-sm text-gray-300">ISI marked & premium quality assured</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={14} className="text-orange-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Warranty Coverage</h4>
                      <p className="text-sm text-gray-300">5-year structural warranty included</p>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
                >
                  <span>Get Detailed Quote</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>

                <p className="text-center text-xs text-gray-400 mt-4">
                  *Free consultation & site visit included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
        
        .animate-pulse-slow {
          animation: pulse 3s infinite;
        }
      `}</style>

      {/* Font imports */}
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
    </section>
  );
};

export default ConstructionSpecifications;