import React from 'react';
import '../styles/Hero.css';
import Reveal from './Reveal';
import ThemedButton from './ThemedButton';
import { FaLinkedin, FaGithub, FaDiscord, FaDownload } from 'react-icons/fa';

const Hero = () => (
  <section className="hero" id="hero">
    <Reveal>
      <h1>
        <i>Hi,</i> <span>I am Joy Mondal!</span>
      </h1>
    </Reveal>

    <Reveal delay={0.2}>
      <p>
        I am an inquisitive and investigative final year undergraduate at 
        VIT Bhopal University pursuing a Computer Science major with minor 
        in Cyber Security & Digital Forensics. I am interested in 
        Penetration Testing, Networking, Cryptography and Social Engineering. 
        To enhance my prowess I have attended numerous workshops and online 
        and offline courses.
      </p>
    </Reveal>

    <Reveal delay={0.4}>
      <div className="hero-buttons">
        <ThemedButton label="Contact Me" href="#contact" />
        <ThemedButton
          label={
            <>
              <FaDownload style={{ marginRight: 8 }} />
              My Resume
            </>
          }
          href="/assets/resume.pdf"
          download={true}
        />
      </div>
    </Reveal>

    <Reveal delay={0.6}>
      <div className="socials">
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://discord.com/users/yourid" target="_blank" rel="noopener noreferrer">
          <FaDiscord size={30} />
        </a>
      </div>
    </Reveal>
  </section>
);

export default Hero;
