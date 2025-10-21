import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ZODIAC_SIGNS } from '../constants';
import { getDailyHoroscope, Horoscope } from '../utils/horoscopeData';
import Spinner from './Spinner';
import { FaHeart, FaBriefcase, FaHeartbeat, FaMoneyBillWave, FaOm } from 'react-icons/fa';

interface HoroscopeDisplayProps {
  signId: string;
}

const HoroscopeDisplay: React.FC<HoroscopeDisplayProps> = ({ signId }) => {
  const { language } = useLanguage();
  const [prediction, setPrediction] = useState<Horoscope | null>(null);
  const [loading, setLoading] = useState(true);

  const sign = ZODIAC_SIGNS.find((s): s is typeof ZODIAC_SIGNS[number] => s.id === signId);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setPrediction(getDailyHoroscope(signId));
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [signId]);

  if (!sign)
    return (
      <div className="p-4 text-center text-red-500">
        {language === 'en' ? 'Invalid Zodiac Sign' : 'अमान्य राशि'}
      </div>
    );

  const renderLine = (icon: React.ReactNode, label: string, content: string) => (
    <div className="flex items-start mb-4">
      <div className="text-2xl mr-3 text-brand-accent">{icon}</div>
      <div>
        <p className="font-semibold text-lg">{label}</p>
        <p className="text-brand-text text-base leading-relaxed">{content}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-brand-bg p-8 rounded-xl shadow-lg animate-fade-in">
      {loading ? (
        <div className="flex justify-center items-center h-48">
          <Spinner />
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row items-center text-center sm:text-left">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-8">
            <div className="p-4 bg-amber-100 rounded-lg shadow-inner">
              <img src={sign.imageUrl} alt={sign.name.en} className="w-24 h-24 mx-auto" />
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-serif text-brand-secondary">
              {language === 'en' ? sign.name.en : sign.name.hi}
            </h2>
            <p className="text-brand-accent text-lg mb-6">{sign.dateRange}</p>
            {prediction && (
              <div>
                {renderLine(
                  <FaHeart />,
                  language === 'en' ? 'Love' : 'प्रेम',
                  language === 'en' ? prediction.love.en : prediction.love.hi
                )}
                {renderLine(
                  <FaBriefcase />,
                  language === 'en' ? 'Career' : 'करियर',
                  language === 'en' ? prediction.career.en : prediction.career.hi
                )}
                {renderLine(
                  <FaHeartbeat />,
                  language === 'en' ? 'Health' : 'स्वास्थ्य',
                  language === 'en' ? prediction.health.en : prediction.health.hi
                )}
                {renderLine(
                  <FaMoneyBillWave />,
                  language === 'en' ? 'Finance' : 'वित्त',
                  language === 'en' ? prediction.finance.en : prediction.finance.hi
                )}
                {renderLine(
                  <FaOm />,
                  language === 'en' ? 'Spirituality' : 'आध्यात्म',
                  language === 'en' ? prediction.spirituality.en : prediction.spirituality.hi
                )}
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default HoroscopeDisplay;
