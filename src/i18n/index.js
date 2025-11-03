import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en_common from "./locales/en/common.json";
import en_home from "./locales/en/home.json";
import en_entry from "./locales/en/entryTest.json";
import en_pricePage from "./locales/en/pricePage.json";
import en_news from "./locales/en/news.json";

import ru_common from "./locales/ru/common.json";
import ru_home from "./locales/ru/home.json";
import ru_entry from "./locales/ru/entryTest.json";
import ru_pricePage from "./locales/ru/pricePage.json";
import ru_news from "./locales/ru/news.json";

import ky_common from "./locales/ky/common.json";
import ky_home from "./locales/ky/home.json";
import ky_entry from "./locales/ky/entryTest.json";
import ky_pricePage from "./locales/ky/pricePage.json";
import ky_news from "./locales/ky/news.json";

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
      },
      ru: {
        common: ru_common,
        home: ru_home,
        entryTest: ru_entry,
        pricePage: ru_pricePage,
        news: ru_news,
      },
      ky: {
        common: ky_common,
        home: ky_home,
        entryTest: ky_entry,
        pricePage: ky_pricePage,
        news: ky_news,
      },
    },

    supportedLngs: ["ky", "ru", "en"],
    load: "languageOnly",

    fallbackLng: "ky",
    detection: {
      order: ["localStorage", "querystring", "cookie", "htmlTag", "navigator"],
      lookupQuerystring: "lang",
      caches: ["localStorage"],
    },
    ns: ["common", "home", "entryTest"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
    initImmediate: false,
    saveMissing: true,
    missingKeyHandler: function (lng, ns, key, fallbackValue) {
      console.warn(`Отсутствует ключ: ${key} в ${lng}/${ns}`);
    },
  });

i18n.on("languageChanged", (lng) => {
  if (typeof document !== "undefined") {
    document.documentElement.lang = lng || "ky";
    document.documentElement.dir = "ltr";
  }
});

export default i18n;
