import { createContext } from "react";

export interface DarkModeContextType {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
};

const DarkModeContext = createContext<DarkModeContextType>({
  darkMode: false,
  setDarkMode: () => {},
  toggleTheme: () => {},
});

export default DarkModeContext;

