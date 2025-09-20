import { useParams } from "react-router-dom";
import LeadForm from "../components/LeadForm";

const PROGRAMS = {
    frontend: { title: "Frontend Engineering", duration: "16 weeks", price: 149, bullets: ["React", "Tailwind", "APIs", "Deployment", "Interview prep"] },
    backend_django: { title: "Backend with Django", duration: "24 weeks", price: 199, bullets: ["Python", "Django REST", "PostgreSQL", "Docker", "CI/CD"] },
    flutter: { title: "Mobile with Flutter", duration: "20 weeks", price: 179, bullets: ["Dart", "State mgmt", "Publishing"] },
    ux_ui: { title: "UX/UI Design", duration: "12 weeks", price: 129, bullets: ["Figma", "Research", "Design systems"] },
};

export default function ProgramDetail() {
    const { slug } = useParams();
    const p = PROGRAMS[slug] || PROGRAMS.frontend;
    return (
        <main className="max-w-5xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold">{p.title}</h1>
            <p className="text-slate-600 mt-2">{p.duration} • from ${p.price}/mo</p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                {p.bullets.map((b, i) => <li key={i} className="p-4 rounded-xl ring-1 ring-slate-200 bg-white">• {b}</li>)}
            </ul>
            <section className="mt-10">
                <h2 className="text-2xl font-semibold mb-3">Apply for {p.title}</h2>
                <LeadForm programOptions={[{ slug, title: p.title }]} />
            </section>
        </main>
    );
}
