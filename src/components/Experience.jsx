
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="section-container">
        <h2 className="section-title text-center text-3xl font-bold mb-12 animate-fade-up">Experience</h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute top-0 bottom-0 left-6 w-px bg-gray-200"></div>
            
            <div className="relative mb-12 animate-fade-up">
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center z-10 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="glass-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">Freelancer</h3>
                        <p className="text-gray-600">Self-employed</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
                          Current
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Currently a freelancer, learning and working on various web projects. Building and
                      refining skills while delivering quality solutions to clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center z-10 relative">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-500">
                      <rect width="18" height="18" x="3" y="3" rx="2"/>
                      <path d="M7 7h10"/>
                      <path d="M7 12h10"/>
                      <path d="M7 17h10"/>
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="glass-card p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold">Internship</h3>
                        <p className="text-gray-600">Hyperlab</p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-800 text-sm font-medium">
                          Completed
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700">
                      Completed 3-month internship on my previous company (Hyperlab). Gained valuable industry
                      experience and practical skills in web development.
                    </p>
                    
                    <div className="mt-4">
                      <h4 className="text-md font-medium mb-2">Key Responsibilities:</h4>
                      <ul className="space-y-1 text-gray-700">
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>Assisted in frontend development tasks</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>Participated in team projects and development cycles</span>
                        </li>
                        <li className="flex items-start">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 text-green-500 mt-1">
                            <path d="M20 6 9 17l-5-5"/>
                          </svg>
                          <span>Learned modern development workflows and best practices</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <div className="inline-block px-5 py-3 rounded-full bg-primary/5">
              <p className="text-primary italic">
                "Currently learning MongoDB to persuade in becoming full stack developer."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
