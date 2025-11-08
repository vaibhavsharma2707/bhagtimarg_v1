import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { ALL_CONTENT } from '../data/content';
import { useLanguage } from '../contexts/LanguageContext';

const ContentDisplayPage: React.FC = () => {
  const { contentId, contentType } = useParams<{
    contentType: string;
    contentId: string;
  }>();

  const { language } = useLanguage();
  const contentItem = ALL_CONTENT.find(
    (c) =>
      c.id === contentId && c.type.toLowerCase() === contentType?.toLowerCase()
  );

  if (!contentItem) return <Navigate to="/" replace />;

  const goBackLink = contentItem.deityId ? `/deity/${contentItem.deityId}` : '/';
  const contentToDisplay = Array.isArray(
    language === 'hi' && contentItem.content_hi
      ? contentItem.content_hi
      : contentItem.content
  )
    ? language === 'hi' && contentItem.content_hi
      ? contentItem.content_hi
      : contentItem.content
    : [];

  return (
    <div className="max-w-3xl mx-auto bg-brand-bg p-8 md:p-12 rounded-xl shadow-lg">
      <Link
        to={goBackLink}
        className="text-brand-primary hover:text-brand-secondary mb-6 inline-block font-semibold"
      >
        &larr; {language === 'en' ? 'Back' : 'वापस'}
      </Link>

      {contentItem.audioUrl && (
        <iframe
          width="100%"
          height="150"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={contentItem.audioUrl}
          style={{ marginBottom: '20px' }}
        ></iframe>
      )}

      <h1 className="text-4xl md:text-5xl font-bold font-serif text-center text-brand-secondary mb-2">
        {language === 'en' ? contentItem.title : contentItem.title_hi}
      </h1>
      <h2 className="text-3xl md:text-4xl font-serif text-center text-brand-accent mb-8">
        {language === 'en' ? contentItem.title_hi : contentItem.title}
      </h2>
      <div className="space-y-4 text-center text-lg md:text-xl font-serif text-brand-text leading-loose">
        {contentToDisplay.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default ContentDisplayPage;
