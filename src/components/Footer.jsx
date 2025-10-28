import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/svg/logo.svg";

export default function Footer() {
  const { t } = useTranslation(["common", "footer"]);
  const location = useLocation();

  const quickLinks =
    t("footer.quickLinks.links", { returnObjects: true }) || [];
  const quickLinksTitle = t("footer.quickLinks.title");

  const programs = t("footer.programs.items", { returnObjects: true }) || [];
  const programsTitle = t("footer.programs.title");

  const contact = t("footer.contact", { returnObjects: true }) || {};

  const isHome = location.pathname === "/";

  const pathMap = {
    home: "/",
    about: "/about",
    programs: "/programs",
    contact: "/contact",
  };

  return (
    <footer className="relative w-full bg-[#32215E] text-white overflow-hidden">
      <div className="absolute inset-0 justify-center items-center pointer-events-none overflow-hidden hidden sm:flex">
        <h1
          className="font-[Unbounded] text-[180px] sm:text-[220px] md:text-[260px] lg:text-[300px] font-extrabold leading-[1] w-auto max-w-full select-none tracking-wide"
          style={{
            color: "rgba(90, 60, 150, 0.5)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
          }}
        >
          EduPro
        </h1>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 py-10 sm:py-16 md:py-20 pb-[25px] flex flex-col md:flex-row justify-between gap-6 sm:gap-10 md:gap-16">
        <div className="flex flex-col justify-start">
          <Link
            to="/"
            className="flex items-center gap-2 mb-4 text-xl sm:text-2xl font-bold font-['Open_Sans']"
          >
            <img src={logo} alt="EduPro Logo" className="w-10 h-10" />
            <span className="font-extrabold text-white">EduPro</span>
          </Link>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-200 max-w-[220px] break-words">
            {t("footer.about.text")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-6 sm:gap-10 md:gap-16">
          <div className="min-w-[120px] sm:min-w-[160px]">
            <h3 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">
              {quickLinksTitle}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  {link.id === "home" && isHome ? null : (
                    <Link
                      to={pathMap[link.id]}
                      className="text-white hover:underline break-words"
                    >
                      {link.text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[120px] sm:min-w-[160px]">
            <h3 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">
              {programsTitle}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {programs.map((program, i) => (
                <li key={i} className="text-white break-words">
                  {program}
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[160px] sm:min-w-[180px]">
            <h3 className="font-semibold mb-2 sm:mb-4 text-sm sm:text-base">
              {contact.title}
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm break-words">
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="mr-1">{contact.email}:</span>
                <a
                  href="mailto:info@edupro.academy"
                  className="hover:underline break-words"
                >
                  info@edupro.academy
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="mr-1">{contact.phone}:</span>
                <a
                  href="https://wa.me/996555497977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-words"
                >
                  +996 (555) 497-977
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center">
                <span className="mr-1">{contact.telegram}:</span>
                <a
                  href="https://instagram.com/edupro_academy_kg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-words"
                >
                  @edupro_academy_kg
                </a>
              </li>
              <li className="flex flex-col sm:flex-row sm:items-center text-white">
                <span className="mr-1">{contact.addressPrefix}:</span>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    contact.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline break-words"
                >
                  {contact.address}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-[#FFFFFF33] w-full" />
      <div className="text-left sm:text-center px-6 py-6 text-xs sm:text-sm text-gray-400 leading-relaxed break-all whitespace-pre-line text-balance">
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
