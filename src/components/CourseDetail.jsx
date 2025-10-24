import React from "react";
import Button from "./UI/Button";
import priceIcon from "../assets/svg/detail-price.svg";
import startIcon from "../assets/svg/detail-start.svg";

const CourseDetail = ({ open, onClose }) => {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            {/* Тёмный фон */}
            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            ></div>

            {/* Белое окно */}
            <div className="relative bg-white w-[50%] p-8 rounded-2xl shadow-2xl z-10 text-black animate-fadeIn">
                <h2 className="font-bold text-[30px] leading-[120%] tracking-[0.01em] text-center uppercase mb-4 ">КУРС FRONTEND</h2>

                <p className="mb-2 font-normal text-[20px] leading-[120%] tracking-[0.01em]">
                    <strong className="font-bold text-[20px] leading-[120%] tracking-[0.01em]">Формат:</strong> онлайн / офлайн (по выбору)
                </p>

                <p className="font-bold text-[20px] leading-[120%] tracking-[0.01em] mt-4 mb-2">Чему вы научитесь:</p>
                <ul className="font-normal text-[20px] leading-[120%] tracking-[0.01em]">
                    <li>Верстка сайтов с помощью HTML5, CSS3</li>
                    <li>Работа с JavaScript и современными фреймворками</li>
                    <li>Создание интерфейсов на React, Tailwind</li>
                    <li>Подключение и работа с API</li>
                    <li>Git и GitHub — командная разработка</li>
                    <li>Redux, TypeScript — продвинутый фронтенд</li>
                    <li>Подготовка к реальным собеседованиям</li>
                </ul>

                <p className="font-bold text-[20px] leading-[120%] tracking-[0.01em] mt-4 mb-2">После курса вы сможете:</p>
                <ul className="font-normal text-[20px] leading-[120%] tracking-[0.01em]">
                    <li>Создавать современные веб-приложения с нуля</li>
                    <li>Работать в команде разработчиков</li>
                    <li>Пройти собеседование на позицию Junior Frontend Developer</li>
                    <li>Начать зарабатывать как фрилансер или в IT-компании</li>
                </ul>

                <div className="mt-5 flex flex-col gap-2 font-bold text-[20px] leading-[120%] tracking-[0.01em]">
                    <p className="flex items-center gap-2"><img src={priceIcon} alt="" /> Стоимость курса: 40 000 сом</p>
                    <p className="flex items-center gap-2"><img src={startIcon} alt="" /> Старт обучения: 12.12.2025</p>
                </div>

                <Button
                    onClick={onClose}
                    className="mt-6 w-[35%] text-white rounded-full font-semibold hover:opacity-90 transition flex justify-center"
                >
                    Купить курс
                </Button>
            </div>
        </div>
    );
};

export default CourseDetail;
