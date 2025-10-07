import { useEntryQuestions } from '@/hooks/useEntryQuestions';

export default function EntryQuiz() {
    const { logic, problem, english, motivation } = useEntryQuestions();
    const all = [...logic, ...problem, ...english, ...motivation];

    return (
        <div>
            {all.map((q) => (
                <div key={q.id}>
                    <p>{q.q}</p>
                    {q.type === 'single' && (
                        <ul>
                            {q.choices.map((c) => <li key={c}>{c}</li>)}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}
