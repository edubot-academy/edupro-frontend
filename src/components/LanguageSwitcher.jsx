// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';
import { FiGlobe } from 'react-icons/fi';

const LANGS = [
  { code: 'ky', labelKey: 'lang.ky' },
  { code: 'ru', labelKey: 'lang.ru' },
  { code: 'en', labelKey: 'lang.en' },
];

export default function LanguageSwitcher() {
  const { t, i18n } = useTranslation();

  return (
    <div className="relative inline-block">
      <FiGlobe className="absolute left-2 top-1/2 -translate-y-1/2 text-black pointer-events-none z-10" />
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="
          pl-7 pr-5 py-0.5
          rounded-md bg-white/80 text-black
          text-sm focus:outline-none appearance-none
          border border-gray-300
          backdrop-blur-sm
          relative z-0
        "
        style={{
          colorScheme: 'light only',
          WebkitAppearance: 'none',
          MozAppearance: 'none',
          appearance: 'none',
        }}
        aria-label="Change language"
      >
        {LANGS.map(({ code, labelKey }) => (
          <option 
            key={code} 
            value={code}
            style={{
              backgroundColor: 'white',
              color: 'black'
            }}
          >
            {t(labelKey)}
          </option>
        ))}
      </select>

      {/* Кастомная стрелка */}
      <svg
        className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-gray-500 z-10"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
      </svg>
    </div>
  );
}