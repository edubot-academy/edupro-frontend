import { useTranslation } from "react-i18next";
import cover from "../assets/news_cover.png";
import Button from "../components/UI/Button";
const newsData = [
    {
        id: 1,
        title: "САМЫЙ КРУПНЫЙ IT HUB В КЫРГЫЗСТАНЕ СТАНОВИТСЯ ЦЕНТРОМ ИННОВАЦИЙ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 2,
        title: "НОВАЯ ПЛАТФОРМА ДЛЯ РАЗРАБОТЧИКОВ ОТКРЫВАЕТ БОЛЬШЕ ВОЗМОЖНОСТЕЙ ДЛЯ СТАРТАПОВ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 3,
        title: "ТЕХНОЛОГИИ И ИННОВАЦИИ 2025 МЕНЯЮТ БУДУЩЕЕ ЦИФРОВОЙ ЭКОНОМИКИ РЕГИОНА",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 4,
        title: "ЦИФРОВАЯ ТРАНСФОРМАЦИЯ ГОСУДАРСТВА ПРИВОДИТ К РОСТУ IT-СЕКТОРА",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 5,
        title: "AI HUB В ЦЕНТРАЛЬНОЙ АЗИИ СОБИРАЕТ ЛУЧШИХ СПЕЦИАЛИСТОВ РЕГИОНА",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 6,
        title: "НОВАЯ ЭПОХА ТЕХНОЛОГИЙ ОПРЕДЕЛЯЕТ ТРЕНДЫ РАЗВИТИЯ IT-ИНДУСТРИИ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 7,
        title: "ИННОВАЦИИ В ОБРАЗОВАНИИ ПОМОГАЮТ ПОДГОТОВИТЬ НОВОЕ ПОКОЛЕНИЕ СПЕЦИАЛИСТОВ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 8,
        title: "ИТ КЛАСТЕРЫ 2025 СТАНОВЯТСЯ ОСНОВОЙ ЭКОНОМИЧЕСКОГО РОСТА СТРАНЫ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
    {
        id: 9,
        title: "РОСТ ЦИФРОВОЙ ЭКОНОМИКИ ПОДДЕРЖИВАЕТСЯ ИНВЕСТИЦИЯМИ В ТЕХНОЛОГИИ",
        description: "Рональд Ричардс... Read More",
        image: cover,
    },
];

export default function News() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col items-center gap-6 lg:gap-12 px-4 sm:px-6 lg:px-8 my-16">
            {/* Заголовок */}
            <div className="flex flex-col items-center w-full max-w-4xl">
                <h2 className="text-[#32215E] font-bold text-3xl lg:text-5xl text-center mb-4 uppercase">
                    {t("news:title", "Новости")}
                </h2>
                <div className="border border-gray-300 text-[#555555] text-center p-1.5 sm:p-2 md:p-3 w-full max-w-[180px] sm:max-w-[200px] md:max-w-[288px] font-normal text-xs sm:text-sm md:text-base rounded-full transition">
                    {t("common:career.button", "Все новости")}
                </div>

            </div>

            {/* Сетка карточек */}
            <div className="lg:grid lg:grid-cols-1 sm:lg:grid-cols-2 lg:grid-cols-3 lg:gap-6 w-full max-w-6xl">
                <div className="flex lg:grid lg:grid-cols-3 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 gap-8 px-4 lg:px-0 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                    {newsData.map((item) => (
                        <div
                            key={item.id}
                            className="rounded-2xl border shadow-md overflow-hidden flex flex-col bg-white hover:shadow-lg transition h-[380px] sm:h-[400px] lg:h-[450px] w-[260px] sm:w-[300px] lg:w-full flex-shrink-0 lg:flex-shrink"
                        >

                            <div className="relative flex-shrink-0 px-3 lg:px-4 lg:pt-4">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-52 lg:h-56 object-contain rounded-lg"
                                />
                            </div>

                            <div className="p-3 sm:p-4 flex flex-col flex-grow overflow-hidden">
                                <h3
                                    className="text-base sm:text-lg lg:text-xl font-bold text-[#000] mb-1 sm:mb-2 uppercase leading-snug sm:leading-normal line-clamp-3 sm:line-clamp-2"
                                >
                                    {t(`news.${item.id}.title`, item.title)}
                                </h3>

                                <p
                                    className="text-gray-600 text-xs sm:text-sm lg:text-base pr-1 sm:pr-2 flex-grow line-clamp-3 sm:line-clamp-2"
                                >
                                    {t(`news.${item.id}.description`, item.description)}
                                </p>

                                <Button className="bg-[#7A35FF] hover:bg-[#692de0] transition text-white rounded-full py-1.5 sm:py-2 text-xs sm:text-sm font-medium flex items-center justify-center gap-2 mt-auto">
                                    {t("common:view", "Посмотреть")}
                                </Button>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
