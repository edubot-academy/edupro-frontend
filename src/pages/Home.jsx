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

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <HeroBanner />
      <PopularPrograms />
      <HowItWork />
      <AboutEdupro />
      <Founders />
      <HomePricing />
      <Test />
      <QuestionsAboutEduPro />
      <Mentors />

      {/* CTA */}
      <section
        id="apply"
        className="py-16"
      >
        <div className="text-center">
          <LeadForm
            title={
              <>
                остались вопросы?<br />
                проконсультируем бесплатно!
              </>
            }
            subtitle="3 мүнөттө арыз бер. Командабыз 24 саат ичинде байланышка чыгат."
            className="uppercase"
          />
        </div>
      </section>
    </div>
  );
}
