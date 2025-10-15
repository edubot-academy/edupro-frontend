import React from "react";
import { useTranslation } from "react-i18next";
import "../index.css";
import lightIcon from "../assets/light.svg";

export default function Footer() {
  const { t } = useTranslation(["common"]);

  const quickLinksRaw = t("common:footer.quickLinks.links", {
    returnObjects: true,
  });
  const quickLinks = Array.isArray(quickLinksRaw) ? quickLinksRaw : [];

  const programsRaw = t("footer.programs.items", { returnObjects: true });
  const programs = Array.isArray(programsRaw) ? programsRaw : [];
  const qu = t("common:footer.programs", { returnObjects: true });

  return (
    <footer className="relative w-full min-h-[450px] bg-[#32215E] text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden hidden sm:flex">
        <h1
          className="font-[Unbounded] text-[180px] sm:text-[220px] md:text-[260px] lg:text-[300px] font-extrabold leading-[1] w-auto max-w-full select-none tracking-wide"
          style={{
            color: "rgba(90, 60, 150, 50)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskSize: "100% 100%",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 85%)",
            maskRepeat: "no-repeat",
            maskSize: "100% 100%",
            transform: "scaleX(1)",
          }}
        >
          EduPro
        </h1>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 py-10 sm:py-16 md:py-20 flex flex-col md:flex-row justify-between gap-10 sm:gap-14 md:gap-20">
        <div className="max-w-sm text-left flex-1">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-2 font-['Open_Sans']">
            <img
              src={lightIcon}
              alt="Light"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="font-extrabold">EduPro</span>
          </h2>
          <p className="text-xs sm:text-sm leading-relaxed text-gray-200 break-words max-w-[400px]">
            {t("footer.about.text")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-8 sm:gap-12 md:gap-16">
          <div className="min-w-[120px] sm:min-w-[160px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              {qu.title}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              {quickLinks.map((link, i) => (
                <li key={i}>{link}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-[120px] sm:min-w-[160px]">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              {t("footer.programs.title")}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              {programs.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="min-w-[160px] sm:min-w-[180px] mb-20 sm:mb-0">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
              {t("footer.contact.title")}
            </h3>
            <ul className="space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm">
              <li>{t("footer.contact.email")}: info@edupro.academy</li>
              <li>{t("footer.contact.phone")}: +996 (555) 000-111</li>
              <li>{t("footer.contact.telegram")}: @eduproacademy</li>
              <li>{t("footer.contact.address")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 w-full border-t border-[#FFFFFF33]" />

      <div
        className="
        absolute bottom-8 left-0 w-full 
        text-center lg:text-center 
        px-4 
        text-xs sm:text-sm 
        text-gray-400 
        break-words 
        leading-relaxed 
        max-w-[90%] 
        mx-auto
      "
      >
        {t("footer.copyright")}
      </div>
    </footer>
  );
}
