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
    <section className="w-screen bg-[#fafafa] flex justify-center items-center py-[3rem]">
      <div className="w-[90rem] h-[46.875rem] flex flex-col justify-center items-center">
        <h2 className="text-center text-[1.875rem] font-bold text-[#2E1F63] mb-[3rem]">
          {comparePlans.title}
        </h2>

        <div className="w-[75rem]">
          <table className="w-full border-collapse bg-white rounded-[0.75rem] shadow-sm">
            <thead className="bg-[#F5F5F5]">
              <tr className="border-b text-left text-[0.875rem] text-[#2E1F63] font-semibold">
                {headers.map((header, i) => (
                  <th key={i} className="py-[1rem] px-[1.5rem] text-center">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {featureTexts.map((feature, i) => (
                <tr
                  key={i}
                  className="border-b border-[#C9C9C9] last:border-b-0 text-gray-700 text-[0.875rem]"
                >
                  <td className="py-[1rem] px-[1.5rem] text-left">{feature}</td>
                  <td className="py-[1rem] px-[1.5rem] text-center">_</td>
                  <td className="py-[1rem] px-[1.5rem] text-center flex justify-center">
                    <img
                      src={check}
                      alt="check"
                      className="w-[1.25rem] h-[1.8125rem]"
                    />
                  </td>
                  <td className="py-[1rem] px-[1.5rem] text-center">_</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
