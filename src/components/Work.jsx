import React from 'react';
import '../styles/Work.css';
import Reveal from './Reveal';
import { SpotlightCard } from '../animations/spotlight/SpotlightCard';

const Work = () => (
  <section id="work" className="work">
    <Reveal>
      <h2>My Work</h2>
    </Reveal>
    <div className="work-grid">
      {[...Array(4)].map((_, i) => (
        <SpotlightCard key={i}>
          <Reveal delay={0.1 * i}>
            <div className="work-card">Project #{i + 1}</div>
          </Reveal>
        </SpotlightCard>
      ))}
    </div>
  </section>
);

export default Work;
