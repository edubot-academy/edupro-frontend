import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import logo from "../assets/logo.svg";
import Button from "./UI/Button";
export default function Header() {
  const { t } = useTranslation();

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

    <header className="hidden md:block sticky top-0 z-50 backdrop-blur bg-white/40 border-b border-slate-200">

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Логотип */}
        <Link to="/" className="flex items-center gap-1">
          <img src={logo} alt="EduPro logo" className="h-12 w-12" />
          <span className="font-unbounded text-3xl font-extrabold flex items-center">
            <span className="text-slate-800">Edu</span>
            <span className="text-purple-600">Pro</span>
          </span>
        </Link>



        {/* Навигация */}
        <nav className="flex items-center gap-8 text-sm">
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-medium hover:text-purple-600 ${isActive ? "text-purple-600" : "text-black"}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* Контролы */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Button to="/contact">
            {labels.contact}
          </Button>


        </div>
      </div>
    </header>
  );
}
