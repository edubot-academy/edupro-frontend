// src/components/LanguageSwitcher.jsx
import { useTranslation } from 'react-i18next';

const LANGS = [
    { code: 'ky', flag: '🇰🇬', labelKey: 'lang.ky' },
    { code: 'ru', flag: '🇷🇺', labelKey: 'lang.ru' },
    { code: 'en', flag: '🇬🇧', labelKey: 'lang.en' }, // swap to 🇺🇸 if you prefer
];

export default function LanguageSwitcher() {
    const { t, i18n } = useTranslation();
    return (
        <select
            value={i18n.language}
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            className="border rounded-md px-2 py-1 bg-white/80 dark:bg-slate-900/60"
            aria-label="Change language"
        >
            {LANGS.map(({ code, flag, labelKey }) => (
                <option key={code} value={code}>
                    {flag} {t(labelKey)}
                </option>
            ))}
        </select>
    );
}
