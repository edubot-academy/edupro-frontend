import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ModalTest from "./ModalTest";

const TestForm = () => {
  const [activeStep, setActiveStep] = useState(null);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [result, setResult] = useState(null);

   const handleClick = () => {
     // 👉 здесь вычисляешь свой реальный результат
     const calculatedResult = 75; // пример
     setResult(calculatedResult);
     setIsModalOpen(true); // открыть модалку
   };
     


  const navigate = useNavigate();
  const { t } = useTranslation();

  const questionsByCategory = {
    "Логистические вопросы": [
      {
        id: 1,
        text: "Я понимаю основы логистики (доставка, склад, цепочка поставок).",
      },
      {
        id: 2,
        text: "Я умею составлять простые маршруты для перевозок.",
      },
    ],
    "Вопросы про айти": [
      {
        id: 3,
        text: "Я знаю основы работы с компьютером (установка программ, работа с браузером, файловая система).",
      },
      {
        id: 4,
        text: "Я знаком с HTML (умею делать простую разметку: заголовки, абзацы, ссылки, картинки).",
      },
      {
        id: 5,
        text: "Я знаю основы JavaScript (переменные, условия, циклы, простые функции).",
      },
    ],
    "Вопросы про будущее": [
      {
        id: 6,
        text: "Как технологии изменят мою профессию в будущем?",
      },
      {
        id: 7,
        text: "Что такое искусственный интеллект и как он повлияет на жизнь?",
      },
    ],
  };

  const levels = [
    { label: "Совсем не умею", value: "none" },
    { label: "Немного умею", value: "some" },
    { label: "Хорошо умею", value: "good" },
  ];

  const steps = [
    "Логистические вопросы",
    "Вопросы про айти",
    "Вопросы про будущее",
  ];

  const toggle = (index) => {
    setActiveStep(index === activeStep ? null : index);
  };

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ответы:", answers);
    setSubmitted(true);
      let correctCount = 0;
      questionsByCategory.forEach((q) => {
        if (answers[q.id] === q.correct) correctCount++;
      });

      const percent = Math.round((correctCount / questionsByCategory.length) * 100);
      setResult(percent);
      setIsModalOpen(true);
    
  };
  
  return (
    <form
      onSubmit={handleSubmit}
      className=" bg-white w-[1735px] mx-auto pl-[108px] pr-[78px] max-sm:w-[391px] max-sm:p-0"
    >
      {/* Заголовок */}
      <div className=" flex flex-col w-full h-[275px] text-center mb-10 border-[1px] border-bg -black bg-[#F9F6FF] rounded-[22px] gap-[34px] max-sm:gap-[10px] mx-auto  max-sm:w-[380px] max-sm:h-[130px] ">
        <div className="flex flex-col gap-2">
          <h1 className="font-[Suisse Intl] font-bold text-[30px] leading-[120%] tracking-[0.01em] uppercase pt-[50px] text-[#000000]  max-sm:text-[12.17px] max-sm:leading-[120%]  max-sm:pt-[20px]">
            Тест для определения уровня перед курсом Frontend-разработка
          </h1>
          <p className="font-[Suisse Intl] font-normal text-[#000000] text-[28px] leading-[120%] tracking-[0.01em] max-sm:text-[13px]">
            Пожалуйста, отметьте свой уровень знаний или опыта в каждом из
            пунктов:
          </p>
        </div>
        <div className="">
          <p className=" font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] max-sm:text-[10px]">
            IT и Компьютерная грамотность
            <span className="text-[#7640FF] border-b-[3px] border-[#7640FF] inline-block ml-[12px] pb-[5px]">
              English
            </span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between w-full mt-10 px-6 max-md:px-4 max-sm:px-2 max-sm:mt-6 smax-m:gap-[4px]">
        {steps.map((label, i) => (
          <div
            key={i}
            className="flex items-center flex-1 font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] max-md:text-[16px] max-sm:text-[8px]"
          >
            {/* Кружок */}
            <div
              onClick={() => toggle(i)}
              className={`w-6 h-6 rounded-full border-2 border-purple-500 flex items-center justify-center cursor-pointer transition-colors duration-200 
                    max-md:w-5 max-md:h-5 max-sm:w-3 max-sm:h-3 ${
                      activeStep === i ? "bg-purple-500" : ""
                    }`}
            >
              <svg
                className={`${activeStep === i ? "" : "hidden"} 
                      w-3 h-3 text-white max-md:w-2.5 max-md:h-2.5 max-sm:w-1.5 max-sm:h-1.5`}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8.01 8.01a1 1 0 01-1.414 0l-4.01-4.01a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            {/* Подпись */}
            <span className="ml-2 text-sm font-medium text-gray-800 whitespace-nowrap max-md:text-[12px] max-sm:text-[8px] max-sm:ml-1">
              {label}
            </span>

            {/* Линия */}
            {i !== steps.length - 1 && (
              <div className="flex-1 h-px border-t border-dotted border-purple-400 mx-4  max-md:mx-2 max-sm:mx-1"></div>
            )}
          </div>
        ))}
      </div>

      <div className="space-y-6 pt-[54px] max-sm:pt-[24px] max-sm:space-y-4">
        {(activeStep === null
          ? Object.values(questionsByCategory).flat()
          : questionsByCategory[steps[activeStep]]
        ).map((q) => (
          <div
            key={q.id}
            className="p-5 flex flex-col gap-[24px] max-sm:gap-[12px] max-sm:p-3"
          >
            <p className="font-[Suisse Intl] font-normal text-[25px] leading-[120%] text-[#000000] tracking-[0.01em] max-sm:text-[12.17px] ">
              {q.id}. {q.text}
            </p>

            <div className="flex flex-wrap gap-[84px] max-sm:gap-[20px] max-sm:justify-start">
              {levels.map((level) => (
                <label
                  key={level.value}
                  className={`flex items-center gap-2 cursor-pointer 
                        max-sm:gap-1 max-sm:text-[10px]
                        ${
                          answers[q.id] === level.value
                            ? "font-semibold text-[#7640FF]"
                            : "text-gray-600"
                        }`}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={level.value}
                    checked={answers[q.id] === level.value}
                    onChange={() => handleChange(q.id, level.value)}
                    className="w-5 h-5 rounded-full border-2 border-gray-400
                checked:border-[#7640FF]
                appearance-none cursor-pointer relative
                focus:outline-none focus:ring-0 transition-all
                after:content-[''] after:w-2 after:h-2 after:rounded-full
                after:bg-[#7640FF] after:absolute after:top-1/2 after:left-1/2
                after:-translate-x-1/2 after:-translate-y-1/2
                checked:after:block after:hidden"
                  />
                  {level.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        class=" h-[10px] bg-[#F5F5F5]/70 mt-[150px] mb-[130px]  max-md:mt-[100px] max-md:mb-[80px] max-md:h-[8px]
         max-sm:max-w-[320px] max-sm:h-[4px] max-sm:mt-[40px] max-sm:mb-[40px] mx-auto"
      ></div>

      {/* Кнопка отправки */}
      <div className="flex justify-end mt-10 gap-[12px] pr-[150px]  max-md:pr-[60px] max-sm:pr-[20px] max-sm:mt-6 max-sm:justify-center  max-sm:items-center max-sm:gap-[10px]">
        <div
          onClick={() => navigate("/")}
          className="flex items-center justify-center w-[404px] h-[77px] rotate-0 opacity-100 gap-[10px] text-center rounded-[100px]  border-[1px] pt-[24px] pr-[64px] pb-[24px] pl-[64px] text-[#000000] cursor-pointer max-sm:w-[163px] max-sm:h-[31px] max-sm:text-[10px] max-sm:pt-[12px] max-sm:pb-[12px] max-sm:px-[24px]"
        >
          Вернуться на главную
        </div>

        <button
        onClick={handleClick}
          type="submit"
          className="flex items-center justify-center gap-3 px-10 py-4 w-[262px] h-[77px] rounded-full text-white text-[24px] font-medium bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] 
            hover:opacity-90 transition 
            max-sm:w-[127px] max-sm:h-[31px] max-sm:text-[10px] max-sm:gap-[6px] max-sm:px-[20px] max-sm:py-[10px]"
        >
          Далее
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="w-6 h-6 max-sm:w-4 max-sm:h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m0 0-6-6m6 6-6 6"
            />
          </svg>
        </button>
        <ModalTest
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          result={result}
        />
      </div>
    </form>
  );
};

export default TestForm;
