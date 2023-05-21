import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

interface DropDownBtnProps {
  btnText: string;
  handleOnClick: () => void;
};

export default function DropDownBtn(props: DropDownBtnProps) {
  return (
    <button onClick={props.handleOnClick} className="w-full md:w-auto flex items-center justify-center gap-3 py-2 px-4 text-sm font-medium text-gray-700 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-900 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600">
      <FontAwesomeIcon icon={faCaretDown} />
      <span>{props.btnText}</span>
    </button>
  );
};

