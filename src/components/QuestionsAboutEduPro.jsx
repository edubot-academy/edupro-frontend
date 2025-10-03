import React, { useState } from "react";

const faqItems = [
  { question: "МУРУНТАН ТАЖРЫЙБА КЕРЕКПИ?" },
  {
    question: "ОНЛАЙНБЫ ОФЛАЙНЫ?",
    answer: "Экөө тең бар — өзүңүзгө ылайыктуусун тандаңыз.",
  },
  { question: "КАНТИП КАТТАСАК БОЛОТ?" },
  { question: "ПРОГРАММАГА КАНТИП КИРЕБИЗ?" },
];

const QuestionsAboutEduPro = () => {
  const [open, setOpen] = useState(null);

  const toggle = (idx) => setOpen(open === idx ? null : idx);

  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#DBCCFF] to-[#1E006B] px-4 py-12 md:px-16 md:py-16">
      {/* Заголовок */}
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold font-unbounded mb-6 text-center">
        КӨП БЕРИЛГЕН СУРООЛОР
      </h2>

      {/* Кнопка */}
      <button className="mb-8 sm:mb-10 px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg bg-white text-[#1E006B] font-semibold rounded-full hover:opacity-90">
        ПУТЬ К ВАШЕЙ КАРЬЕРЕ
      </button>

      {/* Основной блок FAQ */}
      <div className="bg-white rounded-2xl w-full max-w-3xl sm:max-w-4xl flex flex-col justify-start p-6 sm:p-8 gap-4">
        {faqItems.map((item, idx) => (
          <div key={idx} className="flex flex-col">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left flex items-center justify-between py-3 sm:py-4 font-bold text-[#1E006B] font-unbounded relative text-sm sm:text-base md:text-lg"
            >
              {item.question}
              <span className="text-xl sm:text-2xl">
                {open === idx ? "−" : "+"}
              </span>
            </button>
            <div className="border-t border-gray-300 w-full"></div>
            {open === idx && (
              <div className="pt-2 text-gray-800 text-sm sm:text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionsAboutEduPro;
