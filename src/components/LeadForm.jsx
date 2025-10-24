import React, { useEffect, useState } from "react";
import { submitLead } from "../lib/api";
import { getUTMs, readPersistedUTMs } from "../lib/utm";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import Button from "./UI/Button";
export default function LeadForm({
    programOptions = [],
    title = "Contact Us",
    subtitle = "Have questions about our programs or admissions? Reach out anytime.",
    className = "uppercase"
}) {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        company: "",
        courseName: programOptions[0]?.slug || "frontend",
        courseType: "online",
        notes: "",
    });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);
    const [err, setErr] = useState("");

    const defaultProgramOptions = [
        { slug: "frontend", title: "Frontend Engineering" },
        { slug: "backend_django", title: "Backend (Django)" },
        { slug: "flutter", title: "Mobile (Flutter)" },
        { slug: "ux_ui", title: "UX/UI Design" },
    ];

    const contactSections = [
        {
            title: "Мы в социальных сетях",
            items: [
                {
                    icon: <FaInstagram />,
                    bg: "#472799",
                    color: "#fff",
                    href: "#",
                    content: "@edupro.academy",
                },

            ],
        },
        {
            title: "Наши контакты",
            items: [
                {
                    icon: <LuPhoneCall />,
                    bg: "#472799",
                    color: "#fff",
                    content: "+996 550 942 433",
                },
            ],
        },
        {
            title: "Адрес",
            items: [
                {
                    icon: <HiLocationMarker />,
                    bg: "#472799",
                    color: "#fff",
                    content: "Bishkek, Kyrgyzstan",
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
                    content: "info@edupro.academy",
                },
            ],
        },
    ];

    const inputFields = [
        {
            name: "fullName",
            type: "text",
            placeholder: "Full name",
            autoComplete: "name",
            required: true,
            col: "left"
        },
        {
            name: "phone",
            type: "tel",
            placeholder: "Phone (WhatsApp/Telegram)",
            autoComplete: "tel",
            required: false,
            col: "left"
        },
        {
            name: "email",
            type: "email",
            placeholder: "Email",
            autoComplete: "email",
            required: true,
            col: "left"
        },
        {
            name: "company",
            type: "text",
            placeholder: "Company (optional)",
            autoComplete: "organization",
            required: false,
            col: "right"
        }
    ];

    const selectFields = [
        {
            name: "courseName",
            options: programOptions.length ? programOptions : defaultProgramOptions,
            col: "right"
        },
        {
            name: "courseType",
            options: [
                { value: "online", label: "Online" },
                { value: "offline", label: "Offline" }
            ],
            col: "right"
        }
    ];

    useEffect(() => {
        getUTMs();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErr("");

        try {
            const utm = readPersistedUTMs();
            const payload = { ...form, source: "WEBSITE", ...utm };
            await submitLead(payload);
            setOk(true);
            setForm(prevForm => ({
                ...prevForm,
                fullName: "",
                email: "",
                phone: "",
                company: "",
                notes: ""
            }));
        } catch (error) {
            setErr("Could not submit. Please try again.");
            console.error("Submission error:", error);
        } finally {
            setLoading(false);
        }
    };

    const renderInputField = (field) => (
        <input
            key={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={handleChange}
            autoComplete={field.autoComplete}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-[#f8f8f8] text-[#555555] focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
    );

    const renderSelectField = (field) => (
        <div key={field.name} className="relative">
            <select
                name={field.name}
                value={form[field.name]}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-[#f8f8f8] text-[#555555] pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
                {field.options.map(option => (
                    <option
                        key={option.value || option.slug}
                        value={option.value || option.slug}
                    >
                        {option.label || option.title}
                    </option>
                ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#555555]">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
            </div>
        </div>
    );

    const renderContactItem = (item, index) => (
        <div key={index} className="flex items-center gap-4">
            <div
                className="w-12 h-12 flex items-center justify-center rounded-full shrink-0 transition-transform hover:scale-110 hover:shadow-md cursor-pointer"
                style={{ backgroundColor: item.bg, color: item.color }}
            >
                {item.icon}
            </div>
            {item.content && (
                <div className="text-[#555] text-sm whitespace-pre-line">
                    {item.content}
                </div>
            )}
        </div>
    );

    if (ok) {
        return (
            <div className="rounded-xl bg-emerald-50 p-6 text-emerald-800 text-center">
                Thanks! Our team will contact you within 24 hours.
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 pb-16">
            <div className="text-center mb-8 lg:mb-12">
                <h2 className={`text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6 ${className}`}>
                    {title}
                </h2>
                <div className="border border-gray text-[#555555] text-center p-2 sm:p-3 font-normal text-sm sm:text-base rounded-full mx-auto inline-block px-4">
                    {subtitle}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                {/* Левая сторона - форма */}
                <div>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            {/* Левая колонка инпутов */}
                            <div className="space-y-4">
                                {inputFields
                                    .filter(field => field.col === "left")
                                    .map(renderInputField)
                                }
                            </div>

                            {/* Правая колонка инпутов */}
                            <div className="space-y-4">
                                {inputFields
                                    .filter(field => field.col === "right")
                                    .map(renderInputField)
                                }
                                {selectFields.map(renderSelectField)}
                            </div>
                        </div>

                        {/* Кнопка */}
                        <div className="pt-2 flex justify-center">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full lg:w-1/2 px-8 justify-center rounded-xl bg-emerald-600 text-white font-semibold py-3 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? "Submitting…" : "Apply"}
                            </Button>
                        </div>

                        {err && (
                            <div className="text-center text-sm text-red-600">
                                {err}
                            </div>
                        )}
                    </form>
                </div>

                {/* Правая сторона - контактная информация */}
                <div className="flex flex-col justify-center mb-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {contactSections.map((section, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <p className="font-semibold text-left text-[#32215E] text-lg">
                                    {section.title}
                                </p>
                                <div className="flex gap-4 flex-wrap">
                                    {section.items.map(renderContactItem)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}