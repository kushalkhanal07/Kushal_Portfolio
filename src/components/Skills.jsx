
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["HTML", "CSS", "JavaScript"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m18 16 4-4-4-4"/>
          <path d="m6 8-4 4 4 4"/>
          <path d="m14.5 4-5 16"/>
        </svg>
      ),
    },
    {
      title: "Frameworks/Libraries",
      skills: ["Bootstrap", "Tailwind", "React", "Redux", "Node.js", "Express.js"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3v3"/>
          <path d="M18.4 5.6 16.5 7.5"/>
          <path d="M21 12h-3"/>
          <path d="M18.4 18.4 16.5 16.5"/>
          <path d="M12 21v-3"/>
          <path d="M7.5 16.5 5.6 18.4"/>
          <path d="M3 12h3"/>
          <path d="M5.6 5.6 7.5 7.5"/>
        </svg>
      ),
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 3h18v18H3z"/>
          <path d="M7 7h.01"/>
          <path d="M12 7h.01"/>
          <path d="M17 7h.01"/>
          <path d="M7 12h.01"/>
          <path d="M12 12h.01"/>
          <path d="M17 12h.01"/>
          <path d="M7 17h.01"/>
          <path d="M12 17h.01"/>
          <path d="M17 17h.01"/>
        </svg>
      ),
    },
    {
      title: "Design",
      skills: ["Responsive Design"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 0 9-9"/>
          <path d="M3 12a9 9 0 0 1 9-9"/>
          <path d="M12 3v18"/>
          <path d="M3 12h18"/>
        </svg>
      ),
    },
    {
      title: "Soft Skills",
      skills: ["Problem-solving", "Attention to Detail", "Communication"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 21a8 8 0 0 1 14.93-4.67"/>
          <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
          <path d="M17 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
          <path d="m17 17 1 1"/>
        </svg>
      ),
    },
    {
      title: "AI & Automation",
      skills: ["Familiar with AI technologies", "Integrating AI-powered tools"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a8 8 0 0 0-8 8c0 1.5.4 2.9 1.2 4.1"/>
          <path d="M15.5 6.7a4 4 0 1 1-5.5 5.8"/>
          <path d="M9 18h12"/>
          <path d="M9 15h12"/>
          <path d="M9 12h9"/>
          <path d="M9 21h6"/>
        </svg>
      ),
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="section-container">
        <h2 className="section-title text-center text-3xl font-bold mb-12 animate-fade-up">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="glass-card p-6 animate-fade-up stagger-item card-hover"
            >
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                  <span className="text-primary">{category.icon}</span>
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground whitespace-nowrap"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="relative glass-card p-8 overflow-hidden animate-fade-up" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
            <p className="text-lg text-gray-700">
              MongoDB to persevere in becoming a full stack developer.
            </p>
            <div className="absolute right-0 bottom-0 w-32 h-32 rounded-full bg-blue-50 -mr-10 -mb-10 opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
