import React, { useEffect, useState } from "react";
import { submitLead } from "../lib/api";
import { getUTMs, readPersistedUTMs } from "../lib/utm";

export default function LeadForm({ programOptions = [] }) {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        courseName: programOptions[0]?.slug || "frontend",
        courseType: "online",
        notes: "",
    });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        getUTMs();
    }, []);

    function onChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErr("");
        try {
            const utm = readPersistedUTMs(); // include if present
            const payload = { ...form, source: "WEBSITE", ...utm };
            await submitLead(payload);
            setOk(true);
            setForm((f) => ({ ...f, fullName: "", email: "", phone: "", notes: "" }));
        } catch {
            setErr("Could not submit. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (ok) {
        return (
            <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
                Thanks! Our team will contact you within 24 hours.
            </div>
        );
    }

    const options = programOptions.length
        ? programOptions
        : [
            { slug: "frontend", title: "Frontend Engineering" },
            { slug: "backend_django", title: "Backend (Django)" },
            { slug: "flutter", title: "Mobile (Flutter)" },
            { slug: "ux_ui", title: "UX/UI Design" },
        ];

    const fieldBase =
        "rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

    return (
        <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
            aria-busy={loading}
        >
            <input
                name="fullName"
                required
                placeholder="Full name"
                value={form.fullName}
                onChange={onChange}
                autoComplete="name"
                className={`${fieldBase} col-span-1`}
            />

            <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                className={`${fieldBase} col-span-1`}
            />

            <input
                name="phone"
                type="tel"
                placeholder="Phone (WhatsApp/Telegram)"
                value={form.phone}
                onChange={onChange}
                autoComplete="tel"
                className={`${fieldBase} col-span-1`}
            />

            <select
                name="courseName"
                value={form.courseName}
                onChange={onChange}
                className={`${fieldBase} col-span-1`}
            >
                {options.map((p) => (
                    <option key={p.slug} value={p.slug}>
                        {p.title}
                    </option>
                ))}
            </select>

            <select
                name="courseType"
                value={form.courseType}
                onChange={onChange}
                className={`${fieldBase} col-span-1`}
            >
                <option value="online">Online</option>
                <option value="campus">On-campus</option>
                <option value="hybrid">Hybrid</option>
            </select>

            <button
                disabled={loading}
                className="col-span-1 sm:col-span-2 lg:col-span-1 rounded-xl bg-emerald-600 text-white px-4 py-3 font-semibold hover:bg-emerald-700 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                {loading ? "Submitting…" : "Apply"}
            </button>

            <textarea
                name="notes"
                placeholder="Anything we should know?"
                value={form.notes}
                onChange={onChange}
                className={`${fieldBase} col-span-1 sm:col-span-2 lg:col-span-3 min-h-[110px]`}
            />

            {err && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-sm text-red-600">
                    {err}
                </div>
            )}
        </form>
    );
}
