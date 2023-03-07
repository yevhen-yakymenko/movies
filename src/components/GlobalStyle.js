import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw; 
    overflow-x: hidden;
  }

  body {
    margin: 0 auto;

    font-family: ${p => p.theme.fonts.body};
    background-color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.body};
    color: ${p => p.theme.colors.text};
  }

  main {
    flex: 1 1 100%;
  }

  a {
    text-decoration: none;
  }
  
  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  #root {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .container {
    margin: 0 auto;
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
    max-width: ${p => p.theme.sizes.container};
  }
`;
