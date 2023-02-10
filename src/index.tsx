import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ThemeProvider } from 'styled-components';
import { myTheme } from 'styles/theme/DefaultTheme';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={myTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
