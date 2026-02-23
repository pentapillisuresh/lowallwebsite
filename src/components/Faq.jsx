// components/ConstructionHeroVideo.js
import React from "react";

const ConstructionHeroVideo = () => {
  const primaryColor = "#F97316"; // Orange
  const secondaryColor = "#1E293B"; // Dark Blue

  return (
    <section className="relative w-full h-screen overflow-hidden">
      
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="./images/video3.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
        <div className="max-w-5xl text-white">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Building the Future
            <br />
            <span style={{ color: primaryColor }}>
              with Precision & Trust
            </span>
          </h1>

          {/* Sub Heading */}
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Delivering landmark residential and commercial projects
            with uncompromising quality, innovative engineering,
            and structural excellence that stands the test of time.
          </p>

          {/* Tagline */}
          <div className="flex items-center justify-center gap-4 text-xs md:text-sm tracking-[4px] text-gray-300">
            <span className="w-12 h-px" style={{ backgroundColor: primaryColor }}></span>
            <span>RSK CONSTRUCTIONS • QUALITY • INTEGRITY • COMMITMENT</span>
            <span className="w-12 h-px" style={{ backgroundColor: primaryColor }}></span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ConstructionHeroVideo;