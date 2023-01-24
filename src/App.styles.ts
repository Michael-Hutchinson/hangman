import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --black-shadow: rgba(0, 0, 0, 0.1);
    --font-sans: "Karla", sans-serif;
    --font-mono: "Roboto Mono", monospace;
    --gold: #E3AE4A;
    --gold-shadow: rgba(227, 174, 74, 0.1);
    --light-navy: #233554;
    --light-slate: #8892B0;
    --navy: #0A192F;
    --slate: #AFAFBF;
    --white: #E6F1FF;
  }
  html,
  body {
    background: var(--navy);
    color: var(--light-slate);
    font-family: var(--font-sans);
    margin: 0;
    scroll-behavior: smooth;
  }
  * {
    box-sizing: border-box;
  }
  ::-webkit-scrollbar {
    height: 0.313rem;
    width: 0.313rem;
  }
  ::-webkit-scrollbar-thumb {
    background: var(--light-slate);
  }
  main {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin: 0px auto;
    align-items: center;
  }
`;

export default GlobalStyle;
