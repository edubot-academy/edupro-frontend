import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// import static JSON resources (bundled by Vite)
import en from './locales/en.json';
import ru from './locales/ru.json';
import ky from './locales/ky.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: { en: { common: en }, ru: { common: ru }, ky: { common: ky } },
        supportedLngs: ['ky', 'ru', 'en'],
        load: 'languageOnly',
        fallbackLng: { default: ['ky'] },   // explicit KY fallback
        detection: {
            order: ['localStorage', 'querystring', 'cookie', 'htmlTag', 'navigator'],
            lookupQuerystring: 'lang',
            caches: ['localStorage'],
        },
        ns: ['common'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
        initImmediate: false,               // <— avoid initial EN flash
    });

// keep <html lang=".."> in sync (good for a11y/SEO)
i18n.on('languageChanged', (lng) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng || 'ky';
        document.documentElement.dir = 'ltr'; // change if you add RTL langs
    }
});

export default i18n;
