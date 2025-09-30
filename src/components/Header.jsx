import { useState, useEffect } from "react";
import logo from '../assets/logo.svg';
import { Link, NavLink, useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from "./LanguageSwitcher";
import arrow from '../assets/arrowRight.svg';

export default function Header() {
    const { t } = useTranslation();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Закрываем сайдбар, если меняется размер экрана
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && sidebarOpen) {
                setSidebarOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [sidebarOpen]);

    // Запрещаем прокрутку страницы, когда сайдбар открыт
    useEffect(() => {
        if (sidebarOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [sidebarOpen]);

    const labels = {
        programs: t("nav.programs"),
        pricing: t("nav.pricing"),
        about: t("nav.about"),
        contact: t("nav.contact"),
    };

    const navLinks = [
        { to: "/programs", label: labels.programs },
        { to: "/pricing", label: labels.pricing },
        { to: "/about", label: labels.about },
        { to: "/contact", label: labels.contact },
    ];

    return (
        <header className="sticky top-0 z-50 backdrop-blur bg-white/40 border-b border-slate-200">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 relative">

                {/* Логотип слева */}
                <Link to="/" className="flex items-center gap-1 z-50">
                    <img src={logo} alt="EduPro logo" className="h-12 w-12" />
                    <span className="font-extrabold flex items-center">
                        <span className="text-slate-800 text-3xl">Edu</span>
                        <span className="text-purple-600 text-3xl">Pro</span>
                    </span>
                </Link>

                {/* Десктопная навигация */}
                <nav className="hidden md:flex items-center gap-8 text-sm">
                    {navLinks.map(link => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            className={({ isActive }) =>
                                `font-medium transition-colors hover:text-purple-600 ${isActive ? "text-purple-600" : "text-black"}`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                {/* Правый блок (десктоп) */}
                <div className="hidden md:flex items-center gap-3">
                    <LanguageSwitcher />
                    <Link
                        to="/contact"
                        className="flex w-fit items-center justify-center gap-2 px-6 py-2 rounded-full bg-purple-600 text-white font-semibold text-sm hover:text-white"
                    >
                        {labels.contact}
                        <img src={arrow} alt="arrow" className="w-7 h-7" />
                    </Link>
                </div>

                {/* Кнопка-гамбургер */}
                <button
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    className="md:hidden flex flex-col justify-between w-8 h-8 z-50 focus:outline-none"
                >
                    <span className={`block h-1 w-full bg-black rounded transform transition duration-300 ${sidebarOpen ? "rotate-45 translate-y-3" : ""}`}></span>
                    <span className={`block h-1 w-full bg-black rounded transition-opacity duration-300 ${sidebarOpen ? "opacity-0" : "opacity-100"}`}></span>
                    <span className={`block h-1 w-full bg-black rounded transform transition duration-300 ${sidebarOpen ? "-rotate-45 -translate-y-3" : ""}`}></span>
                </button>

                {/* Мобильный сайдбар */}
                <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 z-40 md:hidden ${sidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
                    <nav className="flex flex-col mt-10 gap-6 px-6">
                        {navLinks.map(link => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setSidebarOpen(false)}
                                className={({ isActive }) =>
                                    `font-medium transition-colors hover:text-purple-600 ${isActive ? "text-purple-600" : "text-black"}`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="absolute bottom-6 left-6 right-6">
                        <LanguageSwitcher />
                        <Link
                            to="/contact"
                            onClick={() => setSidebarOpen(false)}
                            className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600 text-white font-semibold text-sm hover:text-white mt-4 justify-center w-full"
                        >
                            {labels.contact}
                            <img src={arrow} alt="arrow" className="w-6 h-6" />
                        </Link>
                    </div>
                </div>

                {/* Фон затемнения для мобильного сайдбара */}
                {sidebarOpen && (
                    <div
                        className="fixed inset-0 bg-black/30 z-30 md:hidden"
                        onClick={() => setSidebarOpen(false)}
                    ></div>
                )}
            </div>
        </header>
    );
}