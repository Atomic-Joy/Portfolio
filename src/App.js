import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import ToolsSection from './components/ToolsSection';
import Projects from './components/Projects';
import Footer from './components/Footer';
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
      <Footer />
    </main>
  </>
);

export default App;
