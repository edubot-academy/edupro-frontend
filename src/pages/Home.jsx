import React from "react";
import { useTranslation } from "react-i18next";
import PopularPrograms from "../components/PopularPrograms";
import HeroBanner from "../components/HeroBanner";
import HomePricing from "../components/Pricing";
import LeadForm from "../components/LeadForm";
import Mentors from "../components/Mentors";
import Test from "../components/Test";
import Founders from "../components/Founders";
import HowItWork from "../components/HowItWork";
import Metrics from "../components/Metrics";
import AboutEdupro from "../components/AboutEdupro";

// EduPro Academy Landing Page — single-file React component
// - TailwindCSS utility classes
// - Lightweight, no external UI deps
// - Sections: Navbar, Hero, Metrics, Programs, HowItWorks, Features, Outcomes, Testimonials, Pricing, FAQ, CTA, Footer
// - Language toggle mock (EN/KG/RU) with minimal copy variants

export default function Home() {
  const { t } = useTranslation(["common", "home"]);

  const testimonialsObj = t("home:testimonials.items", { returnObjects: true });
  const testimonials = Array.isArray(testimonialsObj)
    ? testimonialsObj
    : Object.values(testimonialsObj);

  const faqItemsObj = t("home:faq.items", { returnObjects: true });
  const faqItems = Array.isArray(faqItemsObj)
    ? faqItemsObj
    : Object.values(faqItemsObj);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      <Metrics />
      <PopularPrograms />
      <HowItWork />
      <AboutEdupro />
      <Founders />
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

      <HomePricing />
      <Test />
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
      <Mentors />

      {/* CTA */}
      <section
        id="apply"
        className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">{t("home:cta.title")}</h2>
          <p className="text-slate-600 mt-2">{t("home:cta.subtitle")}</p>
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
         
          
        </div>
         <LeadForm />
       
      </section>
    </div>
  );
}
