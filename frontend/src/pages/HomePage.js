import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Programs from '../components/Programs';
import Gallery from '../components/Gallery';
import Team from '../components/Team';
import News from '../components/News';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Team />
      <News />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
