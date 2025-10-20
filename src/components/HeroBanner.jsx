import React from 'react'
import girl from '../assets/image/girl.png'
import menu from '../assets/svg/menu-burger.svg'
import magic from '../assets/svg/magic.svg'
import bg from '../assets/image/bgImage.png'

function HeroBanner() {
  return (
    <div className="bg-gradient-to-t -mt-22 from-[#EBE2FF] to-[#E7E7E7] overflow-hidden">
      <div className="relative w-full h-auto lg:h-screen flex flex-col items-center justify-center lg:justify-start mb-10 px-6 md:px-10">
        <h1 className="absolute -top-8 md:top-6 text-[14rem] md:text-[250px] lg:text-[430px] font-bold bg-gradient-to-t from-[#190B3B] to-[#A37FFF] bg-clip-text text-transparent opacity-15 select-none leading-none text-center lg:text-left">
          Edu
          <br className="block lg:hidden md:hidden" />
          <span className="lg:inline hidden md:inline">Pro</span>
          <span className="block lg:hidden md:hidden">Pro</span>
        </h1>
        <div className="relative z-10 flex lg:-mt-80 md:-mt-36 flex-col-reverse lg:flex-row md:flex-row items-center gap-6 md:gap-12 lg:gap-96">
          <h2
            className="text-[#32215E] text-3xl md:text-4xl lg:text-6xl absolute md:static -mt-16 md:mt-0 z-10 w-96 bg-gradient-to-t md:bg-none lg:bg-none font-extrabold px-4 pt-10 -mb-2 md:max-w-md lg:max-w-xl leading-tight text-left"
          >
            КЕЛЕЧЕККЕ БАГЫТТАЛГАН <br /> БИЛИМ
          </h2>
          <img
            className="w-96 lg:w-[35rem] pt-6 md:pt-16 lg:pt-[17rem] relative z-0"
            src={girl}
            alt="Programmer Girl"
          />
        </div>
      </div>
      <div className="relative z-20 -mt-5 md:-mt-48 lg:-mt-80 lg:backdrop-blur-lg lg:shadow-2xl md:backdrop-blur-lg md:shadow-2xl">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center lg:items-start md:items-start md:border-t-[2px] border-white">
          <div className="max-w-sm md:max-w-lg lg:max-w-xl lg:px-20 lg:pt-14 p-6 md:-mt-6 md:mb-10 md:p-8 text-center lg:text-left">
            <p className="text-[#2C2C2C] text-sm md:text-base text-left   md:text-left md:w-96">
              EduPro Academy — практикалык долбоорлор, менторлук жана ИИ жардамы менен жаңы баштагандарды жумушка даяр адиске айлантат.
            </p>
            <button className="bg-white border border-black rounded-full mt-4 px-6 py-2 hover:bg-black hover:text-white transition text-sm md:text-base">
              Азыр арыз бериниз
            </button>
          </div>
        </div>
        <div className="relative w-full flex justify-center lg:block md:block">
          <img
            src={bg}
            className="hidden md:block lg:block relative md:-mt-56 lg:-mt-64"
            alt=""
          />
          <div
            className="absolute z-20 top-0 lg:right-12 p-6 md:p-10 lg:pr-36 md:right-0 md:-mr-16  md:py-4 lg:py-14 bg-white w-full md:w-auto md:bg-transparent relative md:absolute pl-16 mt-4 md:mt-0 "
          >
            <div className="flex items-center md:justify-start gap-4">
              <div className="flex gap-1">
                <img className="w-8 md:w-8 lg:w-12" src={menu} alt="menu-burger" />
                <img className="w-8 md:w-8 lg:w-12" src={magic} alt="magic" />
              </div>
              <div className="border border-gray-300 rounded-full flex justify-center items-center px-2 py-1 text-xs md:text-xs lg:text-base text-[#2C2C2C] bg-white md:bg-transparent">
                ЭФФЕКТИВНАЯ ПРОГРАММА
              </div>
            </div>
            <div className="mt-5 flex w-72 items-center md:flex-row md:items-center md:pr-12 lg:w-96 lg:pr-2 text-center md:text-left">
              <span className="font-semibold text-4xl lg:text-6xl  text-[#2C2C2C]">50+</span>
              <p className="mt-2 md:mt-0 md:ml-2 text-[#2C2C2C] text-sm lg:text-sm md:text-xs md:w-44 lg:w-96">
                Опытных менторов, которые помогают нашим студентам строить светлую карьеру
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
