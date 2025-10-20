import React from "react";
import { useTranslation } from "react-i18next";
import PopularPrograms from "../components/PopularPrograms";
import HeroBanner from "../components/HeroBanner";
import HomePricing from "../components/Pricing";
import LeadForm from "../components/LeadForm";
import Test from "../components/Test";
import Founders from "../components/Founders";
import HowItWork from "../components/HowItWork";
import QuestionsAboutEduPro from "../components/QuestionsAboutEduPro";
import AboutEdupro from "../components/Aboutedupro";
import Metrics from "../components/Metrics";
import Mentors from "../components/Mentors";

// EduPro Academy Landing Page — single-file React component
// - TailwindCSS utility classes
// - Lightweight, no external UI deps
// - Sections: Navbar, Hero, Metrics, Programs, HowItWorks, Features, Outcomes, Testimonials, Pricing, FAQ, CTA, Footer
// - Language toggle mock (EN/KG/RU) with minimal copy variants

export default function Home() {
  const { t } = useTranslation(["common", "home"]);
  const programsObj = t("home:programs.items", { returnObjects: true });
  const programs = Array.isArray(programsObj)
    ? programsObj
    : Object.values(programsObj); return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <HeroBanner />
        <Metrics />
        <PopularPrograms />
        <HowItWork />
        <AboutEdupro />
        <Founders />
        <Test />
        <HomePricing />
        <Test />
        <Mentors />

        {/* CTA */}
        <section
          id="apply"
          className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold">{t("home:cta.title")}</h2>
            <p className="text-slate-600 mt-2">{t("home:cta.subtitle")}</p>
            <form className="mt-8 grid sm:grid-cols-3 gap-3 text-left">
              <input
                required
                placeholder="Full name"
                className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3"
              />
              <input
                required
                type="email"
                placeholder="Email"
                className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3"
              />
              <input
                placeholder="Phone (WhatsApp/Telegram)"
                className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3"
              />
              <select className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3">
                {programs.map((p, i) => (
                  <option key={i}>{p.name}</option>
                ))}
              </select>
              <select className="col-span-1 rounded-xl border border-slate-300 bg-white px-4 py-3">
                <option>Online</option>
                <option>On‑campus</option>
                <option>Hybrid</option>
              </select>
              <button className="col-span-1 rounded-xl bg-emerald-600 text-white px-4 py-3 font-semibold hover:bg-emerald-700">
                {t("home:cta.button")}
              </button>
            </form>
            <LeadForm />
          </div>
        </section>
        <QuestionsAboutEduPro />
      </div>
    );
}
