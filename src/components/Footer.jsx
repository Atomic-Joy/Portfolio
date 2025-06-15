import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { IoLogoReact, IoLogoCss3 } from "react-icons/io5";
import { SiVercel } from "react-icons/si";
import "../styles/Footer.css";

const socialLinks = [
  {
    href: "https://github.com/Atomic-Joy",
    icon: <FaGithub />,
    label: "GitHub", },
  {
    href: "https://linkedin.com/in/",
    icon: <FaLinkedin />,
    label: "LinkedIn", },
  {
    href: "mailto:joymondal2022@vitbhopal.ac.in",
    icon: <FaEnvelope />,
    label: "Email", },
];

const techStack = [
  { desc: "Built with", 
    name: "React", 
    icon: <IoLogoReact /> },
  { desc: "Styled with", 
    name: "CSS", 
    icon: <IoLogoCss3 /> },
  { desc: "Deployed on", 
    name: "Vercel", 
    icon: <SiVercel /> },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-social">
          {socialLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="social-link"
            >
              <div className="footer-icon">{link.icon}</div>
            </a>
          ))}
        </div>

        {/* Swapped: Spotify comes first now */}
        <div className="footer-spotify">
          <iframe
            src="https://open.spotify.com/embed/playlist/183vrXYDYSkOstvyuFSo0B?utm_source=generator&theme=0&locale=en_US"
            className="spotify-embed"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="Spotify Playlist"
          ></iframe>
        </div>

        {/* Tech Stack below Spotify now */}
        <div className="footer-tech">
          {techStack.map((tech) => (
            <div key={tech.name} className="tech-item">
              <span className="tech-desc">{tech.desc}</span>
              <span className="tech-icon">{tech.icon}</span>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-copy">
        <p>
          Copyright © 2025{" "}
          <a
            href="https://github.com/Atomic-Joy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Joy Mondal
          </a>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
