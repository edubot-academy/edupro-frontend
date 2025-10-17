import React from "react";
import { useTranslation } from "react-i18next";
import check from "../assets/icons/check.svg";
import world from "../assets/icons/world.svg";
import computer from "../assets/icons/computer.svg";
import person from "../assets/icons/person.svg";
import file from "../assets/icons/file.svg";

function AboutEdupro() {
  const { t } = useTranslation("home");

  const features = t("aboutEdupro.features", { returnObjects: true }) || [];
  const extraFeatures =
    t("aboutEdupro.extraFeatures", { returnObjects: true }) || [];

  const icons = { world, computer, person, file };

  return (
    <div className="bg-gray-100  flex justify-center mb-[15rem]">
      <div className="bg-white p-[2.5rem] sm:p-[3.75rem] rounded-2xl mt-[0.1rem] w-[120.75rem] h-[30rem] max-w-full">
        <div className="text-center mb-[2.5rem] sm:mb-[3rem]">
          <h2
            className="text-[2rem] sm:text-[3rem] font-bold mb-[1rem] sm:mb-[1.25rem]"
            style={{ color: "#32215E" }}
          >
            {t("aboutEdupro.title")}
          </h2>

          <button className="bg-white border border-gray-300 rounded-full px-[1rem] sm:px-[1.5rem] py-[0.5rem] hover:bg-gray-50 text-[0.875rem] sm:text-[1rem]">
            {t("aboutEdupro.button")}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[1.5rem] md:gap-[2.5rem]">
          {/* Левая часть */}
          <div className="space-y-[1rem] sm:space-y-[1.5rem]">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-[0.5rem] p-[0.75rem] sm:p-[1rem] rounded-lg"
              >
                <img
                  src={check}
                  alt="Check"
                  className="w-[2.5rem] h-[2.5rem] sm:w-[2.75rem] sm:h-[2.75rem]"
                />
                <div className="flex-1 ml-[0.75rem] sm:ml-[1rem]">
                  <h3
                    className="font-semibold text-[1rem] sm:text-[1.125rem]"
                    style={{ color: "#32215E" }}
                  >
                    {feature.title}
                  </h3>
                  {feature.text && (
                    <p
                      className="text-[0.875rem] sm:text-[1rem]"
                      style={{ color: "#32215E" }}
                    >
                      {feature.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Правая часть */}
          <div className="space-y-[1.5rem] sm:space-y-[3rem] mt-[1rem] sm:mt-[0.5rem]">
            {extraFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-[0.75rem] sm:gap-[1rem] border-white shadow-lg p-[0.75rem] sm:p-[0.75rem] rounded-lg"
              >
                <img
                  src={icons[feature.icon] || check}
                  alt={feature.title}
                  className="w-[2.5rem] h-[2.5rem] sm:w-[3rem] sm:h-[3rem]"
                />
                <h3
                  className="text-[0.75rem] sm:text-[0.875rem]"
                  style={{ color: "#32215E" }}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEdupro;
