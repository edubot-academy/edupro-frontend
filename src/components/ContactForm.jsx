import { useState } from "react";
import Button from "./UI/Button";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
        specialization: "backend",
        format: "online",
    });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);
    const [errors, setErrors] = useState({});

    function onChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
        if (errors[e.target.name]) {
            setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
        }
    }

    function validateForm() {
        const newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required";
        if (!form.email.trim()) newErrors.email = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
        if (!form.specialization) newErrors.specialization = "Please select specialization";
        if (!form.format) newErrors.format = "Please select format";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    async function onSubmit(e) {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        try {
            await fetch("https://formspree.io/f/XXXXX", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            setOk(true);
            setForm({
                name: "",
                email: "",
                message: "",
                specialization: "backend",
                format: "online",
            });
            setErrors({});
        } catch (error) {
            console.error("Form submission error:", error);
            alert("Error sending message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    const contactSections = [
        {
            title: "Мы в социальных сетях",
            items: [
                { icon: <FaInstagram />, bg: "#472799", color: "#fff" },
                { icon: <LiaTelegramPlane />, bg: "#F5F3F3", color: "#472799" },
            ],
        },
        {
            title: "Наши контакты",
            items: [
                {
                    icon: <LuPhoneCall />,
                    bg: "#472799",
                    color: "#fff",
                    content: (
                        <div>
                            <p>+996 550 942 433</p>
                            <p>+996 550 942 433</p>
                        </div>
                    ),
                },
            ],
        },
        {
            title: "Aдрес",
            items: [
                {
                    icon: <HiLocationMarker />,
                    bg: "#472799",
                    color: "#fff",
                    content: <p>Bishkek, Kyrgyzstan</p>,
                },
            ],
        },
        {
            title: "Email",
            items: [
                {
                    icon: <HiOutlineMail />,
                    bg: "#472799",
                    color: "#fff",
                    content: <p>info@edupro.academy</p>,
                },
            ],
        },
    ];

    if (ok) {
        return (
            <main className="min-h-screen bg-white">
                <section className="bg-white border-slate-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                        <h2 className="text-[#32215E] uppercase font-bold text-2xl md:text-3xl lg:text-4xl">
                            CONTACT US
                        </h2>
                    </div>
                </section>
                <section className="py-12">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="rounded-xl bg-emerald-50 p-6 text-emerald-800 text-center">
                            <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                            <p>Thanks for reaching out! We'll reply soon.</p>
                            <Button
                                onClick={() => setOk(false)}
                                className="mt-4 rounded-xl bg-emerald-600 text-white font-semibold px-6 py-2 hover:bg-emerald-700"
                            >
                                Send Another Message
                            </Button>
                        </div>
                    </div>
                </section>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero */}
            <section className="bg-white border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
                    <h2 className="text-[#32215E] uppercase font-bold text-2xl md:text-3xl lg:text-4xl">
                        CONTACT US
                    </h2>
                    <div className="grid place-items-center">
                        <p className="text-slate-600 mt-2 border border-[#C9C9C9] rounded-3xl p-4 w-fit max-w-full
                  overflow-hidden text-ellipsis sm:line-clamp-1 md:line-clamp-2 lg:line-clamp-2">
                            Have questions about our programs or admissions? Reach out anytime.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div>
                        <form onSubmit={onSubmit} className="space-y-4">
                            <div>
                                <input
                                    name="name"
                                    value={form.name}
                                    onChange={onChange}
                                    placeholder="Your name"
                                    className={`w-full rounded-xl border px-4 py-3 bg-[#f8f8f8] text-[#555555] pl-6 ${errors.name ? "border-red-500" : "border-slate-300"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                                )}
                            </div>

                            <div>
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={onChange}
                                    placeholder="Your email"
                                    className={`w-full rounded-xl border px-4 py-3 bg-[#f8f8f8] text-[#555555] pl-6 ${errors.email ? "border-red-500" : "border-slate-300"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div className="relative">
                                <select
                                    name="specialization"
                                    value={form.specialization}
                                    onChange={onChange}
                                    className={`w-full rounded-xl border px-4 py-3 bg-[#f8f8f8] text-[#555555] pl-6 pr-10 appearance-none ${errors.specialization ? "border-red-500" : "border-slate-300"
                                        }`}
                                >
                                    <option value="backend">Backend</option>
                                    <option value="frontend">Frontend</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#555555]">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                                {errors.specialization && (
                                    <p className="text-red-500 text-sm mt-1">
                                        {errors.specialization}
                                    </p>
                                )}
                            </div>

                            <div className="relative">
                                <select
                                    name="format"
                                    value={form.format}
                                    onChange={onChange}
                                    className={`w-full rounded-xl border px-4 py-3 bg-[#f8f8f8] text-[#555555] pl-6 pr-10 appearance-none ${errors.format ? "border-red-500" : "border-slate-300"
                                        }`}
                                >
                                    <option value="online">Online</option>
                                    <option value="offline">Offline</option>
                                </select>
                                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#555555]">
                                    <svg
                                        className="fill-current h-4 w-4"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                    </svg>
                                </div>
                                {errors.format && (
                                    <p className="text-red-500 text-sm mt-1">{errors.format}</p>
                                )}
                            </div>

                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full text-center rounded-xl bg-emerald-600 text-white font-semibold px-4 py-3 hover:bg-emerald-700 flex justify-center items-center disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? "Sending…" : "Send Message"}
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactSections.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <p className="font-semibold text-[#32215E]">{section.title}</p>
                                <div className="flex gap-4 flex-wrap">
                                    {section.items.map((item, i) => (
                                        <div key={i} className="flex items-center gap-4">
                                            <div
                                                className="w-12 h-12 flex items-center justify-center rounded-full shrink-0 transition transform hover:scale-110 hover:shadow-md"
                                                style={{ backgroundColor: item.bg, color: item.color }}
                                            >
                                                {item.icon}
                                            </div>
                                            {item.content && (
                                                <div className="text-[#555] text-sm">{item.content}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>
        </main>
    );
}
