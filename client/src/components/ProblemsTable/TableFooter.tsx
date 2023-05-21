import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function TableFooter() {
  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="Table navigation"
    >
      <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">1-10</span>
        {" "}of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">1000</span>
      </span>

      <ul className="flex text-white divide-x border border-gray-300 dark:border-gray-700">
        {/* Previous Page */}
        <a
          href="#"
          title="Previous Page"
          className="py-1.5 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out focus-visible:outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600 focus-visible:z-10"
        >
          <FontAwesomeIcon icon={faAngleLeft} />
        </a>

        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((text, index) => (
          <a key={index} href="" className="py-1.5 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out focus-visible:outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600 focus-visible:z-10">
            {text}
          </a>
        ))}

        {/* Next Page */}
        <a
          href="#"
          title="Next Page"
          className="py-1.5 px-3 text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white bg-white hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 border-gray-300 dark:border-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out focus-visible:outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600 focus-visible:z-10"
        >
          <FontAwesomeIcon icon={faAngleRight} />
        </a>
      </ul>
    </nav>
  );
};

