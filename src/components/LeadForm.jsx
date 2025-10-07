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

    useEffect(() => { getUTMs(); }, []);

    function onChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true); setErr("");
        try {
            const utm = readPersistedUTMs();
            const payload = { ...form, source: "WEBSITE" };
            await submitLead(payload);
            setOk(true);
            setForm((f) => ({ ...f, fullName: "", email: "", phone: "", notes: "" }));
        } catch (e) {
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

    return (
        <form onSubmit={onSubmit} className="grid sm:grid-cols-3 gap-3">
            <input
                name="fullName" required placeholder="Full name" value={form.fullName} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-1"
            />
            <input
                name="email" type="email" placeholder="Email" value={form.email} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-1"
            />
            <input
                name="phone" placeholder="Phone (WhatsApp/Telegram)" value={form.phone} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-1"
            />

            <select
                name="courseName" value={form.courseName} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-1"
            >
                {(programOptions.length ? programOptions : [
                    { slug: "frontend", title: "Frontend Engineering" },
                    { slug: "backend_django", title: "Backend (Django)" },
                    { slug: "flutter", title: "Mobile (Flutter)" },
                    { slug: "ux_ui", title: "UX/UI Design" },
                ]).map((p) => (
                    <option key={p.slug} value={p.slug}>{p.title}</option>
                ))}
            </select>

            <select
                name="courseType" value={form.courseType} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-1"
            >
                <option value="online">Online</option>
                <option value="campus">On-campus</option>
                <option value="hybrid">Hybrid</option>
            </select>

            <button
                disabled={loading}
                className="rounded-xl bg-emerald-600 text-white px-4 py-3 font-semibold hover:bg-emerald-700 col-span-1"
            >
                {loading ? "Submitting…" : "Apply"}
            </button>

            <textarea
                name="notes" placeholder="Anything we should know?" value={form.notes} onChange={onChange}
                className="rounded-xl border border-slate-300 px-4 py-3 col-span-3 min-h-[90px]"
            />

            {err && <div className="col-span-3 text-sm text-red-600">{err}</div>}
        </form>
    );
}
