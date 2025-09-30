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
  <FiGlobe className="absolute left-2 top-1/2 -translate-y-1/2 text-black dark:text-white pointer-events-none" />
  <select
    value={i18n.language}
    onChange={(e) => i18n.changeLanguage(e.target.value)}
    className="pl-8 pr-6 py-1 rounded-md bg-white/80 dark:bg-slate-900/60 text-sm focus:outline-none appearance-none"
    aria-label="Change language"
  >
    {LANGS.map(({ code, labelKey }) => (
      <option key={code} value={code}>
        {t(labelKey)}
      </option>
    ))}
  </select>
  {/* Кастомная стрелка */}
  <svg
    className="absolute right-2 top-1/2 -translate-y-1/2 w-3 h-3 pointer-events-none text-gray-500 dark:text-white"
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
