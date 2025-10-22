import React from "react";
import { useTranslation } from "react-i18next";
import checkMarks from "../assets/svg/checkMarks.svg";
import arrowRight from "../assets/svg/arrowRight.svg";
import world from "../assets/icons/world.svg";
import computer from "../assets/icons/computer.svg";

export default function AiPreparation() {
  const { t } = useTranslation("aboutPage");

  const verticalBlocks = t("aiFutureSection.verticalBlocks", {
    returnObjects: true,
  });
  const buttons = t("aiFutureSection.buttons", { returnObjects: true });
  const missionBlock = t("aiFutureSection.missionBlock", {
    returnObjects: true,
  });

  return (
    <section className="w-full flex flex-col items-center py-12 bg-white px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center gap-4 mb-12 w-full mx-auto text-center">
        <h2
          className="text-[#32215E] font-bold leading-tight text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] text-center break-words"
          style={{ fontFamily: "Unbounded, sans-serif" }}
        >
          {t("aiFutureSection.title")}
        </h2>

        <button
          className="w-[250px] sm:w-[388px] h-[40px] sm:h-[70px] md:h-[77px] text-[#555555] border border-[#C9C9C9] bg-white rounded-[100px] text-[14px] sm:text-[15px] md:text-[16px] font-medium flex items-center justify-center text-center
    whitespace-normal sm:whitespace-nowrap break-words"
        >
          {t("aiFutureSection.button")}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-[1240px] w-full mx-auto mt-[-50px]">
        <div className="flex flex-col justify-between gap-6 w-full lg:max-w-[40rem]">
          <div className="flex flex-col gap-6">
            <div className="relative w-[600px] h-[670px] mx-auto mt-14">
              <div className="w-[300px] h-[370px] p-4 pb-6 rounded-2xl border border-gray-300 bg-white shadow-sm ml-6">
                <img src={world} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2">
                  {missionBlock.missionTitle}
                </h3>
                <p className="text-sm">{missionBlock.missionText}</p>
              </div>

              <div className="hidden sm:block w-[250px] sm:w-[250px] p-4 rounded-2xl border border-gray-300 bg-white shadow-sm absolute right-12 bottom-[230px]">
                <img src={computer} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2">
                  {missionBlock.whatWeDo.title}
                </h3>
                <p className="text-sm">{missionBlock.whatWeDo.text}</p>
              </div>

              <div className="block sm:hidden w-[300px] h-[230px] p-4 rounded-2xl border border-gray-300 bg-white shadow-sm mt-4 ml-6">
                <img src={computer} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2">
                  {missionBlock.whatWeDo.title}
                </h3>
                <p className="text-sm">{missionBlock.whatWeDo.text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[600px] mt-10  mb-10 sm:mb-0">
          {verticalBlocks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-0"
            >
              <img
                src={checkMarks}
                alt="icon"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
              />
              <div className="flex flex-col">
                <h4 className="text-[#32215E] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                  {item.title}
                </h4>
                <p className="text-black text-[16px] sm:text-[18px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <button className="w-full sm:w-[388px] h-[60px] sm:h-[70px] md:h-[77px] bg-gradient-to-r from-[#7640FF] to-[#472799] text-white rounded-[100px] text-[16px] sm:text-[18px] md:text-[20px] font-semibold flex items-center justify-center gap-2">
              {buttons[0]}
              <img
                src={arrowRight}
                alt="Arrow Right"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </button>

            <button className="w-full sm:w-[247px] h-[60px] sm:h-[70px] md:h-[77px] border border-black text-[#2C2C2C] rounded-[100px] text-[16px] sm:text-[18px] md:text-[20px] flex items-center justify-center gap-2">
              {buttons[1]}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
