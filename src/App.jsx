// App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Footer from './components/Footer';
import About from "./components/About"
import FAQ from './components/Faq';
import Gallery from "./components/Gallery"
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      <Header />
      <Hero />
      <About/>
      <Features />
      <HowItWorks />
      {/* <Pricing /> */}
      {/* <Blog /> */}
      <Gallery/>
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;