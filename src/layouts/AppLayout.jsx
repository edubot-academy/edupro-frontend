import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-1 w-full">
                {/* Restores scroll to top on route change */}
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
