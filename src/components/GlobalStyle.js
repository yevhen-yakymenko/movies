import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  html {
    width: 100vw;
    height: 100%;
    overflow-x: hidden;
  }

  body {
    margin: 0 auto;
    height: 100%;

    font-family: ${p => p.theme.fonts.body};
    background-color: ${p => p.theme.colors.black};
    font-weight: ${p => p.theme.fontWeights.body};
    color: ${p => p.theme.colors.text};

    &.menu-open {
      overflow: hidden;
    }

    ::-webkit-scrollbar {
      margin-top: 16px;
      width: 5px;
      height: 8px;
      background-color: #aaa;
     border-radius: 4px;
   }

    ::-webkit-scrollbar-thumb {
      background: ${p => p.theme.colors.muted};
      border-radius: 4px;
    }
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
    padding-left: 0.625rem;
    padding-right: 0.625rem;
    max-width: ${p => p.theme.sizes.container};

    @media screen and (min-width: ${p => p.theme.breakpoints.tablet}){
      
    padding-left: 0.9375rem;
    padding-right: 0.9375rem;
      
    }
  }
`;
