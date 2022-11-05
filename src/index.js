import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from 'styled-components';

import App from 'App';

import { theme } from './theme';

const mainContainer = document.getElementById('root');
const mainRoot = createRoot(mainContainer);

mainRoot.render(
  <StrictMode>
    <BrowserRouter basename="/movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
