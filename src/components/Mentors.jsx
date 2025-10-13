import React from 'react'
import { useTranslation } from "react-i18next";
import { RiLinkedinFill } from "react-icons/ri";
import mentor1 from '../assets/image/mentor1.png'

function Mentors() {
    const { t } = useTranslation(["home"]);
    const mentor = t("home:mentors.mentor", { returnObjects: true });

    return (
        <div className="flex flex-col items-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center w-full">
                <h2 className="text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6">
                    {t("home:mentors.title")}
                </h2>

                <div className="border border-gray text-[#555555] text-center p-2 sm:p-3 w-full max-w-xs sm:w-72 font-normal text-sm sm:text-base rounded-full">
                    {t("home:mentors.button")}
                </div>

                {/* Контейнер: скролл только на мобильных */}
                <div className="
          flex sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-6 sm:gap-8 justify-center items-center
          overflow-x-auto sm:overflow-visible no-scrollbar
          mt-8 w-full
        ">
                    {mentor.map((x, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center flex-shrink-0 sm:flex-shrink bg-white/5 rounded-2xl p-4"
                        >
                            <img
                                className="w-[200px] sm:w-[240px] md:w-[280px] lg:w-[300px] xl:w-[320px] 
                           h-[280px] sm:h-[340px] md:h-[380px] lg:h-[400px] 
                           object-contain rounded-2xl"
                                src={mentor1}
                                alt={x.name}
                            />
                            <div className="flex items-center justify-between w-full bg-[#2C2C2C] rounded-3xl px-4 py-2 mt-4">
                                <div>
                                    <span className="text-white text-base sm:text-lg font-normal    ">{x.name}</span>
                                    <p className="text-white text-sm sm:text-base -mt-1 opacity-80">{x.role}</p>
                                </div>
                                <RiLinkedinFill className="text-white text-3xl sm:text-4xl cursor-pointer hover:scale-110 transition-transform duration-300" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Mentors
