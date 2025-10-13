import React from 'react'
import Insta from "../assets/intsa.svg"
import Telega from "../assets/telega.svg"
import Local from "../assets/local.svg"
import Call from "../assets/call.svg"
import Email from "../assets/email.svg"
import Right from "../assets/right.svg"

const Consult = () => {
  return (
      <div className="bg-[#e8e1fb] flex justify-center py-16 px-4 ">
    <div className='bg-white  w-full rounded-[44px] flex flex-col items-center justify-center gap-[40px] p-[70px_125px] max-sm:w-full max-sm:max-w-[380px]'>
      <div className='flex flex-col text-center pt-[70px] pb-[54px] max-sm:pt-0 max-sm:pb gap-[34px] max-sm:w-[350px]'>
        <h1 className=" w-[1000px]  font-[Unbounded] font-bold text-[50px]  text-[#32215E]  uppercase  md:text-[40px] lg:text-[50px] 
             max-sm:w-full max-sm:text-[20px] max-sm:text-center ">Остались вопросы?Проконсультируем бесплатно!</h1>
       <p className='w-[898px] h-[60px] rounded-[100px] border border-[#C9C9C9] bg-[#FFFFFF] 
       px-[40px] py-[18px] gap-[10px] opacity-100 text-center text-gray-700   max-sm:w-[358.61px] max-sm:h-[64.7px] max-sm:rounded-[69.77px] max-sm:px-[30.7px] max-sm:py-[15.35px]'>3 мүнөттө арыз бер. Командабыз 24 саат ичинде байланышка чыгат.</p>
      </div>
        <div className='flex gap-[100px] max-sm:flex-col  max-sm:items-center'>
          <div className='flex flex-col gap-[16px] flex-1'>
        <input type="text" placeholder='Ваше имя'
         class="w-[540px] h-[68px] rounded-[20px] border border-gray-300 
         px-[44px] py-[22px] gap-[10px] opacity-100 bg-[#F5F5F5] max-sm:w-[350px]" />
        <input type="text" placeholder='Оставьте свой номер'  class="w-[540px] h-[68px] rounded-[20px] border border-gray-300 
         px-[44px] py-[22px] gap-[10px] opacity-100 bg-[#F5F5F5] max-sm:w-[350px]"/>
      <div class="flex flex-col gap-4">

  <div class="relative w-[540px] max-sm:w-[350px]">
    <select 
      class="appearance-none w-full h-[68px] rounded-[20px] border border-gray-300 
             px-[44px] py-[22px] bg-[#F5F5F5] text-gray-700 focus:outline-none cursor-pointer"
    >
      <option>FrontEnd инженер</option>
      <option>BackEnd инженер</option>
      <option>FullStack инженер</option>
      <option>Дизайнер</option>
    </select>
  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
         stroke-width="2" stroke="currentColor" 
         class="absolute right-[30px] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>


  <div class="relative w-[540px] max-sm:w-[350px]">
    <select 
      class="appearance-none w-full h-[68px] rounded-[20px] border border-gray-300 
             px-[44px] py-[22px] bg-[#F5F5F5] text-gray-700 focus:outline-none cursor-pointer"
    >
      <option>Офлайн</option>
      <option>Онлайн</option>
      <option>Гибрид</option>
    </select>
 
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
         stroke-width="2" stroke="currentColor" 
         class="absolute right-[30px] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>

        
        <button className=' className="  flex items-center justify-center  w-[540px] h-[70px] rounded-[100px] px-[64px] py-[24px] gap-[24px] border border-[#C9C9C9] bg-[#7640FF] text-white opacity-100 max-sm:w-[350px]'>Записаться    <img src={Right} alt="arrow" className="w-[40px] h-[24px]" /> </button>
       
      </div>
      <div className='flex gap-[54px] pt-[70px] flex-1 max-sm:pt-0 max-sm:flex-col'>
        <div>
            <div className='flex flex-col gap-[34px]'>
                <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555]'>Мы в социальных сетях</p>
            <div className='flex gap-[12px]'>
                <img src={Insta} alt="instagram" className='w-[65px] h-[65px]' />
                <img src={Telega} alt="telegram"  className='w-[65px] h-[65px]'/>
            </div>
            </div>
            
           <div className="flex flex-col gap-[25px] items-center pt-[54px]">
  <p className="font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] mr-[180px]">
    Адрес
  </p>  

  <div className="flex items-center justify-center gap-[12px]">
    <img src={Local} alt=" className='w-[65px] h-[65px]" />
    <p className="text-[#32215E] text-[20px] font-[Suisse Intl]">Bishkek, Kyrgyzstan</p>
  </div>
</div>

        </div>
        <div className=''>
            <div className='flex flex-col gap-[31px]'>
                <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] pr-[40px]'>Наши контакты</p>
                <div className='flex gap-[18px]'>
                    <img src={Call} alt="" className='w-[65px] h-[65px]' />
                    <div className='flex flex-col'>
                        <span>+996 550 942 433</span>
                        <span>+996 550 942 433</span>
                    </div>
                </div>
                <div className='flex flex-col gap-[31px] pt-[30px]'>
                    <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] mr-[140px]'>Email</p>
                    <div className='flex items-center justify-center gap-[12px]'>
                        <img src={Email} alt="" className='w-[65px] h-[65px]' />
                        <p>info@edupro.academy</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Consult
