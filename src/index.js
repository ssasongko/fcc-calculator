import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppProvider } from './context/Context';
import { ThemeProvider } from './context/ThemeContext';
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <ThemeProvider>
    {/* <AppProvider> */}
      <App/>
    {/* </AppProvider> */}
  </ThemeProvider>
);
