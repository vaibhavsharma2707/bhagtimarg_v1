import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { DEITIES } from "../constants";
import { ALL_CONTENT } from "../data/content";
import { useLanguage } from "../contexts/LanguageContext";

const DeityPage: React.FC = () => {
  const params = useParams();
  const deityId = params.deityId ?? "";
  const { language } = useLanguage();
  const deity = DEITIES.find((d) => d.id === deityId);

  if (!deity) {
    return <Navigate to="/" replace />;
  }

  const linkClasses =
    "block w-full text-center bg-brand-bg hover:bg-amber-100 text-brand-secondary font-bold py-4 px-6 rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 border border-amber-200 hover:border-brand-primary";

  const deityMantras = ALL_CONTENT.filter(
    (content) =>
      content.type === "Mantra" && deity.content.mantraIds.includes(content.id)
  );
  const deityStories = ALL_CONTENT.filter(
    (content) =>
      content.type === "Story" && deity.content.storyIds.includes(content.id)
  );

  // ---------- Language helper ----------
  const t = (en: string, hi: string) => (language === "en" ? en : hi);

  return (
    <div className="max-w-4xl mx-auto">
      <Link
        to="/"
        className="inline-block mb-8 text-brand-primary hover:text-brand-secondary font-semibold transition-colors"
      >
        &larr; {t("Back to Home", "मुख्य पृष्ठ पर वापस")}
      </Link>

      <div className="bg-brand-bg rounded-xl shadow-xl overflow-hidden p-8">
        <div className="md:flex md:items-center">
          <div className="md:flex-shrink-0 relative">
            <img
              className="h-48 w-full object-cover md:w-48 rounded-lg shadow-md"
              src={deity.image || "/images/default.jpg"}
              alt={t(deity.name, deity.name_hi)}
              loading="lazy"
            />
          </div>

          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-5xl font-bold font-serif text-brand-secondary">
              {t(deity.name, deity.name_hi)}
            </h1>
            <h2 className="text-3xl font-serif text-brand-accent mt-1">
              {t(deity.name_hi, deity.name)}
            </h2>
            <p className="mt-2 text-brand-text text-lg">
              {t(deity.description, deity.description_hi)}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {deity.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-sm font-semibold inline-block py-1 px-3 uppercase rounded-full text-brand-primary bg-amber-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-serif text-center mb-6 text-brand-accent">
          {t("Spiritual Texts", "आध्यात्मिक ग्रंथ")}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deity.content.chalisaId && (
            <Link
              to={`/content/chalisa/${deity.content.chalisaId}`}
              className={linkClasses}
              aria-label={t("Read the Chalisa", "चालीसा पढ़ें")}
            >
              {t("Read the Chalisa", "चालीसा पढ़ें")}
              <span className="block text-sm opacity-80 font-serif">
                {t("चालीसा पढ़ें", "Read the Chalisa")}
              </span>
            </Link>
          )}

          {deity.content.aartiId && (
            <Link
              to={`/content/aarti/${deity.content.aartiId}`}
              className={linkClasses}
              aria-label={t("Read the Aarti", "आरती पढ़ें")}
            >
              {t("Read the Aarti", "आरती पढ़ें")}
              <span className="block text-sm opacity-80 font-serif">
                {t("आरती पढ़ें", "Read the Aarti")}
              </span>
            </Link>
          )}

          {deityMantras.length > 0 &&
            deityMantras.map((mantra) => (
              <Link
                key={mantra.id}
                to={`/content/mantra/${mantra.id}`}
                className={linkClasses}
                aria-label={t(`Read: ${mantra.title}`, `पढ़ें: ${mantra.title_hi}`)}
              >
                {t(`Read: ${mantra.title}`, `पढ़ें: ${mantra.title_hi}`)}
                <span className="block text-sm opacity-80 font-serif">
                  {t(mantra.title_hi, mantra.title)}
                </span>
              </Link>
            ))}

          {deityStories.length > 0 &&
            deityStories.map((story) => (
              <Link
                key={story.id}
                to={`/content/story/${story.id}`}
                className={linkClasses}
                aria-label={t(`Read: ${story.title}`, `पढ़ें: ${story.title_hi}`)}
              >
                {t(`Read: ${story.title}`, `पढ़ें: ${story.title_hi}`)}
                <span className="block text-sm opacity-80 font-serif">
                  {t(story.title_hi, story.title)}
                </span>
              </Link>
            ))}

          {!deity.content.chalisaId &&
            !deity.content.aartiId &&
            deityMantras.length === 0 &&
            deityStories.length === 0 && (
              <p className="text-center text-gray-500 col-span-full">
                {t("No content available yet.", "कोई सामग्री उपलब्ध नहीं है।")}
              </p>
            )}
        </div>
      </div>
    </div>
  );
};

export default DeityPage;
