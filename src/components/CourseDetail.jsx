import React from "react";
import Button from "./UI/Button";
import priceIcon from "../assets/svg/detail-price.svg";
import startIcon from "../assets/svg/detail-start.svg";
import { useTranslation } from "react-i18next";

const CourseDetail = ({ open, onClose }) => {
    if (!open) return null;
    const { t } = useTranslation(['home']);
    const all = t('home:courseDetail', { returnObjects: true }) || [];
    const title = t('home:courseDetail.title', { returnObjects: true }) || [];

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Тёмный фон */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Белое окно */}
            <div className="relative bg-white w-[70%] md:w-[60%] xl:w-[50%] p-8 rounded-2xl shadow-2xl z-10 text-black animate-fadeIn">
                <h2 className="font-bold text-[15px] md:text-[20px] xl:text-[30px] leading-[120%] tracking-[0.01em] text-center uppercase mb-2 md:mb-4 ">{title}</h2>

                <p className="mb-1 md:mb-2 font-normal text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em]">
                    <strong className="font-bold text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em]">{all.formatName}:</strong> {all.format}
                </p>

                <p className="font-bold text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em] mt-2 md:mt-4 mb-1 md:mb-2">{all.willLearnName}:</p>
                <ul className="font-normal text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em]">
                    {all.willLearns.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>

                <p className="font-bold text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em] mt-2 md:mt-4 mb-1 md:mb-2">{all.canDoAfterName}:</p>
                <ul className="font-normal text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em]">
                    {all.canDoAfter.map((p, i) => (
                        <li key={i}>{p}</li>
                    ))}
                </ul>

                <div className="mt-5 flex flex-col gap-2 font-bold text-[10px] md:text-[15px] xl:text-[20px] leading-[120%] tracking-[0.01em]">
                    <p className="flex items-center gap-1 md:gap-2"><img src={priceIcon} alt="" className="w-[15px] md:w-[30px] xl:w-[40px]" /> {all.price}: 40 000 {all.som}</p>
                    <p className="flex items-center gap-1 md:gap-2"><img src={startIcon} alt="" className="w-[15px] md:w-[30px] xl:w-[40px]" /> {all.start}: 12.12.2025</p>
                </div>

                <Button
                    onClick={onClose}
                    className="mt-3 md:mt-6  text-white rounded-full font-semibold hover:opacity-90 transition flex justify-center text-[8px] md:text-[10px] xl:text-[15px]"
                >
                    {all.button}
                </Button>
            </div>
        </div>
    );
};

export default CourseDetail;
