// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import BlogDetail from './components/BlogDetail';
import Footer from './components/Footer';
import About from "./components/About";
import FAQ from './components/Faq';
import Gallery from "./components/Gallery";
import Contact from './components/Contact';
import Hawkeye from './components/Hawkeye';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Features />
              <FAQ />
              <Pricing />
              <HowItWorks />
              <Blog />
              <Contact />
              <Gallery />
            </>
          } />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/hawkeye" element={<Hawkeye />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;