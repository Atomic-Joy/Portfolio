import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import ToolsSection from './components/ToolsSection';
import Projects from './components/Projects';
import './styles/App.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <ToolsSection />
      <Projects />
      <Contact />
    </main>
  </>
);

export default App;
