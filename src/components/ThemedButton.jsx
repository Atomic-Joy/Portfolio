import React from 'react';
import styles from '../styles/ThemedButton.module.css';

const ThemedButton = ({ label, onClick, href, download = false }) => {
  if (href) {
    return (
      <a
        href={href}
        download={download}
        className={styles.themedButton}
      >
        {label}
      </a>
    );
  }

  return (
    <button className={styles.themedButton} onClick={onClick}>
      {label}
    </button>
  );
};

export default ThemedButton;
