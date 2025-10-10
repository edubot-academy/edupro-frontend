import React from "react";
import "../index.css";
import lightIcon from "../assets/light.svg";

export default function Footer() {
  return (
    <footer className="relative w-full h-[556px] bg-[#32215E] text-white overflow-hidden">
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none overflow-hidden">
        <h1
          className="font-[Unbounded] text-[300px] font-extrabold leading-[1] w-auto max-w-full select-none tracking-wide"
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

      <div className="relative z-10 max-w-[1400px] mx-auto px-10 py-20 flex justify-between gap-20">
        <div className="max-w-sm text-left">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 font-['Open_Sans']">
            <img src={lightIcon} alt="Light" className="w-6 h-6" />
            <span className="font-extrabold">EduPro</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-200">
            Поднимите свою карьеру, доход и жизнь на новый уровень. SkillUp
            помог более 400 студентам получить свою первую работу в сфере
            технологий. Станьте следующим и измените свою жизнь уже сегодня!
          </p>
        </div>

        <div className="flex gap-16">
          <div>
            <h3 className="font-semibold mb-4">Тез шилтемелер</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Главная</li>
              <li>Программа</li>
              <li>О нас</li>
              <li>Наши курсы</li>
              <li>Контакты</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Программалaр</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Frontend инженер</li>
              <li>Django менен Backend</li>
              <li>UX/UI дизайн</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Байланыш</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Email: info@edupro.academy</li>
              <li>Телефон: +996 (555) 000-111</li>
              <li>Telegram: @eduproacademy</li>
              <li>Дарек: Бишкек, Кыргызстан</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-0 w-full border-t border-[#FFFFFF33]" />

      <div className="absolute bottom-10 w-full text-center text-sm text-gray-400">
        Copyright © 2021-2025 SkillUP | Privacy Policy | Terms & Conditions
      </div>
    </footer>
  );
}
