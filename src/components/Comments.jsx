import React from "react";
import cursorBack from "../assets/cursor-backend.svg"
import cursorfront from "../assets/cursor-frontend.svg"
import cursorFlutter from "../assets/cursor-flutter.svg"
import cursorUxui from "../assets/cursor-ux-ui.svg"
import comment from "../assets/comment-back.png"


const Comments = () => {
  const cards = [
    {
      text: "“Долбоорлор чыныгы жумуштай болду. Мок-интервью чечүүчү роль ойнооду.”",
      name: "— Эркин К., Junior Python Dev",
      tag: "UX-UI",
      position: "top-0 left-[100px]",
      avatar: "https://i.pravatar.cc/100?img=1",
    },
    {
      text: "“Наставниктер ар бир PRды карады. Университетке караганда тез үйрөндүм.”",
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "Frontend",
      position: "top-0 left-[600px]",
      avatar: "https://i.pravatar.cc/100?img=2",
    },
    {
      text: "“Наставниктер ар бир PRды карады. Университетке караганда тез үйрөндүм.”",
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "UX-UI",
      position: "left-[200px] top-[200px]",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    {
      text: "“Наставниктер ар бир PRды карады. Университетке караганда тез үйрөндүм.”",
      name: "— Айзада Т., Frontend Dev @ FinTech",
      tag: "Flutter",
      position: "left-[700px] top-[200px]",
      avatar: "https://i.pravatar.cc/100?img=4",
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Заголовок */}
      <div className="text-center mb-16">
        <h2 className="text-[#32215E] text-3xl md:text-5xl font-bold uppercase mb-3">
          СТУДЕНТТЕР ЭМНЕ ДЕЙТ
        </h2>
        <div className="px- py-2.5 w-[250px] border border-gray-300 rounded-full text-gray-600 text-base font-medium m-auto">
          ПУТЬ К ВАШЕЙ КАРЬЕРЕ
        </div>
      </div>

      {/* Карточки в абсолютных позициях */}
      <div className="relative w-full max-w-7xl mx-auto h-[650px] md:h-[500px]">
        {cards.map((c, i) => (
          <div className={`flex items-end absolute ${c.position}`}>
            <img
              src={c.avatar}
              alt={c.name}
              className="w-12 rounded-full object-cover z-20"
            />

            {/* comment.png теперь сзади */}



            {/* сам текстовый блок — поверх comment */}
            <div
              key={i}
              className={` relative w-[300px] md:w-[380px] pt-[20px] pl-[20px] pr-[50px] pb-[30px] ml-4 z-10 mb-6`}
            >
              <img
                src={comment}
                alt=""
                className="absolute top-0 left-0 z-0 w-[380px]"
              />
              <div className="relative z-10">
                <p className="text-[#2C2C2C] font-[Suisse_Intl] font-normal text-[20px] leading-[120%] tracking-[1%] mb-3">
                  {c.text}
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-gray-600 text-sm">{c.name}</span>
                </div>
              </div>
            </div>
          </div>

        ))}

        <div className="">
          <img src={cursorfront} alt="" />
          <div className="ml-4 mt-[-5px] bg-[#DD2590] w-[102px] h-[40px] rounded-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Frontend
          </div>
        </div>
        <div className="">
          <img src={cursorUxui} alt="" />
          <div className="ml-6 mt-[-1px] border-2 border-[#DD2590] bg-[#DD2590] w-[62px] h-[28px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            UX-UI
          </div>
        </div>
        <div className="">
          <img src={cursorFlutter} alt="" />
          <div className="ml-4 mt-[-5px] shadow-[4px_4px_10px_0px_#12B76A29] border-2 border-[#039855] bg-[#12B76A] w-[87px] h-[40px] rounded-tl-[2px] rounded-tr-[24px] rounded-br-[24px] rounded-bl-[24px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Flutter
          </div>
        </div>
        <div className="">
          <img src={cursorBack} alt="" />
          <div className="ml-5 mt-[-6px] bg-[#1570EF] w-[99px] h-[40px] flex justify-center items-center text-white font-inter font-medium text-[16px]">
            Backend
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comments;
