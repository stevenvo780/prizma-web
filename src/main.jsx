import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@olympo/ui';
import App from './App';
import '@olympo/ui/styles.css';
import './styles/app.css';
import './styles/cauce-brand.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
