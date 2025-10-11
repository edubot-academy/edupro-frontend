import React from 'react'

function Test() {
  return (
    <div className='flex flex-col justify-center items-center gap-6 bg-[#FFFFFF] border border-gray rounded-xl mx-14 py-10 px-4'>
      <h3 className='text-[#32215E] font-bold text-4xl text-center'>Пройдите тест бесплатно и <br /> узнайте свой уровень!</h3>
      <p className='font-normal text-base text-center'>Ответьте на несколько простых вопросов и получите мгновенный результат. Определите свой текущий уровень знаний и поймите, <br /> с чего начать обучение. Тест абсолютно бесплатный и не займет больше 5 минут.</p>
      <button className='bg-gradient-to-t to-[#7640FF] from-[#472799] w-44 text-[#FFFFFF]'>Пройти тест</button> {/*стиль кнопки временный,поменяем на ui когда оно будет готово */}
    </div>
  )
}

export default Test
