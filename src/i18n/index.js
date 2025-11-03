// src/i18n/index.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Импорты переводов
import en_common from "./locales/en/common.json";
import en_home from "./locales/en/home.json";
import en_entry from "./locales/en/entryTest.json";
import en_pricePage from "./locales/en/pricePage.json";
import en_news from "./locales/en/news.json";
import en_aboutPage from "./locales/en/aboutPage.json";

import ru_common from "./locales/ru/common.json";
import ru_home from "./locales/ru/home.json";
import ru_entry from "./locales/ru/entryTest.json";
import ru_pricePage from "./locales/ru/pricePage.json";
import ru_news from "./locales/ru/news.json";
import ru_aboutPage from "./locales/ru/aboutPage.json";

import ky_common from "./locales/ky/common.json";
import ky_home from "./locales/ky/home.json";
import ky_entry from "./locales/ky/entryTest.json";
import ky_pricePage from "./locales/ky/pricePage.json";
import ky_news from "./locales/ky/news.json";
import ky_aboutPage from "./locales/ky/aboutPage.json";

// Инициализация i18n
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: en_common,
        home: en_home,
        entryTest: en_entry,
        pricePage: en_pricePage,
        news: en_news,
        aboutPage: en_aboutPage,
      },
      ru: {
        common: ru_common,
        home: ru_home,
        entryTest: ru_entry,
        pricePage: ru_pricePage,
        news: ru_news,
        aboutPage: ru_aboutPage,
      },
      ky: {
        common: ky_common,
        home: ky_home,
        entryTest: ky_entry,
        pricePage: ky_pricePage,
        news: ky_news,
        aboutPage: ky_aboutPage,
      },
    },
    supportedLngs: ["ky", "ru", "en"],
    load: "languageOnly",
    fallbackLng: "ky",
    keySeparator: ".",
    detection: {
      order: ["localStorage", "querystring", "cookie", "htmlTag", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    ns: ["common", "home", "entryTest", "aboutPage", "contactPage"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
    saveMissing: true,
    missingKeyHandler: function (lng, ns, key, fallbackValue) {
      console.warn(`Отсутствует ключ: ${key} в ${lng}/${ns}`);
    },
  });

export default i18n; // ✅ Default export
