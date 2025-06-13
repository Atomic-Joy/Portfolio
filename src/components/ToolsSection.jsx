import React from 'react';
import '../styles/ToolsSection.css';

const technologies = [
  'astro', 'vue', 'react', 'typeScript', 'tailwindcss',
  'next', 'nodejs', 'HTML5', 'CSS3', 'javaScript',
  'git', 'supabase', 'mysql', 'bash',
];

const ToolsSection = () => {
  const scrollingTechs = [...technologies, ...technologies, ...technologies];

  return (
    <section id="tools" className="tools-section-container">
      <div className="tools-gradient-left" />
      <div className="tools-gradient-right" />
      <div className="tools-scroll-track">
        {scrollingTechs.map((tech, idx) => (
          <div key={`${tech}-${idx}`} className="tools-scroll-item">
            <img
              src={`/svg/${tech}.svg`}
              alt={tech}
              className="tools-icon"
              width="30"
              height="30"
              loading="lazy"
            />
            <span className="tools-label">
              {tech.charAt(0).toUpperCase() + tech.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ToolsSection;
