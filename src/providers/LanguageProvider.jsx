import { useEffect } from 'react';
import i18n from '../i18n';
import { useLocaleStore } from '../store/useLocaleStore';

export default function LanguageProvider({ children }) {
    const setLocale = useLocaleStore(s => s.setLocale);

    useEffect(() => {
        const onChange = (lng) => {
            setLocale(lng);
            if (typeof document !== 'undefined') {
                document.documentElement.lang = lng;
                document.documentElement.dir = 'ltr';
            }
        };
        onChange(i18n.language);            // initialize once
        i18n.on('languageChanged', onChange);
        return () => i18n.off('languageChanged', onChange);
    }, [setLocale]);

    return <>{children}</>;
}