import { useContext, useRef, useState } from 'react';
import { faArrowRightFromBracket, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import DarkModeContext from '../../../context/DarkMode/DarkModeContext';
import AuthContext from '../../../context/Auth/AuthContext';
import useMenuClose from '../../../hooks/useMenuClose';
import ToggleBtn from './ToggleBtn';
import ActionBtn from './ActionBtn';

export default function Actions() {
  // State denoting whether the menu is visible or not
  const [expanded, setExpanded] = useState<boolean>(false);

  // Extracting from contexts
  const { darkMode, toggleTheme } = useContext(DarkModeContext);
  const { logout } = useContext(AuthContext);

  // Reference to the div containing dropdown menu and button
  const actionRef = useRef<HTMLDivElement>(null);

  // Funcs to toggles action menu 
  const toggleActionMenu = () => setExpanded(prev => !prev);

  // To close menu on specific actions
  useMenuClose(expanded, setExpanded, actionRef);

  return (
    <div className="grid place-items-center" ref={actionRef}>
      {/* Action menu toggle btn */}
      <ToggleBtn toggleActionMenu={toggleActionMenu} />

      {/* Action menu */}
      {expanded && (
        <div className="absolute top-full right-0 p-3 mt-1 mr-4 sm:mr-6 lg:mr-8 rounded-lg bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 shadow-xl">
          {/* Theme Button */}
          <ActionBtn
            icon={darkMode ? faSun : faMoon}
            btnText="Dark Mode"
            handleOnClick={toggleTheme}
          >
            {/* Toggle denoting whether darkMode is active */}
            <div className={`${darkMode ? "after:translate-x-0 dark:bg-blue-600" : "after:-translate-x-full bg-gray-200 dark:bg-gray-700"} w-9 h-5 rounded-full after:absolute after:top-[12px] after:right-[10px] after:h-4 after:w-4 after:rounded-full after:bg-white after:transition-all`} />
          </ActionBtn>

          {/* Logout Button */}
          <ActionBtn
            icon={faArrowRightFromBracket}
            btnText="Log Out"
            handleOnClick={logout}
          />
        </div>
      )}
    </div>
  );
};

