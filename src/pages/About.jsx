import { useTranslation } from "react-i18next";
import HowItWork from "../components/HowItWork";
import Mentors from "../components/Mentors";
import Test from "../components/Test";
export default function About() {
    const { t } = useTranslation();

    return (
        <main className="min-h-screen bg-slate-50">
            <HowItWork />
            <Mentors />
            <Test />
        </main>
    );
}
