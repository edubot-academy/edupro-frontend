import React, { useEffect, useState } from "react";
import { submitLead } from "../lib/api";
import { getUTMs, readPersistedUTMs } from "../lib/utm";
import Insta from "../assets/intsa.svg"
import Telega from "../assets/telega.svg"
import Local from "../assets/local.svg"
import Call from "../assets/call.svg"
import Email from "../assets/email.svg"

import Right from "../assets/right.svg"
import { useTranslation } from "react-i18next";

export default function LeadForm({ programOptions = [] }) {
    const { t } = useTranslation();
   
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        phone: "",
        courseName: programOptions[0]?.slug || "frontend",
        courseType: "online",
        notes: "",
    });
    const [loading, setLoading] = useState(false);
    const [ok, setOk] = useState(false);
    const [err, setErr] = useState("");

    useEffect(() => {
        getUTMs();
    }, []);

    function onChange(e) {
        const { name, value } = e.target;
        setForm((f) => ({ ...f, [name]: value }));
    }

    async function onSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setErr("");
        try {
            const utm = readPersistedUTMs(); // include if present
            const payload = { ...form, source: "WEBSITE", ...utm };
            await submitLead(payload);
            setOk(true);
            setForm((f) => ({ ...f, fullName: "", email: "", phone: "", notes: "" }));
        } catch {
            setErr("Could not submit. Please try again.");
        } finally {
            setLoading(false);
        }
    }

    if (ok) {
        return (
            <div className="rounded-xl bg-emerald-50 p-4 text-emerald-800">
                Thanks! Our team will contact you within 24 hours.
            </div>
        );
    }

    const options = programOptions.length
        ? programOptions
        : [
            { slug: "frontend", title: "Frontend Engineering" },
            { slug: "backend_django", title: "Backend (Django)" },
            { slug: "flutter", title: "Mobile (Flutter)" },
            { slug: "ux_ui", title: "UX/UI Design" },
        ];

    const fieldBase =
        "rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500";

    return (
        <div
         className="bg-[#e8e1fb] flex justify-center py-16 px-4">
            <div className="bg-white  w-full rounded-[44px] flex flex-col items-center justify-center gap-[40px] p-[70px_125px] max-sm:w-full max-sm:max-w-[380px]">
         <div className='flex flex-col text-center pt-[70px] pb-[54px] max-sm:pt-0 max-sm:pb gap-[34px] max-sm:w-[350px]'>
        <h1 className=" w-[1000px]  font-[Unbounded] font-bold text-[50px]  text-[#32215E]  uppercase  md:text-[40px] lg:text-[50px] 
             max-sm:w-full max-sm:text-[20px] max-sm:text-center "> {t("consultation.title")}</h1>
       <p className='w-[898px] h-[60px] rounded-[100px] border border-[#C9C9C9] bg-[#FFFFFF] 
       px-[40px] py-[18px] gap-[10px] opacity-100 text-center text-gray-700   max-sm:w-[358.61px] max-sm:h-[64.7px] max-sm:rounded-[69.77px] max-sm:px-[30.7px] max-sm:py-[15.35px]'>{t("consultation.subtitle")}</p>
      </div>
        
    <div className="flex gap-[100px] max-sm:flex-col  max-sm:items-center">
            <form 
            onSubmit={onSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-col gap-[16px] flex-1 "
            aria-busy={loading}
        >
           <div className="flex flex-col gap-[16px] flex-1 ">
             <input
                name="fullName"
                required
                 placeholder={t("consultation.placeholders.fullName")}
                value={form.fullName}
                onChange={onChange}
                autoComplete="name"
                className={`${fieldBase} col-span-1 w-[540px] h-[68px] rounded-[20px] border border-gray-300 
         px-[44px] py-[22px] gap-[10px] opacity-100 bg-[#F5F5F5] max-sm:w-[350px]`}
            />

            {/* <input
                name="email"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                className={`${fieldBase} col-span-1`}
            /> */}
            

            <input
                name="phone"
                type="tel"
               placeholder={t("consultation.placeholders.phone")}
                value={form.phone}
                onChange={onChange}
                autoComplete="tel"
                className={`${fieldBase} col-span-1  w-[540px] h-[68px] rounded-[20px] border border-gray-300 
         px-[44px] py-[22px] gap-[10px] opacity-100 bg-[#F5F5F5] max-sm:w-[350px]`}
            />
            <div className="relative w-[540px] max-sm:w-[350px]">
                 <select
                name="courseName"
                value={form.courseName}
                onChange={onChange}
                className={`${fieldBase}  col-span-1 appearance-none w-full h-[68px] rounded-[20px] border border-gray-300 
             px-[44px] py-[22px] bg-[#F5F5F5] text-gray-700 focus:outline-none cursor-pointer`}
            >
                {options.map((p) => (
                    <option key={p.slug} value={p.slug}>
                        {p.title}
                    </option>
                ))}
                
            </select>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
         stroke-width="2" stroke="currentColor" 
         class="absolute right-[30px] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
         <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
         </svg>
            </div>
           

           <div className="relative w-[540px] max-sm:w-[350px]">
            <select
                name="courseType"
              
                value={form.courseType}
                onChange={onChange}
                className={`${fieldBase} col-span-1 appearance-none w-full h-[68px] rounded-[20px] border border-gray-300 
             px-[44px] py-[22px] bg-[#F5F5F5] text-gray-700 focus:outline-none cursor-pointer`}
            >
                <option value="online">{t("consultation.courseType.online")}</option>
                <option value="campus">{t("consultation.courseType.campus")}</option>
                <option value="hybrid">{t("consultation.courseType.hybrid")}</option>
            </select>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
         stroke-width="2" stroke="currentColor" 
         class="absolute right-[30px] top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none">
      <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
           </div>
           <button
                disabled={loading}
                className="flex items-center justify-center  w-[540px] h-[70px] rounded-[100px] px-[64px] py-[24px] gap-[24px] border border-[#C9C9C9] bg-[#7640FF] text-white opacity-100 max-sm:w-[350px]"
            >
               {loading ? t("consultation.submitting") : t("consultation.submit")}
                <img src={Right} alt="arrow" className="w-[40px] h-[24px]" /> 
            </button> 

            {/* <textarea
                name="notes"
                placeholder="Anything we should know?"
                value={form.notes}
                onChange={onChange}
                className={`${fieldBase} col-span-1 sm:col-span-2 lg:col-span-3 min-h-[110px]`}
            />

            {err && (
                <div className="col-span-1 sm:col-span-2 lg:col-span-3 text-sm text-red-600">
                    {err}
                </div>
            )} */}
           </div>
           </form>
           <div className='flex gap-[54px] pt-[70px] flex-1 max-sm:pt-0 max-sm:flex-col'>
                <div>
                    <div className='flex flex-col gap-[34px]'>
                        <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555]'>{t("consultation.socials")}</p>
                    <div className='flex gap-[12px]'>
                        <img src={Insta} alt="instagram" className='w-[65px] h-[65px] cursor-pointer' />
                        <img src={Telega} alt="telegram"  className='w-[65px] h-[65px] cursor-pointer'/>
                    </div>
                    </div>
                    
                   <div className="flex flex-col gap-[25px] items-center pt-[54px]">
          <p className="font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] mr-[180px]">
           {t("consultation.address")}
          </p>  
        
          <div className="flex items-center justify-center gap-[12px]">
            <img src={Local} alt=" className='w-[65px] h-[65px] cursor-pointer" />
            <p className="text-[#32215E] text-[20px] font-[Suisse Intl]"> {t("consultation.location")}</p>
          </div>
        </div>
        </div>
            <div className=''>
                    <div className='flex flex-col gap-[31px]'>
                        <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] pr-[40px]'>{t("consultation.contacts")}</p>
                        <div className='flex gap-[18px]'>
                            <img src={Call} alt="" className='w-[65px] h-[65px] cursor-pointer' />
                            <div className='flex flex-col'>
                                <span>+996 550 942 433</span>
                                <span>+996 550 942 433</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-[31px] pt-[30px]'>
                            <p className='font-[Suisse Intl] font-normal text-[24px] leading-[120%] tracking-[0.01em] text-center text-[#555555] mr-[140px]'>{t("consultation.email")}</p>
                            <div className='flex items-center justify-center gap-[12px]'>
                                <img src={Email} alt="" className='w-[65px] h-[65px] cursor-pointer' />
                                <p>info@edupro.academy</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
           </div>
           </div>
        </div>
        );
}
