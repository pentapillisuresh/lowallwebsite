import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    {
      title: "Building Construction",
      image:
        "./images/service3.jpg",
      description:
        "High-quality residential and commercial construction with modern engineering standards and durable materials.",
    },
    {
      title: "Architecture Design",
      image:
         "./images/service2.jpeg",
      description:
        "Innovative and functional architectural designs tailored to meet client needs and project goals.",
    },
    {
      title: "Building Renovation",
      image:
        "https://images.pexels.com/photos/8961300/pexels-photo-8961300.jpeg",
      description:
        "Transforming old spaces into modern, efficient, and aesthetically pleasing environments.",
    },
  {
  title: "Interior Design",
  image:
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
  description:
    "Creative and modern interior design solutions that enhance comfort, functionality, and aesthetic appeal for residential and commercial spaces.",
},
  ];

  return (
    <section id="services"
      className="py-20 bg-[#eef3f7]"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <p className="text-sm tracking-[4px] text-orange-500 font-semibold mb-3">
            OUR SERVICES
          </p>

          <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
            Our Construction Services
          </h2>

          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            We deliver professional construction solutions using modern
            technology, skilled workforce, and quality materials.
          </p>
        </div>

        {/* Flip Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              className="group perspective"
            >
              <div className="relative h-[340px] w-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180">

                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end">
  <h3 className="text-white text-xl font-bold px-6 pb-8">
    {service.title}
  </h3>
</div>
                </div>

                {/* Back Side */}
                <div className="absolute w-full h-full bg-[#0f172a] text-white rounded-2xl shadow-xl rotate-y-180 backface-hidden flex flex-col items-center justify-center p-6 text-center">
                  <h3 className="text-orange-500 text-xl font-bold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Flip Styles */}
      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .group:hover .group-hover\\:rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Services;