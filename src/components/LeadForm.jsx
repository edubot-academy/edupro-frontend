// Компонент LeadForm
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaInstagram } from "react-icons/fa";
import { LiaTelegramPlane } from "react-icons/lia";
import { LuPhoneCall } from "react-icons/lu";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineMail } from "react-icons/hi";
import { submitLead } from "../lib/api";
import Button from "./UI/Button";

export default function LeadForm({
    programOptions = [],
    className = "uppercase"
}) {
    const { t } = useTranslation(["contactPage"]);

    // Функция для безопасного получения переводов
    const getTranslation = (key) => {
        return t(key, { defaultValue: key });
    };

    const [form, setForm] = useState({
        fullName: "", // ИЗМЕНЕНО: name → fullName
        email: "",
        phone: "",
        courseName: programOptions[0]?.slug || "it",
        courseType: "online",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);

    function onChange(e) {
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
    }

    async function onSubmit(e) {
        e.preventDefault();

        // ДОБАВЛЕНО: базовая валидация
        if (!form.email && !form.phone) {
            alert("Please provide email or phone");
            return;
        }

        setLoading(true);
        try {
            // ИСПРАВЛЕНО: убрано преобразование полей, так как теперь используем fullName
            const payload = { ...form, source: "WEBSITE" };
            await submitLead(payload);
            setOk(true);
            setForm({
                fullName: "", // ИЗМЕНЕНО: name → fullName
                email: "",
                phone: "",
                courseName: programOptions[0]?.slug || "it",
                courseType: "online",
                message: ""
            });
        } catch (error) {
            alert(error.message || "Error sending message. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    const defaultProgramOptions = [
        { slug: "it", title: getTranslation("contactUs.programs.it") },
        { slug: "english", title: getTranslation("contactUs.programs.english") },
    ];

    const contactSections = [
        {
            title: getTranslation("contactUs.infoBlock.blocks.0.title"),
            items: [
                {
                    icon: <FaInstagram />,
                    bg: "#472799",
                    color: "#fff",
                    href: "https://www.instagram.com/edupro_academy_kg/",
                    content: getTranslation("contactUs.contacts.instagram"),
                },
                {
                    icon: <LiaTelegramPlane />,
                    bg: "#472799",
                    color: "#fff",
                    href: "https://t.me/+iSKtm7ETpJU4Yzgx",
                    content: getTranslation("contactUs.contacts.telegram"),
                }
            ],
        },
        {
            title: getTranslation("contactUs.infoBlock.blocks.1.title"),
            items: [
                {
                    icon: <LuPhoneCall />,
                    bg: "#472799",
                    color: "#fff",
                    href: "https://wa.me/996501503452",
                    content: getTranslation("contactUs.contacts.phone"),
                },
            ],
        },
        {
            title: getTranslation("contactUs.infoBlock.blocks.2.title"),
            items: [
                {
                    icon: <HiLocationMarker />,
                    bg: "#472799",
                    color: "#fff",
                    href: "https://go.2gis.com/stJ8u",
                    content: getTranslation("contactUs.contacts.address"),
                },
            ],
        },
        {
            title: getTranslation("contactUs.infoBlock.blocks.3.title"),
            items: [
                {
                    icon: <HiOutlineMail />,
                    bg: "#472799",
                    color: "#fff",
                    href: "mailto:learningedubot@gmail.com",
                    content: getTranslation("contactUs.contacts.email"),
                },
            ],
        },
    ];

    const inputFields = [
        {
            name: "fullName", // ИЗМЕНЕНО: name → fullName
            type: "text",
            placeholder: getTranslation("contactUs.formFields.fullName"),
            autoComplete: "name",
            required: true,
            col: "left"
        },
        {
            name: "phone",
            type: "tel",
            placeholder: getTranslation("contactUs.formFields.phone"),
            autoComplete: "tel",
            required: false,
            col: "left"
        },
        {
            name: "email",
            type: "email",
            placeholder: getTranslation("contactUs.formFields.email"),
            autoComplete: "email",
            required: false,
            col: "left"
        },
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
                { value: "online", label: getTranslation("contactUs.formFields.online") },
                { value: "offline", label: getTranslation("contactUs.formFields.offline") }
            ],
            col: "right"
        }
    ];

    const renderInputField = (field) => (
        <input
            key={field.name}
            name={field.name}
            type={field.type}
            required={field.required}
            placeholder={field.placeholder}
            value={form[field.name]}
            onChange={onChange}
            autoComplete={field.autoComplete}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-[#f8f8f8] text-[#555555] focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
    );

    const renderSelectField = (field) => (
        <div key={field.name} className="relative">
            <select
                name={field.name}
                value={form[field.name]}
                onChange={onChange}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 bg-[#f8f8f8] text-[#555555] pr-10 appearance-none focus:outline-none focus:ring-2 focus:ring-violet-500"
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
                onClick={() => {
                    if (item.href) {
                        window.open(item.href, '_blank', 'noopener,noreferrer');
                    }
                }}
            >
                {item.icon}
            </div>
            {item.content && (
                <div
                    className="text-[#555] text-sm whitespace-pre-line cursor-pointer hover:underline transition-all"
                    onClick={() => {
                        if (item.href) {
                            window.open(item.href, '_blank', 'noopener,noreferrer');
                        }
                    }}
                >
                    {item.content}
                </div>
            )}
        </div>
    );

    if (ok) {
        return (
            <div className="rounded-xl bg-violet-50 p-6 text-violet-800 text-center">
                {getTranslation("contactUs.successMessage")}
            </div>
        );
    }

    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 pt-10 pb-16">
            <div className="text-center mb-8 lg:mb-12">
                <h2 className={`text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6 ${className}`}>
                    {getTranslation("contactUs.title")}
                </h2>
                <div className="border border-gray text-[#555555] text-center p-2 sm:p-3 font-normal text-sm sm:text-base rounded-full mx-auto inline-block px-4">
                    {getTranslation("contactUs.subtitle")}
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                <div>
                    <form onSubmit={onSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <div className="space-y-4">
                                {inputFields
                                    .filter(field => field.col === "left")
                                    .map(renderInputField)
                                }
                            </div>

                            <div className="space-y-4">
                                {inputFields
                                    .filter(field => field.col === "right")
                                    .map(renderInputField)
                                }
                                {selectFields.map(renderSelectField)}
                                <textarea
                                    name="message"
                                    placeholder={getTranslation("contactUs.formFields.message")}
                                    value={form.message}
                                    onChange={onChange}
                                    style={{ height: '48px' }}
                                    className={`w-full rounded-xl border border-slate-300 px-4 py-3 bg-[#f8f8f8] text-[#555555] focus:outline-none focus:ring-2 focus:ring-violet-500`}
                                />
                            </div>
                        </div>

                        <div className="pt-2 flex justify-center">
                            <Button
                                type="submit"
                                disabled={loading}
                                className="w-full lg:w-1/2 px-8 justify-center rounded-full bg-violet-600 text-white font-semibold py-3 hover:bg-violet-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {loading ? getTranslation("contactUs.buttons.sending") : getTranslation("contactUs.buttons.submit")}
                            </Button>
                        </div>
                    </form>
                </div>

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