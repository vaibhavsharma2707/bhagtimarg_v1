import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';

import HomePage from './pages/HomePage';
import DeityPage from './pages/DeityPage';
import ContentDisplayPage from './pages/ContentDisplayPage';
import HoroscopePage from './pages/HoroscopePage';
import About from './components/About';
import Privacy from './components/privacy';
const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/deity/:deityId" element={<DeityPage />} />
              <Route path="/content/:contentType/:contentId" element={<ContentDisplayPage />} />
              <Route path="/horoscope" element={<HoroscopePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/privacy" element={<Privacy />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </LanguageProvider>
  );
};

export default App;