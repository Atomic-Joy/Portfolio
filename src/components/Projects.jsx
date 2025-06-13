import React from 'react';
import '../styles/Projects.css';
import ScrollVelocity from '../animations/ScrollVelocity/ScrollVelocity';

const projects = [
  {
    title: "MoviesForDevs",
    imageSrc: "/images/moviesfordevs.jpg",
    repoLink: "https://github.com/gothsec/MoviesForDevs",
    previewLink: "https://movies-for-devs.vercel.app",
  },
  {
    title: "StockIn",
    imageSrc: "/images/stockin.jpg",
    repoLink: "https://github.com/gothsec/stockin-demo",
    previewLink: "https://stockin-demo.vercel.app",
  },
  {
    title: "Svgl.app",
    imageSrc: "/images/svgl.png",
    repoLink: "https://github.com/pheralb/svgl",
    previewLink: "https://svgl.app",
  },
  {
    title: "Portfolio Website",
    imageSrc: "/images/tron.png",
    repoLink: "https://github.com/Atomic-Joy/Portfolio",
    previewLink: "_blank",
    status: "On Development",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="projects-container">
    <div className="projects-full-width-marquee">
      <ScrollVelocity
        texts={['My Projects ', '']} 
        velocity={100} 
        className="custom-scroll-text"
        />
    </div>

      <div className="projects-grid two-by-two">
        {projects.map((p, i) => (
          <div key={i} className="project-card group">
            <a href={p.previewLink} target="_blank" rel="noopener noreferrer">
              <div className="project-image-wrapper">
                <img
                  src={p.imageSrc}
                  alt={p.title}
                  className="project-image group-hover:scale-105 transition-transform"
                />
              </div>
            </a>

            <div className="project-info">
              <div className="project-text">
                <h4 className="project-name">{p.title}</h4>
                <span className="project-status">{p.status}</span>
              </div>
              <div className="project-links">
                <a
                  href={p.repoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="project-icon-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="icon"
                    >
                    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" />
                    </svg>
                </a>

                <a
                  href={p.previewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Live demo"
                  className="project-icon-btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                    <path d="M16 9.41L7.4 18.02L5.98 16.61L14.59 8H7V6H18V17H16V9.41Z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <a
        href="https://github.com/Gothsec?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="projects-more-btn"
      >
        <span>More projects on GitHub</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon-small">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 16.43 4.86 20.16 8.84 21.49C9.34 21.57 9.53 21.28 9.53 21.01C9.53 20.78 9.51 19.99 9.51 19.15C7 19.61 6.35 18.54 6.15 17.98C6.04 17.69 5.55 16.8 5.12 16.56C4.78 16.38 4.28 15.91 5.11 15.9C5.9 15.89 6.46 16.63 6.65 16.93C7.55 18.44 8.99 18.01 9.56 17.75C9.65 17.1 9.91 16.66 10.2 16.41C7.98 16.16 5.65 15.3 5.65 11.48C5.65 10.39 6.04 9.49 6.68 8.79C6.58 8.54 6.23 7.51 6.78 6.14C6.78 6.14 7.61 5.87 9.53 7.16C10.33 6.94 11.18 6.82 12.02 6.82C12.88 6.82 13.73 6.94 14.53 7.16C16.45 5.86 17.28 6.14 17.28 6.14C17.83 7.51 17.48 8.54 17.38 8.79C18.02 9.49 18.4 10.38 18.4 11.48C18.4 15.31 16.06 16.16 13.84 16.41C14.2 16.72 14.51 17.33 14.51 18.26C14.51 19.6 14.5 20.68 14.5 21.01C14.5 21.28 14.69 21.59 15.19 21.49C19.26 20.11 22 16.3 22 12C22 6.48 17.52 2 12 2Z"/>
        </svg>
      </a>
    </div>
  </section>
);

export default Projects;
