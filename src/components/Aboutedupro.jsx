import React from "react";
import check from "../assets/icons/check.svg";
import world from "../assets/icons/world.svg";
import computer from "../assets/icons/computer.svg";
import person from "../assets/icons/person.svg";
import file from "../assets/icons/file.svg";

function AboutEdupro() {
  const features = [
    {
      title: "ИИ-жардамдуу окуу",
      text: "Жеке кеңештер, сигналдар жана дароо пикир.",
    },
    {
      title: "Карьера колдоосу",
      text: "Резюме, LinkedIn, мок-интервью, эмгек акы боюнча сүйлөшүү.",
    },
    { title: "Ыңгайлуу форматтар", text: "Кечки/дем алыш, онлайн же офлайн." },
    { title: "Жамаат", text: "Менторлор, бүтүрүүчүлөр жана өнөктөштөр." },
  ];

  const extraFeatures = [
    { icon: world, title: "Англис тили жана soft-skills" },
    { icon: computer, title: "Git жана спринттер менен командалык иш" },
    { icon: person, title: "Интернатура табууга жардам" },
    { icon: file, title: "8-жумага чейин жумушка даяр портфолио" },
  ];

  return (
    <div className="bg-gray-100 py-16 flex flex-col items-center">
      <div className="bg-white p-6 sm:p-10 rounded-2xl w-full max-w-5xl">
        <div className="text-center mb-8 sm:mb-10">
          <h2
            className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4"
            style={{ color: "#32215E" }}
          >
            Эмне учун EduPro
          </h2>

          <button className="bg-white border border-gray-300 rounded-full px-4 sm:px-6 py-2 hover:bg-gray-50 text-sm sm:text-base">
            ПУТЬ К ВАШЕЙ КАРЬЕРE
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 p-3 sm:p-4 rounded-lg"
              >
                <img
                  src={check}
                  alt="Check"
                  className="w-10 h-10 sm:w-11 sm:h-11"
                />
                <div className="flex-1 ml-3 sm:ml-4">
                  <h3
                    className="font-semibold text-base sm:text-lg"
                    style={{ color: "#32215E" }}
                  >
                    {feature.title}
                  </h3>
                  {feature.text && (
                    <p
                      className="text-sm sm:text-base"
                      style={{ color: "#32215E" }}
                    >
                      {feature.text}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 sm:space-y-12 mt-4 sm:mt-2">
            {extraFeatures.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-3 sm:gap-4 border-white shadow-lg p-3 sm:p-4 rounded-lg"
              >
                <img
                  src={feature.icon}
                  alt={feature.title}
                  className="w-14 h-14 sm:w-[61px] sm:h-[61px]"
                />
                <h3
                  className="text-sm sm:text-base"
                  style={{ color: "#32215E" }}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutEdupro;
