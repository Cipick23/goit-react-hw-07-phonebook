// Button.jsx
import React from 'react';
import styles from './styles/button.module.css';

export const Button = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
