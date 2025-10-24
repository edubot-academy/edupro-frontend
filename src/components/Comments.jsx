import React from "react";
import cursorBack from "../assets/cursor-backend.svg"
import cursorfront from "../assets/cursor-frontend.svg"
import cursorFlutter from "../assets/cursor-flutter.svg"
import cursorUxui from "../assets/cursor-ux-ui.svg"
import comment from "../assets/comment-back.png"
import avatar1 from "../assets/comment-avatar1.jpg"
import avatar2 from "../assets/comment-avatar2.jpg"
import avatar3 from "../assets/comment-avatar3.jpg"
import avatar4 from "../assets/comment-avatar4.jpg"
import { useTranslation } from "react-i18next";


const Comments = () => {
  const { t } = useTranslation(["home"]);
  const title = t("home:studentFeedback.title");
  const button = t("home:studentFeedback.button");
  // const blocks = t("home:studentFeedback.blocks");
  const studentFeedbackObj = t("home:studentFeedback.blocks", { returnObjects: true });
  const blocks = Array.isArray(studentFeedbackObj)
    ? studentFeedbackObj
    : Object.values(studentFeedbackObj);
  console.log(blocks)
  const cards = [
    {
      text: `"${blocks[0].text}"`,
      name: "— Эркин К., Junior Python Dev",
      tag: "UX-UI",
      position: "top-0",
      avatar: avatar1,
    },
    {
      text: `"${blocks[1].text}"`,
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "Frontend",
      position: "top-0 left-[560px]",
      avatar: avatar2,
    },
    {
      text: `"${blocks[2].text}"`,
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "UX-UI",
      position: "left-[200px] top-[220px]",
      avatar: avatar3,
    },
    {
      text: `"${blocks[3].text}"`,
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "Flutter",
      position: "left-[780px] top-[220px]",
      avatar: avatar4,
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Заголовок */}
      <div className="text-center mb-16">
        <h2 className="text-[#32215E] text-3xl md:text-5xl font-bold uppercase mb-3">
          {title}
        </h2>
        <div className="px- py-2.5 w-[250px] border border-gray-300 rounded-full text-gray-600 text-base font-medium m-auto">
          {button}
        </div>
      </div>

      {/* Карточки в абсолютных позициях */}
      <div className="relative w-full max-w-7xl mx-auto h-[650px] md:h-[500px] hidden lg:block">
        {cards.map((c, i) => (
          <div className={`flex items-end absolute ${c.position}`}>
            <img
              src={c.avatar}
              alt={c.name}
              className="w-12 rounded-full object-cover z-20"
            />

            <div
              key={i}
              className={` relative w-[300px] md:w-[380px] pt-[20px] pl-[20px] pr-[50px] pb-[30px] ml-4 z-10 mb-6`}
            >
              <img
                src={comment}
                alt=""
                className="absolute top-0 left-0 z-0 w-[380px]"
              />
              <div className="relative z-10">
                <p className="text-[#2C2C2C] font-[Suisse_Intl] font-normal text-[20px] leading-[120%] tracking-[1%] mb-3">
                  {c.text}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">{c.name}</span>
                </div>
              </div>
            </div>
          </div>

        ))}

        <div className="absolute top-20 left-[1050px]">
          <img src={cursorfront} alt="" />
          <div className="ml-4 mt-[-5px] bg-[#DD2590] w-[102px] h-[40px] rounded-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Frontend
          </div>
        </div>
        <div className="absolute top-60 left-10">
          <img src={cursorUxui} alt="" />
          <div className="ml-6 mt-[-1px] border-2 border-[#DD2590] bg-[#DD2590] w-[62px] h-[28px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            UX-UI
          </div>
        </div>
        <div className="absolute top-60 left-[670px]">
          <img src={cursorFlutter} alt="" />
          <div className="ml-4 mt-[-5px] shadow-[4px_4px_10px_0px_#12B76A29] border-2 border-[#039855] bg-[#12B76A] w-[87px] h-[40px] rounded-tl-[2px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Flutter
          </div>
        </div>
        <div className="absolute top-[450px] left-[600px]">
          <img src={cursorBack} alt="" />
          <div className="ml-5 mt-[-6px] bg-[#1570EF] w-[99px] h-[40px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Backend
          </div>
        </div>
      </div>

      <div className="lg:hidden relative w-full ">
        <div className="overflow-x-auto scrollbar-hide grid gap-6 pb-6 ">
          <div className="flex">
            {cards.map((c, i) => (
              <div className={`flex items-end`}>
                <img
                  src={c.avatar}
                  alt={c.name}
                  className="w-[51px] h-[51px] rounded-full object-cover z-20"
                />
                <div
                  key={i}
                  className={` relative w-[300px] md:w-[380px] pt-[20px] pl-[20px] pr-[50px] pb-[30px] ml-4 z-10 mb-6`}
                >
                  <img
                    src={comment}
                    alt=""
                    className="absolute top-0 left-0 z-0 w-[318.0238342285156px] h-[145px]"
                  />
                  <div className="relative z-10 w-[250px] h-[77px]">
                    <p className="text-[#2C2C2C] font-[Suisse_Intl] font-normal text-[15.7px] leading-[120%] tracking-[1%] mb-3">
                      {c.text}
                    </p>

                    <div className="flex items-center gap-3">
                      <span className="text-gray-600 text-[11.22px]">{c.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex w-full justify-between px-[5%]">
            <div className="">
              <img src={cursorfront} alt="" />
              <div className="ml-4 mt-[-5px] bg-[#DD2590] w-[102px] h-[40px] rounded-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
                Frontend
              </div>
            </div>
            <div className="">
              <img src={cursorUxui} alt="" />
              <div className="ml-6 mt-[-1px] border-2 border-[#DD2590] bg-[#DD2590] w-[62px] h-[28px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
                UX-UI
              </div>
            </div>
            <div className="">
              <img src={cursorFlutter} alt="" />
              <div className="ml-4 mt-[-5px] shadow-[4px_4px_10px_0px_#12B76A29] border-2 border-[#039855] bg-[#12B76A] w-[87px] h-[40px] rounded-tl-[2px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
                Flutter
              </div>
            </div>
            <div className="">
              <img src={cursorBack} alt="" />
              <div className="ml-5 mt-[-6px] bg-[#1570EF] w-[99px] h-[40px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
                Backend
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
