import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import DarkModeProvider from './context/DarkMode/DarkModeProvider'
import AuthProvider from './context/Auth/AuthProvider'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <DarkModeProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </DarkModeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
