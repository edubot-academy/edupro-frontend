import { useTranslation } from "react-i18next";

export default function Metrics() {
    const { t } = useTranslation("home");
    const metricsObj = t("metrics", { returnObjects: true });
    const metrics = Array.isArray(metricsObj) ? metricsObj : Object.values(metricsObj);

    return (
        <section className="py-8">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {metrics.map((m, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white border border-[#C9C9C9] p-6 text-center shadow-sm"
                        >
                            <div className="text-3xl font-bold [color:#472799]">
                                {m.value}
                            </div>
                            <div className="text-slate-500 mt-1 text-sm">{m.label}</div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
