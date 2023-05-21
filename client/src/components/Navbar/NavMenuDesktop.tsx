import { Link } from "react-router-dom";
import { NavMenuType } from ".";

interface NavMenuDesktopProps {
  menu: NavMenuType[];
};

export default function NavMenuDesktop(props: NavMenuDesktopProps) {
  return (
    // Only visible on larger screens
    <div className="hidden md:block" >
      <div className="flex gap-4 items-baseline text-gray-700 dark:text-gray-200">
        {props.menu.map((item) => (
          <Link
            key={item.url}
            to={item.url}
            className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-400"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

