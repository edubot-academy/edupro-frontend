// src/components/Navbar.jsx
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";


/**
 * Props:
 * - t?: { nav: { programs, pricing, about, contact }, hero: { ctaPrimary } }
 * - lang: "EN" | "KG" | "RU"
 * - setLang: (v: string) => void
 */
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const { pathname } = useLocation();
    const { t } = useTranslation();

    // Safe labels if t is not provided yet
    const labels = {
        programs: t("nav.programs"),
        pricing: t("nav.pricing"),
        about: t("nav.about"),
        contact: t("nav.contact"),
        apply: t("hero.ctaPrimary"),
    };

    const navLinks = [
        { to: "/programs", label: labels.programs },
        { to: "/pricing", label: labels.pricing },
        { to: "/about", label: labels.about },
        { to: "/contact", label: labels.contact },
    ];

    // If user is already on "/", let Apply jump to the #apply section; otherwise go to /apply
    const applyTo = pathname === "/" ? "/#apply" : "/apply";

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
                {/* Brand */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-emerald-500 to-blue-600" />
                    <span className="font-semibold text-slate-900">EduPro Academy</span>
                </Link>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-8 text-sm">
                    {navLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `font-medium hover:text-emerald-600 ${isActive ? "text-emerald-600" : "text-slate-700"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Right controls */}
                <div className="hidden md:flex items-center gap-3">
                    {/* Language selector */}
                    <LanguageSwitcher />

                    {/* Apply button */}
                    <Link
                        to={applyTo}
                        className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-emerald-700"
                    >
                        {labels.apply}
                    </Link>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-slate-700 hover:text-emerald-600 focus:outline-none"
                    aria-label="Toggle menu"
                >
                    {open ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
                </button>
            </nav>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden bg-white/95 border-t border-slate-200 backdrop-blur">
                    <div className="px-4 py-3 space-y-3">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `block font-medium hover:text-emerald-600 ${isActive ? "text-emerald-600" : "text-slate-700"
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}

                        {/* Language selector */}
                        <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                            <LanguageSwitcher />
                        </div>

                        {/* Apply button */}
                        <Link
                            to={applyTo}
                            onClick={() => setOpen(false)}
                            className="block text-center px-4 py-2 rounded-xl bg-emerald-600 text-white font-semibold hover:bg-emerald-700"
                        >
                            {labels.apply}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
