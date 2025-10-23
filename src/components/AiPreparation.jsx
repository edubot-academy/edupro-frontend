import React from "react";
import { useTranslation } from "react-i18next";
import Button from "../components/UI/Button";
import checkMarks from "../assets/svg/checkMarks.svg";
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
    <section
      className="w-full flex flex-col items-center py-12 px-4 sm:px-6 lg:px-12 mb-0 lg:mb-[-220px]"
      style={{
        backgroundColor: "#ffffff",
        color: "#1a1a1a",
      }}
    >
      <div className="flex flex-col items-center gap-4 mb-12 w-full mx-auto text-center">
        <h2
          className="font-bold leading-tight text-[22px] sm:text-[26px] md:text-[36px] lg:text-[48px] text-center break-words mx-auto w-[250px] sm:w-[400px] md:w-[550px] lg:w-[700px]"
          style={{
            fontFamily: "Unbounded, sans-serif",
            color: "#32215E",
          }}
        >
          {t("aiFutureSection.title")}
        </h2>

        <div
          className="w-[250px] sm:w-[388px] h-[40px] sm:h-[70px] md:h-[77px] border border-[#C9C9C9] rounded-[100px] text-[14px] sm:text-[15px] md:text-[16px] font-medium flex items-center justify-center text-center whitespace-normal sm:whitespace-nowrap break-words"
          style={{
            backgroundColor: "#ffffff",
            color: "#555555",
          }}
        >
          {t("aiFutureSection.button")}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-[1240px] w-full mx-auto mt-[-50px]">
        <div className="flex flex-col justify-between gap-6 w-full lg:max-w-[40rem]">
          <div className="flex flex-col gap-6">
            <div className="relative w-[600px] h-[670px] mx-auto mt-14">
              <div
                className="w-[300px] h-[370px] p-4 pb-6 rounded-2xl border border-gray-300 shadow-sm ml-6"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img src={world} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2 text-[#32215E]">
                  {missionBlock.missionTitle}
                </h3>
                <p className="text-sm text-[#2C2C2C]">
                  {missionBlock.missionText}
                </p>
              </div>

              <div
                className="hidden sm:block w-[250px] sm:w-[250px]  p-4 rounded-2xl border border-gray-300 shadow-sm absolute right-12 bottom-[230px] "
                style={{ backgroundColor: "#ffffff" }}
              >
                <img src={computer} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2 text-[#32215E]">
                  {missionBlock.whatWeDo.title}
                </h3>
                <p className="text-sm text-[#2C2C2C]">
                  {missionBlock.whatWeDo.text}
                </p>
              </div>

              <div
                className="block sm:hidden w-[300px] h-[230px] p-4 rounded-2xl border border-gray-300 shadow-sm mt-4 ml-6"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img src={computer} alt="" className="mb-2 w-12 h-12" />
                <h3 className="font-bold text-lg mb-2 text-[#32215E]">
                  {missionBlock.whatWeDo.title}
                </h3>
                <p className="text-sm text-[#2C2C2C]">
                  {missionBlock.whatWeDo.text}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[600px] mt-10 mb-10 sm:mb-0">
          {verticalBlocks.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start sm:items-center gap-3 sm:gap-4 mb-10 sm:mb-0 -mt-12 sm:mt-0"
            >
              <img
                src={checkMarks}
                alt="icon"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
              />
              <div className="flex flex-col">
                <h4 className="font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-[#32215E]">
                  {item.title}
                </h4>
                <p className="text-[16px] sm:text-[18px] text-[#2C2C2C]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <Button
              type="button"
              className="w-full sm:w-[300px] h-[50px] sm:h-[60px] md:h-[65px] font-semibold"
            >
              {buttons[0]}
            </Button>
            <Button
              type="button"
              className="w-full sm:w-[200px] h-[50px] sm:h-[60px] md:h-[65px] border border-gray"
              style={{ backgroundColor: "#ffffff", color: "#fffC" }}
            >
              {buttons[1]}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
