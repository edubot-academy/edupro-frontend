import { useTranslation } from "react-i18next";
import Pricing from "../components/Pricing";
import QuestionsAboutEduPro from "../components/QuestionsAboutEduPro";
import Test from "../components/Test";
export default function PricingPage() {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Pricing />
      <QuestionsAboutEduPro />
      <Test />  
    </div>
  );
}