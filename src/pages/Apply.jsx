import LeadForm from "../components/LeadForm";
import { Link } from "react-router-dom";

const PROGRAMS = [
    { slug: "frontend", title: "Frontend Engineering", duration: "16 weeks", price: 149 },
    { slug: "backend_django", title: "Backend (Django)", duration: "24 weeks", price: 199 },
    { slug: "flutter", title: "Mobile (Flutter)", duration: "20 weeks", price: 179 },
    { slug: "ux_ui", title: "UX/UI Design", duration: "12 weeks", price: 129 },
];

export default function Apply() {
    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <p className="text-emerald-700 font-medium">Apply to EduPro Academy</p>
                    <h1 className="text-4xl font-bold tracking-tight mt-1">
                        Start your application — it takes ~3 minutes.
                    </h1>
                    <p className="text-slate-600 mt-3 max-w-3xl">
                        Fill out the form and our admissions team will contact you within 24 hours via
                        WhatsApp/Telegram or email. No fees to apply.
                    </p>
                </div>
            </section>

            {/* Form + Sidebar */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[2fr_1fr] gap-10">
                    {/* Application form */}
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                        <h2 className="text-2xl font-semibold mb-4">Your Details</h2>
                        <LeadForm programOptions={PROGRAMS} />

                        {/* Privacy note */}
                        <p className="text-xs text-slate-500 mt-4">
                            By submitting, you agree to be contacted about your application. We never sell your data.
                        </p>
                    </div>

                    {/* Sidebar: Program info */}
                    <aside className="space-y-6">
                        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                            <h3 className="font-semibold mb-2">Programs</h3>
                            <ul className="space-y-2 text-sm">
                                {PROGRAMS.map((p) => (
                                    <li key={p.slug} className="flex items-center justify-between">
                                        <Link to={`/programs/${p.slug}`} className="text-slate-700 hover:text-emerald-700">
                                            {p.title}
                                        </Link>
                                        <span className="text-slate-500">{p.duration}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                            <h3 className="font-semibold mb-2">Need help?</h3>
                            <ul className="text-sm text-slate-700 space-y-1">
                                <li>
                                    WhatsApp/Telegram:{" "}
                                    <a className="text-emerald-700 hover:underline" href="https://t.me/eduproacademy" target="_blank" rel="noreferrer">
                                        @eduproacademy
                                    </a>
                                </li>
                                <li>
                                    Email:{" "}
                                    <a className="text-emerald-700 hover:underline" href="mailto:admissions@edupro.academy">
                                        admissions@edupro.academy
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-2xl bg-emerald-50 p-6 ring-1 ring-emerald-100">
                            <h3 className="font-semibold text-emerald-800">What happens next?</h3>
                            <ol className="mt-2 list-decimal list-inside text-sm text-emerald-900 space-y-1">
                                <li>We review your application the same day.</li>
                                <li>Admissions call (10–15 min) to match you to a program.</li>
                                <li>Seat reservation & onboarding checklist.</li>
                            </ol>
                        </div>
                    </aside>
                </div>
            </section>
        </main>
    );
}
