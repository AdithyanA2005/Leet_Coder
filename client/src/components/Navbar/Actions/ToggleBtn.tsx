import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';

interface ToggleBtnProps {
  toggleActionMenu: () => void;
};

export default function ToggleBtn(props: ToggleBtnProps) {
  return (
    // Actions Menu toggle Btn
    <button
      onClick={props.toggleActionMenu}
      className="h-9 w-9 p-2 rounded-md flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus-visible:transition focus-visible:duration-150 focus-visible:ease-in-out outline-none focus-visible:ring ring-gray-300 dark:ring-gray-600"
      title="Toggle Action Menu"
    >
      <FontAwesomeIcon icon={faEllipsisVertical} size="lg" />
    </button >
  );
};

