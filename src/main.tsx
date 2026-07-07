import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App';

// Persist theme choice, default dark
const saved = localStorage.getItem('dp-theme') as 'dark' | 'light' | null;
const theme = saved ?? 'dark';
document.documentElement.setAttribute('data-color-scheme', theme);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
