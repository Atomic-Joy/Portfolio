import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import './styles/App.css';

const App = () => (
  <>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Work />
      <Contact />
    </main>
  </>
);

export default App;
