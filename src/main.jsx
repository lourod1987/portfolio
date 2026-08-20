import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ArchivePage from './pages/ArchivePage.jsx';
import './index.css';
// import './App.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
