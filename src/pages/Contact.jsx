import { useState } from "react";

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);

    function onChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        try {
            // For MVP, send via Formspree
            await fetch("https://formspree.io/f/XXXXX", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setOk(true);
            setForm({ name: "", email: "", message: "" });
        } catch {
            alert("Error sending message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="min-h-screen bg-slate-50">
            {/* Hero */}
            <section className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h1 className="text-4xl font-bold">Contact Us</h1>
                    <p className="text-slate-600 mt-2">
                        Have questions about our programs or admissions? Reach out anytime.
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Get in touch</h2>
                        <ul className="space-y-3 text-slate-700">
                            <li>
                                📍 Bishkek, Kyrgyzstan
                            </li>
                            <li>
                                📧{" "}
                                <a href="mailto:info@edupro.academy" className="text-emerald-700 hover:underline">
                                    info@edupro.academy
                                </a>
                            </li>
                            <li>
                                📱{" "}
                                <a href="tel:+996555000111" className="text-emerald-700 hover:underline">
                                    +996 (555) 000-111
                                </a>
                            </li>
                            <li>
                                💬{" "}
                                <a href="https://t.me/eduproacademy" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                                    Telegram @eduproacademy
                                </a>
                            </li>
                        </ul>

                        <div className="mt-6 rounded-2xl overflow-hidden ring-1 ring-slate-200">
                            {/* Map embed (Google Maps or Yandex Maps) */}
                            <iframe
                                title="EduPro Academy location"
                                src="https://www.google.com/maps/embed?pb=!1m18!..." // replace with your location
                                width="100%" height="250" style={{ border: 0 }}
                                allowFullScreen="" loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Send us a message</h2>
                        {ok ? (
                            <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
                                Thanks for reaching out! We’ll reply soon.
                            </div>
                        ) : (
                            <form onSubmit={onSubmit} className="space-y-4">
                                <input
                                    name="name" value={form.name} onChange={onChange}
                                    required placeholder="Your name"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                                />
                                <input
                                    name="email" type="email" value={form.email} onChange={onChange}
                                    required placeholder="Your email"
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                                />
                                <textarea
                                    name="message" value={form.message} onChange={onChange}
                                    required placeholder="Your message"
                                    rows={5}
                                    className="w-full rounded-xl border border-slate-300 px-4 py-3"
                                />
                                <button
                                    disabled={loading}
                                    className="w-full rounded-xl bg-emerald-600 text-white font-semibold px-4 py-3 hover:bg-emerald-700"
                                >
                                    {loading ? "Sending…" : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
