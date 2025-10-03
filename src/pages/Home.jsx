import React from "react";
import { useTranslation } from 'react-i18next';
import LeadForm from "../components/LeadForm";

// EduPro Academy Landing Page — single-file React component
// - TailwindCSS utility classes
// - Lightweight, no external UI deps
// - Sections: Navbar, Hero, Metrics, Programs, HowItWorks, Features, Outcomes, Testimonials, Pricing, FAQ, CTA, Footer
// - Language toggle mock (EN/KG/RU) with minimal copy variants



export default function Home() {
    const { t } = useTranslation(['common', 'home']);
    const title = t('home:hero.title');
    const subtitle = t('home:hero.subtitle');
    const ctaPrimary = t('home:hero.ctaPrimary');
    const ctaSecondary = t('home:hero.ctaSecondary');
    const eyebrow = t('home:hero.eyebrow');
    // 2) Arrays: return objects
    const metrics = t('home:metrics', { returnObjects: true }); // -> array
    const programs = t('home:programs.items', { returnObjects: true }); // -> array
    const howSteps = t('home:how.steps', { returnObjects: true });
    const features = t('home:features.items', { returnObjects: true });
    const outcomes = t('home:outcomes.bullets', { returnObjects: true });
    const testimonials = t('home:testimonials.items', { returnObjects: true });
    const plans = t('home:pricing.plans', { returnObjects: true });
    const faqItems = t('home:faq.items', { returnObjects: true });

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            {/* Hero */}
            <section className="relative overflow-hidden">
                <div className="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-50 to-slate-50" />
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-12 gap-10 items-center">
                    <div className="lg:col-span-7">
                        <p className="text-emerald-700 font-medium mb-3">{eyebrow}</p>
                        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
                            {title}
                        </h1>
                        <p className="text-slate-600 text-lg mb-8 max-w-2xl">{subtitle}</p>
                        <div className="flex flex-wrap gap-3">
                            <a href="#apply" className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 text-white px-6 py-3 font-semibold shadow hover:shadow-md hover:bg-emerald-700">
                                {ctaPrimary}
                            </a>
                            <a href="#brochure" className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-white">
                                {ctaSecondary}
                            </a>
                        </div>
                    </div>
                    <div className="lg:col-span-5">
                        <div className="relative aspect-[4/3] rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 overflow-hidden">
                            <div className="absolute inset-0 grid grid-cols-3 gap-2 p-3">
                                <div className="rounded-2xl bg-emerald-100" />
                                <div className="rounded-2xl bg-blue-100" />
                                <div className="rounded-2xl bg-orange-100" />
                                <div className="rounded-2xl bg-blue-100" />
                                <div className="rounded-2xl bg-orange-100" />
                                <div className="rounded-2xl bg-emerald-100" />
                                <div className="rounded-2xl bg-orange-100" />
                                <div className="rounded-2xl bg-emerald-100" />
                                <div className="rounded-2xl bg-blue-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics */}
            <section className="py-8">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {metrics.map((m, i) => (
                            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 text-center shadow-sm">
                                <div className="text-3xl font-bold">{m.value}</div>
                                <div className="text-slate-500 mt-1 text-sm">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Programs */}
            <section id="programs" className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">{t('home:programs.title')}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {programs.map((p, i) => (
                            <article key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm hover:shadow">
                                <h3 className="font-semibold text-lg">{p.name}</h3>
                                <p className="text-sm text-slate-500 mt-1">{p.dur}</p>
                                <p className="text-slate-600 mt-3 text-sm leading-relaxed">{p.text}</p>
                                <a href="#apply" className="mt-4 inline-flex text-emerald-700 font-semibold">Apply →</a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* How it works */}
            <section className="py-16 bg-slate-100/60" id="about">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-10">{t('home:how.title')}</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {howSteps.map((s, i) => (
                            <div key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6">
                                <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold mb-3">{i + 1}</div>
                                <h3 className="font-semibold">{s.t}</h3>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{s.d}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features & Outcomes */}
            <section className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-6">{t('home:features.title')}</h2>
                        <ul className="space-y-4">
                            {features.map((f, i) => (
                                <li key={i} className="flex gap-4">
                                    <div className="mt-1 h-6 w-6 rounded-lg bg-emerald-100 flex items-center justify-center">✓</div>
                                    <div>
                                        <div className="font-semibold">{f.t}</div>
                                        <div className="text-sm text-slate-600">{f.d}</div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-6">{t('home:outcomes.title')}</h2>
                        <ul className="grid sm:grid-cols-2 gap-4">
                            {outcomes.map((b, i) => (
                                <li key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 text-sm">{b}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-slate-100/60">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-8">{t('home:testimonials.title')}</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {testimonials.map((it, i) => (
                            <figure key={i} className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
                                <blockquote className="text-slate-700 leading-relaxed">“{it.quote}”</blockquote>
                                <figcaption className="mt-4 text-sm text-slate-500">— {it.name}, {it.role}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing */}
            <section id="pricing" className="py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-10">{t('home:pricing.title')}</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        {plans.map((pl, i) => (
                            <div key={i} className={`rounded-2xl p-6 ring-1 shadow-sm ${pl.featured ? "bg-emerald-600 text-white ring-emerald-700" : "bg-white ring-slate-200"}`}>
                                <div className="flex items-baseline justify-between">
                                    <h3 className={`font-semibold ${pl.featured ? "text-white" : "text-slate-900"}`}>{pl.name}</h3>
                                    <div className="text-2xl font-bold">{pl.price}</div>
                                </div>
                                <ul className={`mt-4 space-y-2 text-sm ${pl.featured ? "text-white/90" : "text-slate-600"}`}>
                                    {pl.feat.map((f, j) => (<li key={j}>• {f}</li>))}
                                </ul>
                                <a href="#apply" className={`mt-6 inline-flex w-full justify-center rounded-xl px-4 py-2 font-semibold ${pl.featured ? "bg-white text-emerald-700" : "bg-emerald-600 text-white"}`}>Choose plan</a>
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-slate-500 mt-4">{t('pricing.note')}</p>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold mb-6 text-center">{t('home:faq.title')}</h2>
                    <div className="divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
                        {faqItems.map((qa, i) => (
                            <details key={i} className="p-6 group">
                                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                                    {qa.q}
                                    <span className="ml-4 text-slate-400 group-open:rotate-45 transition">＋</span>
                                </summary>
                                <p className="mt-2 text-slate-600">{qa.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="apply" className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
                <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">{t('home:cta.title')}</h2>
                    <p className="text-slate-600 mt-2">{t('home:cta.subtitle')}</p>
                    {/* <form className="mt-8 grid sm:grid-cols-3 gap-3 text-left">
                        <input required placeholder="Full name" className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input required type="email" placeholder="Email" className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <input placeholder="Phone (WhatsApp/Telegram)" className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3" />
                        <select className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3">
                            {programs.map((p, i) => (<option key={i}>{p.name}</option>))}
                        </select>
                        <select className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3">
                            <option>Online</option>
                            <option>On‑campus</option>
                            <option>Hybrid</option>
                        </select>
                        <button className="col-span-1 rounded-xl bg-emerald-600 text-white px-4 py-3 font-semibold hover:bg-emerald-700">{t('home:cta.button')}</button>
                    </form> */}
                    <LeadForm />
                </div>
            </section>
        </div>
    );
}
