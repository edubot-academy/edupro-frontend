import { useTranslation } from 'react-i18next';
import data from '@/data/edupro_entry_test_questions.json'; // the 120-Q file

const SUPPORTED = ['ky', 'ru', 'en'];

export function useEntryQuestions() {
    const { i18n } = useTranslation();
    const lang = SUPPORTED.includes(i18n.language) ? i18n.language : 'ky';

    const mapQ = (q) => {
        const out = { ...q };
        out.q = q.q?.[lang] || q.q?.ky || '';
        if (q.type === 'single' && q.choices) {
            out.choices = q.choices[lang] || q.choices.ky || [];
        }
        return out;
    };

    return {
        logic: (data.logic || []).map(mapQ),
        problem: (data.problem || []).map(mapQ),
        english: (data.english || []).map(mapQ),
        motivation: (data.motivation || []).map(mapQ),
    };
}
