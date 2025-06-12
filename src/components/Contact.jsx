import React from 'react';
import '../styles/Contact.css';
import Reveal from './Reveal';

const Contact = () => (
  <section id="contact" className="contact">
    <Reveal>
      <h2>Get in Touch</h2>
    </Reveal>
    <Reveal delay={0.2}>
      <p>I'd love to hear from you!...</p>
    </Reveal>
    <Reveal delay={0.4}>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit now</button>
      </form>
    </Reveal>
  </section>
);

export default Contact;
