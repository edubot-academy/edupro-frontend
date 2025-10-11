import React from 'react';
import earth from '../assets/earth.png';
import bg from '../assets/violet_bg.png';
import { useTranslation } from 'react-i18next';
import mobile_bg from '../assets/bg_mobile.png';
import {
  SiHtml5, SiCss3, SiReact, SiJavascript, SiTypescript, SiRedux, SiGithub, SiGit,
  SiPython, SiPostgresql, SiDocker, SiLinux, SiNginx,
  SiDart, SiFlutter, SiFigma, SiNodedotjs, SiBookstack
} from "react-icons/si";
import { FaHeadphones, FaComments, FaPenFancy } from "react-icons/fa";

export default function PopularPrograms() {
  const { t } = useTranslation(['home']);
  const programs = t('home:programs.items', { returnObjects: true }) || [];

  
  const techIcons = {
    HTML5: SiHtml5,
    CSS3: SiCss3,
    React: SiReact,
    JavaScript: SiJavascript,
    TypeScript: SiTypescript,
    Redux: SiRedux,
    GitHub: SiGithub,
    Git: SiGit,
    Python: SiPython,
    PostgreSQL: SiPostgresql,
    Docker: SiDocker,
    Linux: SiLinux,
    Nginx: SiNginx,
    Dart: SiDart,
    Flutter: SiFlutter,
    Figma: SiFigma,
    NodeJS: SiNodedotjs,

    // English skills
    Grammar: SiBookstack,
    Vocabulary: SiBookstack,
    Listening: FaHeadphones,
    Speaking: FaComments,
    Writing: FaPenFancy,
  };

  // 🔹 Технологии для каждой программы
  const programTechs = {
    Frontend: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Redux", "Git", "GitHub"],
    Backend: ["Python", "PostgreSQL", "Docker", "Linux", "Nginx", "Git"],
    Fullstack: ["HTML5", "CSS3", "JavaScript", "React", "NodeJS", "TypeScript", "PostgreSQL", "Docker", "Git"],
    English: ["Grammar", "Vocabulary", "Listening", "Speaking", "Writing"],
    Mobile: ["Flutter", "Dart", "Git", "GitHub", "Figma"],
    UXUI: ["Figma", "HTML5", "CSS3", "Git", "JavaScript"],
  };

  // 🔹 Улучшенная функция для получения технологий
  const getProgramTechs = (programName) => {
    if (!programName) return [];
    
    const name = programName.trim().toLowerCase();
    
    // Фронтенд варианты
    if (name.includes('фронт') || name.includes('frontend')) {
      return programTechs.Frontend || [];
    } 
    // Бэкенд варианты
    else if (name.includes('бэк') || name.includes('back-end') || name.includes('backend')) {
      return programTechs.Backend || [];
    } 
    // Фулстек варианты
    else if (name.includes('фул') || name.includes('fullstack') || name.includes('full-stack')) {
      return programTechs.Fullstack || [];
    } 
    // Английский варианты
    else if (name.includes('англ') || name.includes('english') || name.includes('ingl')) {
      return programTechs.English || [];
    }
    // Mobile with Flutter
    else if (name.includes('mobile') || name.includes('flutter') || name.includes('мобил')) {
      return programTechs.Mobile || [];
    }
    // UX/UI Design
    else if (name.includes('ux') || name.includes('ui') || name.includes('design') || name.includes('дизайн')) {
      return programTechs.UXUI || [];
    }
    
    // Прямое соответствие
    const directMatch = programTechs[programName.trim()];
    if (directMatch) return directMatch;
    
    console.warn(`No technologies found for program: ${programName}`);
    return [];
  };

  // Проверка структуры данных programs
  console.log('PROGRAMS DATA:', programs);
  console.log('Programs type:', typeof programs);
  console.log('Programs length:', programs.length);
  
  if (!Array.isArray(programs) || programs.length === 0) {
    return <div className="text-white text-center py-8">No programs data available</div>;
  }

  return (
    <section className="relative w-full mb-10">
      {/* Земля */}
      <div className="flex justify-center relative z-10 pt-20">
        <img
          src={earth}
          alt="Earth"
          className="w-[160px] h-[400px] max-w-full object-contain 
             md:w-[200px] md:h-[390px] 
             sm:w-[180px] sm:h-[220px] 
             xs:w-[150px] xs:h-[180px]
             lg:w-[285px] lg:h-[380px]"
        />
      </div>

   
      <div className="relative flex justify-center -mt-44">
       
        <img
          src={bg}
          alt="Background"
          className="w-full max-w-full object-cover hidden md:block"
        />

   
        <img
          src={mobile_bg}
          alt="Background"
          className="w-full max-w-full object-cover md:hidden"
        />

     
        <h1 className="absolute text-[180px] md:text-[220px] lg:text-[280px] xl:text-[390px] font-bold bg-gradient-to-t from-[#190B3B] to-[#A37FFF] bg-clip-text text-transparent opacity-15 select-none top-[calc(25%-15px)] left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:block hidden max-w-[90vw] overflow-hidden">
          EduPro
        </h1>

        <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-4
                top-[calc(5%+5px)] xs:top-[calc(8%+5px)] sm:top-[calc(12%+5px)] md:top-[calc(14%+5px)] lg:top-[calc(18%+5px)] xl:top-[calc(20%+5px)]">
          <h2 className="text-white font-bold leading-[120%] tracking-[1%] text-center pt-9 uppercase whitespace-nowrap 
                 text-[20px] xs:text-[28px] sm:text-[36px] md:text-[44px] lg:text-[50px]">
            {t('home:programs.title')}
          </h2>

          <div className="bg-white rounded-full 
                 px-3 py-1 xs:px-4 xs:py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-4">
            <p className="text-[#555555] font-normal leading-[120%] tracking-[1%] text-center 
                 text-base xs:text-lg sm:text-xl md:text-2xl">
              ПУТЬ К ВАШЕЙ КАРЬЕРЕ
            </p>
          </div>
        </div>
      </div>

      {/* Карточки программ */}
      <div className="relative flex justify-center z-20 mx-auto max-w-9xl px-4 sm:px-6 lg:px-8 mt-[5%] sm:mt-[10%] md:-mt-[25%] lg:-mt-[35%] xl:-mt-[420px]">
        <div className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 overflow-x-auto pb-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {programs.map((p, i) => {
            const rawName = p.name?.trim() || `Program ${i + 1}`;
            const techList = getProgramTechs(rawName);

        
            console.log(`Program ${i}:`, rawName, 'Technologies:', techList);

            return (
              <article
                key={i}
                className="flex-shrink-0 rounded-2xl bg-white w-80 md:w-auto ring-1 ring-slate-200 p-5 shadow-sm hover:shadow-lg transition min-w-0"
              >
                <h3 className="font-bold text-[20px] leading-[120%] tracking-[0.01em] uppercase">
                  {rawName}
                </h3>

                <p className="text-sm text-slate-500 mt-1">{p.dur || 'Duration not specified'}</p>
                <p className="text-slate-600 mt-2 text-sm leading-relaxed line-clamp-3">
                  {p.text || 'Description not available'}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {techList.length > 0 ? (
                    techList.map((tech, idx) => {
                      const Icon = techIcons[tech];
                      return (
                        <div
                          key={idx}
                          className="flex items-center border border-black rounded-md px-1.5 py-0.5 text-xs hover:scale-105 transition-transform"
                        >
                          {Icon ? (
                            <Icon className="w-4 h-4 mr-1.5 text-[#555]" />
                          ) : (
                            <span className="w-4 h-4 mr-1.5 bg-gray-300 rounded flex items-center justify-center text-[10px]">
                              ?
                            </span>
                          )}
                          {tech}
                        </div>
                      );
                    })
                  ) : (
                    <span className="text-slate-400 text-xs italic">
                      Technologies not configured for: {rawName}
                    </span>
                  )}
                </div>

                <a
                  href="#apply"
                  className="mt-3 inline-flex text-emerald-700 font-semibold text-sm hover:text-emerald-800 transition-colors"
                >
                  Apply →
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}