
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-title text-center text-3xl font-bold mb-6 animate-fade-up">Objective</h2>
          
          <div className="glass-card p-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg leading-relaxed text-gray-700">
              Motivated and enthusiastic web developer with a solid foundation in HTML, CSS, JavaScript, React, and 
              Tailwind. Seeking an entry-level position to apply my skills in a dynamic and growth-oriented 
              environment. Eager to contribute to innovative projects and continuously improve my technical abilities.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m16 12-4 4-4-4"/>
                  <path d="M12 8v8"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Modern Frontend</h3>
              <p className="text-gray-600">Building responsive, accessible web applications with modern technologies</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fast Learner</h3>
              <p className="text-gray-600">Quickly adapting to new technologies and development methods</p>
            </div>
            
            <div className="glass-card p-6 text-center transform transition-all duration-300 hover:scale-105 animate-fade-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
              <p className="text-gray-600">Attentive to detail with strong analytical and problem-solving abilities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
