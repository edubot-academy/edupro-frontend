import { useState } from "react";
import { Link } from "react-router-dom";

const BASE = {
    starter: 49,
    pro: 149,
    career: 399,
};

const FEATURES = [
    { key: "curriculum", label: "Full curriculum access" },
    { key: "mentor", label: "1:1 mentor sessions" },
    { key: "capstone", label: "Capstone review" },
    { key: "career", label: "Interview prep & career support" },
    { key: "intern", label: "Guaranteed internship*" },
];

export default function Pricing() {
    const [yearly, setYearly] = useState(false);

    const price = (base) => (yearly ? Math.round(base * 10) : base); // ~2 months free for yearly
    const suffix = yearly ? "/year" : "/mo";
    const saveBadge = yearly ? "2 months free" : null;

    const plans = [
        {
            id: "starter",
            name: "Starter",
            desc: "Dip your toes in with workshops & community.",
            price: price(BASE.starter),
            features: { curriculum: false, mentor: false, capstone: false, career: true, intern: false },
            cta: "Get Starter",
        },
        {
            id: "pro",
            name: "Pro Track",
            desc: "Complete program with mentor support.",
            price: price(BASE.pro),
            featured: true,
            features: { curriculum: true, mentor: true, capstone: true, career: true, intern: false },
            cta: "Choose Pro",
        },
        {
            id: "career",
            name: "Career Plus",
            desc: "Everything in Pro plus internship path.",
            price: price(BASE.career),
            features: { curriculum: true, mentor: true, capstone: true, career: true, intern: true },
            cta: "Go Career Plus",
        },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h1 className="text-4xl font-bold">Tuition & Pricing</h1>
                    <p className="text-slate-600 mt-2 max-w-3xl mx-auto">
                        Transparent pricing with flexible options. Switch/cancel anytime. Scholarships available for eligible students.
                    </p>

                    {/* Billing toggle */}
                    <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-2">
                        <button
                            className={`px-4 py-2 rounded-xl text-sm font-semibold ${!yearly ? "bg-emerald-600 text-white" : "text-slate-700"}`}
                            onClick={() => setYearly(false)}
                        >
                            Monthly
                        </button>
                        <button
                            className={`px-4 py-2 rounded-xl text-sm font-semibold ${yearly ? "bg-emerald-600 text-white" : "text-slate-700"}`}
                            onClick={() => setYearly(true)}
                        >
                            Yearly {saveBadge && <span className="ml-2 rounded-lg bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs">{saveBadge}</span>}
                        </button>
                    </div>
                </div>
            </section>

            {/* Plans */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
                    {plans.map((p) => (
                        <article
                            key={p.id}
                            className={`rounded-2xl p-6 ring-1 shadow-sm ${p.featured ? "bg-emerald-600 text-white ring-emerald-700" : "bg-white ring-slate-200"
                                }`}
                        >
                            <div className="flex items-baseline justify-between">
                                <h3 className={`text-xl font-semibold ${p.featured ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
                                <div className="text-3xl font-bold">
                                    ${p.price}
                                    <span className={`text-sm ml-1 ${p.featured ? "text-white/80" : "text-slate-500"}`}>{suffix}</span>
                                </div>
                            </div>
                            <p className={`mt-2 text-sm ${p.featured ? "text-white/90" : "text-slate-600"}`}>{p.desc}</p>

                            <ul className={`mt-4 space-y-2 text-sm ${p.featured ? "text-white/90" : "text-slate-700"}`}>
                                {FEATURES.map((f) => (
                                    <li key={f.key} className="flex items-center gap-2">
                                        <span
                                            className={`inline-flex h-5 w-5 items-center justify-center rounded-md text-xs font-bold ${p.features[f.key] ? (p.featured ? "bg-white text-emerald-700" : "bg-emerald-100 text-emerald-700") : "bg-slate-100 text-slate-400"
                                                }`}
                                        >
                                            {p.features[f.key] ? "✓" : "–"}
                                        </span>
                                        {f.label}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/apply"
                                className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2 font-semibold ${p.featured ? "bg-white text-emerald-700 hover:bg-white/90" : "bg-emerald-600 text-white hover:bg-emerald-700"
                                    }`}
                            >
                                {p.cta}
                            </Link>
                        </article>
                    ))}
                </div>

                <p className="text-xs text-slate-500 text-center mt-3 px-4">
                    * Internship guarantee depends on assessment and attendance.
                </p>
            </section>

            {/* Comparison table */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4">Compare plans</h2>
                    <div className="overflow-x-auto rounded-2xl ring-1 ring-slate-200 bg-white">
                        <table className="min-w-full text-sm">
                            <thead className="bg-slate-50 text-slate-600">
                                <tr>
                                    <th className="text-left p-4">Feature</th>
                                    <th className="text-left p-4">Starter</th>
                                    <th className="text-left p-4">Pro Track</th>
                                    <th className="text-left p-4">Career Plus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {FEATURES.map((f) => (
                                    <tr key={f.key} className="border-t border-slate-100">
                                        <td className="p-4 text-slate-700">{f.label}</td>
                                        <td className="p-4">{plans[0].features[f.key] ? "✓" : "—"}</td>
                                        <td className="p-4">{plans[1].features[f.key] ? "✓" : "—"}</td>
                                        <td className="p-4">{plans[2].features[f.key] ? "✓" : "—"}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-6 rounded-2xl bg-emerald-50 p-4 text-emerald-900">
                        <strong>Scholarships & financial aid:</strong> limited spots available each cohort. Contact{" "}
                        <a href="mailto:admissions@edupro.academy" className="underline">admissions@edupro.academy</a>.
                    </div>
                </div>
            </section>

            {/* FAQ + CTA */}
            <section className="py-12 bg-slate-100/60">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-4 text-center">Frequently asked</h2>
                    <div className="divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
                        {[
                            { q: "Can I switch plans later?", a: "Yes, you can upgrade or cancel anytime. Pro-rated billing applies." },
                            { q: "Is there a refund policy?", a: "Full refund within 7 days of cohort start if you’re not satisfied." },
                            { q: "Do you offer corporate billing?", a: "Yes, email billing@edupro.academy for invoices and bulk seats." },
                        ].map((qa, i) => (
                            <details key={i} className="p-6 group">
                                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                                    {qa.q}
                                    <span className="ml-4 text-slate-400 group-open:rotate-45 transition">＋</span>
                                </summary>
                                <p className="mt-2 text-slate-600">{qa.a}</p>
                            </details>
                        ))}
                    </div>

                    <div className="text-center mt-8">
                        <Link to="/apply" className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                            Apply now
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
