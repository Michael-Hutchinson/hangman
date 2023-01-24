/* eslint-disable react/no-array-index-key */
import React from 'react';

type WordProps = {
  guessedLetters: string[];
  wordToGuess: string;
  showWord: boolean;
};

function Word({ guessedLetters, wordToGuess, showWord = false }: WordProps) {
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
      {wordToGuess.split('').map((letter, index) => (
        <span key={index} style={{ borderBottom: '.1em solid black' }}>
          <span
            style={{
              visibility: guessedLetters.includes(letter) || showWord ? 'visible' : 'hidden',
              color: !guessedLetters.includes(letter) && showWord ? 'red' : 'black',
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}

export default Word;
