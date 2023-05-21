import { Link } from "react-router-dom";
import { NavMenuType } from ".";

interface NavMenuMobileProps {
  menu: NavMenuType[];
};

export default function NavMenuMobile(props: NavMenuMobileProps) {
  return (
    <nav className="block px-2 pt-1 pb-3 sm:px-3 mb-2 md:hidden bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-700 rounded-md mx-auto w-11/12">
      {props.menu.map((item) => (
        <Link key={item.url} to={item.url} className="mt-1 block px-3 py-2 focus:rounded-md hover:rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-b border-gray-100 dark:border-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600">
          {item.title}
        </Link>
      ))}
    </nav>
  );
};

