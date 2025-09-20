import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";

import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Pricing from "./pages/Pricing";
import Apply from "./pages/Apply";
import About from "./pages/About";
import Contact from "./pages/Contact";

import "./index.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,   // header + footer live here
    children: [
      { path: "/", element: <Home /> },
      { path: "/programs", element: <Programs /> },
      { path: "/programs/:slug", element: <ProgramDetail /> },
      { path: "/pricing", element: <Pricing /> },
      { path: "/apply", element: <Apply /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> }, // optional 404
    ],
  },
]);

function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
      <p className="text-slate-600 mt-2">The page you’re looking for doesn’t exist.</p>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<RouterProvider router={router} />);
