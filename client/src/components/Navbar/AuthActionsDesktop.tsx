import { Link } from "react-router-dom";
import { NavMenuType } from ".";

interface AuthActionsDesktopProps {
  menu: NavMenuType[];
};

export default function AuthActionsDesktop(props: AuthActionsDesktopProps) {
  return (
    // Only visible on larger screens
    <div className="hidden md:flex items-center gap-4">
      {props.menu.map((item) => (
        <Link
          key={item.url}
          to={item.url}
          className="px-3 py-2 rounded-md text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 transition duration-150 ease-in-out outline-none focus-visible:ring ring-indigo-300"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

