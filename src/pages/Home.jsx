import React from "react";
import { useTranslation } from 'react-i18next';
import PopularPrograms from "../components/PopularPrograms";
import HeroBanner from "../components/HeroBanner";
import HomePricing from "../components/Pricing";
import LeadForm from "../components/LeadForm";
import HowItWork from "../components/HowItWork";

// EduPro Academy Landing Page — single-file React component
// - TailwindCSS utility classes
// - Lightweight, no external UI deps
// - Sections: Navbar, Hero, Metrics, Programs, HowItWorks, Features, Outcomes, Testimonials, Pricing, FAQ, CTA, Footer
// - Language toggle mock (EN/KG/RU) with minimal copy variants

export default function Home() {
  const { t } = useTranslation(["common", "home"]);
  const title = t("home:hero.title");
  const subtitle = t("home:hero.subtitle");
  const ctaPrimary = t("home:hero.ctaPrimary");
  const ctaSecondary = t("home:hero.ctaSecondary");
  const eyebrow = t("home:hero.eyebrow");
  const metricsObj = t("home:metrics", { returnObjects: true });
  const metrics = Array.isArray(metricsObj)
    ? metricsObj
    : Object.values(metricsObj);

  const programsObj = t("home:programs.items", { returnObjects: true });
  const programs = Array.isArray(programsObj)
    ? programsObj
    : Object.values(programsObj);



  const featuresObj = t("common:features.items", { returnObjects: true });
  const features = Array.isArray(featuresObj)
    ? featuresObj
    : Object.values(featuresObj);

  const outcomesObj = t("home:outcomes.bullets", { returnObjects: true });
  const outcomes = Array.isArray(outcomesObj)
    ? outcomesObj
    : Object.values(outcomesObj);

  const testimonialsObj = t("home:testimonials.items", { returnObjects: true });
  const testimonials = Array.isArray(testimonialsObj)
    ? testimonialsObj
    : Object.values(testimonialsObj);

  const plansObj = t("home:pricing.plans", { returnObjects: true });
  const plans = Array.isArray(plansObj) ? plansObj : Object.values(plansObj);

  const faqItemsObj = t("home:faq.items", { returnObjects: true });
  const faqItems = Array.isArray(faqItemsObj)
    ? faqItemsObj
    : Object.values(faqItemsObj);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      {/* Metrics */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((m, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 text-center shadow-sm"
              >
                <div className="text-3xl font-bold">{m.value}</div>
                <div className="text-slate-500 mt-1 text-sm">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <PopularPrograms />
      <HowItWork />
      {/* Features & Outcomes */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("home:features.title")}
            </h2>
            <ul className="space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex gap-4">
                  <div className="mt-1 h-6 w-6 rounded-lg bg-emerald-100 flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <div className="font-semibold">{f.t}</div>
                    <div className="text-sm text-slate-600">{f.d}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">
              {t("home:outcomes.title")}
            </h2>
            <ul className="grid sm:grid-cols-2 gap-4">
              {outcomes.map((b, i) => (
                <li
                  key={i}
                  className="rounded-2xl bg-white ring-1 ring-slate-200 p-4 text-sm"
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-100/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8">
            {t("home:testimonials.title")}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((it, i) => (
              <figure
                key={i}
                className="rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm"
              >
                <blockquote className="text-slate-700 leading-relaxed">
                  “{it.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm text-slate-500">
                  — {it.name}, {it.role}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <HomePricing />

      {/* FAQ */}
      <section className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t("home:faq.title")}
          </h2>
          <div className="divide-y divide-slate-200 rounded-2xl bg-white ring-1 ring-slate-200">
            {faqItems.map((qa, i) => (
              <details key={i} className="p-6 group">
                <summary className="cursor-pointer font-semibold flex items-center justify-between">
                  {qa.q}
                  <span className="ml-4 text-slate-400 group-open:rotate-45 transition">
                    ＋
                  </span>
                </summary>
                <p className="mt-2 text-slate-600">{qa.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="apply"
        className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">{t("home:cta.title")}</h2>
          <p className="text-slate-600 mt-2">{t("home:cta.subtitle")}</p>
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
