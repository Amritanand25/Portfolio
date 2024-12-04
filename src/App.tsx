import React from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Blog } from './components/Blog';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ThemeToggle } from './components/ThemeToggle';
import { useTheme } from './hooks/useTheme';
// import { Hero } from './Hero';

function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        {/* <Hero /> */}
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;