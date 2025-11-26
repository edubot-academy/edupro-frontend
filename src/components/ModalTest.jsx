import React from "react";
import ResultSvg from "../assets/svg/result.svg"

const ModalTest = ({ isOpen, onClose, result }) => {
  if (!isOpen) return null;

  const isGood = result >= 50;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 ">
      <div
        className={`relative w-[371px] h-[570px] max-w-md rounded-3xl p-8 text-center shadow-lg  ${
          isGood ? "bg-green-50" : "bg-red-50"
        }`}
      >
        <div
          className={`mx-auto w-[132px] h-[132px] pt-[73px]  rounded-full flex items-center justify-center  `}
        >
          <img className="" src={ResultSvg} alt="" />
        </div>

        <h3 className="text-3xl font-bold pt-[129px] text-black">{result}%</h3>

        <p className="text-black pt-[11px] mb-6">
          {isGood ? (
            <>
              Ваш результат: {result}% ✅ Отличный показатель! У вас есть
              уверенные базовые знания.
            </>
          ) : (
            <>
              Результат — {result}%. Курс рассчитан на новичков, начнём с основ.
            </>
          )}
        </p>

        <button
          onClick={onClose}
          className="bg-purple-600 hover:bg-purple-700 w-[289px] h-[53px] text-white px-6 py-3 rounded-[69px] transition ]"
        >
          Вернуться на главную →
        </button>
      </div>
    </div>
  );
};

export default ModalTest;
