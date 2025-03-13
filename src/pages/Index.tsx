
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
