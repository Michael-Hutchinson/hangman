/* eslint-disable react/no-array-index-key */
import React from 'react';

function HangmanWord() {
  const currentWord = 'test';
  const guessedLetter = ['t'];
  return (
    <div
      style={{
        display: 'flex',
        gap: '.25em',
        fontSize: '6rem',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontFamily: 'monospace',
      }}
    >
      {currentWord.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          <span style={{ visibility: guessedLetter.includes(letter) ? 'visible' : 'hidden' }}>{letter}</span>
        </span>
      ))}
    </div>
  );
}

export default HangmanWord;
