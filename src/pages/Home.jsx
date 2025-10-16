import React from "react";
import { useTranslation } from "react-i18next";
import PopularPrograms from "../components/PopularPrograms";
import HeroBanner from "../components/HeroBanner";
import HomePricing from "../components/Pricing";
import LeadForm from "../components/LeadForm";
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

  const metricsObj = t("home:metrics", { returnObjects: true });
  const metrics = Array.isArray(metricsObj)
    ? metricsObj
    : Object.values(metricsObj);

  const plansObj = t("home:pricing.plans", { returnObjects: true });
  const plans = Array.isArray(plansObj) ? plansObj : Object.values(plansObj);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      <Metrics />
      <PopularPrograms />
      <AboutEdupro />
      <HowItWork />
      <Founders />
      <Test />
      <HomePricing />
      <section
        id="apply"
        className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <LeadForm />
        </div>
      </section>
    </div>
  );
}
