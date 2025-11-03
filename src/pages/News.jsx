import { useTranslation } from "react-i18next";
import cover from "../assets/news_cover.png";
import Button from "../components/UI/Button";

export default function News() {
    const { t } = useTranslation(["news", "common"]);

    const newsIds = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const newsData = newsIds.map(id => ({
        id,
        title: t(`news:news_${id}.title`), // Исправлено: добавлен префикс news:
        description: t(`news:news_${id}.description`), // Исправлено: добавлен префикс news:
        image: cover
    }));

    return (
        <div className="flex flex-col items-center gap-8 lg:gap-12 px-4 sm:px-6 lg:px-8 my-16">
            {/* Заголовок */}
            <div className="flex flex-col items-center w-full max-w-4xl">
                <h2 className="text-[#32215E] font-[Unbounded] font-bold text-3xl lg:text-5xl text-center mb-4 uppercase">
                    {t("news:title")} {/* Должно работать */}
                </h2>
                <div className="border border-gray-300 text-[#555555] text-center p-1.5 sm:p-2 md:p-3 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[288px] font-normal text-xs sm:text-sm md:text-base rounded-full transition">
                    {t("common:career.button")}
                </div>
            </div>

            {/* Сетка карточек */}
            <div className="w-full max-w-6xl">
                <div className="flex overflow-x-auto lg:grid lg:grid-cols-3 lg:overflow-visible lg:gap-6 pb-4 lg:pb-0 gap-4 px-4 lg:px-0 
    [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl border shadow-md overflow-hidden flex flex-col bg-white hover:shadow-lg transition h-[320px] sm:h-[350px] lg:h-[450px] w-[260px] sm:w-[280px] lg:w-full flex-shrink-0 lg:flex-shrink"
                        >
                            <div className="relative flex-shrink-0 px-3 lg:px-4 pt-3 lg:pt-3">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full object-contain rounded-lg"
                                />
                            </div>

                            <div className="p-3 lg:p-4 flex flex-col flex-grow min-h-0">
                                {/* Заголовок с ограничением по высоте */}
                                <div className="min-h-[60px] sm:min-h-[70px] lg:min-h-[80px] mb-2 lg:mb-3">
                                    <h3 className="text-sm lg:text-base font-bold text-[#000] mb-1 lg:mb-2 uppercase leading-snug lg:leading-normal line-clamp-3 h-full">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* Параграф всегда в одном месте */}
                                <div className="flex-grow flex flex-col">
                                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base pr-1 sm:pr-2 line-clamp-3 sm:line-clamp-2 flex-grow">
                                        {item.description}
                                    </p>

                                    {/* Кнопка всегда внизу */}
                                    <Button className="bg-[#7A35FF] hover:bg-[#692de0] transition text-white rounded-full py-1.5 lg:py-2 text-xs lg:text-sm font-medium flex items-center justify-center gap-2 mt-2 lg:mt-3">
                                        {t("common:view")}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}