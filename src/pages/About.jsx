import { Link } from "react-router-dom";
import AiPreparation from "../components/AiPreparation";
import HowItWork from "../components/HowItWork";
import Mentors from "../components/Mentors";
import Partners from '../components/Partners'
import Test from "../components/Test";
export default function About() {
  return (
    <main className="min-h-screen bg-slate-50">
      <AiPreparation />
      <HowItWork />
      <Mentors />
      <Partners/>
      <Test />
    </main>
  );
}
