import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.svg";
import { CiMenuBurger } from "react-icons/ci";
import { HiXMark } from "react-icons/hi2";

export default function MobileNavbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

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
    <header className="md:hidden sticky top-0 z-50 bg-white border-b border-slate-200">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Языковой переключатель слева */}
        <LanguageSwitcher />

        {/* Логотип по центру */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="EduPro logo" className="h-8 w-8" />
          <span className="font-extrabold flex items-center">
            <span className="text-slate-800 text-2xl">Edu</span>
            <span className="text-purple-600 text-2xl">Pro</span>
          </span>
        </Link>

        {/* Гамбургер справа */}
        <button onClick={() => setOpen(true)} className="focus:outline-none bg-white">
          <CiMenuBurger className="h-7 w-7 text-black" />
        </button>
      </div>

      {/* Оверлей и сайдбар */}
      {open && (
        <>
          {/* Тёмный фон */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setOpen(false)}
          ></div>

          {/* Сайдбар */}
          <div className="fixed top-0 right-0 h-screen w-64 bg-white shadow-lg z-50 flex flex-col">
            {/* Крестик в левом верхнем углу */}
            <div className="flex justify-start p-4">
              <button
                onClick={() => setOpen(false)}
                className="text-black hover:text-purple-600 focus:outline-none bg-white"
              >
                <HiXMark className="h-7 w-7" />
              </button>
            </div>

            {/* Навигация (включая Contact) */}
            <nav className="flex flex-col mt-4 gap-6 px-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `font-medium hover:text-purple-600 ${isActive ? "text-purple-600" : "text-black"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}
