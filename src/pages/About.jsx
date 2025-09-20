import { Link } from "react-router-dom";

export default function About() {
    const values = [
        { title: "Student-First", text: "We design every lesson, project, and review around real learning outcomes." },
        { title: "Practice > Theory", text: "Short lessons, real projects, feedback loops, and portfolio-first delivery." },
        { title: "Career Focused", text: "Resume, LinkedIn, mock interviews, referrals, and soft-skill coaching." },
        { title: "Community", text: "Mentors, alumni, and hiring partners who support you beyond graduation." },
    ];

    const mentors = [
        { name: "Bekten Orunbaev", role: "Founder • Frontend", bio: "React, Vite, Tailwind, product mentoring.", img: "" },
        { name: "Backend Mentor", role: "Django/Python", bio: "APIs, Postgres, Docker, CI/CD.", img: "" },
        { name: "Mobile Mentor", role: "Flutter", bio: "Dart, state mgmt, publishing apps.", img: "" },
        { name: "UX/UI Mentor", role: "Design", bio: "Figma, research, design systems.", img: "" },
    ];

    const partners = ["Okurmen", "Local IT Companies", "Startup Hubs", "Freelance Studios"];

    const timeline = [
        { date: "2024", title: "Idea → Pilot", text: "Validated curriculum with first cohort." },
        { date: "2025 Q1", title: "EduPro Academy brand", text: "Launched public programs in KG/RU/EN." },
        { date: "2025 Q2", title: "CRM MVP", text: "Lead pipeline, admissions workflow." },
        { date: "2025 Q4", title: "LMS MVP", text: "Student portal, progress, quizzes, HLS video." },
    ];

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <p className="text-emerald-700 font-medium">About EduPro Academy</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mt-2">
                        Preparing students for an AI-driven future.
                    </h1>
                    <p className="text-slate-600 text-lg mt-4 max-w-3xl">
                        We blend practical projects, mentorship, and AI-assisted learning to help beginners become job-ready.
                        Our programs are bilingual (KG/RU) with English support and a strong focus on real outcomes.
                    </p>
                    <div className="mt-6 flex gap-3">
                        <Link to="/programs" className="px-5 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                            Explore Programs
                        </Link>
                        <Link to="/apply" className="px-5 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-white">
                            Apply Now
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mission & What we do */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                        <h2 className="text-2xl font-bold">Our Mission</h2>
                        <p className="text-slate-600 mt-3 leading-relaxed">
                            Make high-quality tech education accessible in Kyrgyzstan and beyond, and connect graduates to real roles.
                        </p>
                        <ul className="mt-4 space-y-2 text-slate-700">
                            <li>• Hands-on projects reviewed by mentors</li>
                            <li>• Portfolio by Week 8</li>
                            <li>• Internship & job search support</li>
                        </ul>
                    </div>
                    <div className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                        <h2 className="text-2xl font-bold">What We Do</h2>
                        <p className="text-slate-600 mt-3 leading-relaxed">
                            We run cohort-based programs in Frontend, Backend (Django), Flutter, and UX/UI. Students learn by building,
                            get weekly feedback, and graduate with career assets.
                        </p>
                        <div className="mt-4 grid sm:grid-cols-2 gap-3">
                            <div className="rounded-xl bg-emerald-50 p-4">Mentor feedback & code reviews</div>
                            <div className="rounded-xl bg-blue-50 p-4">Career coaching & mock interviews</div>
                            <div className="rounded-xl bg-orange-50 p-4">Community & alumni support</div>
                            <div className="rounded-xl bg-violet-50 p-4">AI-assisted learning tools</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Our Values</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => (
                            <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                                <div className="h-10 w-10 rounded-lg bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">
                                    {i + 1}
                                </div>
                                <h3 className="font-semibold mt-3">{v.title}</h3>
                                <p className="text-sm text-slate-600 mt-2">{v.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Mentors */}
            <section className="py-16 bg-slate-100/60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Mentors</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {mentors.map((m, i) => (
                            <div key={i} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                                <div className="h-16 w-16 rounded-full bg-gradient-to-br from-emerald-500 to-blue-600" />
                                <h3 className="mt-3 font-semibold">{m.name}</h3>
                                <p className="text-sm text-emerald-700">{m.role}</p>
                                <p className="text-sm text-slate-600 mt-2">{m.bio}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Partners */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-6">Partners</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {partners.map((p, i) => (
                            <div key={i} className="rounded-xl bg-white ring-1 ring-slate-200 p-4 text-center">
                                <div className="h-8 w-full rounded bg-slate-100 mb-2" />
                                <div className="text-slate-700 font-medium">{p}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold mb-8">Our Journey</h2>
                    <ol className="relative border-slate-200">
                        {timeline.map((t, i) => (
                            <li key={i} className="pl-6 mb-8">
                                <div className="flex items-start gap-3">
                                    <div className="mt-2 h-3 w-3 rounded-full bg-emerald-600" />
                                    <div>
                                        <div className="text-sm text-slate-500">{t.date}</div>
                                        <div className="font-semibold">{t.title}</div>
                                        <div className="text-slate-600">{t.text}</div>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-br from-emerald-50 to-blue-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold">Ready to learn with us?</h2>
                    <p className="text-slate-600 mt-2">Apply in 3 minutes. We’ll follow up within 24 hours.</p>
                    <div className="mt-6 flex justify-center gap-3">
                        <Link to="/apply" className="px-6 py-3 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700">
                            Apply Now
                        </Link>
                        <Link to="/programs" className="px-6 py-3 rounded-xl border border-slate-300 font-semibold hover:bg-white">
                            See Programs
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
