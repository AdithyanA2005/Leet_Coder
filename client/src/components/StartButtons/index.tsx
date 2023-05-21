import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/Auth/AuthContext";

export default function StartButtons() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <Link to={user ? "/problemset" : "/signup"} className="grid place-items-center rounded-lg bg-indigo-500 px-8 py-3 text-sm text-center font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
        {user ? "Start practicing" : "Register"}
      </Link>
      <Link to={user ? "/about" : "/signin"} className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-200 dark:hover:bg-gray-300 dark:active:bg-gray-400 active:bg-gray-500 text-gray-600 hover:text-gray-700 active:text-gray-800 grid place-items-center rounded-lg text-center px-8 py-3 text-sm font-semibold outline-none ring-indigo-300 transition duration-100 focus-visible:ring md:text-base">
        {user ? "Learn more" : "Login"}
      </Link>
    </>
  );
};

