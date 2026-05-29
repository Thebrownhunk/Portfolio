import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import App from './App.jsx';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: '#0d0d0d',
          color: '#fff',
          border: '1px solid rgba(24,210,110,0.2)',
          fontFamily: 'Space Grotesk, sans-serif',
          fontSize: '14px',
        },
        success: { iconTheme: { primary: '#18d26e', secondary: '#000' } },
      }}
    />
  </StrictMode>
);
