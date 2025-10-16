import React from 'react'
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { useTranslation } from 'react-i18next';

const Pricing = () => {
    const { t } = useTranslation(['common', 'home']);
    const plans = t('common:pricing.plans', { returnObjects: true });
    const pricing = t('common:pricing', { returnObjects: true });

    return (
        <section id="pricing" className="py-16 bg-[#F8F8F8]">
            <div className="mx-auto max-w-[430px] lg:max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                {/* Заголовок */}
                <h2 className="md:text-[50px] font-bold text-[#32215E] mb-6 text-[30px] leading-[120%] tracking-[1%] text-center uppercase">
                    {pricing.title}
                </h2>
                <div className="inline-block mb-12">
                    <span className="px-6 py-2 rounded-full opacity-100 border border-[#C9C9C9] font-[Suisse_Intl] font-normal text-[18px] leading-[120%] tracking-[1%] text-center text-[#555555]">
                        {pricing.button}
                    </span>
                </div>

                {/* Карточки */}
                <div className="grid lg:grid-cols-3 gap-6">
                    {plans.map((pl, i) => (
                        <div
                            key={i}
                            className={`rounded-2xl p-6 flex flex-col transition transform hover:-translate-y-1 
                                ${i % 2 === 0
                                    ? "bg-white text-[#2A1A4A]"
                                    : "bg-[#4B1D8B] text-white"
                                }
                                    `}
                        >
                            {/* Заголовок + цена */}
                            <div className="flex items-center justify-between">
                                <h3
                                    className={`font-[Suisse_Intl] font-bold text-xl leading-[120%] tracking-[1%] uppercase
                                         ${i % 2 === 0 ? "text-[#32215E]" : "text-white"
                                        }`}
                                >
                                    {pl.name}
                                </h3>
                                <span
                                    className={`font-bold text-3xl leading-[120%] tracking-[1%] ${i % 2 === 0 ? "text-[#32215E]" : "text-white"} `}
                                >
                                    {pl.price}
                                </span>
                            </div>

                            {/* Фичи */}
                            <ul
                                className={`mb-[56px] mt-[20px] text-left text-sm leading-relaxed ${i % 2 === 0 ? "text-[#1A1A1A]" : "text-white/90"}`}
                            >
                                {pl.features.map((f, j) => (
                                    <li key={j} className="flex items-start
                                        font-[Suisse_Intl] font-normal text-lg leading-[120%] tracking-[1%]">
                                        <span className="mr-2">•</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            {/* Кнопка */}
                            <button
                                className={`w-full rounded-full font-semibold transition flex items-center justify-center font-[Suisse_Intl] font-normal leading-[120%] tracking-[1%] opacity-100 rounded-[95.69px] border border-[0.96px]  
                                ${i % 2 === 0
                                        ? "bg-[linear-gradient(180deg,#7640FF_-13.77%,#472799_188.41%)] text-white hover:opacity-90"
                                        : "bg-white text-[#7640FF] hover:bg-gray-100"
                                    }`}
                            >
                                {pl.cta}
                                <HiOutlineArrowLongRight className="w-[46px] h-[25.837295532226562px]" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing