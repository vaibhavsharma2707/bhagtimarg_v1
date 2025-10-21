import React from 'react';
import Card from '../components/Card';
import { DEITIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import Panchang from '../components/Panchang';

const HomePage: React.FC = () => {
  const { language } = useLanguage();

  return (
    <div className="space-y-12">
      <section className="text-center bg-brand-bg p-8 rounded-xl shadow-md">
        <h1 className="text-5xl font-bold font-serif text-brand-secondary">
            {language === 'en' ? 'Welcome to BhagtiMarg' : 'भक्तिमार्ग में आपका स्वागत है'}
        </h1>
        <p className="mt-4 text-xl text-brand-text max-w-3xl mx-auto">
            {language === 'en' 
             ? 'Embark on a spiritual journey through the rich heritage of Hindu traditions. Explore chalisas, aartis, and stories dedicated to the divine.'
             : 'हिंदू परंपराओं की समृद्ध विरासत के माध्यम से एक आध्यात्मिक यात्रा पर निकलें। दिव्य को समर्पित चालीसा, आरती और कथाओं का अन्वेषण करें।'}
        </p>
      </section>

      <Panchang />

      <section>
        <h2 className="text-4xl font-bold font-serif text-center mb-2 text-brand-accent">
            {language === 'en' ? 'Meet the Deities' : 'प्रमुख देवता'}
        </h2>
        <h3 className="text-2xl font-serif text-center mb-8 text-brand-accent/80">
            {language === 'en' ? 'Major Deities' : 'देवताओं से मिलें'}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEITIES.map((deity) => (
            <Card key={deity.id} deity={deity} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;