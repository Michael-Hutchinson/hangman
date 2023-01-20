import React, { useState } from 'react';
import HangmanDrawing from './HangmanDrawing';
import HangmanWord from './HangmanWord';
import Keyboard from './Keyboard';
import words from './wordList.json';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => words[Math.floor(Math.random() * words.length)]);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  return (
    <section
      style={{
        maxWidth: '800px',
        display: 'flex',
        flexDirection: 'column',
        gap: '2rem',
        margin: '0 auto',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '2rem', textAlign: 'center' }}>Lose Win</div>
      <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      <HangmanWord />
      <div style={{ alignSelf: 'stretch' }}>
        <Keyboard />
      </div>
    </section>
  );
}

export default App;
