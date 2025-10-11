import { useTranslation } from 'react-i18next';

function HowItWork() {
    const { t } = useTranslation();
    const features = t("home:career.features", { returnObjects: true });

    return (
        <div className='flex flex-col items-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8'>
            {/* Заголовок и кнопка */}
            <div className='flex flex-col items-center w-full max-w-4xl'>
                <h2 className='text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6'>
                    {t("home:career.title")}
                </h2>
                <div className='border border-gray text-[#555555] text-center p-2 sm:p-3 w-full max-w-xs sm:w-72 font-normal text-sm sm:text-base rounded-full'>
                    {t("home:career.button")}
                </div>
            </div>

            {/* Карточки features */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full max-w-7xl'>
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-start gap-1  justify-start border border-gray p-4 sm:p-6 rounded-xl lg:rounded-2xl hover:shadow-lg transition-shadow duration-300'
                    >
                        <div className='bg-[#472799] text-[#F5F5F5] rounded-full px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base'>
                            {feature.id}
                        </div>
                        <h3 className='font-bold text-lg sm:text-xl lg:text-2xl text-[#32215E] mb-3'>
                            {feature.title}
                        </h3>
                        <p className='text-[#2C2C2C] font-normal text-sm sm:text-base leading-relaxed'>
                            {feature.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HowItWork;