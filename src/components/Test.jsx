import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./UI/Button";

function Test() {
    const { t } = useTranslation(["common"]);

    return (
        <div className="flex flex-col justify-center items-center gap-6 bg-[#FFFFFF] border border-gray rounded-xl mx-14 py-10 px-4">
            <h3 className="text-[#32215E] font-bold text-4xl text-center max-w-xl">
                {t("common:freeTest.title")}
            </h3>
            <p className="font-normal text-base text-center max-w-4xl">
                {t("common:freeTest.text")}
            </p>
            <Button>
                {t("common:freeTest.button")}
            </Button>
        </div>
    );
}

export default Test;
