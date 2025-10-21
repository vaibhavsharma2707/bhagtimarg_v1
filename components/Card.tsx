import React from 'react';
import { Link } from 'react-router-dom';
import { Deity } from '../types';
import { useLanguage } from '../contexts/LanguageContext';

interface CardProps {
  deity: Deity;
}

const Card: React.FC<CardProps> = ({ deity }) => {
  const { language } = useLanguage();
  
  return (
    <Link 
      to={`/deity/${deity.id}`} 
      className="block group bg-brand-bg rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl"
    >
      <img 
        className="w-full h-48 object-cover" 
        src={deity.image} 
        alt={deity.name} 
      />
      <div className="p-6">
        <h3 className="text-2xl font-bold font-serif text-brand-secondary group-hover:text-brand-primary transition-colors duration-300">
          {language === 'en' ? deity.name : deity.name_hi}
        </h3>
        <h4 className="text-xl font-serif text-brand-secondary/80 group-hover:text-brand-primary/90 transition-colors duration-300">
          {language === 'en' ? deity.name_hi : deity.name}
        </h4>
        <p className="mt-2 text-brand-text text-md">
          {language === 'en' ? deity.description : deity.description_hi}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {deity.tags.map(tag => (
            <span 
              key={tag} 
              className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-brand-primary bg-amber-100"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default Card;
