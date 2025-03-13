
import React from 'react';

const Education = () => {
  return (
    <section id="education" className="py-20 dark:bg-gray-900 dark:text-white">
      <div className="px-2">
        <h2 className="section-title text-center text-3xl font-bold mb-12 animate-fade-up dark:text-white">Education</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass-card p-8 animate-fade-up dark:bg-gray-800/30 dark:border-gray-700" style={{ animationDelay: '0.2s' }}>
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold dark:text-white">Bachelor in Computer Application</h3>
                <p className="text-blue-600 dark:text-blue-400">New Summit College, Shanti Nagar, Kathmandu</p>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium dark:bg-blue-900/50 dark:text-blue-300">
                  Ongoing
                </span>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="relative">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-blue-900/30 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary dark:text-blue-400">
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                      <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium dark:text-white">Key Focus Areas</h4>
                </div>
                
                <div className="pl-14">
                  <ul className="space-y-2 text-gray-700 dark:text-gray-200">
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Computer Science Fundamentals</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Programming & Software Development</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Web Technologies & Frameworks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="inline-block w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/50 flex-shrink-0 mt-1 mr-3"></span>
                      <span>Database Management Systems</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block px-5 py-3 rounded-full bg-primary/5 dark:bg-blue-900/20 text-primary dark:text-blue-400">
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12"/>
                  <circle cx="17" cy="7" r="5"/>
                </svg>
                Continuously learning and improving skills through self-study and online courses
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
