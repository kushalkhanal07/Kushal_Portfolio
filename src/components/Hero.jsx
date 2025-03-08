
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-20 md:right-0 top-40 w-64 h-64 rounded-full bg-blue-100/50 filter blur-3xl"></div>
        <div className="absolute left-0 bottom-20 w-96 h-96 rounded-full bg-purple-100/30 filter blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-up">
            <span className="tag mb-4 animate-fade-in">Frontend Developer</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Kushal <span className="text-blue-600">Khanal</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Building beautiful digital experiences with modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg text-sm font-medium"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-full bg-transparent border border-primary/20 text-primary hover:bg-primary/5 transition-all duration-300 text-sm font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center md:justify-end animate-scale-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 animate-pulse" style={{ animationDuration: '5s' }}></div>
              <div className="absolute inset-2 rounded-full bg-white"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                <span className="text-7xl font-bold text-primary/40">K</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
