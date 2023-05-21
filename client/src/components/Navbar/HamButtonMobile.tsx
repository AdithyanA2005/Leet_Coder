import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

interface HamButtonMobileProps {
  onClick: () => void;
};

export default function HamButtonMobile(props: HamButtonMobileProps) {
  return (
    // Only visible on smaller screens
    <div className="-mr-2 flex md:hidden">
      <button
        onClick={props.onClick}
        className="h-9 w-9 p-2 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none transition duration-150 ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600"
        title="Toggle Main Menu"
      >
        <FontAwesomeIcon icon={faBars} size="lg" />
      </button>
    </div>
  );
};

