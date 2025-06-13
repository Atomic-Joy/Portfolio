import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import ToolsSection from './components/ToolsSection';
import './styles/App.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <ToolsSection />
      <Work />
      <Contact />
    </main>
  </>
);

export default App;
