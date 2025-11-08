import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { LanguageProvider } from './contexts/LanguageContext';
import SearchResultsPage from './components/Search';

import HomePage from './pages/HomePage';
import DeityPage from './pages/DeityPage';
import ContentDisplayPage from './pages/ContentDisplayPage';
import HoroscopePage from './pages/HoroscopePage';
import About from './components/About';
import Privacy from './components/Privacy';

import { trackPageview } from './components/analytics';

const RouteChangeTracker: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    trackPageview(location.pathname + location.hash);
  }, [location]);
  return null;
};

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>
        <RouteChangeTracker />
        <div className="flex flex-col min-h-screen font-sans">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/deity/:deityId" element={<DeityPage />} />
              <Route path="/content/:contentType/:contentId" element={<ContentDisplayPage />} />
              <Route path="/horoscope" element={<HoroscopePage />} />
              <Route path="/search" element={<SearchResultsPage />} />
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
