import React, { useState } from "react";
const steps = [
  { id: 1, title: "Логистические вопросы" },
  { id: 2, title: "Вопросы про айти" },
  { id: 3, title: "Вопросы про будущее" },
];
const questions = [
  {
    id: 1,
    text: "Я знаю основы работы с компьютером (установка программ, работа с браузером, файловая система).",
  },
  {
    id: 2,
    text: "Я знаком с HTML (умею делать простую разметку: заголовки, абзацы, ссылки, картинки).",
  },
  {
    id: 3,
    text: "Я знаю основы работы с компьютером (установка программ, работа с браузером, файловая система).",
  },
  {
    id: 4,
    text: "Я знаю основы JavaScript (переменные, условия, циклы, простые функции).",
  },
  {
    id: 5,
    text: "Я знаю основы работы с компьютером (установка программ, работа с браузером, файловая система).",
  },
  {
    id: 6,
    text: "Я знаю основы работы с компьютером (установка программ, работа с браузером, файловая система).",
  },
];

const levels = [
  { label: "Совсем не умею", value: "none" },
  { label: "Немного умею", value: "some" },
  { label: "Хорошо умею", value: "good" },
];

const TestForm = () => {
  const [answers, setAnswers] = useState({});
  const [currentStep, setCurrentStep] = useState(2); // активный шаг — "Вопросы про айти"
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (questionId, value) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ответы:", answers);
    setSubmitted(true);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8 mt-10"
    >
      {/* Заголовок */}
      <div className="text-center mb-10">
        <h1 className="text-2xl font-bold text-[#32215E] uppercase mb-2">
          Тест для определения уровня перед курсом Frontend-разработка
        </h1>
        <p className="text-gray-600">
          Пожалуйста, отметьте свой уровень знаний или опыта в каждом из
          пунктов:
        </p>
        <p>IT и Компьютерная грамотность</p>
        <span>English</span>
      </div>

      {/* Прогресс-индикатор */}
      <div className="flex justify-between items-center mb-10 relative">
        {steps.map((step, index) => (
          <div key={step.id} className="flex-1 flex items-center">
            <div className="relative flex flex-col items-center">
              {/* Круг */}
              <div
                className={`w-6 h-6 rounded-full border-2 ${
                  currentStep === step.id
                    ? "border-[#7640FF] bg-[#7640FF]"
                    : "border-[#7640FF] bg-white"
                } flex items-center justify-center`}
              >
                {currentStep === step.id && (
                  <span className="w-2 h-2 bg-white rounded-full"></span>
                )}
              </div>
              {/* Текст */}
              <span
                className={`absolute top-8 whitespace-nowrap text-sm ${
                  currentStep === step.id
                    ? "text-[#7640FF] font-medium"
                    : "text-gray-600"
                }`}
              >
                {step.title}
              </span>
            </div>

            {/* Пунктир между шагами */}
            {index < steps.length - 1 && (
              <div className="flex-1 border-t border-dotted border-[#7640FF] mx-2"></div>
            )}
          </div>
        ))}
      </div>

      {/* Вопросы */}
      <div className="space-y-6">
        {questions.map((q) => (
          <div
            key={q.id}
            className="border border-[#C7C6CB] rounded-xl p-5 flex flex-col gap-3"
          >
            <p className="font-medium text-gray-800">
              {q.id}. {q.text}
            </p>
            <div className="flex flex-wrap gap-4">
              {levels.map((level) => (
                <label
                  key={level.value}
                  className={`flex items-center gap-2 cursor-pointer ${
                    answers[q.id] === level.value
                      ? "text-[#7640FF] font-semibold"
                      : "text-gray-600"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={level.value}
                    checked={answers[q.id] === level.value}
                    onChange={() => handleChange(q.id, level.value)}
                    className="w-5 h-5 accent-[#7640FF]"
                  />
                  {level.label}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка отправки */}
      <div className="flex justify-center mt-10">
        <button
          type="submit"
          className="bg-[#7640FF] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#5e2ed6] transition-transform duration-200 hover:scale-105"
        >
          Отправить
        </button>
      </div>

      {submitted && (
        <p className="text-center text-green-600 font-medium mt-6">
          Спасибо! Ваши ответы отправлены ✅
        </p>
      )}
    </form>
  );
};

export default TestForm;
