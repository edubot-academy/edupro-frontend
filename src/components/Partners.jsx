import { useTranslation } from "react-i18next";
import okurmen from '../assets/image/okurmen.png'

function HowItWork() {
    const { t } = useTranslation(["aboutPage"]);

    return (
        <div className="flex flex-col bg-white items-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8 pb-12 my-20">
            <div className="flex flex-col items-center w-full max-w-4xl">
                <h2 className="text-[#32215E] font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center mb-4 lg:mb-6">
                    {t("aboutPage:partners.title")}
                </h2>
                <div className="border border-gray text-[#555555] text-center p-2 sm:p-3 w-full max-w-xs sm:w-72 font-normal text-sm sm:text-base rounded-full">
                    {t("aboutPage:partners.button")}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 w-full">
                {[...Array(4)].map((_, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center gap-1  justify-start border border-gray py-4 rounded-xl lg:rounded-2xl"
                    >
                        <img className="h-36" src={okurmen} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
}


export default HowItWork;