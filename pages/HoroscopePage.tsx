import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ZODIAC_SIGNS } from '../constants';
import HoroscopeDisplay from '../components/HoroscopeDisplay';

const HoroscopePage: React.FC = () => {
    const { language } = useLanguage();
    const [selectedSignId, setSelectedSignId] = useState<string | null>(null);

    const handleSignClick = (signId: string) => {
        setSelectedSignId(signId);
    };

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="text-5xl font-bold font-serif text-brand-secondary">
                    {language === 'en' ? 'Daily Horoscope' : 'दैनिक राशिफल'}
                </h1>
                <p className="mt-4 text-xl text-brand-text max-w-3xl mx-auto">
                    {language === 'en'
                        ? 'Select your zodiac sign to reveal your daily prediction.'
                        : 'अपनी दैनिक भविष्यवाणी जानने के लिए अपनी राशि चुनें।'}
                </p>
            </section>

            <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
                {ZODIAC_SIGNS.map(sign => (
                    <div
                        key={sign.id}
                        onClick={() => handleSignClick(sign.id)}
                        className={`p-4 bg-brand-bg rounded-lg shadow-md text-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl
                            ${selectedSignId === sign.id ? 'ring-4 ring-brand-primary' : 'hover:ring-2 hover:ring-brand-primary/50'}`}
                    >
                        <img src={sign.imageUrl} alt={sign.name.en} className="w-16 h-16 mx-auto mb-2" />
                        <h3 className="font-bold text-brand-accent">{language === 'en' ? sign.name.en : sign.name.hi}</h3>
                        <p className="text-xs text-brand-secondary">{sign.dateRange}</p>
                    </div>
                ))}
            </section>

            {selectedSignId && (
                <section>
                    <HoroscopeDisplay key={selectedSignId} signId={selectedSignId} />
                </section>
            )}
        </div>
    );
};

export default HoroscopePage;