
import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);
  
  const projects = [
    {
      id: 1,
      title: "Ecommerce Website",
      description: "Built a simple ecommerce site featuring various products.",
      link: "ecommerce",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Redux"],
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Siddhartha Hardware",
      description: "Created a real ecommerce website in a team which is launched in real world application.",
      link: "Hardware",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React", "Redux"],
      image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFyZHdhcmUlMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Rental Car",
      description: "Designed a responsive Car Rental website which shows description about car details.",
      link: "CarRent",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHJlbnRhbCUyMGNhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 4,
      title: "Diwali Project",
      description: "On the occasion of Diwali, created responsive Diwali project wishing all happy Diwali.",
      link: "Diwali",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind"],
      image: "https://images.unsplash.com/photo-1606485165292-3112b81c49e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGl3YWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 5,
      title: "DryFruits",
      description: "Responsive ecommerce website on dry fruits.",
      link: "DryFruits",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      image: "https://images.unsplash.com/photo-1616684000067-36952fde56ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJ5JTIwZnJ1aXRzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 6,
      title: "Dog_food",
      description: "Developed a Dog food responsive website.",
      link: "Dog_Food",
      technologies: ["HTML", "CSS", "JavaScript", "Tailwind", "React"],
      image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="section-container">
        <h2 className="section-title text-center text-3xl font-bold mb-4 animate-fade-up">Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: '0.1s' }}>
          Tech Stack used in all these projects: HTML, CSS, JavaScript, Tailwind, React, Redux.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="relative glass-card overflow-hidden shine-effect animate-fade-up stagger-item"
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs rounded-full bg-secondary text-secondary-foreground">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <a 
                  href={`#${project.link}`} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Project
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="M5 12h14"/>
                    <path d="m12 5 7 7-7 7"/>
                  </svg>
                </a>
              </div>
              
              {activeProject === project.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 backdrop-blur-[1px] opacity-0 transition-opacity duration-300 hover:opacity-100 flex items-center justify-center">
                  <div className="text-center p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-800 mb-4">{project.description}</p>
                    <a 
                      href={`#${project.link}`} 
                      className="inline-block px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
