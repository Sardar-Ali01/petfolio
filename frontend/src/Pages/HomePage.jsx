import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import AboutUs from '../components/AboutUs';
import Testimonials from '../components/Testimonial';

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <Testimonials/>
      <AboutUs/>
      <Footer />
    </div>
  );
};

export default HomePage;