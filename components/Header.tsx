import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { DEITIES } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const navItems = [
  { title: 'Chalisas', title_hi: 'चालीसा', type: 'Chalisa' as const },
  { title: 'Aartis', title_hi: 'आरती', type: 'Aarti' as const },
  { title: 'Mantras', title_hi: 'मंत्र', type: 'Mantra' as const },
  { title: 'Stories', title_hi: 'कथाएं', type: 'Story' as const },
];

type DropdownItem = {
    name: string;
    name_hi: string;
    link: string;
}

const LanguageToggle: React.FC<{ onClick: () => void; language: 'en' | 'hi' }> = ({ onClick, language }) => (
    <div className="relative bg-amber-100 rounded-full p-1 cursor-pointer" onClick={onClick} aria-label="Toggle language">
        <div className={`absolute top-0 left-0 w-1/2 h-full bg-brand-primary rounded-full transition-transform duration-300 ease-in-out ${language === 'en' ? 'transform translate-x-0' : 'transform translate-x-full'}`}></div>
        <div className="flex justify-around items-center w-24">
            <span className={`relative z-10 font-bold transition-colors duration-300 ${language === 'en' ? 'text-white' : 'text-brand-accent'}`}>En</span>
            <span className={`relative z-10 font-bold transition-colors duration-300 ${language === 'hi' ? 'text-white' : 'text-brand-accent'}`}>हि</span>
        </div>
    </div>
);

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownToggle = (dropdownType: string) => {
    setOpenDropdown(current => (current === dropdownType ? null : dropdownType));
  };

  const handleMobileAccordionToggle = (accordionType: string) => {
    setOpenMobileAccordion(current => (current === accordionType ? null : accordionType));
  };
  
  const closeAllMenus = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    setOpenMobileAccordion(null);
  };

  const getDropdownItems = (type: 'Chalisa' | 'Aarti' | 'Mantra' | 'Story'): DropdownItem[] => {
    switch (type) {
      case 'Chalisa':
        return DEITIES
          .filter(d => d.content.chalisaId)
          .map(d => ({ name: d.name, name_hi: d.name_hi, link: `/content/chalisa/${d.content.chalisaId}` }));
      case 'Aarti':
        return DEITIES
          .filter(d => d.content.aartiId)
          .map(d => ({ name: d.name, name_hi: d.name_hi, link: `/content/aarti/${d.content.aartiId}` }));
      case 'Mantra':
        return DEITIES
          .filter(d => d.content.mantraIds.length > 0)
          .map(d => ({ name: d.name, name_hi: d.name_hi, link: `/deity/${d.id}` }));
      case 'Story':
        return DEITIES
          .filter(d => d.content.storyIds.length > 0)
          .map(d => ({ name: d.name, name_hi: d.name_hi, link: `/deity/${d.id}` }));
      default:
        return [];
    }
  };

  const navLinkClasses = "px-4 py-2 rounded-md hover:bg-amber-200/50 hover:text-brand-primary transition-colors duration-200";
  const activeNavLinkClasses = "bg-amber-200 text-brand-primary";

  return (
    <header ref={navRef} className="bg-brand-bg/80 backdrop-blur-sm sticky top-0 z-50 shadow-md">
      {/* Top Title Bar */}
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" onClick={closeAllMenus} className="text-3xl font-bold font-serif text-brand-secondary hover:text-brand-primary transition-colors">
          ॐ BhagtiMarg
        </Link>
        <div className="hidden md:flex items-center space-x-2 text-brand-accent font-medium">
          <NavLink to="/" onClick={() => setOpenDropdown(null)} className={({ isActive }) => isActive && !openDropdown ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses} end>{language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}</NavLink>
          <NavLink to="/horoscope" onClick={() => setOpenDropdown(null)} className={({ isActive }) => isActive ? `${navLinkClasses} ${activeNavLinkClasses}` : navLinkClasses}>{language === 'en' ? 'Horoscope' : 'राशिफल'}</NavLink>
          {navItems.map(item => (
            <div key={item.type} className="relative">
              <button
                onClick={() => handleDropdownToggle(item.type)}
                className={`${navLinkClasses} ${openDropdown === item.type ? activeNavLinkClasses : ''} flex items-center`}
                aria-haspopup="true"
                aria-expanded={openDropdown === item.type}
              >
                {language === 'en' ? item.title : item.title_hi}
                 <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${openDropdown === item.type ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {openDropdown === item.type && (
                <div className="absolute mt-2 w-64 bg-brand-bg rounded-md shadow-lg ring-1 ring-black ring-opacity-5 py-1 z-50 left-0 max-h-96 overflow-y-auto">
                  {getDropdownItems(item.type).map(dropdownItem => (
                      <Link
                          key={dropdownItem.link}
                          to={dropdownItem.link}
                          onClick={closeAllMenus}
                          className="block px-4 py-2 text-sm text-brand-text hover:bg-amber-100"
                      >
                          {language === 'en' ? dropdownItem.name : dropdownItem.name_hi}
                      </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <LanguageToggle onClick={toggleLanguage} language={language} />
        </div>
        <div className="md:hidden flex items-center">
            <LanguageToggle onClick={toggleLanguage} language={language} />
            <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} className="ml-4 p-2 text-brand-accent rounded-md hover:bg-amber-100" aria-controls="mobile-menu" aria-expanded={isMobileMenuOpen}>
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                ) : (
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                )}
            </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
             <Link to="/" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-brand-accent hover:text-brand-primary hover:bg-amber-100">
                {language === 'en' ? 'Home' : 'मुख्य पृष्ठ'}
            </Link>
            <Link to="/horoscope" onClick={closeAllMenus} className="block px-3 py-2 rounded-md text-base font-medium text-brand-accent hover:text-brand-primary hover:bg-amber-100">
                {language === 'en' ? 'Horoscope' : 'राशिफल'}
            </Link>
            {navItems.map(item => (
                 <div key={`mobile-${item.type}`}>
                    <button
                        onClick={() => handleMobileAccordionToggle(item.type)}
                        className="w-full text-left flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-brand-accent hover:text-brand-primary hover:bg-amber-100"
                         aria-haspopup="true"
                         aria-expanded={openMobileAccordion === item.type}
                    >
                        <span>{language === 'en' ? item.title : item.title_hi}</span>
                        <svg className={`w-5 h-5 transition-transform duration-200 ${openMobileAccordion === item.type ? 'transform rotate-180' : ''}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                       </svg>
                    </button>
                    {openMobileAccordion === item.type && (
                         <div className="pl-4 border-l-2 border-brand-primary/50 ml-3 mt-1 space-y-1">
                            {getDropdownItems(item.type).map(dropdownItem => (
                                <Link
                                key={dropdownItem.link}
                                to={dropdownItem.link}
                                onClick={closeAllMenus}
                                className="block px-4 py-2 text-sm rounded-md text-brand-text hover:bg-amber-100"
                                >
                                {language === 'en' ? dropdownItem.name : dropdownItem.name_hi}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;