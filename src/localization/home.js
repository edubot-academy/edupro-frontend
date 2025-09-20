export const home = {
    EN: {
        nav: { programs: "Programs", pricing: "Pricing", about: "About", contact: "Contact" },
        hero: {
            eyebrow: "Future-Ready Education",
            title: "Learn skills that get you hired.",
            subtitle: "EduPro Academy blends practical projects, mentorship, and AI-assisted learning to turn beginners into job‑ready talent.",
            ctaPrimary: "Apply now",
            ctaSecondary: "Download brochure"
        },
        metrics: [
            { value: "1,200+", label: "Graduates" },
            { value: "87%", label: "Hire/Internship rate" },
            { value: "25+", label: "Hiring partners" },
            { value: "3", label: "Languages (EN/KG/RU)" }
        ],
        programs: {
            title: "Popular Programs",
            items: [
                { name: "Frontend Engineering", dur: "16 weeks", text: "React, Tailwind, APIs, deployment, interview prep." },
                { name: "Backend with Django", dur: "24 weeks", text: "Python, Django REST, PostgreSQL, Docker, CI/CD." },
                { name: "Mobile with Flutter", dur: "20 weeks", text: "Dart, Flutter UI, state mgmt, Play Store/App Store." },
                { name: "UX/UI Design", dur: "12 weeks", text: "Figma, research, wireframes, design systems, handoff." }
            ]
        },
        how: {
            title: "How it works",
            steps: [
                { t: "Learn by building", d: "Short lessons + real projects guided by mentors." },
                { t: "Get feedback", d: "Code reviews, design critiques, weekly checkpoints." },
                { t: "Build portfolio", d: "Ship capstones that impress recruiters." },
                { t: "Land the role", d: "Interview coaching, referrals, and job search support." }
            ]
        },
        features: {
            title: "Why choose EduPro",
            items: [
                { t: "AI‑assisted learning", d: "Personalized tips, hints, and instant feedback while you study." },
                { t: "Career support", d: "Resume, LinkedIn, mock interviews, salary negotiation." },
                { t: "Flexible formats", d: "Evenings & weekends, online or on‑campus." },
                { t: "Community", d: "Access mentors, alumni and hiring partners." }
            ]
        },
        outcomes: {
            title: "Outcomes you can measure",
            bullets: [
                "Job‑ready portfolio by Week 8",
                "Real‑world teamwork via Git & sprints",
                "English & soft‑skills coaching",
                "Internship placement support"
            ]
        },
        testimonials: {
            title: "What our students say",
            items: [
                { name: "Aizada T.", role: "Frontend Dev @ FinTech", quote: "The projects felt like real work. The mock interviews made the difference." },
                { name: "Erkin K.", role: "Junior Python Dev", quote: "Mentors reviewed every pull request. I learned faster than in college." }
            ]
        },
        pricing: {
            title: "Tuition options",
            plans: [
                { name: "Starter", price: "$49/mo", feat: ["Weekly workshops", "Community access", "Career webinars"] },
                { name: "Pro Track", price: "$149/mo", featured: true, feat: ["Full curriculum", "1:1 mentor", "Capstone review", "Interview prep"] },
                { name: "Career Plus", price: "$399/mo", feat: ["All Pro", "Guaranteed internship*", "Personal coach"] }
            ],
            note: "*Guarantee depends on assessment and attendance."
        },
        faq: {
            title: "FAQ",
            items: [
                { q: "Do I need prior experience?", a: "No. We start from fundamentals and accelerate quickly with projects." },
                { q: "Is it in-person or online?", a: "Both options are available; choose what fits your schedule." },
                { q: "Will you help me find a job?", a: "Yes—portfolio, mock interviews, and referrals through partner network." }
            ]
        },
        cta: { title: "Ready to start?", subtitle: "Apply in 3 minutes. Our team will follow up within 24 hours.", button: "Start application" },
        footer: { rights: "© " + new Date().getFullYear() + " EduPro Academy. All rights reserved." }
    },
    KG: {
        nav: { programs: "Программалар", pricing: "Баасы", about: "Биз жөнүндө", contact: "Байланыш" },
        hero: {
            eyebrow: "Келечекке даяр билим",
            title: "Ишке орноштуруучу көндүмдөрдү үйрөнүңүз.",
            subtitle: "EduPro Academy – практика, ментордук жана AI жардамчы окутуу аркылуу башталгычтарды да жумушка даяр адиске айлантат.",
            ctaPrimary: "Катталуу",
            ctaSecondary: "Брошюраны жүктөө"
        },
        metrics: [
            { value: "1,200+", label: "Бүтүрүүчүлөр" },
            { value: "87%", label: "Иш/интернатура" },
            { value: "25+", label: "Өнөктөштөр" },
            { value: "3", label: "Тилдер (EN/KG/RU)" }
        ],
        programs: {
            title: "Популярдуу программалар",
            items: [
                { name: "Frontend Инженериясы", dur: "16 жума", text: "React, Tailwind, API, жайгаштыруу, интервью." },
                { name: "Django менен Backend", dur: "24 жума", text: "Python, Django REST, PostgreSQL, Docker, CI/CD." },
                { name: "Flutter менен Мобилдик", dur: "20 жума", text: "Dart, Flutter UI, абал башкаруу, дүкөндөргө чыгаруу." },
                { name: "UX/UI Дизайн", dur: "12 жума", text: "Figma, изилдөө, wireframe, дизайн системалары." }
            ]
        },
        how: {
            title: "Кантип иштейт",
            steps: [
                { t: "Куруп үйрөнүү", d: "Кыска сабактар + реалдуу долбоорлор менторлор менен." },
                { t: "Кайтарым байланыш", d: "Код/дизайн кароолор, жума сайын чек-пойнт." },
                { t: "Портфолио", d: "Рекрутерлерди таасирденткен capstone долбоорлор." },
                { t: "Жумушка кирүү", d: "Интервью даярдык, сунуш каттар, жумуш издөө колдоо." }
            ]
        },
        features: {
            title: "Эмне үчүн EduPro",
            items: [
                { t: "AI жардамчы окутуу", d: "Жеке кеңештер жана заматта пикир." },
                { t: "Карьера колдоосу", d: "Резюме, LinkedIn, mock интервью, айлык талкуулоо." },
                { t: "Ийкемдүү формат", d: "Кечки/дем алыш, онлайн же оффлайн." },
                { t: "Комьюнити", d: "Менторлор, бүтүрүүчүлөр, өнөктөштөр." }
            ]
        },
        outcomes: { title: "Натыйжалар", bullets: ["8‑жумага чейин портфолио", "Git & спринттер менен команда болуп иштөө", "Англис & soft‑skills", "Интернатура табууга жардам"] },
        testimonials: { title: "Пикирлер", items: [{ name: "Айзада Т.", role: "Frontend Дев @ FinTech", quote: "Долбоорлор реалдуу иштей болду. Mock интервью чоң жардам берди." }, { name: "Эркин К.", role: "Junior Python Дев", quote: "Ар бир PR каралды. Университеттен ылдам үйрөндүм." }] },
        pricing: { title: "Төлөм пландары", plans: [{ name: "Starter", price: "$49/ай", feat: ["Жумалык воркшоп", "Комьюнити", "Карьера вебинар"] }, { name: "Pro Track", price: "$149/ай", featured: true, feat: ["Толук программа", "1:1 ментор", "Capstone карап чыгуу", "Интервью даярдык"] }, { name: "Career Plus", price: "$399/ай", feat: ["Бардык Pro", "Кепилденген интернатура*", "Жеке коуч"] }], note: "*Кепил шарттары баалоо/катышууга көз каранды." },
        faq: { title: "Суроо-жооп", items: [{ q: "Тажрыйба керекпи?", a: "Жок. Нөлдөн баштап долбоорлор менен тез илгерилейбиз." }, { q: "Онлайнбы же оффлайн?", a: "Эки варианты бар — өзүңүзгө ылайыгын тандаңыз." }, { q: "Жумуш табууга жардам бересизби?", a: "Ооба — портфолио, mock интервью жана өнөктөштөр аркылуу." }] },
        cta: { title: "Баштоого даярсызбы?", subtitle: "3 мүнөттө анкетаны толтуруңуз — 24 саат ичинде байланышабыз.", button: "Азыр катталуу" },
        footer: { rights: "© " + new Date().getFullYear() + " EduPro Academy. Бардык укуктар корголгон." }
    },
    RU: {
        nav: { programs: "Программы", pricing: "Оплата", about: "О нас", contact: "Контакты" },
        hero: {
            eyebrow: "Образование будущего",
            title: "Осваивайте навыки, за которые платят.",
            subtitle: "EduPro Academy сочетает практические проекты, менторство и обучение с AI, чтобы выпускники были готовы к трудоустройству.",
            ctaPrimary: "Поступить",
            ctaSecondary: "Скачать брошюру"
        },
        metrics: [
            { value: "1,200+", label: "Выпускников" },
            { value: "87%", label: "Трудоустройство/стажировки" },
            { value: "25+", label: "Партнёров" },
            { value: "3", label: "Языка (EN/KG/RU)" }
        ],
        programs: {
            title: "Популярные направления",
            items: [
                { name: "Frontend Инженерия", dur: "16 недель", text: "React, Tailwind, API, деплой, собеседования." },
                { name: "Backend на Django", dur: "24 недели", text: "Python, Django REST, PostgreSQL, Docker, CI/CD." },
                { name: "Мобильная разработка (Flutter)", dur: "20 недель", text: "Dart, UI, управление состоянием, публикация приложений." },
                { name: "UX/UI Дизайн", dur: "12 недель", text: "Figma, ресёрч, прототипы, дизайн‑системы." }
            ]
        },
        how: { title: "Как мы учим", steps: [{ t: "Учимся, создавая", d: "Короткие уроки + реальные проекты с наставниками." }, { t: "Получаем фидбек", d: "Код‑ревью, дизайн‑критики, еженедельные чекпоинты." }, { t: "Портфолио", d: "Капстоуны, которые нравятся рекрутёрам." }, { t: "Выход на рынок", d: "Подготовка к интервью и поддержка в поиске работы." }] },
        features: { title: "Почему EduPro", items: [{ t: "Обучение с AI", d: "Персональные подсказки и мгновенная обратная связь." }, { t: "Карьерный трек", d: "Резюме, LinkedIn, мок‑интервью, торг по офферам." }, { t: "Гибкий формат", d: "Вечера и выходные, онлайн/оффлайн." }, { t: "Комьюнити", d: "Наставники, выпускники, партнёры." }] },
        outcomes: { title: "Осязаемые результаты", bullets: ["Портфолио к 8‑й неделе", "Работа в команде через Git и спринты", "Английский и soft‑skills", "Поддержка стажировок"] },
        testimonials: { title: "Отзывы", items: [{ name: "Айзада Т.", role: "Frontend Dev @ FinTech", quote: "Проекты были как на работе. Мок‑интервью — ключ к успеху." }, { name: "Эркин К.", role: "Junior Python Dev", quote: "Каждый PR посмотрели. Учился быстрее, чем в вузе." }] },
        pricing: { title: "Оплата", plans: [{ name: "Starter", price: "$49/мес", feat: ["Еженедельные воркшопы", "Комьюнити", "Карьера‑вебинары"] }, { name: "Pro Track", price: "$149/мес", featured: true, feat: ["Полный курс", "1:1 ментор", "Ревью капстоуна", "Подготовка к интервью"] }, { name: "Career Plus", price: "$399/мес", feat: ["Всё из Pro", "Гарантированная стажировка*", "Личный коуч"] }], note: "*Зависит от оценок и посещаемости." },
        faq: { title: "Вопросы и ответы", items: [{ q: "Нужен опыт?", a: "Нет. Начинаем с базовых тем и быстро переходим к проектам." }, { q: "Формат обучения?", a: "Онлайн и очно — выбирайте подходящее расписание." }, { q: "Поможете с работой?", a: "Да: портфолио, мок‑интервью и рекомендации партнёров." }] },
        cta: { title: "Готовы начать?", subtitle: "Заявка за 3 минуты. Ответим в течение 24 часов.", button: "Подать заявку" },
        footer: { rights: "© " + new Date().getFullYear() + " EduPro Academy. Все права защищены." }
    }
};