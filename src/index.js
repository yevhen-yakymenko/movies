// import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from 'App';

const mainContainer = document.getElementById('root');
const mainRoot = createRoot(mainContainer);

mainRoot.render(
  // <StrictMode>
  <BrowserRouter basename="/moviesSPA">
    <App />
  </BrowserRouter>

  // </StrictMode>
);
