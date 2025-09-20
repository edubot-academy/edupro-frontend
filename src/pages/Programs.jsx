import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const PROGRAMS = [
    {
        slug: "frontend",
        title: "Frontend Engineering",
        summary: "React, Tailwind, APIs, deployment, interview prep.",
        duration: "16 weeks",
        price: 149,
        level: "beginner",
        modes: ["online", "campus", "hybrid"],
        langs: ["KG", "RU", "EN"],
        badge: "Popular",
    },
    {
        slug: "backend_django",
        title: "Backend (Django)",
        summary: "Python, Django REST, PostgreSQL, Docker, CI/CD.",
        duration: "24 weeks",
        price: 199,
        level: "intermediate",
        modes: ["online", "campus"],
        langs: ["KG", "RU"],
        badge: "New cohort",
    },
    {
        slug: "flutter",
        title: "Mobile (Flutter)",
        summary: "Dart, Flutter UI, state mgmt, Play/App Store.",
        duration: "20 weeks",
        price: 179,
        level: "beginner",
        modes: ["online"],
        langs: ["KG", "RU", "EN"],
    },
    {
        slug: "ux_ui",
        title: "UX/UI Design",
        summary: "Figma, research, wireframes, design systems, handoff.",
        duration: "12 weeks",
        price: 129,
        level: "beginner",
        modes: ["online", "hybrid"],
        langs: ["KG", "RU"],
    },
];

export default function Programs() {
    const [q, setQ] = useState("");
    const [mode, setMode] = useState("all");
    const [level, setLevel] = useState("all");
    const [lang, setLang] = useState("all");

    const filtered = useMemo(() => {
        return PROGRAMS.filter((p) => {
            const matchQ =
                !q ||
                p.title.toLowerCase().includes(q.toLowerCase()) ||
                p.summary.toLowerCase().includes(q.toLowerCase());
            const matchMode = mode === "all" || p.modes.includes(mode);
            const matchLevel = level === "all" || p.level === level;
            const matchLang = lang === "all" || p.langs.includes(lang);
            return matchQ && matchMode && matchLevel && matchLang;
        });
    }, [q, mode, level, lang]);

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <h1 className="text-4xl font-bold tracking-tight">Programs</h1>
                    <p className="text-slate-600 mt-2 max-w-3xl">
                        Hands-on, mentor-led tracks designed to get you job-ready. Filter by format,
                        level, or language and apply in minutes.
                    </p>

                    {/* Search + Filters */}
                    <div className="mt-6 grid gap-3 md:grid-cols-4">
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder="Search programs (e.g. React, Python, design)…"
                            className="rounded-xl border border-slate-300 px-4 py-3"
                        />
                        <select
                            value={mode}
                            onChange={(e) => setMode(e.target.value)}
                            className="rounded-xl border border-slate-300 px-4 py-3"
                        >
                            <option value="all">All formats</option>
                            <option value="online">Online</option>
                            <option value="campus">On-campus</option>
                            <option value="hybrid">Hybrid</option>
                        </select>
                        <select
                            value={level}
                            onChange={(e) => setLevel(e.target.value)}
                            className="rounded-xl border border-slate-300 px-4 py-3"
                        >
                            <option value="all">All levels</option>
                            <option value="beginner">Beginner</option>
                            <option value="intermediate">Intermediate</option>
                        </select>
                        <select
                            value={lang}
                            onChange={(e) => setLang(e.target.value)}
                            className="rounded-xl border border-slate-300 px-4 py-3"
                        >
                            <option value="all">Any language</option>
                            <option value="KG">Kyrgyz (KG)</option>
                            <option value="RU">Russian (RU)</option>
                            <option value="EN">English (EN)</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Results */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {filtered.length === 0 ? (
                        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 text-center text-slate-600">
                            No programs match your filters. Try clearing search or filters.
                        </div>
                    ) : (
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {filtered.map((p) => (
                                <article key={p.slug} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200 hover:shadow-sm">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-lg font-semibold">{p.title}</h3>
                                        {p.badge && (
                                            <span className="ml-2 rounded-lg bg-emerald-50 text-emerald-700 text-xs px-2 py-1">
                                                {p.badge}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-slate-600 mt-2">{p.summary}</p>

                                    <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
                                        <div className="rounded-lg bg-slate-50 p-2 text-slate-700">⏱ {p.duration}</div>
                                        <div className="rounded-lg bg-slate-50 p-2 text-slate-700">💰 ${p.price}/mo</div>
                                        <div className="rounded-lg bg-slate-50 p-2 text-slate-700 capitalize">🎯 {p.level}</div>
                                    </div>

                                    <div className="mt-3 flex flex-wrap gap-2">
                                        {p.modes.map((m) => (
                                            <span key={m} className="rounded-lg bg-emerald-50 text-emerald-700 text-xs px-2 py-1 capitalize">
                                                {m}
                                            </span>
                                        ))}
                                        {p.langs.map((l) => (
                                            <span key={l} className="rounded-lg bg-blue-50 text-blue-700 text-xs px-2 py-1">
                                                {l}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-6 flex gap-3">
                                        <Link
                                            to={`/programs/${p.slug}`}
                                            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                                        >
                                            View details
                                        </Link>
                                        <Link
                                            to={`/apply?program=${p.slug}`}
                                            className="px-4 py-2 rounded-xl border border-slate-300 font-semibold hover:bg-white"
                                        >
                                            Apply
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}

                    {/* Note */}
                    <p className="text-xs text-slate-500 mt-6">
                        * Prices shown are indicative monthly tuition. See <Link to="/pricing" className="underline">Pricing</Link> for details.
                    </p>
                </div>
            </section>
        </main>
    );
}
