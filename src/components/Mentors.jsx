import React from "react";
import { useTranslation } from "react-i18next";
import { RiLinkedinFill } from "react-icons/ri";
import mentor1 from "../assets/image/mentor1.png";

function Mentors() {
  const { t } = useTranslation(["common"]);
  const mentor = t("common:mentors_section.mentors", { returnObjects: true });

    return (
        <div className="flex flex-col items-center gap-6 lg:gap-12 px- sm:px-6 lg:px-8 my-16">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6">
                    {t("common:mentors_section.title")}
                </h2>

        <div className="border border-gray-300 text-[#555555] text-center p-2 sm:p-3 w-full max-w-xs sm:w-72 font-normal text-sm sm:text-base rounded-full dark:border-gray-400">
          {t("common:mentors_section.button")}
        </div>

        <div
          className="
          flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-6 lg:gap-8 items-center overflow-x-auto sm:overflow-visible no-scrollbar mt-6 w-full"
        >
          {mentor.map((x, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 sm:flex-shrink bg-white dark:bg-[#fafafa] rounded-2xl p-4 shadow-md"
            >
              <img
                className="w-[200px] sm:w-[240px] md:w-[260px] lg:w-[280px] xl:w-[300px]
                           h-[240px] sm:h-[300px] md:h-[320px] lg:h-[340px]
                           object-contain rounded-2xl"
                src={mentor1}
                alt={x.name}
              />
              <div className="flex items-center justify-between w-full bg-[#2C2C2C] dark:bg-[#5a5a5a] rounded-3xl px-3 sm:px-4 py-1.5 sm:py-2 mt-3">
                <div className="leading-tight">
                  <span className="text-white text-sm sm:text-base font-medium">
                    {x.name}
                  </span>
                  <p className="text-white text-xs sm:text-sm opacity-80">
                    {x.role}
                  </p>
                </div>
                <RiLinkedinFill className="text-white text-2xl sm:text-3xl cursor-pointer hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mentors;
