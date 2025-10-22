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
import Mentors from "../components/Mentors";

// EduPro Academy Landing Page — single-file React component
// - TailwindCSS utility classes
// - Lightweight, no external UI deps
// - Sections: Navbar, Hero, Metrics, Programs, HowItWorks, Features, Outcomes, Testimonials, Pricing, FAQ, CTA, Footer
// - Language toggle mock (EN/KG/RU) with minimal copy variants

export default function Home() {
  const { t } = useTranslation(["common", "home"]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
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
          <LeadForm />
        </div>
      </section>
      <QuestionsAboutEduPro />
    </div>
  );
}
