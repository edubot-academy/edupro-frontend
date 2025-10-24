import { useTranslation } from "react-i18next";

export default function Metrics() {
    const { t } = useTranslation("home");
    const metricsObj = t("metrics", { returnObjects: true });
    const metrics = Array.isArray(metricsObj) ? metricsObj : Object.values(metricsObj);

    return (
        <section className="w-full">
            <div className="mx-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className="w-80 rounded-2xl bg-white border border-[#C9C9C9] py-12 px-10 text-center shadow-sm"
                        >
                            <div className="text-5xl font-bold text-[#472799] mb-4">
                                {m.value}
                            </div>
                            <div className="text-slate-500 mt-1 text-base">{m.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
}
