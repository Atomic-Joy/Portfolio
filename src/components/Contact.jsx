import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import ThemedButton from '../animations/ThemedButton/ThemedButton';
import LetterGlitch from '../animations/LetterGlitch/LetterGlitch';
import '../styles/Contact.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("Paste yout Code");

  if (state.succeeded) {
    return (
      <div className="contact-success">
        <h3>Thanks for your message!</h3>
        <p>I'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-right">
      <input
        id="name"
        type="text"
        name="name"
        placeholder="Name"
        className="input-field"
        required
      />
      <ValidationError
        prefix="Name"
        field="name"
        errors={state.errors}
        className="validation-error"
      />

      <input
        id="email"
        type="email"
        name="email"
        placeholder="Email"
        className="input-field"
        required
      />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
        className="validation-error"
      />

      <textarea
        id="message"
        name="message"
        placeholder="Your message..."
        className="textarea"
        required
      />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
        className="validation-error"
      />
      
      <ThemedButton
        label="Send Message"
        type="submit"
        className="contact-submit-btn"
        disabled={state.submitting}
      />
    </form>
  );
}

const Contact = () => (
  <section id="contact" className="contact-section">
    <div className="contact-left">
      <h4 className="subheading">Let's talk</h4>
      <h2 className="heading">Contact</h2>
      <p className="intro">
        <i>Have a question or a project in mind?<br />
        Feel free to reach out.</i>
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

    {}
    <ContactForm />
  </section>
);

export default Contact;