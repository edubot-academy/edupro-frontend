import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="w-full bg-slate-900 text-slate-300 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-4">
                {/* Brand */}
                <div>
                    <h3 className="text-white font-bold text-xl">EduPro Academy</h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                        Preparing students for an AI-driven future with practical IT skills
                        and mentorship.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="hover:text-white">Home</Link></li>
                        <li><Link to="/programs" className="hover:text-white">Programs</Link></li>
                        <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
                        <li><Link to="/about" className="hover:text-white">About</Link></li>
                        <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                    </ul>
                </div>

                {/* Programs */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Programs</h4>
                    <ul className="space-y-2">
                        <li><Link to="/programs/frontend" className="hover:text-white">Frontend Engineering</Link></li>
                        <li><Link to="/programs/backend_django" className="hover:text-white">Backend (Django)</Link></li>
                        <li><Link to="/programs/flutter" className="hover:text-white">Mobile (Flutter)</Link></li>
                        <li><Link to="/programs/ux_ui" className="hover:text-white">UX/UI Design</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 className="text-white font-semibold mb-3">Contact</h4>
                    <ul className="space-y-2 text-sm">
                        <li>Email: <a href="mailto:info@edupro.academy" className="hover:text-white">info@edupro.academy</a></li>
                        <li>Phone: <a href="tel:+996555000111" className="hover:text-white">+996 (555) 000-111</a></li>
                        <li>Telegram: <a href="https://t.me/eduproacademy" target="_blank" rel="noreferrer" className="hover:text-white">@eduproacademy</a></li>
                        <li>Address: Bishkek, Kyrgyzstan</li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-slate-800 py-4 text-center text-sm text-slate-400">
                © {new Date().getFullYear()} EduPro Academy. All rights reserved.
            </div>
        </footer>
    );
}
