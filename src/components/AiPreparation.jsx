import React from "react";
import checkMarks from "../assets/svg/checkMarks.svg";
import arrowRight from "../assets/svg/arrowRight.svg";

export default function AiPreparation() {
  return (
    <section className="w-full flex flex-col items-center py-12 bg-white px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col items-center gap-4 mb-12 w-full mx-auto text-center">
        <h2
          className="text-[#32215E] font-bold leading-tight text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px]"
          style={{ fontFamily: "Unbounded, sans-serif" }}
        >
          PREPARING STUDENTS FOR AN <br className="hidden md:block" />
          AI-DRIVEN FUTURE.
        </h2>

        <button className="w-full max-w-[388px] h-[60px] sm:h-[70px] md:h-[77px] text-[#555555] border border-[#C9C9C9] bg-white rounded-[100px] text-[14px] sm:text-[15px] md:text-[16px]">
          Preparing students for an AI-driven future.
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-between items-start gap-12 max-w-[1240px] w-full mx-auto">
        <div className="flex flex-col justify-between gap-6 w-full lg:max-w-[40rem]">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-black text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px] mb-2">
                OUR MISSION
              </h3>
              <p className="text-black text-[16px] sm:text-[17px] md:text-[18px] mb-2">
                Make high-quality tech education accessible in Kyrgyzstan and
                beyond, and connect graduates to real roles.
              </p>
              <ul className="list-disc list-inside text-black text-[16px] sm:text-[17px] md:text-[18px] mb-2">
                <li>Hands-on projects reviewed by mentors</li>
                <li>Portfolio by Week 8</li>
                <li>Internship & job search support</li>
              </ul>
              <p className="text-black text-[16px] sm:text-[17px] md:text-[18px]">
                We blend practical projects, mentorship, and AI-assisted
                learning to help beginners become job-ready. Our programs are
                bilingual (KG/RU) with English support and a strong focus on
                real outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-black text-[22px] sm:text-[26px] md:text-[28px] lg:text-[30px]">
                WHAT WE DO
              </h3>
              <p className="text-black text-[16px] sm:text-[17px] md:text-[18px]">
                We run cohort-based programs in Frontend, Backend (Django),
                Flutter, and UX/UI. Students learn by building, get weekly
                feedback, and graduate with career assets.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6 w-full">
            <button className="w-full sm:w-[388px] h-[60px] sm:h-[70px] md:h-[77px] bg-gradient-to-r from-[#7640FF] to-[#472799] text-white rounded-[100px] text-[16px] sm:text-[18px] md:text-[20px] font-semibold flex items-center justify-center gap-2">
              Explore Programs
              <img
                src={arrowRight}
                alt="Arrow Right"
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8"
              />
            </button>

            <button className="w-full sm:w-[247px] h-[60px] sm:h-[70px] md:h-[77px] border border-black text-[#2C2C2C] rounded-[100px] text-[16px] sm:text-[18px] md:text-[20px] flex items-center justify-center gap-2">
              Apply Now
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[600px] mt-10 lg:mt-[50px]">
          {[
            {
              title: "AI-ASSISTANT READING",
              text: "Personalized advice, alerts, and immediate feedback.",
            },
            {
              title: "CAREER SUPPORT",
              text: "Resume, LinkedIn, mock interview, salary negotiation.",
            },
            {
              title: "CONVENIENT FORMATS",
              text: "Evenings/weekends, online or offline.",
            },
            {
              title: "COMMUNITY",
              text: "Mentors, alumni, and partners.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-start sm:items-center gap-3 sm:gap-4"
            >
              <img
                src={checkMarks}
                alt="icon"
                className="w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11"
              />
              <div className="flex flex-col">
                <h4 className="text-[#32215E] font-bold text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
                  {item.title}
                </h4>
                <p className="text-black text-[16px] sm:text-[18px]">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
