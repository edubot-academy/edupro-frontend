import { create } from 'zustand';

const allowed = ['en', 'ru', 'ky'];
const saved = typeof localStorage !== 'undefined' && localStorage.getItem('locale');
const browser = typeof navigator !== 'undefined' && navigator.language?.slice(0, 2);
const initial = allowed.includes(saved) ? saved : (allowed.includes(browser) ? browser : 'en');

export const useLocaleStore = create((set) => ({
    locale: initial,
    setLocale: (locale) => set(() => {
        if (!allowed.includes(locale)) locale = 'en';
        try { localStorage.setItem('locale', locale); } catch { }
        // set <html lang=".."> for accessibility/SEO
        if (typeof document !== 'undefined') document.documentElement.lang = locale;
        return { locale };
    }),
}));
