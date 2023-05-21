import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import DarkModeContext from "../../context/DarkMode/DarkModeContext";
import Navbar from "../Navbar";
import "react-toastify/dist/ReactToastify.css";

export default function Layout() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
      <Navbar />

      <main className="min-h-screen pt-16 mx-auto max-w-screen-2xl px-4 md:px-8">
        <Outlet />
      </main>
      
      <ToastContainer
        position="top-left"
        theme={darkMode ? "dark" : "light"}
      />
    </>
  );
};

