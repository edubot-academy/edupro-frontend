import React from "react";
import { useTranslation } from "react-i18next";
import check from "../assets/svg/check.svg";

export default function ComparePlans() {
  const { t } = useTranslation("pricePage");

  const comparePlans = t("comparePlans", { returnObjects: true }) || {
    title: "",
    columns: [],
  };

  const headers = comparePlans.columns?.map((col) => col.header) || [];
  const originalFeatures = comparePlans.columns?.[0]?.features || [];
  const featureTexts = Array.from(
    { length: 5 },
    (_, i) => originalFeatures[i % originalFeatures.length]
  );

  return (
    <section className="w-screen bg-[#fafafa] flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[90rem] w-full flex flex-col justify-center items-center">
        <h2 className="text-center text-2xl sm:text-3xl lg:text-[1.875rem] font-bold text-[#2E1F63] mb-12">
          {comparePlans.title}
        </h2>

        <div className="w-full">
          <table className="w-full table-fixed border-collapse bg-white rounded-lg shadow-sm text-sm sm:text-base">
            <thead className="bg-[#F5F5F5]">
              <tr className="border-b text-left text-gray-800 font-semibold">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="py-3 px-2 sm:px-4 text-center text-[0.625rem] sm:text-xs md:text-sm lg:text-base"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {featureTexts.map((feature, i) => (
                <tr key={i} className="border-b last:border-b-0 text-gray-700">
                  <td className="py-2 px-2 sm:px-4 text-left text-[0.625rem] sm:text-xs md:text-sm lg:text-base">
                    {feature}
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-center text-[0.625rem] sm:text-xs md:text-sm lg:text-base">
                    _
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-center flex justify-center">
                    <img
                      src={check}
                      alt="check"
                      className="w-4 h-6 sm:w-[1.25rem] sm:h-[1.8125rem]"
                    />
                  </td>
                  <td className="py-2 px-2 sm:px-4 text-center text-[0.625rem] sm:text-xs md:text-sm lg:text-base">
                    _
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
