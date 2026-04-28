import React, { useEffect, useState } from 'react';
import styles from '../styles/Navbar.module.css';
import logo from '../assets/images/logo.png';
import moonIcon from '../assets/icons/moon.png';
import sunIcon from '../assets/icons/sun.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleTheme = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`${styles.hero} ${isDarkMode ? styles.dark : styles.light}`}>
      <header className={styles.navbar}>
        <div className={styles.logoWrapper}>
          <img src={logo} alt="JM Logo" className={styles.logo} />
        </div>

        <div className={styles.hamburger} onClick={toggleMenu}>
          <span className={`${styles.bar} ${isMenuOpen ? styles.activeBar1 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.activeBar2 : ''}`}></span>
          <span className={`${styles.bar} ${isMenuOpen ? styles.activeBar3 : ''}`}></span>
        </div>

        <nav className={`${styles.navCenter} ${isMenuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link to="hero" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>
                About Me
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>
                My Work
              </Link>
            </li>
            <li>
              <Link to="contact" smooth={true} duration={500} offset={-70} onClick={() => setIsMenuOpen(false)}>
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.rightPlaceholder} />
        <button onClick={toggleTheme} className={styles.customToggle}>
          <img
            src={isDarkMode ? sunIcon : moonIcon}
            alt="Toggle Theme"
            className={styles.themeIcon}
          />
        </button>
      </header>
    </section>
  );
};

export default Navbar;
