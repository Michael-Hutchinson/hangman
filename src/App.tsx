import React, { useCallback, useEffect, useState } from 'react';
import Drawing from './components/Drawing/Drawing';
import Word from './components/Word/Word';
import Keyboard from './components/Keyboard/Keyboard';
import words from './wordList.json';
import GlobalStyle from './App.styles';
import AlertMessage from './components/Alert/Alert';

function App() {
  const getWord = () => words[Math.floor(Math.random() * words.length)];
  const [wordToGuess, setWordToGuess] = useState(() => getWord());
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter((letter) => !wordToGuess.includes(letter));
  const hasLost = incorrectLetters.length >= 6;
  const hasWon = wordToGuess.split('').every((letter) => guessedLetters.includes(letter));
  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || hasLost || hasWon) return;
      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters, hasLost, hasWon],
  );
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, [addGuessedLetter]);
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const { key } = e;
      if (key !== 'Enter') return;
      e.preventDefault();
      setGuessedLetters([]);
      setWordToGuess(getWord());
    };
    document.addEventListener('keypress', handler);
    return () => {
      document.removeEventListener('keypress', handler);
    };
  }, []);
  return (
    <>
      <GlobalStyle />
      <main>
        <AlertMessage
          isOpen={hasWon || hasLost}
          severity={hasWon ? 'success' : 'error'}
          message={hasWon ? 'You Won' : 'You Lost'}
        />
        <Drawing numberOfGuesses={incorrectLetters.length} />
        <Word showWord={hasLost} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
        <Keyboard
          disabled={hasWon || hasLost}
          activeLetters={guessedLetters.filter((letter) => wordToGuess.includes(letter))}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </main>
    </>
  );
}

export default App;
