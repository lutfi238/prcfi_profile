import React from 'react';
import { ArrowRight, Leaf } from 'lucide-react';
import { Button } from './ui/button';
import { heroData } from '../mock';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative pt-20 min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.image}
          alt="Indonesian Rainforest"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/70 to-gray-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded-full px-4 py-2 mb-6">
            <Leaf className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">Konservasi Berkelanjutan</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            {heroData.title}
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-emerald-200 font-medium mb-4">
            {heroData.subtitle}
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            {heroData.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => scrollToSection('about')}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-lg px-8 py-6 rounded-lg transition-all transform hover:scale-105"
            >
              {heroData.cta.primary}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              onClick={() => scrollToSection('programs')}
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-gray-900 text-lg px-8 py-6 rounded-lg transition-all"
            >
              {heroData.cta.secondary}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-white text-sm mb-2">Gulir ke bawah</span>
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
