import React from 'react';
import ThemedButton from '../animations/ThemedButton/ThemedButton';
import LetterGlitch from '../animations/LetterGlitch/LetterGlitch';
import '../styles/Contact.css';


const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-left">
      <h4 className="subheading">Let's talk</h4>
      <h2 className="heading">Contact</h2>
      <p className="intro">
        Have a question or a project in mind?<br />
        Feel free to reach out.
      </p>
      <div className="glitch-wrapper">
        <LetterGlitch
          glitchColors={['#9b4d1e', '#fdfaf3', '#1a1a1a']}
          glitchSpeed={80}
          smooth={true}
          centerVignette={false}
          outerVignette={false}
        />
      </div>
    </div>

    <div className="contact-right">
      <input type="text" placeholder="Name" className="input-field" />
      <input type="email" placeholder="Email" className="input-field" />
      <textarea rows="8" placeholder="Your message..." className="textarea" />
      <ThemedButton label="Send Message" />
    </div>
  </section>
);

export default Contact;
