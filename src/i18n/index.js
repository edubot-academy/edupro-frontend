// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// static JSON imports (bundled by Vite)
import en_common from './locales/en/common.json';
import en_home from './locales/en/home.json';
import en_entry from './locales/en/entryTest.json';

import ru_common from './locales/ru/common.json';
import ru_home from './locales/ru/home.json';
import ru_entry from './locales/ru/entryTest.json';

import ky_common from './locales/ky/common.json';
import ky_home from './locales/ky/home.json';
import ky_entry from './locales/ky/entryTest.json';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { common: en_common, home: en_home, entryTest: en_entry },
            ru: { common: ru_common, home: ru_home, entryTest: ru_entry },
            ky: { common: ky_common, home: ky_home, entryTest: ky_entry },
        },
        supportedLngs: ['ky', 'ru', 'en'],
        load: 'languageOnly',
        fallbackLng: 'ky',
        detection: {
            order: ['localStorage', 'querystring', 'cookie', 'htmlTag', 'navigator'],
            lookupQuerystring: 'lang',
            caches: ['localStorage'],
        },
        ns: ['common', 'home', 'entryTest'],
        defaultNS: 'common',
        interpolation: { escapeValue: false },
        react: { useSuspense: false },
        initImmediate: false,
    });

i18n.on('languageChanged', (lng) => {
    if (typeof document !== 'undefined') {
        document.documentElement.lang = lng || 'ky';
        document.documentElement.dir = 'ltr';
    }
});

export default i18n;
