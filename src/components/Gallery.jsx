// components/WhyChooseUs.js
import React, { useEffect } from 'react';
import { Lightbulb, Award, ShieldCheck, HardHat, Ruler, Wrench } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseUs = () => {
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

  return (
    <section id='why-choose-us' className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header with Title and Subtitle */}
        <div className="text-center mb-16" data-aos="fade-down">
          <p 
            className="text-sm tracking-[4px] font-semibold mb-3"
            style={{ color: primaryColor }}
          >
            WHY CHOOSE US
          </p>

          <h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: secondaryColor }}
          >
            Excellence in <span style={{ color: primaryColor }}>Every Project</span>
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Decades of experience, thousands of happy clients, and a commitment to quality that sets us apart
          </p>
          
          <div 
            className="w-24 h-1 mx-auto mt-6 rounded-full"
            style={{ 
              background: `linear-gradient(90deg, ${primaryColor}, ${primaryColor}80, transparent)` 
            }}
          ></div>
        </div>

        {/* ================= ROW 1 ================= */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch">

          {/* Content Left - Innovation */}
          <div 
            className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}20`,
              boxShadow: `0 10px 30px -15px ${secondaryColor}30`
            }}
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div>
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                  color: primaryColor
                }}
              >
                <Lightbulb size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: secondaryColor }}>
                Innovative Solutions
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We leverage cutting-edge technology and modern construction techniques to deliver innovative solutions that stand the test of time.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: primaryColor }}>50+</span>
                <span className="text-sm text-gray-500">Projects</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Completed successfully</p>
            </div>
          </div>

          {/* Image Center */}
          <div 
            className="rounded-3xl overflow-hidden shadow-lg h-[400px]"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src="./images/why1.jpeg"
              alt="Modern Building Construction"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content Right - Quality */}
          <div 
            className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}20`,
              boxShadow: `0 10px 30px -15px ${secondaryColor}30`
            }}
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div>
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                  color: primaryColor
                }}
              >
                <Award size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: secondaryColor }}>
                Quality Craftsmanship
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Premium materials, certified vendors, and rigorous quality checks at every stage ensure exceptional finish and durability.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: primaryColor }}>100%</span>
                <span className="text-sm text-gray-500">Quality</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Assured satisfaction</p>
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="grid lg:grid-cols-3 gap-6 items-stretch mt-6">

          {/* Image Left */}
          <div 
            className="rounded-3xl overflow-hidden shadow-lg h-[400px]"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <img
              src="./images/why2.jpeg"
              alt="Construction Site Work"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>

          {/* Content Center - Expertise */}
          <div 
            className="rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 hover:shadow-xl"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}20`,
              boxShadow: `0 10px 30px -15px ${secondaryColor}30`
            }}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div>
              <div 
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ 
                  background: `linear-gradient(135deg, ${primaryColor}20, ${primaryColor}05)`,
                  color: primaryColor
                }}
              >
                <ShieldCheck size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-semibold mb-3" style={{ color: secondaryColor }}>
                Expertise & Experience
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Two decades of industry leadership with a team of skilled engineers, architects, and project managers.
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6 mt-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-bold" style={{ color: primaryColor }}>20+</span>
                <span className="text-sm text-gray-500">Years</span>
              </div>
              <p className="text-xs text-gray-400 mt-1">Of excellence</p>
            </div>
          </div>

          {/* Image Right */}
          <div 
            className="rounded-3xl overflow-hidden shadow-lg h-[400px]"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <img
              src="./images/why3.jpeg"
              alt="Modern Architecture"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        {/* ================= ROW 3 - Additional Features ================= */}
        <div className="grid lg:grid-cols-3 gap-6 mt-6">
          
          {/* Feature 1 */}
          <div 
            className="rounded-3xl p-6 flex items-center gap-4 transition-all duration-500 hover:shadow-md"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}10`
            }}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${primaryColor}10`, color: primaryColor }}
            >
              <HardHat size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm" style={{ color: secondaryColor }}>Safety First</h4>
              <p className="text-xs text-gray-500">Strict safety protocols</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div 
            className="rounded-3xl p-6 flex items-center gap-4 transition-all duration-500 hover:shadow-md"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}10`
            }}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${primaryColor}10`, color: primaryColor }}
            >
              <Ruler size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm" style={{ color: secondaryColor }}>Precision Planning</h4>
              <p className="text-xs text-gray-500">Detailed project blueprints</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div 
            className="rounded-3xl p-6 flex items-center gap-4 transition-all duration-500 hover:shadow-md"
            style={{ 
              background: '#FFFFFF',
              border: `1px solid ${primaryColor}10`
            }}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <div 
              className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
              style={{ background: `${primaryColor}10`, color: primaryColor }}
            >
              <Wrench size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-sm" style={{ color: secondaryColor }}>Modern Equipment</h4>
              <p className="text-xs text-gray-500">Latest construction technology</p>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-gray-200">
          {[
            { number: '50+', label: 'HAPPY CLIENTS' },
            { number: '50+', label: 'PROJECTS DONE' },
            { number: '20+', label: 'YEARS EXP' },
            { number: '50+', label: 'TEAM MEMBERS' }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={900 + index * 100}
            >
              <div className="text-2xl font-bold" style={{ color: primaryColor }}>{stat.number}</div>
              <div className="text-xs text-gray-500 tracking-wider mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;