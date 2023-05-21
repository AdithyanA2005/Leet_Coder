import { Link } from "react-router-dom";

interface DropDownItemProps {
  itemText: string;
};

export default function DropDownItem(props: DropDownItemProps) {
  return (
    <li className="text-sm text-gray-700 dark:text-gray-200 dark:hover:text-white">
      {/* TODO: Add to Links */}
      <Link to="" className="block w-full py-2 px-4 rounded break-words sm:whitespace-nowrap hover:bg-gray-100 dark:hover:bg-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:bg-gray-100 dark:focus-visible:bg-gray-700">
        {props.itemText}
      </Link>
    </li>
  );
};

