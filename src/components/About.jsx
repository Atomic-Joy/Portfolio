import React from 'react';
import '../styles/About.css';
import Reveal from './Reveal';

import profilePic from '../assets/images/profile.jpg';
import { FaCode, FaGraduationCap, FaProjectDiagram } from 'react-icons/fa';

const About = () => (
  <section id="about" className="about-section">
    <Reveal>
      <h2>About me</h2>
    </Reveal>

    <div className="about-content">
      <Reveal>
        <img src={profilePic} alt="Joy Mondal" className="about-img" />
      </Reveal>

      <div className="about-info">
        <Reveal delay={0.2}>
          <p className="about-text">
            I am a passionate developer with a strong interest in clean code, security, and
            elegant user experiences. I enjoy building scalable systems, solving problems,
            and continuously learning new technologies.
          </p>
        </Reveal>

        <div className="about-cards">
          <Reveal>
            <div className="info-card">
              <FaCode size={24} className="card-icon" />
              <h3>Tech Stack</h3>
              <ul>
                <li><strong>Frontend:</strong> React, HTML, CSS, JS</li>
                <li><strong>Backend:</strong> Node.js, MongoDB</li>
                <li><strong>Security:</strong> Networking, Cryptography</li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="info-card">
              <FaGraduationCap size={24} className="card-icon" />
              <h3>Education</h3>
              <p>B.Tech in CSE @ VIT Bhopal University</p>
              <p>High School @ Kendriya Vidyalaya</p>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="info-card">
              <FaProjectDiagram size={24} className="card-icon" />
              <h3>Projects</h3>
              <p>8+ completed projects including web apps and utilities</p>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
