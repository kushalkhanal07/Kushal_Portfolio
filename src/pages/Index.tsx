
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import { useTheme } from '../hooks/useTheme';

const Index = () => {
  const { theme } = useTheme();
  
  // Set body class based on theme
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return (
    <main className="relative overflow-hidden">
      <div className="fixed top-4 right-4 z-50">
        <Link 
          to="/invoices" 
          className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-md dark:bg-blue-600 dark:hover:bg-blue-700"
        >
          View Invoices Dashboard
        </Link>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Experience />
      <Contact />
    </main>
  );
};

export default Index;
