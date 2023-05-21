import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import DarkModeContext from "../../context/DarkMode/DarkModeContext";

export default function ThemeBtnDesktop() {
  // Extranct from darkMode context
  const { darkMode, toggleTheme } = useContext(DarkModeContext);

  return (
    <button
      onClick={toggleTheme}
      className="flex justify-center items-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 p-2 ml-4 rounded-md focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-indigo-300"
    >
      {darkMode
        ? <FontAwesomeIcon icon={faSun} className="h-5 w-5" />
        : <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
      }
    </button>
  );
};

