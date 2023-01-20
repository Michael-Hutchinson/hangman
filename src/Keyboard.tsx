import React from 'react';
import styles from './Keyboard.module.css';

function Keyboard() {
  const keys = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(75px, 1fr))', gap: '.5rem' }}>
      {keys.map((key) => (
        <button type="button" key={key} className={styles.btn}>
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
