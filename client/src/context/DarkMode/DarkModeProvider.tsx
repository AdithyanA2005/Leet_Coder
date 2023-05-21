import React, { useEffect, useState } from "react";
import DarkModeContext, { DarkModeContextType } from "./DarkModeContext";

interface DarkModeProviderProps {
  children: React.ReactNode;
};

export default function DarkModeProvider(props: DarkModeProviderProps) {
  // State denoting is darkmode active, If value is already in localStorage it will use it 
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme === "dark";
  });

  // Toggles current theme
  const toggleTheme = () => setDarkMode(prev => !prev);

  // Change current theme and store new value in localStorage
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Values to be passed to the provider
  const value: DarkModeContextType = {
    darkMode,
    setDarkMode,
    toggleTheme,
  };

  return (
    <DarkModeContext.Provider value={value}>
      {props.children}
    </DarkModeContext.Provider >
  );
};

