import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function NavBrand() {
  return (
    <Link to="/" className="hover:scale-105 ease-in-out transition-all p-1.5 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-indigo-300 rounded-md flex items-center flex-shrink-0 text-gray-800 dark:text-gray-100 ">
      <FontAwesomeIcon icon={faCodeCompare} size="xl"  className="text-indigo-500 dark:text-indigo-300"/>
      <span className="ml-2 font-bold text-lg ">LeetCoder</span>
    </Link>
  );
};

