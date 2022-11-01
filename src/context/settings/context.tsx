import React, { createContext, useState } from "react";

const SettingsContext = createContext();

const SettingsProvider = (props) => {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
    <SettingsContext.Provider value={{ darkMode, toggleDarkMode }}>
      {props.children}
    </SettingsContext.Provider>
    </div>
  );
};

export { SettingsContext, SettingsProvider };
