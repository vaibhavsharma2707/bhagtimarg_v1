import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getPanchangData, PanchangData, Festival } from '../utils/panchangData';
import Spinner from './Spinner';

const PanchangCard: React.FC<{ titleEn: string, titleHi: string, children: React.ReactNode, icon: string, className?: string }> = ({ titleEn, titleHi, children, icon, className = '' }) => {
    const { language } = useLanguage();
    return (
        <div className={`bg-amber-100/50 rounded-lg p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${className}`}>
            <h3 className="font-bold text-xl text-center text-brand-accent mb-4 flex items-center justify-center">
                <span className="text-2xl mr-3">{icon}</span>
                {language === 'en' ? titleEn : titleHi}
            </h3>
            {children}
        </div>
    );
}

const Panchang: React.FC = () => {
  const { language } = useLanguage();
  const [data, setData] = useState<{ panchang: PanchangData; festivals: Festival[] } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // Simulate a data fetch to mimic real-world async behavior
    const timer = setTimeout(() => {
        setData(getPanchangData());
        setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  const today = new Date();
  const todayFormatted = new Intl.DateTimeFormat(language === 'en' ? 'en-GB' : 'hi-IN', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(today);

  if (loading || !data) {
    return (
        <section className="mb-12 flex justify-center items-center h-64 bg-brand-bg/50 rounded-xl shadow-lg">
            <Spinner />
        </section>
    );
  }

  const { panchang, festivals } = data;

  return (
    <section className="mb-12">
      <h2 className="text-4xl font-bold font-serif text-center mb-2 text-brand-accent">
        {language === 'en' ? "Today's Panchang & Calendar" : "आज का पंचांग और कैलेंडर"}
      </h2>
      <p className="text-center text-brand-secondary font-semibold mb-6 text-lg">{todayFormatted}</p>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-1 space-y-6">
            <PanchangCard titleEn="Panchang" titleHi="पंचांग" icon="🕉️">
                <div className="space-y-3 font-serif">
                    <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-brand-text">{language === 'en' ? 'Tithi' : 'तिथि'}:</span>
                        <span className="text-lg text-brand-secondary">{language === 'en' ? panchang.tithi.en : panchang.tithi.hi}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-brand-text">{language === 'en' ? 'Nakshatra' : 'नक्षत्र'}:</span>
                        <span className="text-lg text-brand-secondary">{language === 'en' ? panchang.nakshatra.en : panchang.nakshatra.hi}</span>
                    </div>
                </div>
            </PanchangCard>
            <PanchangCard titleEn="Timings" titleHi="समय" icon="⏳">
                 <div className="space-y-3 font-serif">
                    <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-brand-text">{language === 'en' ? 'Sunrise' : 'सूर्योदय'}:</span>
                        <span className="text-lg text-brand-secondary">{panchang.sunrise.en}</span>
                    </div>
                    <div className="flex justify-between items-baseline">
                        <span className="font-semibold text-brand-text">{language === 'en' ? 'Sunset' : 'सूर्यास्त'}:</span>
                        <span className="text-lg text-brand-secondary">{panchang.sunset.en}</span>
                    </div>
                </div>
            </PanchangCard>
        </div>
        
        <PanchangCard titleEn="Hindu Calendar" titleHi="हिंदू कैलेंडर" icon="🗓️" className="lg:col-span-1 flex flex-col justify-center items-center text-center">
             <div className="font-serif">
                <p className="text-4xl font-bold text-brand-secondary">{language === 'en' ? panchang.month.en : panchang.month.hi}</p>
                <p className="text-2xl text-brand-accent mt-2">{language === 'en' ? panchang.paksha.en : panchang.paksha.hi}</p>
                <p className="text-lg text-brand-text font-bold mt-4">{language === 'en' ? `Vikram Samvat ${panchang.samvat}` : `विक्रम संवत ${panchang.samvat}`}</p>
            </div>
        </PanchangCard>
        
        <PanchangCard titleEn="Upcoming Occasions" titleHi="आगामी अवसर" icon="🎉" className="lg:col-span-1">
            <ul className="space-y-4">
               {festivals.map(festival => (
                 <li key={festival.name.en} className="flex items-center">
                    <span className="text-3xl mr-4">{festival.icon}</span>
                    <div className="flex-grow">
                        <p className="font-semibold text-brand-text text-lg">{language === 'en' ? festival.name.en : festival.name.hi}</p>
                        <p className="text-md font-serif text-brand-secondary">{new Intl.DateTimeFormat(language === 'en' ? 'en-US' : 'hi-IN', { day: 'numeric', month: 'long', year: 'numeric' }).format(festival.date)}</p>
                    </div>
                 </li>
               ))}
            </ul>
        </PanchangCard>

      </div>
    </section>
  );
};

export default Panchang;