import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
    const { t } = useTranslation();

    // Quick links labels come from `nav.*`
    const quickLinks = [
        { to: "/programs", label: t("nav.programs") },
        { to: "/pricing", label: t("nav.pricing") },
        { to: "/about", label: t("nav.about") },
        { to: "/contact", label: t("nav.contact") },
    ];

    // Program names from translations; slugs are your routes
    const programSlugs = ["frontend", "backend_django", "flutter", "ux_ui"];
    const programNames = t("programs.items", { returnObjects: true })
        .slice(0, 4)
        .map((p) => p.name);

    return (
        <footer className="w-full bg-slate-900 text-slate-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <h3 className="text-white font-bold text-xl">{t("footer.brand.name")}</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        {t("footer.brand.tagline")}
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-3">{t("footer.quick.title")}</h4>
                    <ul className="space-y-2">
                        {quickLinks.map((link) => (
                            <li key={link.to}>
                                <Link to={link.to} className="hover:text-white">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="text-white font-semibold mb-3">{t("nav.programs")}</h4>
                    <ul className="space-y-2">
                        {programNames.map((name, i) => (
                            <li key={programSlugs[i]}>
                                <Link to={`/programs/${programSlugs[i]}`} className="hover:text-white">
                                    {name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-3">{t("footer.contact.title")}</h4>
                    <ul className="space-y-2 text-sm">
                        <li>
                            {t("footer.contact.labels.email")}:{" "}
                            <a href={`mailto:${t("footer.contact.email")}`} className="hover:text-white">
                                {t("footer.contact.email")}
                            </a>
                        </li>
                        <li>
                            {t("footer.contact.labels.phone")}:{" "}
                            <a href="tel:+996555000111" className="hover:text-white">
                                {t("footer.contact.phone")}
                            </a>
                        </li>
                        <li>
                            {t("footer.contact.labels.telegram")}:{" "}
                            <a
                                href="https://t.me/eduproacademy"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-white"
                            >
                                {t("footer.contact.telegram")}
                            </a>
                        </li>
                        <li>
                            {t("footer.contact.labels.address")}: {t("footer.contact.location")}
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
                {t("footer.rights", { year: new Date().getFullYear() })}
            </div>
        </footer>
    );
}
