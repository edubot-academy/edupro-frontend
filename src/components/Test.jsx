import React from "react";
import { useTranslation } from "react-i18next";

function Test() {
    const { t } = useTranslation(["home"]);

    return (
        <div className="flex flex-col justify-center items-center gap-6 bg-[#FFFFFF] border border-gray rounded-xl mx-14 py-10 px-4">
            <h3 className="text-[#32215E] font-bold text-4xl text-center max-w-xl">
                {t("home:freeTest.title")}
            </h3>
            <p className="font-normal text-base text-center max-w-4xl">
                {t("home:freeTest.text")}
            </p>
            <button className="bg-gradient-to-t to-[#7640FF] from-[#472799] w-44 text-[#FFFFFF] rounded-lg py-2">
                {t("home:freeTest.button")}
            </button>
        </div>
    );
}

export default Test;
