import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import './index.css';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
// import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </StrictMode>,
  </BrowserRouter>
)
