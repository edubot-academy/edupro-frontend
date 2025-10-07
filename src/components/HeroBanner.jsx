import React from 'react'
import girl from '../assets/image/girl.png'
import menu from '../assets/svg/menu-burger.svg'
import magic from '../assets/svg/magic.svg'

function HeroBanner() {
  return (
    <div className="bg-gradient-to-t -mt-22 from-[#EBE2FF] to-[#E7E7E7] overflow-hidden">
      {/* Верхний блок */}
      <div className="relative w-full h-auto lg:h-screen flex flex-col items-center justify-center lg:justify-start mb-10 px-6 md:px-10">
        <h1 className="absolute -top-8 md:top-6 text-[14rem] md:text-[250px] lg:text-[430px] font-bold bg-gradient-to-t from-[#190B3B] to-[#A37FFF] bg-clip-text text-transparent opacity-15 select-none leading-none text-center lg:text-left">
          Edu
          <br className="block lg:hidden md:hidden" />
          <span className="lg:inline hidden md:inline">Pro</span>
          <span className="block lg:hidden md:hidden">Pro</span>
        </h1>

        <div className="relative z-10 flex lg:-mt-80 md:-mt-36 flex-col-reverse lg:flex-row md:flex-row items-center gap-6 md:gap-12 lg:gap-36">
          {/* Текст */}
          <h2
            className="text-[#32215E] text-3xl md:text-4xl lg:text-6xl absolute md:static -mt-16 md:mt-0 z-10 bg-gradient-to-t md:bg-none lg:bg-none font-extrabold px-4 pt-10 md:max-w-md lg:max-w-xl leading-tight text-left"
          >
            КЕЛЕЧЕККЕ БАГЫТТАЛГАН БИЛИМ
          </h2>

          {/* Изображение */}
          <img
            className="w-96 lg:w-[35rem] pt-6 md:pt-16 lg:pt-[17rem] relative z-0"
            src={girl}
            alt="Programmer Girl"
          />
        </div>
      </div>

      {/* Нижний блок */}
      <div className="relative z-20 -mt-5 md:-mt-48 lg:-mt-80 lg:backdrop-blur-lg lg:shadow-2xl md:backdrop-blur-lg md:shadow-2xl">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center lg:items-start md:items-start md:border-t-[2px] border-white">
          {/* Текстовая часть */}
          <div className="max-w-sm md:max-w-lg lg:max-w-xl p-6 md:p-8 lg:p-10 text-center lg:text-left ">
            <p className="text-[#2C2C2C] text-sm md:text-base text-left">
              EduPro Academy — практикалык долбоорлор, менторлук жана ИИ жардамы
              менен жаңы баштагандарды жумушка даяр адиске айлантат.
            </p>
            <button className="bg-white border border-black rounded-full mt-5 px-6 py-2 hover:bg-black hover:text-white transition text-sm md:text-base">
              Азыр арыз бериниз
            </button>
          </div>

          {/* Блок с иконками и числом */}
          <div className=" bg-white p-10 clip-path-custom lg:pl-44 md:pl-36 lg:rounded-tl-3xl md:py-4 lg:py-14">
            <div className="flex items-center gap-5">
              <div className="flex gap-1">
                <img className='max-w-12' src={menu} alt="menu-burger" />
                <img className='max-w-12' src={magic} alt="magic" />
              </div>
              <div className="border border-gray-300 rounded-full flex justify-center text-[#2C2C2C] items-center px-1 py-2"> ЭФФЕКТИВНАЯ ПРОГРАММА
              </div>
            </div>
            <div className="mt-6 flex items-center">
              <span className="font-semibold text-5xl text-[#2C2C2C]">50+</span>
              <p className="mt-2 text-[#2C2C2C] max-w-xs"> Опытных менторов которые помогают нашим студентам строить светлую карьеру </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
