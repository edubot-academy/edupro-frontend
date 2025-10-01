import { Outlet, ScrollRestoration } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

export default function AppLayout() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            {/* <Navbar /> */}
            <Header/>
            <MobileNavbar/>
            <main className="flex-1 w-full">
                {/* Restores scroll to top on route change */}
                <ScrollRestoration />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
