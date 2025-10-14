import bekten_azhymyrza from '../assets/bekten_azhymyrza.png';

const foundersData = [
    {
        id: 1,
        name: "Бектен Ажымырза",
        position: "Основатель компании EduPro",
        description: "Привет! Меня зовут Бектен, я айтишник. Уже несколько лет работаю в сфере разработки и люблю решать задачи с помощью технологий. Основное направление — веб-разработка: создаю сайты, приложения и разные цифровые сервисы. Начинал с простого — верстки и небольших проектов для знакомых, а сейчас работаю с более сложными системами, где важна архитектура, безопасность и удобство для пользователей. Постоянно учусь новому: изучаю современные фреймворки, автоматизацию и последние тренды в IT.",
        image: bekten_azhymyrza
    },
    {
        id: 2,
        name: "Бектен Ажымырза",
        position: "Основатель компании EduPro",
        description: "Привет! Меня зовут Бектен, я айтишник. Уже несколько лет работаю в сфере разработки и люблю решать задачи с помощью технологий. Основное направление — веб-разработка: создаю сайты, приложения и разные цифровые сервисы. Начинал с простого — верстки и небольших проектов для знакомых, а сейчас работаю с более сложными системами, где важна архитектура, безопасность и удобство для пользователей. Постоянно учусь новому: изучаю современные фреймворки, автоматизацию и последние тренды в IT.",
        image: bekten_azhymyrza
    }
];

function FounderCard({ founder }) {
    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-4">
                <div className="w-full bg-gray-200 rounded-lg overflow-hidden">
                    <img
                        src={founder.image}
                        alt={founder.name}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
            <div className="pt-0 px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 uppercase">{founder.name}</h3>
                <p className="text-gray-600 mb-4 border border-black rounded-2xl px-3 py-1.5 md:px-4 md:py-2 text-center w-fit text-sm md:text-base">
                    {founder.position}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed">{founder.description}</p>
            </div>
        </div>
    );
}

export default function Founders() {
    return (
        <section className="py-12 bg-gradient-to-t from-[#E7E7E7] to-[#EBE2FF]">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center">
                    <h2 className="text-3xl font-bold uppercase mb-4">ОСНОВАТЕЛИ КОМПАНИИ EduPro</h2>
                    <p className="bg-white px-4 py-2 rounded-full inline-block">ПУТЬ К ВАШЕЙ КАРЬЕРЕ</p>
                </div>

                <div className="flex justify-center mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 w-full">
                        {foundersData.map((founder) => (
                            <FounderCard key={founder.id} founder={founder} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}