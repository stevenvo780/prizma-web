import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'prizma-ui';
import App from './App';
import 'prizma-ui/styles.css';
import './styles/app.css';
import './styles/prizma-brand.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light">
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
