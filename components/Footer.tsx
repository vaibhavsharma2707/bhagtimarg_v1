import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-brand-accent text-amber-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
          {/* Brand + Description */}
          <div>
            <h3 className="text-xl font-bold font-serif mb-2 text-brand-primary">BhagtiMarg</h3>
            <p className="text-sm text-amber-200">
              {language === 'en'
                ? 'Your daily source of spiritual wisdom and devotion.'
                : 'आध्यात्मिक ज्ञान और भक्ति का आपका दैनिक स्रोत।'}
            </p>
            {/* Optional Instagram Icon */}
            <div className="mt-4">
              <a
                href="https://instagram.com/om_bhagtimarg/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-primary text-2xl"
                aria-label="Instagram"
              >
                📸
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-2">{language === 'en' ? 'Quick Links' : 'त्वरित लिंक'}</h3>
            <ul className="space-y-1">
              <li><Link to="/" className="hover:text-brand-primary">{language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary">{language === 'en' ? 'About' : 'हमारे बारे में'}</Link></li>
              <li><Link to="/privacy" className="hover:text-brand-primary">{language === 'en' ? 'Privacy Policy' : 'गोपनीयता नीति'}</Link></li>
            </ul>
          </div>
        </div>

        {/* AdSense Spot */}
        <div className="mt-6 text-center">
          <ins className="adsbygoogle"
               style={{display:'block'}}
               data-ad-client="ca-pub-9719761772996087"
               data-ad-slot="1234567890"
               data-ad-format="auto"
               data-full-width-responsive="true"></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
        </div>

        {/* Copyright + Disclaimer */}
        <div className="mt-8 border-t border-amber-200/50 pt-4 text-center text-sm text-amber-200">
          <p>&copy; {new Date().getFullYear()} BhagtiMarg. {language === 'en' ? 'All Rights Reserved.' : 'सर्वाधिकार सुरक्षित।'}</p>
          <p className="mt-1">
            {language === 'en'
              ? 'This website is for devotional and educational purposes.'
              : 'यह वेबसाइट भक्ति और शैक्षिक उद्देश्यों के लिए है।'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
