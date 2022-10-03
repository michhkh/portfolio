import { createGlobalStyle } from "styled-components";

export const InitialStyle = createGlobalStyle`

  *, *::before, *::after {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
  }

  :root {
    --ff-primary: 'Source Sans Pro', sans-serif;
    --ff-secondary: 'Source Code Pro', monospace;
    
    --fw-reg: 300;
    --fw-bold: 900;
    
    --clr-light: #fff;
    --clr-dark: #303030;
    --clr-accent: #16e0bd;
    
    --fs-h1: 3rem;
    --fs-h2: 2.25rem;
    --fs-h3: 1.25rem;
    --fs-body: 1rem;
  }
`;
